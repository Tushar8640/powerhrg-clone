import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ImageCardPair from "@/components/ImageCardPair";
import Values from "@/components/about/Values";
import StatGrid from "@/components/about/StatGrid";
import SameAddress from "@/components/services/SameAddress";
import Faq from "@/components/services/Faq";
import { aboutAlly, aboutCards, aboutFaqs, aboutHero, aboutStats, aboutValues } from "@/lib/about-content";

export const metadata: Metadata = {
  title: "About Us (study clone)",
};

export default function AboutPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero {...aboutHero} size="short" ctaHref="#values" ctaLabel="Explore our company" />
        <Values id="values" {...aboutValues} />
        {/* Same full-bleed sky + house section as /services, shorter and with centred light copy */}
        <SameAddress {...aboutAlly} size="short" align="center" light />
        <StatGrid {...aboutStats} />
        <ImageCardPair heading="Improvement never ends" cards={aboutCards} />
        <Faq faqs={aboutFaqs} />
      </main>
      <Footer />
    </>
  );
}
