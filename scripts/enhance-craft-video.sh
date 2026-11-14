#!/usr/bin/env bash

set -euo pipefail

INPUT="${1:-assets/source/restaurant-walkthrough-source.mp4}"
OUTPUT="${2:-public/assets/gallery/restaurant-walkthrough-enhanced.mp4}"

mkdir -p "$(dirname "$OUTPUT")"

if command -v ffmpeg >/dev/null 2>&1; then
  ffmpeg -y \
    -i "$INPUT" \
    -vf "scale=1920:-2:flags=lanczos,unsharp=5:5:0.9:5:5:0.0,eq=contrast=1.08:brightness=0.02:saturation=1.12" \
    -c:v libx264 \
    -preset slow \
    -crf 18 \
    -profile:v high \
    -level 4.1 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    -c:a aac \
    -b:a 128k \
    "$OUTPUT"
elif command -v avconvert >/dev/null 2>&1; then
  avconvert \
    --source "$INPUT" \
    --output "$OUTPUT" \
    --preset Preset1920x1080 \
    --replace \
    --multiPass
else
  echo "Neither ffmpeg nor avconvert is available." >&2
  exit 1
fi

echo "Enhanced video written to: $OUTPUT"
