import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import OpeningsList from "@/components/careers/OpeningsList";
import EeoPolicy from "@/components/careers/EeoPolicy";
import { applyCta } from "@/lib/careers-content";
import { eeoPolicy, openingGroups, openingRegions, openingTitles, openingsHero } from "@/lib/openings-content";

export const metadata: Metadata = {
  title: "Open Positions Nationwide (study clone)",
};

export default function OpeningsPage() {
  return (
    <>
      <Header transparentAtTop={false} cta={applyCta} />
      <main id="main">
        <Hero {...openingsHero} ctaHref="#openings" ctaLabel="Browse openings" />
        <OpeningsList id="openings" regions={openingRegions} titles={openingTitles} groups={openingGroups} />
        <EeoPolicy {...eeoPolicy} />
      </main>
      <Footer />
    </>
  );
}
