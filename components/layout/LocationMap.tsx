import { Container } from "@/components/layout/Container";

const address = "Brogatan 32, 431 30 Mölndal";
const mapsQuery = encodeURIComponent(`${address}, Sweden`);

export function LocationMap() {
  return (
    <section className="relative overflow-hidden border-t border-white/6 bg-[#100d0d] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(139,46,46,0.18),transparent_28%),radial-gradient(circle_at_82%_65%,rgba(245,230,211,0.07),transparent_24%)]" />
      <Container className="relative z-10">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#171111]/68 shadow-[0_28px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
              <div className="space-y-4">
                <p className="section-label">Hitta hit</p>
                <h2 className="section-title max-w-md">
                  Doner Factory mitt i Mölndal.
                </h2>
                <p className="section-copy max-w-md">
                  Kom förbi oss på Brogatan för döner, pizza, burgare och snabba
                  måltider nära centrum.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                  <p className="section-label">
                    Adress
                  </p>
                  <p className="mt-2 font-heading text-2xl text-white">
                    {address}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-primary/90 sm:w-auto"
                >
                  Öppna i Google Maps
                </a>
              </div>
            </div>

            <div className="relative min-h-[20rem] border-t border-white/8 lg:min-h-[28rem] lg:border-l lg:border-t-0">
              <iframe
                title="Doner Factory Mölndal Google Maps location"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
