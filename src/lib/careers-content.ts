import type { FaqGroup } from "@/components/services/Faq";
import type { ImageCard } from "@/components/ImageCardPair";
import type { IconItem } from "@/components/careers/IconGrid";

export const applyCta = { label: "Apply now", href: "/careers/openings" };

export const careersHero = {
  title: ["Purpose beyond", "a paycheck"],
  subtitle: ["We empower our people to become the best versions of themselves. Because working at", "POWER is never business as usual."],
  image: "/assets/careers/hero.jpg",
  mobileImage: "/assets/careers/hero-mobile.jpg",
};

export const careersBenefits: { title: string[]; text: string; items: IconItem[] } = {
  title: ["Our benefits go way", "beyond basic"],
  text: "We believe in all aspects of wellness. From generous benefits packages to a robust selection of programs and rewards, our goal is to keep you rising at work and thriving at home.",
  items: [
    { title: "Child care benefits", icon: "/assets/careers/benefits/BABY.svg" },
    { title: "401K + company match", icon: "/assets/careers/benefits/PIGGY-BANK.svg" },
    { title: "Competitive salary", icon: "/assets/careers/benefits/CASH.svg" },
    { title: "Volunteer recognition awards", icon: "/assets/about/values/HEART-HAND.svg" },
    { title: "Exclusive end-of-year getaway", icon: "/assets/careers/benefits/ISLAND.svg" },
    { title: "State-of-the-art workspaces", icon: "/assets/careers/benefits/WORKSPACE.svg" },
    { title: "Culture-building experiences", icon: "/assets/careers/benefits/HR.svg" },
    { title: "Wellness programs", icon: "/assets/careers/benefits/OKAY-HANDS.svg" },
    { title: "Employee relief fund", icon: "/assets/careers/benefits/HAND-SHAKE-HOUSE.svg" },
  ],
};

const a = (file: string, alt: string) => ({ image: `/assets/careers/accolades/${file}`, alt });

export const accoladesCopy = {
  eyebrow: "Accolades",
  title: ["Our", "hardware", "collection"],
  text: "When you do right by your employees, the world takes notice. But our goal isn’t to be the best home remodeler to work for—it’s to become the best place to work in the world. Period.",
};

export const careersAccolades = {
  ...accoladesCopy,
  cta: { label: "Explore open positions", href: "/careers/openings" },
  items: [
    a("GlassDoorBestPlacesToWork.png", "Glassdoor Best Places to Work 2026 Logo"),
    a("GD_Best_CEOs_Logo.png", "2026 Glassdoor best CEO award"),
    a("GD_BLC25-1-2-e1758820811452.png", "Logo for Glassdoor's Best-Led Companies 2025"),
    a("Fortune-Accolades-2026-100-Best-Companies-to-Work-For.png", "Fortune 2026 100 Best Companies to Work For"),
    a("Fortune-Accolade-GPTW-Construction-rgb-1-e1758820770414.png", "Fortune's Best Workplaces in Construction 2025"),
    a("people-companiesthatcare2026-black.png", "2026 People Companies That Care award"),
    a("fortune-accolade-gptw-parents-lowres.jpg", "Fortune best workplaces for parents"),
    a("CW-Best-Places-badge-2026-1.png", "2026 Computerworld best places to work in IT"),
    a("vets-indexes-2026-5-star-logo.jpg", "2026 VETS Indexes 5 star employer"),
    a("best.for_.vets_.2025.png", "2025 Military Times best for vets award"),
    a("militaryfriendlyemployer-accolade-2025.png", "2025 Military friendly employer award"),
    a("2026_QRTop500_SocialGraphic_1200x1200.jpg", "Qualified Remodeler top 500 award"),
    a("muse-accolade.png", "2025 Muse gold winner award"),
    a("Stevie-2024-logo.png", "2024 Stevie Award logo"),
    a("06-1.png", "15th Annual Shorty Awards Audience Honor"),
  ],
};

export const careersTechnology = {
  eyebrow: "Technology",
  title: ["Calling all", "creators"],
  paragraphs: ["Surprised that a home remodeling company is also a hub for groundbreaking tech? Shattering expectations is what we do best."],
  image: "/assets/careers/technology.png",
  cta: { label: "Technology at Power", href: "/careers/innovations" },
};

export const careersDevelopment = {
  eyebrow: "Development",
  title: ["Grow all out"],
  paragraphs: [
    "We believe that dream careers live at the intersection of happiness, growth, and purpose. From industry-best training and mentorship to unlimited earning potential, your career at POWER has no finish line.",
  ],
  bullets: ["Leadership development", "Relocation opportunities", "Professional academies"],
  image: "/assets/careers/development.png",
};

