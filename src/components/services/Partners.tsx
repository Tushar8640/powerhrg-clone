import Photo from "../Photo";
import Reveal from "../Reveal";
import { partners as defaultPartners } from "@/lib/services-content";

type Props = {
  /** Light-blue on /services, white on /services/accessories. */
  tone?: "blue" | "white";
  /** Logo order differs between pages on the reference site. */
  partners?: { name: string; image: string }[];
};

export default function Partners({ tone = "blue", partners = defaultPartners }: Props) {
  return (
    <section className={`${tone === "blue" ? "bg-sky-soft" : "bg-white"} py-16 lg:pt-20 lg:pb-36`}>
      <Reveal className="px-6 text-center">
        <h2 className="text-[28px] font-light tracking-[4px] text-navy uppercase lg:text-[47px] lg:tracking-card">
          We only work with the best of the best
        </h2>
        <p className="mt-4 text-[16px] text-navy lg:text-[20px]">Here are the category-leading companies we’re proud to call our partners.</p>
      </Reveal>
      <Reveal delay={150}>
        <ul className="mx-auto mt-14 grid max-w-[1560px] grid-cols-2 items-center gap-x-8 gap-y-10 px-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <li key={p.name} className="flex justify-center">
              <Photo src={p.image} contain label={p.name} className="h-[110px] w-full max-w-[240px]" />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
