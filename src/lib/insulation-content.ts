// Copy and image paths for /services/insulation. Images go in /public/assets/insulation/.
import type { FaqGroup } from "@/components/services/Faq";
import type { FeatureIcon } from "@/components/services/FeatureIcons";
import type { Slide } from "@/components/services/Gallery";
import { powerGuarantee } from "./services-content";

export const insulationHero = {
  title: ["Astronaut-", "inspired", "insulation"],
  subtitle: ["Take control of your home’s atmosphere with our advanced insulation system."],
  image: "/assets/insulation/hero.jpg",
  mobileImage: "/assets/insulation/hero-mobile.jpg",
};

export const insulationIntro = {
  eyebrow: "Radiant barrier",
  title: "Swaddle your home in a high-tech thermal blanket",
  text: "Reclaim comfort at home with our commercial-grade attic insulation system, approved for residential use. Created with a radiant barrier strong enough for use in space and high-quality blown-in insulation, our system prevents extreme attic temperatures from influencing the atmosphere below and protects the life of your home’s energy systems.",
};

export const insulationFeatures: { icon: FeatureIcon; title: string; text: string }[] = [
  { icon: "energy", title: "Energy-efficient", text: "Reduces your daily HVAC workload and extends its lifespan, enhances other energy-efficient investments like windows and siding" },
  { icon: "blownIn", title: "Enhanced blown-in insulation", text: "Formaldehyde-free, fire-resistant, non-settling, Johns Manville’s insulation maintains stable attic temperatures and safeguards your home" },
  { icon: "reflective", title: "Reflective insulation", text: "Dual-sided, highly reflective shield with a center core of commercial-grade fiberglass insulation reflects heat out in summer and keeps it inside during winter" },
  { icon: "comfort", title: "Year-round home comfort", text: "Reduces extreme temperature differences between ground and upper floors" },
  { icon: "curb", title: "Curb appeal", text: "Defends against streaks and warped shingles" },
  { icon: "antiFungal", title: "Anti-fungal", text: "Guards against fungal growth by protecting shingle infrastructure in warmer months, reduces ice dams in the colder months" },
  { icon: "warranty", title: "Superior warranties", text: "R-value guaranteed, POWER’s limited lifetime labor warranty" },
  { icon: "installers", title: "Highly-skilled installers", text: "Installation specialists trained in local codes and regulations" },
];

// "Our work shows" is a 7-photo gallery; order and alt text follow the live page DOM.
export const insulationGallery: Slide[] = [
  { image: "/assets/insulation/gallery/1.jpg", alt: "Attic Insulation Installation" },
  { image: "/assets/insulation/gallery/2.jpg", alt: "Attic insulation installation" },
  { image: "/assets/insulation/gallery/3.jpg", alt: "Attic insulation installation by POWER employee" },
  { image: "/assets/insulation/gallery/4.jpg", alt: "Insulation" },
  { image: "/assets/insulation/gallery/5.jpg", alt: "Attic Insulation Installation" },
  { image: "/assets/insulation/gallery/6.jpg", alt: "Attic Insulation installation" },
  { image: "/assets/insulation/gallery/7.jpg", alt: "Attic Insulation Fiber Glass measuring tool" },
];

export const insulationGuarantee = powerGuarantee("/assets/shared/guarantee.jpg");

export const insulationFaqs: FaqGroup[] = [
  {
    tab: "General",
    items: [
      { q: "How does attic insulation improve energy efficiency?", a: "POWER’s attic insulation system shields your home from extreme attic temperatures, safeguards energy systems, reduces HVAC overload, and enhances performance of other energy-efficient upgrades. Our radiant barrier reflects heat away in summer and retains warmth in winter, while our anti-fungal protection prevents streaks, warped shingles, and reduces ice dams." },
      { q: "How much can attic insulation lower energy bills?", a: "There is no single savings percentage for attic insulation alone. As a broader benchmark, the EPA estimates that homeowners can save an average of 15% on heating and cooling costs when they air-seal their homes and add insulation in attics and other accessible areas. Actual results depend on current insulation levels, air leakage, climate, HVAC efficiency, and energy use. POWER’s attic insulation system is designed to reduce heat transfer and HVAC strain while improving year-round comfort." },
      { q: "Is POWER’s insulation safe for my home and family?", a: "100%. Our insulation is formaldehyde-free, fire-resistant, and non-settling, making it safe, effective, and long-lasting without harmful off-gassing." },
      { q: "How much attic insulation do I need?", a: "Most attics need enough insulation to reach roughly R-38, although R-30 or R-49 may be appropriate depending on the climate zone, local code, and how much insulation is already present. R-value measures resistance to heat flow, so a higher number provides more insulating power. POWER evaluates the attic’s current condition and recommends the target level appropriate for the home." },
    ],
  },
  {
    tab: "Process",
    items: [
      { q: "Can insulation be installed along with other POWER services?", a: "Yes. Many homeowners choose to add insulation alongside our other exterior remodeling services to maximize their home’s overall energy efficiency." },
      { q: "What type of radiant barrier/attic insulation does POWER install?", a: "POWER installs Energy Sphere, a commercial-grade attic insulation system, combining a radiant barrier with enhanced blown-in insulation—formaldehyde-free, fire-resistant, and non-settling—to provide advanced thermal protection. Depending on your home’s needs, we can install Energy Sphere on its own or with additional blown-in insulation for even greater efficiency. In winter, the blown-in insulation helps retain rising heat inside your home, while the radiant barrier reflects heat year-round for maximum energy savings." },
      { q: "How long does attic insulation installation take?", a: "Most installations can be completed in just one day, depending on the size and accessibility of your attic. Your project manager will give you a timeline before work begins." },
    ],
  },
  {
    tab: "Financing & Warranties",
    items: [
      { q: "What warranties come with POWER’s attic insulation?", a: "Your insulation is backed by a manufacturer’s warranty, plus POWER’s limited lifetime labor warranty, covering performance and installation quality. Learn more about warranties here." },
    ],
  },
];
