import type { IconItem } from "@/components/careers/IconGrid";
import { accoladesCopy } from "./careers-content";

export const innovationsHero = {
  title: ["Calling all", "creators"],
  subtitle: ["As a member of our global technology team, you’ll create groundbreaking solutions and", "industry-leading innovations."],
  image: "/assets/innovations/hero.png",
  mobileImage: "/assets/innovations/hero-mobile.png",
};

export const innovationsIntro: { title: string[]; text: string; items: IconItem[] } = {
  title: ["Power innovations"],
  text: "At POWER we move fast, collaborate seamlessly, and iterate quickly. We get to solve unique challenges. As a member of POWER’s global technology team, you will create innovative solutions that are synonymous with start-up culture, but within a billion-dollar enterprise. Basically, we’re a tech powerhouse hidden inside a home remodeling company.",
  items: [
    {
      title: "Cutting-edge technology",
      icon: "/assets/innovations/icons/CIRCUT.svg",
      text: "We utilize a variety of technologies, including augmented reality, computer vision, machine learning, speech recognition and processing, geospatial data, and a variety of mobile platforms.",
    },
    {
      title: "Industry-best platform",
      icon: "/assets/innovations/icons/Cutting-Edge-Technology.svg",
      text: "Our state-of-the-art collaborative intelligence platform, Nitro, seamlessly tracks, facilitates, and supports our marketing and sales process, and customer experience. It’s the most advanced enterprise solution in the industry.",
    },
    {
      title: "Award-winning culture",
      icon: "/assets/innovations/icons/Award-Winning-Culture.svg",
      text: "We’ve been named one of ComputerWorld’s Best Places to Work in IT and Philly Mag’s Coolest Companies. Our COO, Tim Wenhold, was awarded the Leader in Innovation 2019 award by Great Places to Work For All.",
    },
  ],
};

export const nitro = {
  title: ["Nitro"],
  paragraphs: [
    "When you build your own systems and software, you gain an intimate knowledge of your business. Our in-house software platform, Nitro, is built to scale, and seamlessly integrates all aspects of our customer journey.",
    "This empowers our technologists to collaborate with business leaders and create solutions for marketing, sales, operations, and finance. Nitro is also a collaborative communication platform so whether you’re across the hall or across the globe, the feedback loop between you and your end-users is always flowing.",
  ],
  image: "/assets/innovations/nitro.jpg", // nitro-create.jpg
  bgImage: "/assets/innovations/nitro-bg.png", // NITRO-BG-03.png - soft blue wave behind the section
};

export const nitroVideo = { title: "Nitro Create: Scaling Power’s Business Technology", poster: "/assets/innovations/video-poster.jpg" };

export const leader = {
  eyebrow: "COO",
  title: ["Timothy G.", "Wenhold"],
  paragraphs: [
    "Tim is responsible for all aspects of technology for our high-growth-mode company. This includes being the architect behind Nitro, POWER’s unique, state-of-the-art collaborative intelligence platform. Since joining POWER in 2007, Timothy’s counsel, vision, and leadership have been instrumental to the company’s rapid growth.",
  ],
  image: "/assets/innovations/tim.jpg",
};

const a = (file: string, alt: string) => ({ image: `/assets/innovations/accolades/${file}`, alt });

export const innovationsAccolades = {
  ...accoladesCopy,
  items: [
    a("Glassdoors-Best-Places-to-Work-2025-Logo_Regular-e1737559349124.png", "Glassdoor Best Places to Work 2025 logo"),
    { image: "/assets/careers/accolades/GD_BLC25-1-2-e1758820811452.png", alt: "Logo for Glassdoor's Best-Led Companies 2025" },
    a("Fortune-Accolades_BestCompaniesToWorkFor-rgb-1.png", "Fortune 2025 100 Best Companies to Work For logo"),
    a("CompaniesThatCare2025_black-e1755720880744.png", "2025 People Companies That Care logo"),
    a("fortune-accolade-gptw-parents.png", "Fortune best workplaces for parents"),
    a("CW-Best-Places-badge-2025-e1733848986154.png", "2025 Computerworld's Best Places to Work in IT logo"),
    a("2025_QRTop500_SocialGraphic_1200x1200-1-e1755721315898.png", "Qualified Remodeler Top 500 2025 logo"),
    a("vets-indexes-2025-5-star-logo-full-color-rgb-1-e1758821398178.png", "VETS Indexes 5-Star Employer 2025 logo"),
    a("spouse-miltiary.png", "2024 Military Friendly Spouse Employer"),
    a("miltary-friendly.png", "2024 Military Friendly Employer"),
    a("MUSE-Creative-Awards-2025-Gold-Winner-2-1-e1758822215244.jpg", "Muse Creative Award gold winner logo"),
    { image: "/assets/careers/accolades/Stevie-2024-logo.png", alt: "2024 Stevie Award logo" },
    { image: "/assets/careers/accolades/06-1.png", alt: "15th Annual Shorty Awards Audience Honor" },
  ],
};

export const innovationsCta = { title: ["Ready to reimagine", "your career?"], label: "Explore open positions", href: "/careers/openings" };
