import type { IconItem } from "@/components/careers/IconGrid";

export const partnerHero = {
  title: ["Install for", "Power"],
  subtitle: ["Want to partner with us? Here’s how."],
  image: "/assets/partner/hero.jpg",
  mobileImage: "/assets/partner/hero-mobile.png",
};

export const partnerBenefits: { title: string[]; text: string; items: IconItem[] } = {
  title: ["Great benefits. Good business."],
  text: "We are committed to building mutually beneficial relationships with our partners. As one of the nation’s largest and fastest growing full-service exterior remodelers, we don’t consider this support a benefit—we consider it good business.",
  items: [
    {
      title: "Great pay",
      icon: "/assets/partner/icons/great-pay.png",
      bullets: ["High earning potential", "Increasing pay scales", "Fast payment terms", "Referral bonuses"],
    },
    { title: "Reliable work", icon: "/assets/partner/icons/reliable-work.png", bullets: ["Year-round schedule", "Every project pre-sold"] },
    {
      title: "Vital support",
      icon: "/assets/partner/icons/vital-support.png",
      bullets: ["Live troubleshooting", "Strong customer service", "Training opportunities", "Modern technology"],
    },
  ],
};

export const partnerVideo = {
  title: ["Power up your", "business"],
  paragraphs: [
    "Power Home Remodeling has become one of the most successful exterior residential remodelers in the country by empowering independent contractors to flourish.",
    "When your skills and talents are backed by POWER’s vast support network, high-quality products, and our relentless dedication to improvement, you’ll have what it takes to catapult your business to the next level.",
  ],
  cta: { label: "Explore open positions", href: "/careers/openings" },
  video: { title: "Partner with Power", poster: "/assets/partner/video-poster.jpg" },
};

export const partnerTestimonial = {
  quote: "It’s life altering. It’s life changing. If you put the work in, they’re gonna take care of you.",
  name: "Jared Butler",
  caption: "Installation Partner, New Jersey",
};

export const partnerAbout = {
  title: ["About Power", "Home", "Remodeling"],
  paragraphs: [
    "POWER specializes retrofitting people’s homes with the best value products and utmost care, but it also does more—it activates a community passionate about improvement, in all of its many forms.",
    "Since our first sale in 1992, POWER has partnered with independent installers to bring residential homeowners an unparalleled home remodeling experience.",
    "Acclaimed by industry leaders, such as Angi, Guild Quality, and Qualified Remodeler, POWER’s standards are higher than most. Our dedication to bettering people’s lives is our North Star. Long-term investment isn’t just our strategy, it’s who we are.",
  ],
  image: "/assets/partner/about.jpg",
  cta: { label: "Learn about Power", href: "/about" },
};

export const partnerRepresenting = {
  title: ["Representing", "Power"],
  paragraphs: [
    "We look for tradesmen and women with exceptional craftsmanship. Contractors who have a deep commitment to quality and a passion for improving people’s lives. Artisans who will be on time to all projects and meticulous about prep and clean up. Read on to find out more about what we are looking for in an installation partner.",
  ],
  bulletsLabel: "Specific Requirements:",
  bullets: [
    "Commitment to prioritize POWER in your job scheduling",
    "One-year hands-on experience in your area of expertise",
    "Access to at least one truck or van, plus the proper tools",
    "An experienced crew of friendly, hard-working craftspeople",
    "Proper insurance and licenses (or willingness to obtain them)",
  ],
  image: "/assets/partner/represent.png",
};

export const partnerLogos = [
  { name: "GAF", image: "/assets/services-page/partners/gaf.svg" },
  { name: "ProMaterials", image: "/assets/services-page/partners/promaterials.svg" },
  { name: "ProVia", image: "/assets/services-page/partners/provia.svg" },
  { name: "Westlake Royal Building Products", image: "/assets/services-page/partners/westlake.svg" },
  { name: "Pella", image: "/assets/services-page/partners/pella.svg" },
  { name: "CertainTeed", image: "/assets/services-page/partners/certainteed.svg" },
];

export const partnerCta = { title: ["Partner with Power today"], label: "Become an install partner", href: "/careers/openings" };
