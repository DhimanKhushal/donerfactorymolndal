import { Container } from "@/components/layout/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-6 pt-8 sm:pb-8 sm:pt-12 lg:pb-10 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(139,46,46,0.14)_0%,rgba(245,230,211,0.035)_42%,rgba(15,15,15,0)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-36 w-[min(42rem,80vw)] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:h-44" />

      <Container className="relative z-10">
        <div
          data-gsap-reveal
          className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#171111]/42 p-6 text-center shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.012)_52%,rgba(255,255,255,0)_100%)]" />
          <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          <div className="relative space-y-2">
            <p className="section-label mx-auto">
              {eyebrow}
            </p>
            <h1 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-accent/76 md:text-base">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
