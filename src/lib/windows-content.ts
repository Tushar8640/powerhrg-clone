// Copy and image paths for /services/windows. Images go in /public/assets/windows/.
import type { FaqGroup } from "@/components/services/Faq";
import type { FeatureIcon } from "@/components/services/FeatureIcons";

export const windowsHero = {
  title: ["Windows that", "bring efficiency", "into focus"],
  subtitle: ["Upgrade to our energy-efficient, extra-secure, and statement-making windows."],
  image: "/assets/windows/hero.png",
  mobileImage: "/assets/windows/hero-mobile.png",
  // Used only while windows/hero.png (WINDOWS.png on the reference) is missing.
  // The portrait render is scaled to 160% height and pinned to the bottom, which puts the window
  // at roughly 15-85% of the hero height, centred ~76% across - where the reference shows it.
  // Gradient stops are sampled from the image edge at the rows visible at each height.
  desktopFallback: {
    size: "auto 160%",
    position: "calc(76vw - 54.5vh) bottom",
    gradient: "linear-gradient(to bottom, #78a0e4 0%, #6d9edd 20%, #6ea5e0 36%, #74aae3 52%, #7ab3e2 68%, #8bbee5 84%, #86bce6 100%)",
  },
};

export const windowsIntro = {
  eyebrow: "Power windows",
  title: "A window that offers more opportunity",
  text: "Take control of your home’s interior atmosphere with our energy-efficient and noise-reducing windows, made with advanced security features. Constructed with heat-reflective glass, leak-resistant technology, fade-free vinyl, and a selection of styles and colors, our windows let your home live up to its potential, no matter the season.",
};

export const windowsFeatures: { icon: FeatureIcon; title: string; text: string }[] = [
  { icon: "energy", title: "Energy-efficient", text: "Double-pane Heat Shield glass made with multiple layers of highly reflective silver" },
  { icon: "security", title: "Advanced security", text: "Reinforced meeting rail, nighttime safety vent, 180 cam lock" },
  { icon: "durable", title: "Durable", text: "100% virgin vinyl, fiberglass mesh screen, fusion-welded corners" },
  { icon: "curb", title: "Curb appeal", text: "Custom capping, beveled edges, endless customization options" },
  { icon: "warranty", title: "Superior warranties", text: "Transferable manufacturer warranty, POWER’s limited lifetime labor warranty" },
  { icon: "noise", title: "Noise-reducing", text: "Enhanced frames and window panes filled with dense argon gas" },
  { icon: "installers", title: "Highly-skilled installers", text: "Installation specialists trained in local codes and regulations" },
];

export const windowsBeforeAfter = {
  before: "/assets/windows/before.jpg",
  after: "/assets/windows/after.jpg",
};

export const windowsGuarantee = {
  eyebrow: "Warranty",
  title: ["The Power", "Guarantee"],
  text: "When you do a job right every time, you don’t mind providing a guarantee. That’s why, in addition to a manufacturer’s warranty, POWER also provides a limited lifetime labor warranty. And if you ever have questions or issues, we also provide ongoing service and support.",
  cta: "View warranties",
  image: "/assets/shared/guarantee.jpg",
};

