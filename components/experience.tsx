import Image from "next/image";
import { SectionHeading } from "./ui/section-heading";
import { Check } from "lucide-react";

const highlights = [
  "Complimentary aromatherapy consultation",
  "Private color bar and champagne lounge",
  "Curated home-care prescriptions after every visit",
  "Members-only late evening appointments"
];

export function Experience() {
  return (
    <section id="experience" className="bg-champagne py-20 sm:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr,1fr]">
        <div className="space-y-8">
          <SectionHeading
            align="left"
            eyebrow="The Experience"
            title="A sanctuary for transformation"
            description="Our Soho loft studio is designed to indulge every sense. From bespoke fragrance palettes to curated playlists, every detail is intentional—creating a calm, confidence-filled retreat."
          />
          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 text-sm text-charcoal/80">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Check className="h-4 w-4" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="relative h-80 overflow-hidden rounded-[32px] border border-white/70 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80"
              alt="Salon interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid h-36 grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/60">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                alt="Color bar"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/60">
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                alt="Salon lounge"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
