// Copy and image paths for /services/accessories. Images go in /public/assets/accessories/.
import type { FaqGroup } from "@/components/services/Faq";
import type { Slide } from "@/components/services/Gallery";

export const accessoriesHero = {
  title: ["Complete your", "upgrade"],
  subtitle: ["When it comes to making your home all it can be, the details matter."],
  image: "/assets/accessories/hero.jpg",
  mobileImage: "/assets/accessories/hero-mobile.jpg",
};

const img = (group: string, n: number, ext = "jpg") => `/assets/accessories/${group}/${n}.${ext}`;

// Slide images, order and captions follow the reference DOM exactly (image file names were matched
// slide-by-slide). Note: on the reference the door captions do not line up with their photos
// (e.g. "Privacy Glass" sits on the handles photo); this is kept as-is. The third window slide has no caption.
export const accessoryGalleries: { title: string; slides: Slide[] }[] = [
  {
    title: "Window accessories",
    slides: [
      { image: img("window", 1), alt: "Queen Anne Grid adding a farmhouse look", caption: "Queen Anne Grid: adds a classic, Farmhouse look to your home." },
      { image: img("window", 2), alt: "Colonial grid style window", caption: "Colonial Grid: gives your home a beautiful, traditional style." },
      { image: img("window", 3), alt: "Queen Anne" },
      { image: img("window", 4, "png"), alt: "Colonial grid style window", caption: "Colonial Grid: gives your home a beautiful, traditional style." },
    ],
  },
  {
    title: "Door accessories",
    slides: [
      { image: img("door", 1), alt: "Privacy Glass", caption: "Privacy Glass: lets light in while maintaining your family’s privacy." },
      { image: img("door", 2), alt: "Sidelites", caption: "Sidelites: light up your main entrance for a more welcoming appearance." },
      { image: img("door", 3), alt: "Transoms", caption: "Transoms: a great way to add character and architectural flair." },
      { image: img("door", 4), alt: "Blinds", caption: "Blinds: add privacy and shade with our selection of interior door blinds." },
      { image: img("door", 5), alt: "Decorative Glass", caption: "Decorative Glass: add to your overall aesthetic with a statement-making entrance." },
      { image: img("door", 6), alt: "Grids", caption: "Grids: coordinate with your windows or go your own way." },
      { image: img("door", 7), alt: "Handle Hardware", caption: "Handle Hardware: wide selection of hardware in traditional and smart options." },
      { image: img("door", 8), alt: "Kickplates", caption: "Kickplates: add decorative interest and protect the longevity of your front door." },
    ],
  },
  {
    title: "Siding accessories",
    slides: [
      { image: img("siding", 1), alt: "Downspouts", caption: "Downspouts: made wider than standard to properly drain away from your home." },
      { image: img("siding", 2), alt: "Fascia", caption: "Fascia: wood grain texture that never requires painting." },
      { image: img("siding", 3), alt: "Soffits", caption: "Soffits: designed to look like authentic tongue and groove style with concealed vents." },
      { image: img("siding", 4), alt: "Shutters", caption: "Shutters: add a decorative element to any window." },
      { image: img("siding", 5), alt: "Louvers", caption: "Louvers: both decorative and functional venting options available." },
      { image: img("siding", 6), alt: "Gutters", caption: "Gutters: wide 6-inch gutters, customized onsite, and completely seamless." },
    ],
  },
  {
    title: "Roofing accessories",
    slides: [
      { image: img("roofing", 1), alt: "Downspouts", caption: "Downspouts: made wider than standard to properly drain away from your home." },
      { image: img("roofing", 2), alt: "Energy Sphere attic insulation", caption: "Power’s Energy Sphere system utilizes both blown-in insulation and a radiant barrier for superior performance." },
      { image: img("roofing", 3), alt: "Energy Sphere attic insulation", caption: "Our Energy Sphere attic insulation system provides year-round energy savings and all-around comfort." },
      { image: img("roofing", 4), alt: "Gutters", caption: "Gutters: wide 6-inch gutters, customized onsite, and completely seamless." },
    ],
  },
];

// Same partner logos as /services, in the order this page shows them.
const p = (file: string) => `/assets/services-page/partners/${file}.svg`;
export const accessoriesPartners = [
  { name: "GAF", image: p("gaf") },
  { name: "ProMaterials", image: p("promaterials") },
  { name: "ProVia", image: p("provia") },
  { name: "Westlake Royal Building Products", image: p("westlake") },
  { name: "Pella", image: p("pella") },
  { name: "CertainTeed", image: p("certainteed") },
];

// This page's FAQ has no tabs, so it is one group with an empty tab name.
export const accessoriesFaqs: FaqGroup[] = [
  {
    tab: "",
    items: [
      { q: "What kind of exterior home remodeling accessories does POWER offer?", a: "POWER offers a wide range of accessories to finalize and elevate your project—from decorative trims to functional enhancements—across our various exterior home remodeling services." },
      { q: "What window accessories are available?", a: "You can choose design-enhancing options such as Colonial Grids and Queen Anne Grids to give your windows a traditional or farmhouse flair." },
      { q: "What door accessories are available?", a: "Options include interior door blinds for privacy, decorative or privacy glass, grids, various hardware, kickplates, sidelites, and transoms to make your entryway both stylish and functional." },
      { q: "What siding accessories are available?", a: "You’ll find functional siding upgrades like louvers, gutters, wide downspouts, wood-grain textured fascia, and tongue-and-groove soffits with concealed vents. In addition we offer aesthetic siding upgrades like shutters, to give your home the complete look." },
      { q: "What roofing accessories are available?", a: "For roofing, POWER offers custom onsite seamless gutters, wide downspouts, as well as our Energy Sphere attic insulation system, which includes blown-in insulation and a radiant barrier." },
      { q: "Should I consider adding accessories to my project?", a: "Accessories bring the finishing touches—adding style, functionality, and cohesion across your home’s exterior packages. They help blend appearances and deliver a tailored feel to your space. Your Remodeling Consultant can provide more information." },
      { q: "Will my project take longer if I add accessories?", a: "Not usually. Accessories like grids, shutters, or hardware are built into your project plan from the start, so they’re installed alongside your windows, doors, siding, or roof without adding significant time. If a custom or specialty accessory is selected, your Remodeling Consultant will let you know upfront if it affects the timeline." },
    ],
  },
];
