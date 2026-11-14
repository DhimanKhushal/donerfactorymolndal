import { DegustationSection } from "@/sections/DegustationSection";
import { Hero } from "@/sections/Hero";
import { HomeMenuBoard } from "@/sections/HomeMenuBoard";
import { PromiseSection } from "@/sections/PromiseSection";
import { ReservationSection } from "@/sections/ReservationSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeMenuBoard />
      <DegustationSection />
      <TestimonialsSection />
      <PromiseSection />
      <ReservationSection />
    </>
  );
}
