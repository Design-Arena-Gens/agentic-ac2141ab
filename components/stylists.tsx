import Image from "next/image";
import { SectionHeading } from "./ui/section-heading";

const artists = [
  {
    name: "Lena Valois",
    role: "Creative Director & Master Colorist",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
    bio: "Global educator known for luminous color transitions and editorial finishes for NYFW and Vogue."
  },
  {
    name: "Kai Mercer",
    role: "Texture Specialist",
    image: "https://images.unsplash.com/photo-1542233382-3c5a1c851c8b?auto=format&fit=crop&w=800&q=80",
    bio: "Expert in curly, coily, and textured hair design with a focus on low-maintenance curl empowerment."
  },
  {
    name: "Sienna Hart",
    role: "Luxury Extension Artist",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    bio: "Certified in natural-beaded wefts and invisible tape applications for seamless, camera-ready volume."
  }
];

export function Stylists() {
  return (
    <section id="artists" className="bg-white py-20 sm:py-24">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Our Artists"
          title="Meet the award-winning collective shaping modern hair culture."
          description="Every artist at Velvet Strand is selected for their mastery, artistry, and intuitive understanding of the guest experience."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <article key={artist.name} className="rounded-3xl border border-charcoal/5 bg-champagne/40 p-6">
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/60">
                <Image src={artist.image} alt={artist.name} fill className="object-cover" />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-serif font-semibold">{artist.name}</h3>
                <p className="text-sm uppercase tracking-widest text-brand">{artist.role}</p>
                <p className="text-sm text-charcoal/70">{artist.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
