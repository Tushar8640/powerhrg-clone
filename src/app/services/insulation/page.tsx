import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProductIntro from "@/components/services/ProductIntro";
import Gallery from "@/components/services/Gallery";
import TrackProject from "@/components/services/TrackProject";
import Guarantee from "@/components/services/Guarantee";
import Faq from "@/components/services/Faq";
import {
  insulationFaqs,
  insulationFeatures,
  insulationGallery,
  insulationGuarantee,
  insulationHero,
  insulationIntro,
} from "@/lib/insulation-content";

export const metadata: Metadata = {
  title: "Insulation (study clone)",
};

export default function InsulationPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero {...insulationHero} ctaHref="#product" ctaLabel="Explore insulation" />
        <ProductIntro {...insulationIntro} features={insulationFeatures} />
        {/* This page uses a photo gallery instead of the before/after slider */}
        <Gallery title="Our work shows" slides={insulationGallery} />
        <TrackProject />
        <Guarantee {...insulationGuarantee} />
        <Faq faqs={insulationFaqs} />
      </main>
      <Footer />
    </>
  );
}
