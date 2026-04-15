import Image from "next/image";

import { Container } from "@/components/layout/Container";

const points = [
  {
    title: "Hantverksmässiga Såser",
    text: "Varje sås kokas i små satser för att skapa en frisk och balanserad avslutning.",
  },
  {
    title: "Säsongens Urval",
    text: "Vi kombinerar klassisk döner med lokala grönsaker, örter och tydliga syror.",
  },
  {
    title: "Traditionell Värme",
    text: "Vertikal grillning, nybakat bröd och noggrant skurna detaljer ger varje servering karaktär.",
  },
];

export function StorySection() {
  return (
    <section className="bg-[#1b0f10] py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[1.8rem]">
          <Image
            src="/featured-menu/pizza-photo.jpg"
            alt="Mörk restauranginteriör"
            width={1200}
            height={1400}
            className="h-[34rem] w-full object-cover"
          />
          <div className="absolute bottom-6 right-6 max-w-xs rounded-[1.4rem] border border-white/8 bg-[#3c2c2d]/90 p-5 backdrop-blur-sm">
            <p className="text-3xl font-semibold text-stone-100">96%</p>
            <p className="mt-2 text-sm leading-6 text-accent/70">
              av våra gäster återvänder för smaken, servicen och den lugna
              atmosfären.
            </p>
          </div>
        </div>

        <div className="space-y-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28rem] text-primary/72">
            Vår Filosofi
          </p>
          <h2 className="max-w-xl font-heading text-4xl leading-tight text-stone-100 sm:text-5xl">
            Där arv och innovation möts.
          </h2>
          <div className="space-y-6">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-stone-100">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-accent/70">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
