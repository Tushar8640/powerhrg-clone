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
  windowsBeforeAfter,
  windowsFaqs,
  windowsFeatures,
  windowsGuarantee,
  windowsHero,
  windowsIntro,
} from "@/lib/windows-content";

export const metadata: Metadata = {
  title: "Windows (study clone)",
};

export default function WindowsPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero {...windowsHero} ctaHref="#product" ctaLabel="Explore windows" />
        <ProductIntro {...windowsIntro} features={windowsFeatures} />
        <BeforeAfter {...windowsBeforeAfter} />
        <TrackProject />
        <Guarantee {...windowsGuarantee} />
        <Faq faqs={windowsFaqs} />
      </main>
      <Footer />
    </>
  );
}