export const windowsFaqs: FaqGroup[] = [
  {
    tab: "General",
    items: [
      { q: "What are signs that my windows need to be replaced?", a: "You may need to replace your windows if you notice drafts, condensation between the panes, or frames that are cracked, warped, and difficult to open or lock. — all of which can result in higher energy bills. Old windows can also make your home less secure and reduce curb appeal." },
      { q: "Are POWER’s windows energy-efficient?", a: "Yes, all of our windows are designed with low-emissivity (Low-E) glass, multiple panes, insulated frames, and advanced weatherstripping to keep warm air in during the winter and hot air out during the summer. This improves energy-efficiency and reduces strain on your HVAC system." },
      { q: "Can you replace windows year-round, even in winter?", a: "Yes. POWER installs windows in all seasons, including winter. Our crews work quickly to minimize exposure and use modern installation methods to keep you (and your home) comfortable during the process." },
      { q: "What is a window identification number and where can I find mine?", a: "A window identification number is a unique number printed on your window that helps identify that specific unit—especially useful if you ever need to make a warranty claim or get service. For windows installed through Power Home Remodeling, you can find this number on a white sticker located on the top frame of the window when you pull down the top sash. You can also view your window details, in the POWER Project Pulse app if you had your windows installed by us." },
      { q: "How long do replacement windows last?", a: "High-quality vinyl replacement windows commonly last 20 to 30 years and may last longer with professional installation and proper care. Climate, sun exposure, moisture, hardware, glass seals, and installation quality all affect lifespan. POWER’s vinyl windows are designed for long-term performance and include transferable manufacturer coverage plus POWER’s limited lifetime labor warranty." },
      { q: "Double-pane vs. single-pane windows: what’s the difference?", a: "Single-pane windows contain one layer of glass, while double-pane windows use two panes separated by an insulating space. Double-pane windows provide better insulation, improved energy efficiency, reduced outside noise, and greater indoor comfort than single-pane windows." },
      { q: "Should I replace all my windows at once?", a: "No, you do not have to replace every window at once. Replacing all of them together can create a consistent appearance and performance level, while replacing the oldest or most damaged windows first can spread out the investment. A POWER Remodeling Consultant can help prioritize windows based on condition, comfort, and budget." },
      { q: "How much can new windows lower energy bills?", a: "Energy-efficient replacement windows can help reduce drafts, improve insulation, and reduce the amount of energy needed to heat and cool your home. Actual energy savings vary depending on your home’s existing windows, climate, and overall energy usage." },
    ],
  },
  {
    tab: "Process",
    items: [
      { q: "What types of windows does POWER offer?", a: "We install a wide variety of styles depending on your location, including double-hung, casement, sliding, bay and bow, picture, and specialty windows. All windows are custom-made to fit your home and available in multiple colors, grid options, and energy-efficient designs." },
      { q: "Does POWER offer sliding glass doors?", a: "Yes! POWER offers premium sliding glass doors that create a seamless transition between your indoor and outdoor spaces while offering beauty, durability, and energy efficiency. Each door is built with tempered insulated glass and can be customized with two- or three-panel configurations, opening from either the right or left side. Constructed from 100% virgin vinyl with reinforced mounting points, our sliding doors provide exceptional strength, long-lasting performance, and are virtually maintenance-free." },
      { q: "Can I customize the style, color, and grid patterns of my windows?", a: "Absolutely. POWER offers a wide range of window styles, frame colors, and grid options so your new windows complement the architecture of your home and your personal style." },
      { q: "Do I need to be home during window installation?", a: "Yes, we recommend it. Being home on installation day lets our team keep you updated, answer your questions in real time, and make sure the finished project meets your expectations." },
      { q: "How long does a window replacement or installation project usually take?", a: "Most window replacement or installation projects can be completed in one day, but times may vary depending on the number of windows and the complexity of the installation. Our team at POWER handles everything from removal to clean-up so the process is quick and hassle-free. Check out our Project Pulse app to get the most up-to-date information on your project." },
    ],
  },
  {
    tab: "Financing & Warranties",
    items: [
      { q: "How much does a window replacement or installation project cost?", a: "The project cost depends on a variety of factors like the scope of work needed and the style, size, and number of windows being installed. POWER provides a free, no-obligation estimate so you’ll know exactly what your investment will be before making any commitment. We also offer easy monthly installment options that many customers take advantage of. Our team will do a pre-install inspection and make custom windows for a perfect fit in your existing home. We will then remove your old windows and install the new ones. Next we seal and insulate each unit to prevent drafts and moisture. Finally, we test the functionality of the windows and clean up your property, leaving your home in pristine condition." },
      { q: "What warranties are included with POWER windows?", a: "Every window installation is backed by comprehensive protection, including both product and installation warranties. Customers can access their manufacturer’s warranty as well as our limited lifetime labor warranty on our Warranties page, where full details and downloadable documents are available." },
    ],
  },
];
