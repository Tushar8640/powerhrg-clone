import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Gallery from "@/components/services/Gallery";
import Partners from "@/components/services/Partners";
import Faq from "@/components/services/Faq";
import { accessoriesFaqs, accessoriesHero, accessoriesPartners, accessoryGalleries } from "@/lib/accessories-content";

export const metadata: Metadata = {
  title: "Accessories (study clone)",
};

export default function AccessoriesPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero {...accessoriesHero} ctaHref="#product" ctaLabel="Explore accessories" />
        <div id="product">
          {accessoryGalleries.map((g) => (
            <Gallery key={g.title} title={g.title} slides={g.slides} />
          ))}
        </div>
        <Partners tone="white" partners={accessoriesPartners} />
        <Faq faqs={accessoriesFaqs} />
      </main>
      <Footer />
    </>
  );
}
