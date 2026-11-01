// Copy and image paths for /about/belonging. Images go in /public/assets/belonging/ (see public/assets/README.md).
import type { ImageCard } from "@/components/ImageCardPair";

export const belongingHero = {
  title: ["Different", "together.", "Stronger", "forever."],
  subtitle: [
    "At POWER, we don’t just accept differences. We evolve because of them. Growth here doesn’t mean changing who you are. It means becoming more of yourself—and helping others do the same.",
  ],
  image: "/assets/belonging/hero.jpg", // PDS25_POWERcamp_Attendee_145-2_r.jpg
  mobileImage: "/assets/belonging/hero-mobile.jpg", // pds25-powercamp-attendee-145-2-copy.jpg
};

// Contained image/text rows; photo side and background alternate.
export const belongingRows = [
  {
    title: ["Where belonging", "meets growth"],
    paragraphs: [
      "Growth at POWER isn’t about fitting in. It’s about showing up fully with your unique background, voice and perspective.",
      "When people feel seen and supported, they rise. And when they’re given the tools and support to succeed, they bring others with them. That’s how we grow not just careers, but future leaders.",
    ],
    image: "/assets/belonging/belonging-meets-growth.jpg", // PX24_Summit_Attendee_109-2_r.jpg
  },
  {
    title: ["People", "development"],
    paragraphs: [
      "Your growth is the job. Our People Development team is built by those who have been in the trenches, knocked the doors, and built their careers at POWER.",
      "With People Development Managers, Local Leaders, and a Director guiding the way, we ensure mentorship is not just an option. It’s a standard.",
    ],
    image: "/assets/belonging/people-development.jpg", // IMG_5389_r.jpg
  },
  {
    title: ["Belonging"],
    paragraphs: [
      "When you feel like you belong, you can bring your full and best self to work, and that’s what we want for every employee.",
      "Led by leaders from each of our six Affinity Groups, the Belonging team creates spaces of support, celebration, and connection—so every person at POWER feels seen, valued, and supported.",
    ],
    image: "/assets/belonging/belonging.jpg", // Belonging-Replace-Image-Crop-1-1.jpg
  },
];

export const affinity = {
  eyebrow: "Power",
  title: ["Affinity", "groups"],
  paragraphs: [
    "Diversity in experience and perspective create strong communities. We believe that a strong community creates strong leaders.",
    "Our Affinity Groups are where mentorship, connection, and leadership take root. Open to any employee, whether you identify with the group or join as an ally, these spaces are designed to elevate, educate, and empower.",
    "These groups are not ‘nice-to-haves.’ They are essential. They create spaces to connect, develop, and become the kind of leader others look up to.",
  ],
  cta: "Learn more",
  groups: [
    { title: "Black Empowerment Resource Group", image: "/assets/belonging/groups/berg.png", text: "B.E.R.G. is a hub for leadership development, career advancement, and networking, ensuring that Black voices are not just heard. They lead." }, // crown_no_blue_cropped_square_centered_full.png
    { title: "InspirASIAN", image: "/assets/belonging/groups/inspirasian.png", text: "InspirASIAN builds a culture of collaboration, career development, and professional visibility, ensuring that every voice has the opportunity to be heard and elevated." }, // INSPIRASIAN-Background_no_blue_…png
    { title: "Queer Power", image: "/assets/belonging/groups/queer-power.png", text: "Visibility, inclusion, and empowerment. Queer Power provides LGBTQIA+ employees and allies with a space to connect, grow, and thrive. Through mentorship, advocacy, and leadership development, we create a culture where every identity is valued." }, // Queer-Power-Background_no_blue_…png
    { title: "Mi Gente", image: "/assets/belonging/groups/mi-gente.png", text: "Mi Gente, meaning “My People,” is about unity, culture, and opportunity. We celebrate the rich diversity of the Hispanic and Latin community, providing a space to connect, develop, and elevate careers while honoring heritage." }, // Mi-Gente-Background_no_blue_…png
    { title: "Women Empowered", image: "/assets/belonging/groups/women-empowered.png", text: "Women at POWER lead, innovate, and thrive. This group fosters mentorship, financial independence, and leadership growth, creating a culture where women own their success and break barriers together." }, // Unknown-3_no_blue_…png
    { title: "Power Veterans", image: "/assets/belonging/groups/power-veterans.png", text: "We do not just hire veterans. We build leaders. Power Veterans is dedicated to recruiting, mentoring, and developing the best from our military community, reshaping corporate America’s view of military service one career at a time." }, // Power-Veterans-Background_no_blue_…png
  ],
};

export const placeToBecome = {
  title: ["A place to", "become"],
  paragraphs: [
    "POWER isn’t just a place to work. It is a place to become. A place where your potential is recognized, your voice is heard, and your growth is the expectation, not the exception.",
    "We don’t just invest in careers. We invest in people. Our goal is to ensure every POWER person feels they belong, can thrive in their role, and can advance their career.",
  ],
  image: "/assets/belonging/place-to-become.jpg", // PX24_Summit_Attendee_241_r.jpg
};

export const belongingCta = { title: ["Ready to make a", "difference?"], label: "Apply today", href: "/careers/openings" };

export const belongingCards: ImageCard[] = [
  { title: "Careers", image: "/assets/people/careers.jpg", text: "When hustle meets purpose, beautiful things happen.", cta: "Careers", href: "/careers" }, // Rectangle-5.jpg (already in place)
  { title: "Community", image: "/assets/belonging/community.png", text: "POWER is built with an ever-present true north of putting people first, and that includes improving the communities we live and work in.", cta: "Learn about community impact", href: "/about/community" }, // MidWest-Vet-Expedition-032-1.png
];
