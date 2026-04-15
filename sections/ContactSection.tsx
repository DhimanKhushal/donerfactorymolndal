import { Container } from "@/components/layout/Container";

const infoCards = [
  {
    title: "The Factory",
    lines: ["Göteborgsvägen 1", "431 30 Mölndal, Sverige"],
    action: "Hitta hit",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-primary/80"
      >
        <path
          d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Kontakt",
    lines: ["Telefon", "+46 31 123 45 67", "E-post", "hello@donerfactory.se"],
    action: "Svar inom 24 timmar",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-primary/80"
      >
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.45-1.29a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: "Öppettider",
    lines: [
      "Mån - Tors   11:00 - 21:00",
      "Fre - Lör   11:00 - 22:00",
      "Söndag   12:00 - 21:00",
    ],
    action: "Välkommen in",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-primary/80"
      >
        <circle
          cx="12"
          cy="12"
          r="8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M12 7v5l3 2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
];

const socialLinks = [
  { label: "Instagram", short: "IG" },
  { label: "TikTok", short: "TT" },
  { label: "Facebook", short: "FB" },
];

const standards = ["Svenskt nötkött", "Färskt varje dag", "Lokala kryddor"];

export function ContactSection() {
  return (
    <section className="pb-24 pt-28 lg:pb-32 lg:pt-32">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
          <div className="relative overflow-hidden px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,230,211,0.08),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(139,46,46,0.15),_transparent_24%)]" />

            <div className="relative space-y-14">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
                <div className="space-y-5">
                  <p className="text-xs font-bold uppercase tracking-[0.26rem] text-primary/80">
                    Kontakta Oss
                  </p>
                  <h1 className="max-w-2xl font-heading text-5xl leading-[0.92] text-stone-100 sm:text-6xl lg:text-7xl">
                    Smak skapad mitt i
                    <br />
                    <span className="italic text-accent">Mölndal.</span>
                  </h1>
                </div>
                <p className="max-w-md text-base leading-8 text-accent/75">
                  Oavsett om du har frågor om våra råvaror, vill boka för ett
                  större sällskap eller bara dela din upplevelse, finns vi här
                  för dig.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {infoCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm"
                  >
                    <div className="mb-6">{card.icon}</div>
                    <h2 className="font-heading text-3xl text-stone-100">
                      {card.title}
                    </h2>
                    <div className="mt-5 space-y-2 text-sm leading-7 text-accent/72">
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <p className="mt-6 text-sm font-semibold text-primary">
                      {card.action}
                    </p>
                  </article>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.7fr] lg:items-start">
                <div className="relative min-h-[19rem] overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#1c1c1c] sm:min-h-[22rem]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.02)),radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_44%),linear-gradient(90deg,_rgba(255,255,255,0.04)_1px,_transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[size:auto,auto,42px_42px,42px_42px]" />
                  <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_10px_rgba(139,46,46,0.18)]" />
                </div>

                <div className="space-y-6">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-6">
                    <h2 className="font-heading text-4xl text-stone-100">
                      Följ Oss
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-accent/72">
                      Gå med i vårt community för dagens erbjudanden,
                      bakom-kulisserna-material och lokala nyheter från köket.
                    </p>
                    <div className="mt-6 flex gap-3">
                      {socialLinks.map((link) => (
                        <div
                          key={link.label}
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-background/70 text-xs font-semibold text-accent/80"
                        >
                          {link.short}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-primary/20 bg-primary/12 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.24rem] text-accent/70">
                      Kockens Tips
                    </p>
                    <p className="mt-4 text-sm italic leading-7 text-accent/80">
                      &quot;För bästa upplevelse, prova vår signatur Lamb Döner
                      under fredagslunchen, tunt skuren och serverad med vår
                      egen kryddiga sås.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-white/8 pt-8">
                <p className="mr-2 text-[11px] font-bold uppercase tracking-[0.2rem] text-accent/42">
                  Våra Standarder:
                </p>
                {standards.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-xs text-accent/72"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
