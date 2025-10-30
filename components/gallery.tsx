import Image from "next/image";
import { SectionHeading } from "./ui/section-heading";

const images = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&sat=-50",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517414204284-0bba3d1c7e48?auto=format&fit=crop&w=900&q=80"
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-champagne py-20 sm:py-24">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Gallery"
          title="From subtle glow-ups to statement transformations."
          description="Browse our recent looks captured in natural light. Each color story is meticulously recorded to recreate your glow every visit."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((url, index) => (
            <div key={url + index} className="group relative overflow-hidden rounded-3xl border border-white/60">
              <Image src={url} alt="Salon work" width={600} height={600} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
