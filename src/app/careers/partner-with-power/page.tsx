import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import SplitRow from "@/components/SplitRow";
import Partners from "@/components/services/Partners";
import Testimonial from "@/components/services/Testimonial";
import IconGrid from "@/components/careers/IconGrid";
import VideoSplit from "@/components/careers/VideoSplit";
import { applyCta } from "@/lib/careers-content";
import {
  partnerAbout,
  partnerBenefits,
  partnerCta,
  partnerHero,
  partnerLogos,
  partnerRepresenting,
  partnerTestimonial,
  partnerVideo,
} from "@/lib/partner-content";

export const metadata: Metadata = {
  title: "Installation Partner Program (study clone)",
};

export default function PartnerWithPowerPage() {
  return (
    <>
      <Header transparentAtTop={false} cta={applyCta} />
      <main id="main">
        <Hero {...partnerHero} ctaHref="#benefits" ctaLabel="Explore partnerships" />
        <IconGrid id="benefits" {...partnerBenefits} />
        <VideoSplit {...partnerVideo} />
        <Testimonial {...partnerTestimonial} link={null} />
        <SplitRow variant="bleed" {...partnerAbout} imageAlt="About Power Home Remodeling" imageSide="left" tone="sky" />
        <SplitRow variant="bleed" {...partnerRepresenting} imageAlt="Representing Power" imageSide="right" tone="blue" />
        <Partners partners={partnerLogos} />
        <CtaBand {...partnerCta} tone="white" />
      </main>
      <Footer />
    </>
  );
}
