import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ImageCardPair from "@/components/ImageCardPair";
import CtaBand from "@/components/CtaBand";
import SectionIntro from "@/components/SectionIntro";
import SplitRow from "@/components/SplitRow";
import StatGrid from "@/components/about/StatGrid";
import ImpactReport from "@/components/community/ImpactReport";
import VideoBlock from "@/components/community/VideoBlock";
import PledgeBand from "@/components/community/PledgeBand";
import {
  communityCards,
  communityCta,
  communityHero,
  communityImpact,
  communityPledge,
  communityPrograms,
  communityProgramsIntro,
  communityReport,
  communityVideo,
} from "@/lib/community-content";

export const metadata: Metadata = {
  title: "Community Impact and Philanthropy (study clone)",
};

export default function CommunityPage() {
  return (
    <>
      <Header transparentAtTop={false} />
      <main id="main">
        <Hero {...communityHero} ctaHref="#report" ctaLabel="Explore our community" />
        <div id="report">
          <ImpactReport {...communityReport} />
        </div>
        <VideoBlock {...communityVideo} />
        <StatGrid {...communityImpact} size="lg" />
        <PledgeBand {...communityPledge} />
        <SectionIntro {...communityProgramsIntro} />
        {communityPrograms.map((p, i) => (
          <SplitRow
            key={p.title.join(" ")}
            variant="bleed"
            title={p.title}
            paragraphs={[p.text]}
            image={p.image}
            imageAlt={p.title.join(" ")}
            imageSide={i % 2 === 0 ? "right" : "left"}
            tone={i % 2 === 0 ? "blue" : "white"}
            cta={p.cta ? { label: "Learn more" } : undefined}
          />
        ))}
        <CtaBand {...communityCta} />
        <ImageCardPair heading="Improvement never ends" cards={communityCards} verticalTitle={false} />
      </main>
      <Footer />
    </>
  );
}
