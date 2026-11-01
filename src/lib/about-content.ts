// Copy and image paths for /about. Images go in /public/assets/about/ (see public/assets/README.md).
import type { FaqGroup } from "@/components/services/Faq";
import type { ImageCard } from "@/components/ImageCardPair";

export const aboutHero = {
  title: ["Tear the", "roof off", "your", "expectations"],
  subtitle: ["You don’t become the nation’s largest exterior home remodeler by", "following the same old playbook."],
  image: "/assets/about/hero.png", // ABOUT-D.png on the reference
  mobileImage: "/assets/about/hero-mobile.png", // ABOUT-M.png
};

export const aboutValues = {
  title: ["Our values are our", "handshake"],
  text: "How have we grown exponentially while staying true to ourselves? By making our values the litmus test for everything we do. They determine how we act and how we treat others, anchoring us in good times and in bad. They are the road map that guides who we are and who we’re becoming.",
  values: [
    { title: "Integrity", icon: "/assets/about/values/HAND-ON-HEART.svg", text: "We have a natural inclination to be honest. We’re good-intentioned, and our actions are guided by morality." },
    { title: "Care", icon: "/assets/about/values/HEART-HAND.svg", text: "We possess a selfless concern for others, displaying kindness and a willingness to act on others’ behalf." },
    { title: "Optimism", icon: "/assets/about/values/THUMBS-UP.svg", text: "We find value in every experience, whether it goes perfectly or has room for improvement." },
    { title: "Commitment", icon: "/assets/about/values/COMMITMENT.svg", text: "Relationships are the lifeblood of our business. We are determined to support our customers and employees for the long term." },
    { title: "Innovation", icon: "/assets/about/values/BULB.svg", text: "We continually search for a better way. We believe in bringing creative, unexpected ideas to life throughout our organization." },
  ],
};

export const aboutAlly = {
  title: ["The unexpected", "ally"],
  text: "At Power Home Remodeling, our purpose is to realize the potential in every home, person, and community we serve. That’s why we always look for opportunities to show up in ways no one would ever expect from an exterior home remodeling company.",
  image: "/assets/about/ally.png", // website-herohome-white-scaled_12.png
};

export const aboutStats = {
  title: "Our all-star stats",
  stats: [
    { value: "#20", label: "Fortune best places to work" },
    { value: "4.6", label: "Glassdoor employee rating" },
    { value: "28", label: "Regional offices" },
    { value: "12%", label: "Military veterans" },
    { value: "97%", label: "CEO approval on Glassdoor" },
    { value: "$12M+", label: "Raised for pediatric cancer" },
  ],
};

export const aboutCards: ImageCard[] = [
  {
    title: "Community",
    image: "/assets/about/community.jpg", // px23-migentevto-029-websize-1.jpg
    text: "POWER is built with an ever-present true north of putting people first, and that includes improving the communities we live and work in.",
    cta: "Learn about community impact",
    href: "/about/community",
  },
  {
    title: "Belonging",
    image: "/assets/about/belonging.png", // Rectangle-94.png
    text: "There’s nothing more powerful and deeply human than our desire to belong.",
    cta: "Learn about belonging at Power",
    href: "/about/belonging",
  },
];

export const aboutFaqs: FaqGroup[] = [
  {
    tab: "General",
    items: [
      { q: "What does POWER do?", a: "Power Home Remodeling specializes in exterior home renovations and installations, which include windows, roofing, entry doors, siding, attic insulation, and solar. Between our highly-trained professional installers and partnerships with some of the best manufacturers in the industry (like GAF, Pella, ProVia, Certainteed, and more), POWER has served over 500k+ homeowners and installed 1M+ projects in our 30+ years of operation. Check out our service page to see all that we offer." },
      { q: "Why do homeowners choose POWER?", a: "Homeowners choose POWER for its decades of experience, high-quality products, professional installation process, manufacturer partnerships, and commitment to delivering an exceptional customer experience. Every project is backed by strong warranty protection and supported from consultation through post installation." },
      { q: "Where is the POWER headquarters?", a: "Our national headquarters is located in Chester, PA (just outside of Philadelphia), with additional offices across the country." },
      { q: "When was POWER founded?", a: "POWER was founded in 1992 by two cousins, and remains a family owned and operated company. Since then, it has grown from a small start-up into the nation’s largest, full-service exterior home remodeler, a title earned by breaking the mold and rising above the ordinary." },
      { q: "What are POWER’s mission and core values?", a: "At POWER, we strive to realize the potential in every home, person, and community we impact. Our business is built on the principles of integrity, care, optimism, commitment, and innovation — the principles that guide how we work, lead, and serve every day. That means delivering exceptional results for homeowners and creating a positive, lasting impact beyond the walls of your home." },
      { q: "How many employees does POWER have?", a: "Today, POWER is home to more than 5,200 employees across 28 territories and growing each year. Want to join the team? Check out our Careers page for more information." },
      { q: "What makes POWER different from other remodelers?", a: "Unlike most remodelers, POWER combines award-winning culture, in-house installation expertise, a smooth remodeling process with the customer at the forefront, and limited lifetime transferable warranties — delivering not just products, but peace of mind. From your first consultation to final installation, our process is designed to be simple, seamless, and hassle-free, so you can enjoy the transformation without the stress." },
    ],
  },
  {
    tab: "Philanthropy",
    items: [
      { q: "What recognition has POWER received?", a: "POWER has been consistently ranked on Fortune’s list of 100 Best Companies to Work For, “Best Workplaces In Construction”, and “Best Workplaces For Parents”. We are named one of Forbes “Best Employers For Women”, “Best In-State Employers”, and “Best Midsize Employers”. Additionally, POWER has earned Glassdoor’s “Best Places to Work”, recognized by Military Times as a “Best for Vets Employer”, “Angie’s Super Service Award”, plus many other honors." },
      { q: "Does POWER give back to communities?", a: "Through our POWER for Good programs, we’ve raised millions for pediatric cancer research and local nonprofits, and our employees volunteer thousands of community service hours each year." },
    ],
  },
];
