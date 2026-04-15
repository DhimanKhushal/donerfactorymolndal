type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm uppercase tracking-[0.35em] text-primary/80">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-accent/70 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
