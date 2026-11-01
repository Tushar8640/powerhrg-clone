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
  doorsBeforeAfter,
  doorsFaqs,
  doorsFeatures,
  doorsGuarantee,
  doorsHero,
  doorsIntro,
} from "@/lib/doors-content";

export const metadata: Metadata = {
  title: "Doors (study clone)",
};

export default function DoorsPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero {...doorsHero} ctaHref="#product" ctaLabel="Explore doors" />
        <ProductIntro {...doorsIntro} features={doorsFeatures} />
        <BeforeAfter {...doorsBeforeAfter} />
        <TrackProject />
        <Guarantee {...doorsGuarantee} />
        <Faq faqs={doorsFaqs} />
      </main>
      <Footer />
    </>
  );
}
