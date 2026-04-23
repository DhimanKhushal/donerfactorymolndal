type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="section-label">{eyebrow}</p>
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-accent/74 md:text-base">{description}</p>
    </div>
  );
}
