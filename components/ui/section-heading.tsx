import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <span className="text-sm uppercase tracking-[0.35em] text-brand-dark/70">{eyebrow}</span>
      ) : null}
      <h2 className="text-3xl font-serif font-semibold text-charcoal sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-charcoal/70 sm:text-lg">{description}</p> : null}
    </div>
  );
}
