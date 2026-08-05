import { Reveal } from "@/components/motion/reveal";

type CaseStudySectionProps = {
  index: string;
  title: string;
  children: React.ReactNode;
};

/** Shared heading/spacing shell for each case-study block (§9.5). */
export function CaseStudySection({
  index,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <Reveal as="section" className="border-border border-t py-12 sm:py-16">
      <p className="text-text-secondary mb-3 font-mono text-sm tracking-wide uppercase">
        {index}
      </p>
      <h2 className="font-display text-text-primary text-2xl font-semibold sm:text-3xl">
        {title}
      </h2>
      <div className="text-text-secondary mt-4 max-w-[68ch] leading-[1.65]">
        {children}
      </div>
    </Reveal>
  );
}
