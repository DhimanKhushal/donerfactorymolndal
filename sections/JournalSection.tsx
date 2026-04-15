import Image from "next/image";

import { Container } from "@/components/layout/Container";

const sideCards = [
  {
    title: "The Alchemy of Sumac",
    subtitle: "Utvalda Kryddor",
    image: "/featured-menu/vegetarian-photo.jpg",
  },
  {
    title: "Stone Oven Rituals",
    subtitle: "Bageriets Noteringar",
    image: "/featured-menu/pizza-photo.jpg",
  },
];

export function JournalSection() {
  return (
    <section className="bg-[#1b0f10] py-24">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="font-heading text-4xl text-stone-100 sm:text-5xl">
            Atelierjournalen
          </h2>
          <p className="text-sm uppercase tracking-[0.22rem] text-accent/48">
            Betraktelser från köket och vinglaset.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.03]">
            <div className="relative h-[26rem]">
              <Image
                src="/featured-menu/burger-photo.jpg"
                alt="Journalhuvudbild"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.24rem] text-primary/70">
                Vinets Notiser
              </p>
              <h3 className="font-heading text-3xl text-stone-100">
                Att hitta den perfekta Syrahn till rökt lamm.
              </h3>
            </div>
          </article>

          <div className="grid gap-6">
            {sideCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-white/[0.03]"
              >
                <div className="relative h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs uppercase tracking-[0.22rem] text-primary/70">
                    {card.subtitle}
                  </p>
                  <h3 className="font-heading text-2xl text-stone-100">
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}

            <article className="flex min-h-[14rem] flex-col justify-between rounded-[1.6rem] border border-white/8 bg-[#3a2523] p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22rem] text-accent/54">
                  Join the Inner Circle
                </p>
                <h3 className="mt-4 font-heading text-3xl text-stone-100">
                  Bli först med nya serveringar.
                </h3>
              </div>
              <button
                type="button"
                className="w-fit rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#1a1110]"
              >
                Registrera Dig
              </button>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
