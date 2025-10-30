import Link from "next/link";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-xl font-serif font-semibold text-charcoal">Velvet Strand Salon</h3>
          <p className="text-sm text-charcoal/70">
            223 Mercer Street, Soho
            <br />
            New York, NY 10012
          </p>
          <div className="flex gap-4 text-charcoal/70">
            <Link href="https://instagram.com" aria-label="Instagram" className="transition hover:text-brand-dark">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook" className="transition hover:text-brand-dark">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-brand">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand" />
              (212) 555-1234
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand" />
              hello@velvetstrand.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" />
              Tues–Sat: 9am – 8pm | Sun: 10am – 4pm
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-brand">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
            <li>
              <a href="#services" className="transition hover:text-brand-dark">
                Services
              </a>
            </li>
            <li>
              <a href="#artists" className="transition hover:text-brand-dark">
                Our Artists
              </a>
            </li>
            <li>
              <a href="#gallery" className="transition hover:text-brand-dark">
                Gallery
              </a>
            </li>
            <li>
              <a href="#booking" className="transition hover:text-brand-dark">
                Book Now
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-charcoal/5 bg-champagne/60 p-6">
          <h4 className="text-sm uppercase tracking-[0.3em] text-brand">Membership</h4>
          <p className="mt-4 text-sm text-charcoal/70">
            Join our Velvet Circle for priority booking, seasonal rituals, and curated gifting.
          </p>
          <form className="mt-4 space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-brand px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              Join Velvet Circle
            </button>
          </form>
        </div>
      </div>
      <div className="container mt-10 border-t border-charcoal/10 pt-6 text-xs text-charcoal/60">
        © {new Date().getFullYear()} Velvet Strand Salon. All rights reserved.
      </div>
    </footer>
  );
}
