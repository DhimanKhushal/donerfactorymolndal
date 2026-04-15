import { Container } from "@/components/layout/Container";
import { MenuTabs } from "@/sections/MenuTabs";

export default function MenuPage() {
  return (
    <div className="pb-24 pt-32 lg:pb-32">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-primary/80">
            Meny
          </p>
          <h1 className="font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
            Vår kompletta meny med rätter, ingredienser och tillval.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-accent/70 sm:text-lg">
            Här hittar du döner, vegetariskt, pizzor, burgare, desserter och
            tillval presenterade med samma ingrediensinformation som i er
            originalmeny.
          </p>
        </div>
        <MenuTabs />
      </Container>
    </div>
  );
}
