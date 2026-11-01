// Copy and image paths for /services/siding. Images go in /public/assets/siding/.
import type { FaqGroup } from "@/components/services/Faq";
import type { FeatureIcon } from "@/components/services/FeatureIcons";
import { powerGuarantee } from "./services-content";

export const sidingHero = {
  title: ["A fresh coat", "of siding"],
  subtitle: ["Our siding provides maximum protection and maximum style."],
  image: "/assets/siding/hero.jpg",
  mobileImage: "/assets/siding/hero-mobile.jpg",
};

export const sidingIntro = {
  eyebrow: "Power siding system",
  title: "Get Power on your side",
  text: "Customize and protect your home with the long term performance of our high-tech siding system. Made with energy-efficient insulation, extra-durable panels, and pest control features, our siding comes in an array of colors and styles to choose from. Get ready to create the ultimate eye-catching shell for your home.",
};

export const sidingFeatures: { icon: FeatureIcon; title: string; text: string }[] = [
  { icon: "curb", title: "Curb appeal", text: "Realistic wood and stone look appearances, extra-large panels with fewer seams, fade-resistant panels" },
  { icon: "durable", title: "Durable", text: "Tri-Built house wrap—rated more durable than Tyvek, impact-resistant Neopor form-fitting insulation" },
  { icon: "energy", title: "Energy-efficient", text: "Neopor insulation—up to 20% more energy-efficient than traditional flat foam" },
  { icon: "water", title: "Water-resistant", text: "Tri-Built house wrap, Smart Track grooves, water-tight sealant, 45-degree angled J-channel" },
  { icon: "insect", title: "Insect-repellant", text: "Made with Preventol—an insect repellant that wards off termites, carpenter bees, and other harmful insects" },
  { icon: "wind", title: "Wind-resistant", text: "Up to 130 mph, double rollover, wind-resistant nailing hem, advanced and secure panel locking system" },
  { icon: "lowMaintenance", title: "Low-maintenance", text: "Easy to clean and maintain, fade-free panels never need to be painted" },
  { icon: "warranty", title: "Superior warranties", text: "Transferable manufacturer warranty, POWER’s limited lifetime labor warranty" },
  { icon: "installers", title: "Highly-skilled installers", text: "Installation specialists trained in local codes and regulations" },
];

export const sidingBeforeAfter = { before: "/assets/siding/before.png", after: "/assets/siding/after.png" };
export const sidingGuarantee = powerGuarantee("/assets/shared/guarantee.jpg");

export const sidingFaqs: FaqGroup[] = [
  {
    tab: "General",
    items: [
      { q: "Can siding projects be combined with other services?", a: "Absolutely. Many homeowners bundle their siding projects with other services for a complete exterior transformation." },
      { q: "What are signs my siding needs to be replaced?", a: "Warning signs that your siding needs to be replaced include cracks, warping, holes, fading, loose/missing panels, and moisture damage outdoors (moss or fungus) – all of which can increase energy bills. If you’re unsure when your siding was last replaced or it’s showing multiple issues, it’s a good time to consider replacement." },
      { q: "Is POWER’s siding energy-efficient and weather-resistant?", a: "Yes, POWER installs premium vinyl siding designed for durability, energy-efficiency, and curb appeal. Our siding resists fading, cracking, and warping while providing excellent insulation for year-round comfort — helping reduce heat transfer and lowering energy costs." },
      { q: "Does insulated siding lower energy bills?", a: "Insulated siding can help improve your home’s thermal performance by reducing heat transfer through exterior walls. Improved insulation may help lower heating and cooling costs while increasing year-round comfort." },
      { q: "Can damaged siding cause moisture problems?", a: "Yes, damaged or improperly sealed siding can allow moisture to reach the home’s exterior walls — potentially leading to water damage, mold, and other structural issues if left unaddressed." },
      { q: "How often should siding be replaced?", a: "Vinyl siding commonly lasts about 20 to 40 years, and high-quality products may perform longer with proper installation and care. Replacement may be needed sooner if panels are cracked, warped, loose, severely faded, or allowing moisture behind the exterior. The condition of the siding matters more than following a fixed calendar." },
    ],
  },
  {
    tab: "Process",
    items: [
      { q: "How long does siding installation take?", a: "Most siding projects are completed in just a few days, depending on the size of your home and any additional work needed (like trim or insulation). Your project manager will provide a detailed timeline before installation begins." },
      { q: "What styles and colors are available for siding?", a: "We offer a wide selection of colors and textures, from classic neutrals to bold tones, to complement your home. In addition to traditional siding, we install faux stone, cedar, and accent shingles. POWER makes your entire home maintenance free by our soffit, fascia, and gutter work. Check out our accessory options to give your siding project a polished, customized look." },
    ],
  },
  {
    tab: "Financing & Warranties",
    items: [
      { q: "What warranties come with siding?", a: "Every siding project is covered by a manufacturer’s product warranty and backed by POWER’s limited lifetime labor warranty, giving you peace of mind for as long as you own your home—and beyond. Learn more about warranties here." },
      { q: "Does new siding improve curb appeal and home value?", a: "Yes, new siding can add value by improving curb appeal, helping protect the structure, reducing maintenance, and improving energy performance when an insulated system is used. The exact return depends on the material, installation quality, condition of the old siding, and local housing market." },
    ],
  },
];
