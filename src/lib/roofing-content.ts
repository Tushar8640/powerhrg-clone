// Copy and image paths for /services/roofing. Images go in /public/assets/roofing/.
import type { FaqGroup } from "@/components/services/Faq";
import type { FeatureIcon } from "@/components/services/FeatureIcons";

export const roofingHero = {
  title: ["Roofing that", "reaches new", "heights"],
  subtitle: ["Protect your investment with our state-of-the-art shingles and lifetime labor warranty."],
  image: "/assets/roofing/hero.png",
  mobileImage: "/assets/roofing/hero-mobile.png",
};

export const roofingIntro = {
  eyebrow: "Power roofing system",
  title: "Weatherproofing taken up a level",
  logo: { src: "/assets/roofing/gaf-logo.png", alt: "GAF" },
};

export const roofingShingle = {
  title: ["State-of-the-art", "shingle"],
  text: "Defend your home with our ultramodern roofing system, ventilated to resist degradation and improve interior climate. Made with shingles developed exclusively for POWER by GAF, North America’s largest roofing manufacturer, and coupled with our lifetime labor warranty, our roof is built to last.",
  swatches: [
    { name: "Cobblestone", image: "/assets/roofing/swatches/cobblestone.png" },
    { name: "Sapphire", image: "/assets/roofing/swatches/sapphire.png" },
    { name: "Mystic", image: "/assets/roofing/swatches/mystic.png" },
    { name: "Graphite", image: "/assets/roofing/swatches/graphite.png" },
    { name: "Amber", image: "/assets/roofing/swatches/amber.png" },
  ],
};

export const roofingFeatures: { icon: FeatureIcon; title: string; text: string }[] = [
  { icon: "stain", title: "Stain, streak & fade-resistant shingle", text: "Exclusive GAF Stain Guard-infused asphalt shingle with UV blocker" },
  { icon: "comfort", title: "Improved interior comfort", text: "Advanced ventilation system—PowerVent intake ensures air cycles in and out properly" },
  { icon: "waterproof", title: "Waterproof", text: "Drip edge for perimeter protection, 100% leak barrier and underlayment, properly flashed at all leak prone areas" },
  { icon: "wind", title: "Wind-resistant", text: "Powerful adhesive grip for shingle integrity, rated for wind speeds up to 130 mph" },
  { icon: "warp", title: "Warp & waving-resistant", text: "UV blocker to reflect heat and protect shingle integrity, advanced ventilation system, meticulous installation" },
  { icon: "curb", title: "Curb appeal", text: "Exclusive GAF shingles made with four-color composition easily integrate with your home’s existing color palette" },
  { icon: "durable", title: "Durable", text: "50-year rating, exclusive GAF Stain Guard-infused asphalt shingle with micro-weave core & UV blocker" },
  { icon: "warranty", title: "Superior warranties", text: "Transferable manufacturer warranty, POWER’s limited lifetime labor warranty" },
  { icon: "installers", title: "Highly-skilled installers", text: "Installation specialists trained in local codes and regulations" },
];

export const roofingCertification = {
  image: "/assets/roofing/gaf-premium-badge.svg",
  alt: "GAF Premium System Professional – Residential Roofing Contractor",
  title: ["Premium system", "professional"],
  text: "POWER is the 1st to be awarded this prestigious GAF designation which signifies our combination of premium GAF Shingles with GAF best installation practices.",
};

export const roofingBeforeAfter = {
  before: "/assets/roofing/before.png",
  after: "/assets/roofing/after.png",
};

export const roofingGuarantee = {
  eyebrow: "Warranty",
  title: ["The Power", "Guarantee"],
  text: "When you do a job right every time, you don’t mind providing a guarantee. That’s why, in addition to a manufacturer’s warranty, POWER also provides a limited lifetime labor warranty. And if you ever have questions or issues, we also provide ongoing service and support.",
  cta: "View warranties",
  image: "/assets/shared/guarantee.jpg",
};

