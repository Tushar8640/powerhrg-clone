"use client";

import { useState } from "react";
import Photo from "../Photo";
import Reveal from "../Reveal";
// Before/after comparison. A transparent range input sits on top for drag + keyboard support;
// the "after" layer is clipped to the right of the handle.
export default function BeforeAfter({ before, after }: { before: string; after: string }) {
  const beforeAfter = { before, after };
  const [pos, setPos] = useState(50);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1150px] px-6">
        <Reveal>
          <h2 className="text-[28px] font-light tracking-[4px] text-navy uppercase lg:text-[37px] lg:tracking-card">Our work shows</h2>
        </Reveal>
        <Reveal delay={150} className="relative mt-8 aspect-[1150/603] w-full overflow-hidden select-none">
          <Photo src={beforeAfter.before} label="Before" className="absolute inset-0 bg-[#9aa5b1]" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <Photo src={beforeAfter.after} label="After" className="absolute inset-0 bg-[#7d8fa6]" />
          </div>

          {/* handle */}
          <div className="pointer-events-none absolute inset-y-0 w-[2px] -translate-x-1/2 bg-lime" style={{ left: `${pos}%` }}>
            <span className="absolute top-1/2 left-1/2 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lime">
              <svg width="26" height="14" viewBox="0 0 26 14" fill="#102f48" aria-hidden>
                <path d="M0 7 9 0v14zM26 7l-9 7V0z" />
              </svg>
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Drag to compare before and after"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </Reveal>
      </div>
    </section>
  );
}
