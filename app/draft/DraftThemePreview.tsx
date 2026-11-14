"use client";

import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { DegustationSection } from "@/sections/DegustationSection";
import { Hero } from "@/sections/Hero";
import { HomeMenuBoard } from "@/sections/HomeMenuBoard";
import { PromiseSection } from "@/sections/PromiseSection";
import { ReservationSection } from "@/sections/ReservationSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

const draftThemes = [
  {
    id: "ivory",
    name: "Ivory Ember",
    accent: "Elfenben, terrakotta, espresso",
  },
  {
    id: "mediterranean",
    name: "Mediterranean Blue",
    accent: "Havsbla, sand, grillkol",
  },
  {
    id: "olive",
    name: "Olive Market",
    accent: "Oliv, saffran, sten",
  },
  {
    id: "plum",
    name: "Plum Smoke",
    accent: "Plommon, rökgrå, champagne",
  },
] as const;

export function DraftThemePreview() {
  const [activeTheme, setActiveTheme] =
    useState<(typeof draftThemes)[number]["id"]>("ivory");

  return (
    <div className={`draft-theme draft-theme--${activeTheme}`}>
      <section className="border-b border-white/10 bg-black/20 pt-28 pb-6 backdrop-blur-sm">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/4 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-2">
                <span className="section-label">Fargutkast</span>
                <h1 className="font-heading text-3xl text-white sm:text-4xl">
                  Samma startsida, flera restaurangpaletter
                </h1>
                <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                  Har kan vi prova olika fargkombinationer utan att andra
                  layoutdelar andras. De har riktningarna ligger medvetet langt
                  ifran den nuvarande sajten sa vi kan testa nya restaurangkanslor
                  pa samma hemsidesstruktur.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {draftThemes.map((theme) => {
                  const isActive = activeTheme === theme.id;

                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => setActiveTheme(theme.id)}
                      className={`rounded-2xl border px-4 py-3 text-left transition duration-300 ${
                        isActive
                          ? "border-white/30 bg-white/12 shadow-[0_14px_40px_rgba(0,0,0,0.24)]"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                      }`}
                    >
                      <span className="block text-sm font-semibold text-white">
                        {theme.name}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-white/65">
                        {theme.accent}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Hero />
      <HomeMenuBoard />
      <DegustationSection />
      <TestimonialsSection />
      <PromiseSection />
      <ReservationSection />
    </div>
  );
}
