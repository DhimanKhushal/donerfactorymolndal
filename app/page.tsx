import { DegustationSection } from "@/sections/DegustationSection";
import { FeaturedMenu } from "@/sections/FeaturedMenu";
import { Hero } from "@/sections/Hero";
import { PromiseSection } from "@/sections/PromiseSection";
import { ReservationSection } from "@/sections/ReservationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <DegustationSection />
      <PromiseSection />
      <ReservationSection />
    </>
  );
}
