import { PageHeader } from "@/components/ui/PageHeader";
import { ContactSection } from "@/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="pt-0">
      <PageHeader
        eyebrow="Besök oss"
        title="Kontakt"
        description="Hitta Doner Factory i Mölndal, se våra öppettider och kontakta oss för frågor, större sällskap eller beställningar."
      />
      <ContactSection />
    </div>
  );
}
