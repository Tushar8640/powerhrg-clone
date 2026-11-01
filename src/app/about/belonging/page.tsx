import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ImageCardPair from "@/components/ImageCardPair";
import CtaBand from "@/components/CtaBand";
import SplitRow from "@/components/SplitRow";
import AffinitySlider from "@/components/belonging/AffinitySlider";
import { affinity, belongingCards, belongingCta, belongingHero, belongingRows, placeToBecome } from "@/lib/belonging-content";

export const metadata: Metadata = {
  title: "Belonging and Growth (study clone)",
};

export default function BelongingPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero {...belongingHero} ctaHref="#growth" ctaLabel="Explore belonging" />
        <div id="growth">
          {belongingRows.map((r, i) => (
            <SplitRow
              key={r.title.join(" ")}
              variant="contained"
              {...r}
              imageAlt={r.title.join(" ")}
              imageSide={i % 2 === 0 ? "left" : "right"}
              tone={i % 2 === 0 ? "white" : "blue"}
            />
          ))}
        </div>
        <AffinitySlider {...affinity} />
        <SplitRow variant="contained" {...placeToBecome} imageAlt="A place to become" imageSide="left" tone="white" />
        <CtaBand {...belongingCta} />
        <ImageCardPair heading="Improvement never ends" cards={belongingCards} />
      </main>
      <Footer />
    </>
  );
}
