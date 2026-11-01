// Copy and image paths for /about/community. Images go in /public/assets/community/ (see public/assets/README.md).
import type { ImageCard } from "@/components/ImageCardPair";

export const communityHero = {
  title: ["Using our power", "for good"],
  subtitle: [
    "We’re on a mission to unleash the philanthropist in every employee. By giving our people voice and choice to shape all our giving efforts, we’re not just fulfilling our mission – we’re redefining corporate responsibility and channeling our collective energy into meaningful change.",
  ],
  image: "/assets/community/hero.jpg", // COMMUNITY-D.jpg
};

export const communityReport = {
  title: ["Our work in", "2025"],
  text: "Learn more about the employees we activated, the causes we supported, and the nonprofits and schools we helped in our annual impact report.",
  cta: "View impact report",
  image: "/assets/community/impact-report-cover.jpg", // CI25_Impact-Report_Digital-RGB_Cover-1.jpg
  imageAlt: "Power For Good 2025 impact report cover",
};

export const communityVideo = {
  title: "Power For Good - Anthem",
  poster: "/assets/community/video-poster.jpg", // Vimeo video - no file on the reference; optional still
};

export const communityImpact = {
  title: "Our impact",
  stats: [
    { value: "90%", label: "Employees engaged" },
    { value: "$8.6M", label: "Dollars granted" },
    { value: "2200+", label: "Schools + nonprofits supported" },
  ],
};

export const communityPledge = {
  title: ["Fueling our", "philanthropy"],
  text: "POWER has joined the 1% pledge, a global movement of companies committed to giving back 1% of equity, profit, product, or employee time to create lasting impact. By taking this pledge, we affirm that generosity isn’t just part of our culture—it’s built into the way we do business.",
};

export const communityProgramsIntro = {
  title: "Our programs",
  text: "We understand that what matters most to each of us is different, and the ways we choose to give back are just as unique. Our programs are designed to ensure that every POWER person has the opportunity to make a meaningful impact in their own way.",
};

// Rows alternate: text left on blue, then photo left with text on white, and so on.
export const communityPrograms = [
  { title: ["Choose for", "good"], text: "Empowering our employees to provide resources to local classrooms in partnership with DonorsChoose.", image: "/assets/community/programs/choose.jpg", cta: true }, // ci24-choose-for-good-v2.jpg
  { title: ["Circle for", "good"], text: "Gathering our employees to collectively select a local nonprofit working on an issue of importance to that office or Affinity Group.", image: "/assets/community/programs/circle.jpg", cta: true }, // CI24_CIRCLE-FOR-GOOD.jpg
  { title: ["Give for", "good"], text: "Activating our employees to support Alex’s Lemonade Stand Foundation through donations to our POWER The Cure fund, lemonade stands, auctions, and more.", image: "/assets/community/programs/give.jpg", cta: true }, // ci24-give-for-good-v2.jpg
  { title: ["Nominate for", "good"], text: "Granting nonprofit funding support based on employee nominations.", image: "/assets/community/programs/nominate.jpg", cta: true }, // ci24-nominate-for-good-v2.jpg
  { title: ["Partner for", "good"], text: "POWER’s commitment to showing up for the community and organizations in its own backyard of Delaware County, Pennsylvania.", image: "/assets/community/programs/partner.jpg", cta: false }, // CI24_PARTNER-FOR-GOOD.jpg
  { title: ["Volunteer for", "good"], text: "Connecting POWER employees with opportunities to give their time.", image: "/assets/community/programs/volunteer.png", cta: true }, // 24-North-Expedition-24_websize-3.png
];

export const communityCta = { title: ["Ready to make a", "difference?"], label: "Explore open positions", href: "/careers/openings" };

export const communityCards: ImageCard[] = [
  { title: "Careers", image: "/assets/people/careers.jpg", text: "When hustle meets purpose, beautiful things happen.", cta: "Careers at Power", href: "/careers" }, // Rectangle-5.jpg (already in place)
  { title: "Initiatives", image: "/assets/community/initiatives.png", text: "There’s nothing more powerful and deeply human than our desire to belong. This is where our initiatives come in.", cta: "Learn about Power initiatives", href: "/about/initiatives" }, // Rectangle-941.png
];
