"use client";

import { useEffect } from "react";

export function GsapAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let isMounted = true;
    let context: { revert: () => void } | undefined;
    let observer: MutationObserver | undefined;

    async function setupAnimations() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!isMounted) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const animateReveal = (item: HTMLElement) => {
          if (item.dataset.gsapAnimated === "true") {
            return;
          }

          item.dataset.gsapAnimated = "true";

          gsap.from(item, {
            autoAlpha: 0,
            y: 28,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
              once: true,
            },
          });
        };

        const animateStagger = (group: HTMLElement) => {
          const children = Array.from(group.children).filter(
            (child): child is HTMLElement =>
              child instanceof HTMLElement &&
              child.dataset.gsapAnimated !== "true",
          );

          if (children.length === 0) {
            return;
          }

          children.forEach((child) => {
            child.dataset.gsapAnimated = "true";
          });

          gsap.from(children, {
            autoAlpha: 0,
            y: 24,
            duration: 0.64,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          });
        };

        const animateAll = () => {
          let animatedSomething = false;

          gsap.utils
            .toArray<HTMLElement>("[data-gsap-reveal]")
            .forEach((item) => {
              const wasAnimated = item.dataset.gsapAnimated === "true";
              animateReveal(item);
              animatedSomething ||= !wasAnimated;
            });

          gsap.utils
            .toArray<HTMLElement>("[data-gsap-stagger]")
            .forEach((group) => {
              const hasFreshChildren = Array.from(group.children).some(
                (child) =>
                  child instanceof HTMLElement &&
                  child.dataset.gsapAnimated !== "true",
              );

              animateStagger(group);
              animatedSomething ||= hasFreshChildren;
            });

          if (animatedSomething) {
            ScrollTrigger.refresh();
          }
        };

        animateAll();

        observer = new MutationObserver(() => {
          window.requestAnimationFrame(animateAll);
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }, document.body);
    }

    setupAnimations();

    return () => {
      isMounted = false;
      observer?.disconnect();
      context?.revert();
    };
  }, []);

  return null;
}
