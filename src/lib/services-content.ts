// Copy and image paths for /services. Images go in /public/assets/services-page/.

export const partners = [
  { name: "GAF", image: "/assets/services-page/partners/gaf.svg" },
  { name: "Pella", image: "/assets/services-page/partners/pella.svg" },
  { name: "ProMaterials", image: "/assets/services-page/partners/promaterials.svg" },
  { name: "ProVia", image: "/assets/services-page/partners/provia.svg" },
  { name: "Westlake Royal Building Products", image: "/assets/services-page/partners/westlake.svg" },
  { name: "CertainTeed", image: "/assets/services-page/partners/certainteed.svg" },
];

export const sameAddress = {
  title: ["Same address", "Whole new vibe"],
  text: "Your home is more than just a roof over your head. It’s a reflection of who you are and a declaration of who you are becoming. Whether it’s understated charm, a bold expression, or you’re just improving your home’s energy efficiency—our beautiful home exterior products & professionally trained installers give you the freedom to create a space you can proudly call home.",
  image: "/assets/services-page/same-address.png",
};

export const testimonial = {
  quote: "We’re very thankful that we’ve found POWER – the trust that we put into them has been returned to us.",
  name: "Stacy",
  caption: "Homeowner & POWER Customer – Atlanta, Georgia",
};

export const beforeAfter = {
  before: "/assets/services-page/before.png",
  after: "/assets/services-page/after.png",
};

export const trackProject = {
  text: "Keep your finger on the pulse of your project with our secure project-tracking web app.",
  points: ["Monitor upcoming appointments", "Receive real-time project updates", "Access documents and photos", "Sign paperwork from anywhere"],
  image: "/assets/services-page/project-pulse.jpg",
  background: "/assets/shared/pulse-bg.png",
  logo: "/assets/shared/pulse-logo.png",
  bar: "Already a Power Customer? Access Project Pulse to track your project",
};

export const reasons = [
  {
    title: "Licenses",
    image: "/assets/services-page/licenses.jpg",
    text: "When you choose POWER, you choose peace of mind. Each of our installers undergo rigorous training and meet legal standards in all our locations.",
    cta: "View licenses & insurance",
  },
  {
    title: "Warranties",
    image: "/assets/services-page/warranties.jpg",
    text: "We only partner with the best manufacturers. So we stand behind our products and services with the best warranties in the industry.",
    cta: "View warranties",
  },
];

// Answers are abridged from the reference page (the extension truncated long answers).
export const faqs: { tab: string; items: { q: string; a: string }[] }[] = [
  {
    tab: "General",
    items: [
      { q: "What services does POWER offer?", a: "Power Home Remodeling offers a full suite of exterior remodeling services, including windows, roofing, siding, doors, attic insulation, solar, and related accessories — all designed to improve your home’s energy efficiency, aesthetics, and performance. You can check what is offered in your area by visiting our coverage map or by filtering your zip code at the top of our website." },
      { q: "Are POWER’s home remodeling services available everywhere?", a: "POWER serves residential homeowners in 28 territories covering 25 states across the U.S. Our services are available based on your location — you can check service availability in your ZIP code by using the lookup tool located at the top of our website pages, or visit our locations page." },
      { q: "Who does POWER partner with?", a: "POWER partners with some of the most trusted names in home remodeling to ensure every product meets our standards for quality and durability. Product availability depends on location, and POWER sources from industry-leading manufacturers, including ProVia for doors, GAF and Certainteed for roofing, and more." },
      { q: "How does POWER work with HOA’s?", a: "POWER will make sure all local regulations, including HOA’s are followed. Our team will work closely with the homeowner to make sure all concerns are addressed properly." },
      { q: "How do I know when it’s time to replace instead of repair?", a: "While every home is different, recurring repairs, declining energy efficiency, visible damage, or products that are nearing the end of their lifespan may indicate it’s time for replacement. During your free in-home consultation, a POWER Remodeling Consultant will evaluate your home’s exterior and recommend the right next step." },
      { q: "What home improvement projects add the most value?", a: "Exterior remodeling projects such as new windows, roofing, siding, entry doors, attic insulation, and solar can improve your home’s appearance, comfort, energy efficiency, and long-term performance. The right project depends on your home’s condition, priorities, and long-term plans." },
      { q: "How do I compare remodeling estimates?", a: "When comparing remodeling estimates, it’s important to look beyond price. Consider the quality of the products, installation methods, warranty coverage, manufacturer partnerships, financing options, and the experience of the contractor. A lower price doesn’t always provide the same long-term value." },
      { q: "What should I look for when hiring a contractor?", a: "Look for a contractor that is properly licensed and insured, offers quality products backed by strong warranties, follows manufacturer installation guidelines, and has a proven reputation for customer satisfaction. Experience, transparency, and ongoing customer support are also important factors to consider." },
    ],
  },
  {
    tab: "Process",
    items: [
      { q: "Does POWER offer free in-home consultations or estimates?", a: "We sure do! You can schedule your free in-home estimate here. Our expert scheduling team will reach out with consultation details, discuss the scope of your project, and find the best day and time for you." },
      { q: "Are your products energy-efficient?", a: "Yes, POWER windows, doors, roofing, siding, insulation, and solar panels are designed with energy efficiency at the forefront. Many of our products are ENERGY STAR® certified, helping you save on utility bills, improve home comfort, and reduce environmental impact." },
      { q: "How long does a home remodeling project take?", a: "The majority of our products can be installed in one day, with the exception of siding that will take a few days. However, the length of any home remodeling project depends on a number of factors like weather and scope of work. You can monitor your progress through Project Pulse, our secure online tracking tool." },
      { q: "Can POWER install multiple services in a single project?", a: "Absolutely. POWER’s expert crews are specialized in each service we offer. Multiple crews can come out and seamlessly install numerous products within a single project, from windows and doors to siding and roofing." },
      { q: "How does POWER guarantee the best installation practices?", a: "POWER ensures every project meets the highest standards through our highly-trained installation teams and strict quality control checks at every stage. We will take care of licensing, so our crews can follow local building codes and manufacturer guidelines." },
      { q: "Does POWER use subcontractors?", a: "Yes, POWER partners with independent installation contractors who are trained to follow our installation standards, manufacturer specifications, and local building codes. POWER remains the homeowner’s point of contact throughout the project." },
    ],
  },
  {
    tab: "Warranties",
    items: [
      { q: "What warranties does POWER provide?", a: "Every service is backed by a two-tier warranty: a manufacturer warranty on the products themselves and POWER’s own limited lifetime labor warranty, ensuring installation quality and peace of mind. Visit our Warranties page for a closer look." },
    ],
  },
];

// "The Power Guarantee" copy is identical on every service page; only the photo changes.
export const powerGuarantee = (image: string) => ({
  eyebrow: "Warranty",
  title: ["The Power", "Guarantee"],
  text: "When you do a job right every time, you don’t mind providing a guarantee. That’s why, in addition to a manufacturer’s warranty, POWER also provides a limited lifetime labor warranty. And if you ever have questions or issues, we also provide ongoing service and support.",
  cta: "View warranties",
  image,
});
