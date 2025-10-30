"use client";

import { Menu, Scissors, Instagram, Facebook, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Artists", href: "#artists" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book", href: "#booking" }
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-champagne/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
            <Scissors className="h-5 w-5" />
          </span>
          Velvet Strand
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-charcoal/80 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-dark">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="tel:+12125551234" variant="ghost" className="gap-2 text-sm">
            <Phone className="h-4 w-4" />
            (212) 555-1234
          </Button>
          <Button href="#booking">Reserve Now</Button>
        </div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-full border border-charcoal/10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div
        className={cn(
          "border-t border-white/40 bg-champagne/95 px-6 py-6 transition-all duration-300 md:hidden",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <div className="flex flex-col gap-4 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full bg-white px-5 py-3 text-center font-medium text-charcoal transition hover:bg-brand hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-3">
          <Button href="tel:+12125551234" variant="outline" className="gap-2">
            <Phone className="h-4 w-4" />
            (212) 555-1234
          </Button>
          <Button href="#booking">Reserve Now</Button>
        </div>

        <div className="mt-6 flex justify-center gap-4 text-charcoal/70">
          <Link href="https://instagram.com" aria-label="Instagram" className="transition hover:text-brand-dark">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook" className="transition hover:text-brand-dark">
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
