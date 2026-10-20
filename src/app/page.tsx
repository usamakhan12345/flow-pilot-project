import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { FeatureTabs } from "@/components/sections/FeatureTabs";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    // Below md the whole page is a centred 375px column (Figma "max 375px or 100% on mobile"), white outside.
    <div id="top" className="flex w-full flex-1 flex-col max-md:mx-auto max-md:max-w-[375px]">
      <Header />
      <main className="flex-1 lg:pt-1">
        <Hero />
        <TrustedBy />
        <Features />
        <FeatureTabs />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
