import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProductIntro from "@/components/services/ProductIntro";
import BeforeAfter from "@/components/services/BeforeAfter";
import TrackProject from "@/components/services/TrackProject";
import Guarantee from "@/components/services/Guarantee";
import Faq from "@/components/services/Faq";
import {
  sidingBeforeAfter,
  sidingFaqs,
  sidingFeatures,
  sidingGuarantee,
  sidingHero,
  sidingIntro,
} from "@/lib/siding-content";

export const metadata: Metadata = {
  title: "Siding (study clone)",
};

export default function SidingPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero {...sidingHero} ctaHref="#product" ctaLabel="Explore siding" />
        <ProductIntro {...sidingIntro} features={sidingFeatures} />
        <BeforeAfter {...sidingBeforeAfter} />
        <TrackProject />
        <Guarantee {...sidingGuarantee} />
        <Faq faqs={sidingFaqs} />
      </main>
      <Footer />
    </>
  );
}
