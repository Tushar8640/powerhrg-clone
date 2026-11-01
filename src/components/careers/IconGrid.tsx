"use client";

import { useState } from "react";
import Photo from "../Photo";
import Reveal from "../Reveal";

export type IconItem = { title: string; icon: string; text?: string; bullets?: string[] };
type Props = { id?: string; title: string[]; text: string; items: IconItem[] };

export default function IconGrid({ id, title, text, items }: Props) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id={id} className="bg-white py-20 text-navy lg:py-24">
      <div className="mx-auto max-w-[1150px] px-6">
        <Reveal>
          <h2 className="text-[34px] leading-[1.3] font-light tracking-[5px] uppercase lg:text-[63px] lg:tracking-[10px]">
            {title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[540px] text-[16px] leading-[24px]">{text}</p>
        </Reveal>

        <ul className="mt-14 grid items-start gap-x-14 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const expandable = Boolean(item.text || item.bullets);
            const isOpen = open.has(i);
            const label = (
              <span className="max-w-[200px] text-[11px] leading-[18px] font-bold tracking-[3px] uppercase lg:text-[12px] lg:tracking-[3.6px]">
                {item.title}
              </span>
            );

            return (
              <li key={item.title}>
                <Reveal delay={(i % 3) * 100} className="flex items-start gap-6">
                  <Photo src={item.icon} contain label="" className="h-[60px] w-[60px] shrink-0" />
                  <div className="flex-1 pt-[18px]">
                    {expandable ? (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggle(i)}
                        className="flex w-full items-center justify-between gap-4 text-left"
                      >
                        {label}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden
                          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="m2 5 5 5 5-5" />
                        </svg>
                      </button>
                    ) : (
                      label
                    )}
                    {expandable && (
                      <div className={`grid transition-all duration-300 ${isOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <div className="overflow-hidden text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px]">
                          {item.text && <p>{item.text}</p>}
                          {item.bullets && (
                            <ul className="space-y-1">
                              {item.bullets.map((b) => (
                                <li key={b}>{b}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
