import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { MenuTabs } from "@/sections/MenuTabs";

export default function MenuPage() {
  return (
    <div className="pb-18 sm:pb-24 lg:pb-32">
      <PageHeader
        eyebrow="Doner Factory"
        title="Meny"
        description="Vår kompletta meny med döner, pizzor, burgare, vegetariska alternativ och tillval presenterade tydligt för enkel beställning."
      />
      <Container className="space-y-10 sm:space-y-12">
        <MenuTabs />
      </Container>
    </div>
  );
}
