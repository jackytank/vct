import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import IntroVideo from "@/components/IntroVideo";
import IntroImageSection from "@/components/IntroImageSection";
import MiniGameSection from "@/components/MiniGameSection";

export const metadata: Metadata = {
  title: "Thiên Đăng",
  description: "Trang chủ của Thiên Đăng - Vườn Cổ Tích",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <IntroImageSection />
      <MiniGameSection />
      {/* <IntroVideo /> */}
      {/* <Hero /> */}
      {/* <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog /> */}
    </main>
  );
}
