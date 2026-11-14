import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { galleryMedia } from "@/lib/gallery-media";

const restaurantHighlights = [
  "Hogrev, kycklingdoner, pita och XL wraps ger sidan en tydlig signaturratt att prata om.",
  "Falafel, halloumi, hummus och tallrikar gor konceptet brett nog for sallskap med olika val.",
  "Lokalen i bilderna visar ett modernt stopp for bade snabb lunch, casual middag och sen kvallsmat.",
];

function ImageTile({
  alt,
  category,
  orientation,
  src,
  title,
}: {
  alt: string;
  category: string;
  orientation: "landscape" | "portrait";
  src: string;
  title: string;
}) {
  const frameClassName =
    orientation === "portrait"
      ? "aspect-[4/5] sm:aspect-[16/17]"
      : "aspect-[16/11]";

  return (
    <article className="mb-5 break-inside-avoid">
      <div
        className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#171111]/55 shadow-[0_22px_80px_rgba(0,0,0,0.24)] ${frameClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.06)_0%,rgba(8,8,8,0.12)_38%,rgba(8,8,8,0.78)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div>
            <p className="section-label">
              {category}
            </p>
            <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function GalleryPage() {
  const [featuredVideo, walkthroughVideo] = galleryMedia.videos;

  return (
    <div className="pb-18 sm:pb-24 lg:pb-32">
      <PageHeader
        eyebrow="Doner Factory"
        title="Galleri"
        description="Riktiga bilder och video fran restaurangen, presenterade i ett renare galleri med enhetliga ramar och tydligare rytm."
      />

      <Container className="space-y-12 sm:space-y-16">
        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171111]/55 shadow-[0_24px_90px_rgba(0,0,0,0.26)]">
            <video
              className="aspect-video h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={featuredVideo.src} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.12)_0%,rgba(8,8,8,0.06)_42%,rgba(8,8,8,0.84)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="section-label">
                Featured video
              </p>
              <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">
                {featuredVideo.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-accent/78 sm:text-base">
                {featuredVideo.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-[#171111]/50 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.2)] sm:p-10">
            <div className="space-y-4">
              <p className="section-label">Om restaurangen</p>
              <h2 className="section-title max-w-2xl text-lg sm:text-xl">
                Doner Factory blandar snabb service med en meny som kanns storre
                an klassisk fast food
              </h2>
              <p className="section-copy max-w-2xl">
                Doner Factory ar ett franchisekoncept dar doner star i centrum,
                men uttrycket ar bredare: hogrev och kycklingdoner, pita, wraps,
                tallrikar, falafel, halloumi, burgare, pizza och varma tillbehor
                i ett och samma stopp.
              </p>
              <p className="section-copy max-w-2xl">
                Det gor restaurangen enkel att beskriva som ett modernt casual
                food-stalle: nygrillat, generost, snabbt att fa ut och byggt for
                bade lunch, middag och spontana kvallsstopp. I bilderna far
                lokalen visa samma sak, med öppen energi, tydlig serviceyta och
                en varm, urban kansla.
              </p>
            </div>

            <div className="space-y-3">
              {restaurantHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-black/15 p-4 sm:p-6 text-base leading-7 text-accent/74"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="columns-1 gap-5 sm:columns-2 xl:columns-3">
          {galleryMedia.images.map((image) => (
            <ImageTile
              key={image.src}
              alt={image.alt}
              category={image.category}
              orientation={image.orientation}
              src={image.src}
              title={image.title}
            />
          ))}
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171111]/55 shadow-[0_22px_80px_rgba(0,0,0,0.24)]">
          <video
            className="aspect-video h-full w-full bg-black object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src={walkthroughVideo.src} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(8,8,8,0)_0%,rgba(8,8,8,0.78)_100%)] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="section-label">
                  Walkthrough
                </p>
                <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">
                  {walkthroughVideo.title}
                </h2>
              </div>
              <span className="rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[10px] uppercase text-accent/70">
                {walkthroughVideo.duration}
              </span>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
