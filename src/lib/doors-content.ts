// Copy and image paths for /services/doors. Images go in /public/assets/doors/.
import type { FaqGroup } from "@/components/services/Faq";
import type { FeatureIcon } from "@/components/services/FeatureIcons";
import { powerGuarantee } from "./services-content";

export const doorsHero = {
  title: ["Doors that", "make a grand", "entrance"],
  subtitle: ["Elevate your entry with a front door that says so much more."],
  image: "/assets/doors/hero.png",
};

export const doorsIntro = {
  eyebrow: "Power Freedom Series",
  title: "Bank vault security. Timeless beauty.",
  text: "The POWER Freedom Series is our line of energy-efficient, entryway doors made with the utmost attention to design, security, and durability. Created in partnership with ProVia, a manufacturer renowned for their mix of modern technology and old-world craftsmanship.",
};

export const doorsFeatures: { icon: FeatureIcon; title: string; text: string }[] = [
  { icon: "energy", title: "Energy-efficient", text: "Highly insulated foam-filled core, premium weather stripping, Heat Shield glass" },
  { icon: "security", title: "Secure", text: "20-gauge steel-plated slab, premium Schlage lock, optional electronic lock keypad" },
  { icon: "durable", title: "Durable", text: "Warp-free slab, premium Schlage hardware, waterproof Frame Saver frame" },
  { icon: "lowMaintenance", title: "Low-maintenance", text: "Oven-cured and finished, galvanized steel, installed to perfection" },
  { icon: "waterproof", title: "Waterproof", text: "Rust-proof galvanized steel coat, waterproof Frame Saver frame" },
  { icon: "curb", title: "Curb appeal", text: "Premium 5-step finishing process, wide variety of styles, colors, and options" },
  { icon: "installers", title: "Highly-skilled installers", text: "Installation specialists trained in local codes and regulations" },
  { icon: "warranty", title: "Superior warranties", text: "Transferable manufacturer warranty, POWER’s limited lifetime labor warranty" },
];

export const doorsBeforeAfter = { before: "/assets/doors/before.png", after: "/assets/doors/after.png" };
export const doorsGuarantee = powerGuarantee("/assets/shared/guarantee.jpg");

export const doorsFaqs: FaqGroup[] = [
  {
    tab: "General",
    items: [
      { q: "Are POWER doors energy-efficient?", a: "Our POWER Freedom Series doors are designed with insulated foam cores and Heat Shield glass to minimize drafts and energy loss. Many models meet or exceed ENERGY STAR® standards. Additionally, POWER’s sliding glass doors are built with tempered insulated glass, helping reduce utility bills and improve comfort year-round." },
      { q: "Can POWER match doors to the style and color of my home?", a: "Yes — POWER offers a wide selection of door styles, colors, glass inserts, and hardware options that can be combined in thousands of ways to complement your home’s design." },
      { q: "Can you install multiple doors in a single project?", a: "Yes, our teams can handle single-door or multi-door installations in one project, coordinating all aspects to guarantee a precise fit and efficient scheduling. Many homeowners choose to upgrade their windows, siding, or roofing along with their doors for a complete exterior transformation." },
      { q: "Does POWER offer sliding glass doors?", a: "Yes! POWER offers premium sliding glass doors designed for beauty, durability, and energy efficiency. Built with tempered insulated glass, they come in customizable two- or three-panel configurations that can open from either side. Made from 100% virgin vinyl with reinforced mounting points, our doors provide long-lasting strength and are virtually maintenance-free." },
      { q: "What type of front door is most secure?", a: "Steel and reinforced composite entry doors generally provide the strongest combination of impact resistance and forced-entry protection. Security also depends on the frame, deadbolt, strike plate, hinges, glass placement, and installation — not just the door material. POWER’s steel-composite entry doors use reinforced construction and premium-grade hardware to support long-term security and performance." },
      { q: "How long do entry doors last?", a: "Entry doors typically last 20 to 30 years or longer, depending on weather exposure, daily use, installation quality, and maintenance. Choosing a professionally installed door and addressing worn seals, hardware, or finishes can help extend its lifespan." },
    ],
  },
  {
    tab: "Process",
    items: [
      { q: "What type of doors does POWER offer?", a: "POWER primarily specializes in energy-efficient, steel composite entry doors designed for long-lasting durability, superior security, and low maintenance. Each door is built with advanced foam insulation that maximizes energy efficiency and premium-grade hardware that delivers reliable performance and lasting style. The POWER Freedom Series also offers a wide range of styles, colors, and hardware options to perfectly balance form and function." },
      { q: "How long does a door installation typically take?", a: "Most door installations are completed within a few hours. The exact timeline can vary based on the complexity of the project and the design of your home’s entryway." },
      { q: "What’s the door installation process like?", a: "While timelines vary, your project will include a pre-install inspection, precise installation by trained professionals, and seamless integration into your home’s structure. POWER-trained installers ensure local code compliance and a quality finish." },
      { q: "What benefits does the POWER Freedom Series offer?", a: "POWER Freedom Series entry doors are crafted in partnership with ProVia. It combines energy-efficiency, superior security, and aesthetic appeal through features like insulated foam cores, Heat Shield glass, steel-plated slabs, and durable, low-maintenance finishes." },
    ],
  },
  {
    tab: "Financing & Warranties",
    items: [
      { q: "What warranties come with door installation?", a: "Every door installation comes with a manufacturer’s warranty for the product and POWER’s limited lifetime labor warranty, so your door is covered for both materials and workmanship." },
      { q: "Can new doors increase my home’s value?", a: "Yes, entry door replacements are consistently ranked among the top remodeling projects for return on investment, boosting both curb appeal and resale value." },
    ],
  },
];
