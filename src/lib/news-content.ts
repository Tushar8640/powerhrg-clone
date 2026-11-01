// Copy and image paths for /about/news. Images go in /public/assets/news/ (see public/assets/README.md).
// Dates are ISO so the list can be sorted; they are shown as "OCT 31, 2026".
import type { Post } from "@/components/news/NewsIndex";

export const featuredPost: Post = {
  category: "Culture",
  date: "2026-10-27",
  title: "Power raises over $3 million for childhood cancer research",
  image: "/assets/news/featured.png", // Screenshot-2026-10-27-at-9.29.57-AM.png
};

// Page 1 of the reference, in its order. Images follow the reference DOM order.
export const posts: Post[] = [
  { category: "How-To", date: "2026-10-31", title: "What is Low-E glass?", image: "/assets/news/low-e-glass.png" }, // PHX_Windows_Pella_38-89807_083.png
  { category: "How-To", date: "2026-10-29", title: "Scary good renovations: reimagining Hollywood’s most iconic Halloween homes", image: "/assets/news/halloween-homes.png" }, // Screenshot-2026-10-28-at-4.52.43-PM.png
  { category: "How-To", date: "2026-10-27", title: "Are gutter guards worth it? 3 things to consider", image: "/assets/news/gutter-guards.png" }, // 32-15872-Huntingdon-Valley-PA-0013.png
  { category: "How-To", date: "2026-10-15", title: "Best windows for energy efficiency", image: "/assets/news/best-windows.jpg" }, // PFG25_VolunterForGood_HabitatForHumanityPhiladelphiaVOAlbum_006.jpg
  { category: "Culture", date: "2026-10-14", title: "Power recognized by Fortune’s Best Workplaces in Construction for fourth consecutive year", image: "/assets/news/fortune-construction.png" }, // 20240206_TPA_DPCA_034.png
  { category: "How-To", date: "2026-10-13", title: "How much does a new roof cost?", image: "/assets/news/new-roof-cost.png" }, // NSH_MultiProduct_39-75725_048.png
];

export const categories = ["Company", "Culture", "How-To", "Press Release", "Projects", "Uncategorized"];
export const totalPages = 28;

// Case kept exactly as on the reference (the Cleveland release is not uppercase there).
export const pressReleases = [
  { date: "10 / 06 / 26", title: "POWER HOME REMODELING #2 ON FORTUNE’S BEST WORKPLACES IN CONSTRUCTION 2026 LIST" },
  { date: "08 / 28 / 26", title: "Power Home Remodeling Expands to Cleveland, Ohio" },
  { date: "08 / 18 / 26", title: "POWER HOME REMODELING’S CO-CEOS ASHER RAPHAEL AND COREY SCHILLER NAMED GLASSDOOR’S BEST CEOs IN 2026" },
];

// Public media-relations contact shown on the reference page.
export const pressContact = { phone: "610-874-5000", email: "mediarelations@powerhrg.com" };
