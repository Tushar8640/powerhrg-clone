"use client";

import { useState } from "react";
import Arrow from "../Arrow";
import Reveal from "../Reveal";

type Group = { title: string; text: string; image: string };
type Props = { eyebrow: string; title: string[]; paragraphs: string[]; cta: string; groups: Group[] };

// Hexagon panel in the shape of the Power mark - same idea as the homepage Bill of Rights slider,
// but each slide shows its own group artwork faintly behind the copy.
const PANEL_SHAPE = "polygon(50% 0%, 100% 24%, 100% 76%, 50% 100%, 0% 76%, 0% 24%)";

export default function AffinitySlider({ eyebrow, title, paragraphs, cta, groups }: Props) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + groups.length) % groups.length);
  const g = groups[i];

  return (
    <section className="bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-[1150px] items-center gap-14 px-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[2.8px] text-sky uppercase">{eyebrow}</p>
          <h2 className="mt-3 text-[40px] leading-[1.25] font-light tracking-[8px] uppercase lg:text-[63px] lg:tracking-[10px]">
            {title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 max-w-[450px] text-[16px] leading-6">
              {p}
            </p>
          ))}
          <a href="#" className="link-underline mt-8">
            {cta}
          </a>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div
            className="relative mx-auto flex aspect-[565/600] w-full max-w-[565px] flex-col items-center justify-center bg-[#8ca6dc] px-[14%] text-center text-navy"
            style={{ clipPath: PANEL_SHAPE }}
          >
            {/* group artwork, faint behind the copy */}
            <span
              key={g.image}
              aria-hidden
              className="absolute inset-[22%] bg-contain bg-center bg-no-repeat opacity-30"
              style={{ backgroundImage: `url(${g.image})` }}
            />
            <h3 key={g.title} className="relative text-[26px] leading-tight font-light tracking-[8px] uppercase lg:text-[36px] lg:tracking-[10px]">
              {g.title}
            </h3>
            <p className="relative mt-5 max-w-[360px] text-[14px] leading-[22px] lg:text-[15px] lg:leading-6">{g.text}</p>
            <p className="absolute bottom-[9%] text-[11px] font-bold tracking-[2.8px] uppercase" aria-live="polite">
              {i + 1} of {groups.length}
            </p>
          </div>
          <Arrow dir="left" label="Previous group" onClick={() => go(-1)} className="absolute top-1/2 left-0 -translate-y-1/2 lg:-left-6" />
          <Arrow dir="right" label="Next group" onClick={() => go(1)} className="absolute top-1/2 right-0 -translate-y-1/2 lg:-right-6" />
        </Reveal>
      </div>
    </section>
  );
}