export const careersCards: ImageCard[] = [
  {
    title: "Community",
    image: "/assets/belonging/community.png", // MidWest-Vet-Expedition-032-1.png - same photo the reference uses here
    text: "POWER is built with an ever-present true north of putting people first, and that includes improving the communities we live and work in.",
    cta: "Learn about community impact",
    href: "/about/community",
  },
  {
    title: "Belonging",
    image: "/assets/about/belonging.png",
    text: "There’s nothing more powerful and deeply human than our desire to belong.",
    cta: "Learn about belonging at Power",
    href: "/about/belonging",
  },
];

export const careersCta = { title: ["Fall in love with", "your career"], label: "Explore open positions", href: "/careers/openings" };

export const careersFaqs: FaqGroup[] = [
  {
    tab: "General",
    items: [
      {
        q: "What type of roles does POWER offer?",
        a: "At Power Home Remodeling, opportunity comes in every shape and size. We’re hiring across sales, field operations, business technology, human resources, marketing, contract work, and customer experience—plus offering unique programs like our DoD SkillBridge for service members. No matter your background, if you’re ready to build a career (not just a job), there’s a place for you at POWER.",
      },
      {
        q: "Where are your offices and career opportunities located?",
        a: "POWER‘s coverage area currently extends to 25 states across the U.S plus D.C. We offer a variety of career opportunities in the following locations: Philadelphia, Boston, New Jersey, Long Island, Connecticut, Maryland, Atlanta, Charlotte, Chicago, Austin, Dallas, Houston, Tampa, Fort Lauderdale, Denver, Detroit, Nashville, Cincinnati, Columbus, Phoenix, Pittsburgh, Orlando, Las Vegas, Jacksonville, Oklahoma City, San Antonio, and Raleigh-Durham. Additionally, we have multiple branch locations to extend further into the surrounding areas. You can filter by location on our Openings page to find job opportunities in your area.",
      },
      {
        q: "Who is the ideal POWER candidate?",
        a: "The ideal POWER candidate (or POWER Person) is someone who’s outgoing, personable, and engaging, with the aptitude and motivation to grow in a fast-paced, team-driven environment. They’re positive, coachable, and goal-oriented, balancing strong communication skills with a genuine passion for helping others. At POWER, we look for individuals who bring energy, commitment, and optimism to every interaction.",
      },
      {
        q: "What is the DoD SkillBridge Program and who’s eligible?",
        a: "Our DoD SkillBridge Program is a 4-6 month immersive experience for active-duty service members preparing to transition to civilian life. Participants rotate through different departments, gain hands-on training, and receive mentorship from POWER leaders. Many SkillBridge members go on to launch full-time careers with us.",
      },
      {
        q: "My question wasn’t answered by these FAQS – how can I get more information?",
        a: "If you’d like more information, please e-mail recruiting@powerhrg.com and we’ll be sure to assist.",
      },
      {
        q: "Can I apply for multiple positions?",
        a: "Yes, candidates are encouraged to apply for any positions that align with their skills, experience, and career interests.",
      },
    ],
  },
  {
    tab: "Hiring Process",
    items: [
      {
        q: "How do I apply for a job at POWER?",
        a: "Applying is simple. Visit our Openings page to explore the open roles by location or title, and submit your application directly online. Once we receive your information, our talent acquisition team will reach out to guide you through the next steps.",
      },
      {
        q: "What is the hiring process like?",
        a: "Our process is designed to be efficient and personable. Most applicants can expect an initial phone screen, followed by a Zoom or in-person interview, and then a final round with team leaders. For some roles, candidates may be required to complete assessments or submit portfolios.",
      },
      {
        q: "Does POWER provide training and career growth opportunities?",
        a: "Yes, POWER provides extensive training and a comprehensive onboarding process when you join the team. From your very first day, you’ll have access to world-class training, including skill development bootcamps, leadership development programs, and ongoing mentorship. POWER also offers relocation opportunities for our expansion territories. As POWER grows — and if you’re motivated and committed — so does your career.",
      },
      {
        q: "What should I expect after submitting my application?",
        a: "After submitting your application, a member of POWER’s recruiting team will review your qualifications. If your experience aligns with the position, a recruiter may contact you to discuss the role and outline the next steps in the hiring process.",
      },
    ],
  },
  {
    tab: "Culture",
    items: [
      {
        q: "What is the company culture like at POWER?",
        a: "At POWER, culture isn’t a buzzword—it’s our edge. We’ve been named to Fortune’s “Best Companies to Work For” and Glassdoor’s “Best Places to Work” because we invest in what matters most: wellness, belonging, development, and community. Our people call POWER both high-performance and highly supportive—the rare place where you can push your limits, build your career, and still feel like you’re part of something bigger.",
      },
      {
        q: "What benefits and perks does POWER offer?",
        a: "At POWER, we put people first. That means competitive pay, uncapped commission for sales roles, full medical and dental coverage, a 401(k) match, paid parental leave, fertility and childcare support, and wellness programs that truly support your life both in the office and at home. On top of that, you’ll experience company trips, cultural events, and growth opportunities that make working at POWER unlike anywhere else.",
      },
    ],
  },
];
