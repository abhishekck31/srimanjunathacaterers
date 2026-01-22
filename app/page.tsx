import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import VisualShowcase from "@/components/VisualShowcase";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-maroon-dark overflow-x-hidden selection:bg-brand-gold selection:text-brand-maroon-dark">
      <Hero />
      <BrandIntro />
      <Philosophy />
      <Services />
      <Menu />
      <VisualShowcase />
      <Process />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTA />
    </main>
  );
}
