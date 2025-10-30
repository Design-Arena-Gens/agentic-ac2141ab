import { SectionHeading } from "./ui/section-heading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lena truly listens. My balayage has never looked more seamless and the tones stay luminous between visits. Velvet Strand is my creative reset.",
    name: "Margot P.",
    role: "Fashion Editor"
  },
  {
    quote:
      "A rare salon that understands curls! Kai gave me definition without sacrificing volume. The whole experience felt like a spa ritual.",
    name: "Jasmine T.",
    role: "Creative Producer"
  },
  {
    quote:
      "From champagne to takeaway hair prescriptions, no detail is missed. My wedding styling survived 12 hours of dancing and still looked fresh.",
    name: "Elena V.",
    role: "Bride"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Love Notes"
          title="Stories from our guests"
          description="Beyond beautiful hair, our community comes for the energy, intentional care, and the way they feel leaving the studio."
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-3xl border border-charcoal/5 bg-champagne/40 p-8 shadow-sm"
            >
              <Quote className="mb-6 h-10 w-10 text-brand" />
              <p className="text-sm text-charcoal/80">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-charcoal">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-brand">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
