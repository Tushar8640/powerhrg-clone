/* eslint-disable @next/next/no-img-element -- small static SVG icons; next/image adds nothing here */

// Feature icons are the reference site's own files, saved in /public/assets/icons.
export type FeatureIcon =
  | "energy"
  | "security"
  | "durable"
  | "curb"
  | "warranty"
  | "noise"
  | "installers"
  | "stain"
  | "comfort"
  | "waterproof"
  | "wind"
  | "warp"
  | "water"
  | "insect"
  | "lowMaintenance"
  | "blownIn"
  | "reflective"
  | "antiFungal";

const files: Record<FeatureIcon, string> = {
  energy: "ENERGY.svg",
  security: "SECURE.svg",
  durable: "DURABLE-ROOFING.svg",
  curb: "CURB-APPEAL.svg",
  warranty: "WARRANTIES.svg",
  noise: "NOISE-REDUCING.svg",
  installers: "INSTALLERS.svg",
  stain: "SHINGLES.svg",
  comfort: "COMFORT.svg",
  waterproof: "WATERPROOF.svg",
  wind: "WIND-RESISTANT.svg",
  warp: "WARP-RESISTANT.svg",
  water: "WATERPROOF.svg", // siding "Water-resistant" uses the same icon on the reference
  insect: "ANTI-INSECT.svg",
  lowMaintenance: "LOW-MAINTENANCE.svg",
  blownIn: "BLOWN-INSULATION.svg",
  reflective: "REFLECTIVE.png",
  antiFungal: "ANTI-FUNGAL.svg",
};

export default function FeatureIconSvg({ name, className = "" }: { name: FeatureIcon; className?: string }) {
  return <img src={`/assets/icons/${files[name]}`} alt="" aria-hidden className={`object-contain ${className}`} />;
}