export const roofingFaqs: FaqGroup[] = [
  {
    tab: "General",
    items: [
      { q: "What are signs my roof needs to be replaced?", a: "Common signs include missing, curling, or cracked shingles, dark streaks or stains, moss or algae growth, granules collecting in gutters, water leaks in the attic or ceilings, or a roof that’s simply 20 years or older. If you notice any of these issues, it’s best to call our team of experts and schedule an inspection—early action can prevent costly damage." },
      { q: "Roof repair vs. roof replacement: which is right for me?", a: "Minor damage may be repaired, but widespread wear, recurring leaks, or aging roofing systems often make replacement the better long-term solution. A professional inspection can help determine the most appropriate recommendation." },
      { q: "What happens if I delay replacing my roof?", a: "Delaying roof replacement can allow existing damage to worsen over time, potentially leading to water intrusion, structural damage, mold growth, and more costly repairs. Replacing an aging roof before major issues develop can help protect your home." },
      { q: "How can a new roof make my home more energy-efficient?", a: "Yes, our advanced ventilation system improves attic airflow by allowing heat to escape, which reduces heat buildup and impact to the atmosphere below — making your home more comfortable and helping protect your roof’s integrity." },
      { q: "Are POWER’s roofs built to be weather and wind resistant?", a: "POWER’s shingles are rated to withstand wind speeds up to 130 mph. In addition, POWER installs all the necessary components to protect your home against all types of weather like rain or snow. This includes a 100% leak barrier perimeter, drip-edge, underlayment, and are properly flashed in all leak-prone areas. All roofing adheres to local regulations and building codes, keeping you and your home safe from the elements." },
      { q: "How long does a roof last?", a: "An asphalt shingle roof typically lasts about 20 to 30 years, although higher-quality roofing systems may last longer. Weather, attic ventilation, installation quality, and maintenance can all affect a roof’s lifespan. POWER installs a complete roofing system with a 50-year rating, advanced ventilation, and layered moisture protection." },
      { q: "What roofing material lasts the longest?", a: "Slate generally lasts the longest, with a potential lifespan of 60 to 150 years. However, it can be significantly heavier and more expensive than other roofing materials. POWER partners with GAF to offer asphalt shingles that provide a strong balance of durability, weather resistance, curb appeal, and long-term value." },
      { q: "Can a new roof lower insurance costs?", a: "Some insurance providers may offer discounts for newer roofing systems because they can better protect homes from weather-related damage. Since every insurance policy is different, homeowners should check directly with their insurance provider for available savings." },
    ],
  },
  {
    tab: "Process",
    items: [
      { q: "What types of roofing materials does POWER offer?", a: "Power installs premium, high-performance roofing systems made from durable asphalt shingles. These shingles are engineered for long-term protection, weather resistance, and curb appeal, with options available in a variety of colors to complement your home." },
      { q: "How long will my roof replacement take?", a: "Most roof replacements are completed in just 1-2 days, depending on the size and complexity of your home. POWER’s installation process includes the safe removal and disposal of your old shingles and materials — no extra work for you." },
      { q: "Who installs a POWER roofing system?", a: "Your POWER roof is installed by experts who know the craft inside and out. Our crews are not only highly trained in roofing systems, but also in the local codes and regulations that keep your home protected. Every installation follows strict safety standards and industry best practices—so you don’t just get a roof, you get long-lasting peace of mind." },
      { q: "Can I combine my roofing project with other exterior upgrades?", a: "Absolutely. Many homeowners choose to bundle roofing with other services — not only for a seamless look, but also for added efficiency and value." },
    ],
  },
  {
    tab: "Financing & Warranties",
    items: [
      { q: "What warranties come with my new roof?", a: "You’re covered by both a manufacturer’s warranty and POWER’s own limited lifetime labor warranty to ensure peace of mind even after your remodeling project has ended. Learn more about our warranties here." },
    ],
  },
];
