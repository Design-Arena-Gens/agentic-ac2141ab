import { Wand2, Palette, Sparkle, Droplet } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";

const services = [
  {
    icon: Wand2,
    title: "Signature Cuts & Styling",
    description:
      "Precision sculpting, soft-textured shaping, and editorial styling tailored to your features, hair texture, and lifestyle.",
    price: "From $140"
  },
  {
    icon: Palette,
    title: "Color Artistry & Balayage",
    description:
      "Multi-dimensional color, luminous balayage, and strategic lightening using custom formulas curated by our master colorists.",
    price: "From $210"
  },
  {
    icon: Droplet,
    title: "Ritual Treatments",
    description:
      "Oribe Renewal Rituals, K18 Molecular Restorations, and scalp wellness experiences that revive and hydrate every strand.",
    price: "From $95"
  },
  {
    icon: Sparkle,
    title: "Editorial Finishing",
    description:
      "Runway-ready blowouts, luxury extensions, and occasion styling with detail-rich finishing touches and stay-all-night hold.",
    price: "From $180"
  }
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="Tailored experiences designed for hair that tells your story."
          description="Discover curated services that blend cutting-edge technique with wellness-focused artistry. Each appointment begins with a sensory consultation to understand your unique goals."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-charcoal/5 bg-champagne/40 p-8 transition hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-soft"
            >
              <service.icon className="mb-6 h-10 w-10 text-brand" />
              <h3 className="text-xl font-serif font-semibold text-charcoal">{service.title}</h3>
              <p className="mt-3 text-sm text-charcoal/70">{service.description}</p>
              <p className="mt-6 text-sm font-medium uppercase tracking-widest text-brand">{service.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
