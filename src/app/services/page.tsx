import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import ImageCardPair from "@/components/ImageCardPair";
import Footer from "@/components/Footer";
import Partners from "@/components/services/Partners";
import SameAddress from "@/components/services/SameAddress";
import Testimonial from "@/components/services/Testimonial";
import BeforeAfter from "@/components/services/BeforeAfter";
import TrackProject from "@/components/services/TrackProject";
import Faq from "@/components/services/Faq";
import { beforeAfter, faqs, reasons } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Exterior Home Remodeling Services (study clone)",
};

export default function ServicesPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero
          title={["Exterior", "remodeling", "made epic"]}
          subtitle={["Make your home all it was meant to be with", "our unrivaled exterior services."]}
          image="/assets/services-page/hero.png"
          mobileImage="/assets/services-page/hero-mobile.jpg"
        />
        <ServicesCarousel />
        <Partners />
        <SameAddress />
        <Testimonial />
        <BeforeAfter before={beforeAfter.before} after={beforeAfter.after} />
        <TrackProject />
        <ImageCardPair heading="Reasons to relax" cards={reasons} />
        <Faq faqs={faqs} />
      </main>
      <Footer />
    </>
  );
}
