import { Button } from "./ui/button";
import { SectionHeading } from "./ui/section-heading";

export function BookingForm() {
  return (
    <section id="booking" className="bg-charcoal py-20 text-white sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr]">
          <SectionHeading
            align="left"
            eyebrow="Reserve"
            title="Curate your next Velvet Strand experience."
            description="Complete the reservation form and our concierge will confirm your appointment within the hour. Prefer to call? Reach our desk at (212) 555-1234."
            className="space-y-6"
          />

          <form className="space-y-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-full border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </label>
              <label className="text-sm">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-full border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                Preferred Date
                <input
                  type="date"
                  name="date"
                  className="mt-2 w-full rounded-full border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </label>
              <label className="text-sm">
                Preferred Time
                <input
                  type="time"
                  name="time"
                  className="mt-2 w-full rounded-full border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </label>
            </div>
            <label className="text-sm">
              Desired Service
              <select
                name="service"
                className="mt-2 w-full rounded-full border border-white/30 bg-white/10 px-4 py-3 text-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              >
                <option value="cut" className="text-charcoal">
                  Signature Cut & Styling
                </option>
                <option value="color" className="text-charcoal">
                  Color Artistry & Balayage
                </option>
                <option value="treatment" className="text-charcoal">
                  Ritual Treatments
                </option>
                <option value="extensions" className="text-charcoal">
                  Luxury Extensions
                </option>
              </select>
            </label>
            <label className="text-sm">
              Notes
              <textarea
                name="notes"
                rows={4}
                placeholder="Tell us about your hair goals, inspiration, or previous services."
                className="mt-2 w-full rounded-3xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </label>
            <div className="pt-2">
              <Button type="submit" className="w-full justify-center">
                Request Reservation
              </Button>
            </div>
            <p className="text-xs text-white/60">
              By submitting, you agree to our 24-hour cancellation policy. We&apos;ll contact you to confirm the exact service, artist, and duration.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
