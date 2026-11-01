import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ImageCardPair from "@/components/ImageCardPair";
import CtaBand from "@/components/CtaBand";
import SplitRow from "@/components/SplitRow";
import Faq from "@/components/services/Faq";
import IconGrid from "@/components/careers/IconGrid";
import Accolades from "@/components/careers/Accolades";
import {
  applyCta,
  careersAccolades,
  careersBenefits,
  careersCards,
  careersCta,
  careersDevelopment,
  careersFaqs,
  careersHero,
  careersTechnology,
} from "@/lib/careers-content";

export const metadata: Metadata = {
  title: "Careers (study clone)",
};

export default function CareersPage() {
  return (
    <>
      <Header transparentAtTop={false} cta={applyCta} />
      <main id="main">
        <Hero {...careersHero} button={applyCta} ctaHref="#benefits" ctaLabel="Explore careers" />
        <IconGrid id="benefits" {...careersBenefits} />
        <Accolades {...careersAccolades} />
        <SplitRow variant="bleed" {...careersTechnology} imageAlt="Technology at Power" imageSide="right" tone="white" />
        <SplitRow variant="bleed" {...careersDevelopment} capsBullets imageAlt="Grow all out" imageSide="left" tone="navy" />
        <ImageCardPair heading="Improvement never ends" cards={careersCards} />
        <CtaBand {...careersCta} />
        <Faq faqs={careersFaqs} />
      </main>
      <Footer />
    </>
  );
}
