import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-16 sm:pt-24" id="top">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-20 -left-10 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-dark/30 blur-3xl" />
      </div>

      <div className="container relative grid items-center gap-12 pb-16 sm:grid-cols-[1.25fr,1fr] sm:pb-24">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-4 py-2 text-sm font-medium text-brand">
            <Sparkles className="h-4 w-4" />
            Your signature look, perfected.
          </span>
          <h1 className="text-4xl font-serif font-semibold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Bespoke Cuts, Color Artistry, & Luxury Hair Rituals in the Heart of Soho.
          </h1>
          <p className="text-base text-charcoal/70 sm:text-lg">
            Velvet Strand Salon blends editorial technique with personalized care. From transformative color to
            restorative treatments, our master stylists craft looks that feel effortlessly you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#booking" className="gap-2">
              Reserve Experience
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#services" variant="ghost" className="border border-transparent hover:border-brand">
              Explore Services
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Award-Winning Artists", value: "12" },
              { label: "Custom Color Formulas", value: "350+" },
              { label: "Loyalty Memberships", value: "Exclusive" }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-white/80 p-4 text-center shadow-sm backdrop-blur">
                <p className="text-2xl font-semibold text-brand">{item.value}</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden overflow-hidden rounded-[32px] border border-white/60 shadow-soft sm:block">
          <Image
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80"
            alt="Stylist cutting hair"
            width={640}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
