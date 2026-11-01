import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProductIntro from "@/components/services/ProductIntro";
import Swatches from "@/components/services/Swatches";
import Certification from "@/components/services/Certification";
import BeforeAfter from "@/components/services/BeforeAfter";
import TrackProject from "@/components/services/TrackProject";
import Guarantee from "@/components/services/Guarantee";
import Faq from "@/components/services/Faq";
import {
  roofingBeforeAfter,
  roofingCertification,
  roofingFaqs,
  roofingFeatures,
  roofingGuarantee,
  roofingHero,
  roofingIntro,
  roofingShingle,
} from "@/lib/roofing-content";

export const metadata: Metadata = {
  title: "Roofing (study clone)",
};

export default function RoofingPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero {...roofingHero} ctaHref="#product" ctaLabel="Explore roofing" />
        <ProductIntro {...roofingIntro} features={roofingFeatures}>
          <Swatches {...roofingShingle} />
        </ProductIntro>
        <Certification {...roofingCertification} />
        <BeforeAfter {...roofingBeforeAfter} />
        <TrackProject />
        <Guarantee {...roofingGuarantee} />
        <Faq faqs={roofingFaqs} />
      </main>
      <Footer />
    </>
  );
}
