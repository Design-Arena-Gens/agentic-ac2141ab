import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Experience } from "@/components/experience";
import { Stylists } from "@/components/stylists";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { BookingForm } from "@/components/booking-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Stylists />
        <Gallery />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
