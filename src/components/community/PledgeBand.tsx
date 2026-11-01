/* eslint-disable @next/next/no-img-element -- static logo */
import Reveal from "../Reveal";

// "Fueling our philanthropy": navy band, copy on the left, oversized Pledge 1% mark on the right.
export default function PledgeBand({ title, text }: { title: string[]; text: string }) {
  return (
    <section className="overflow-hidden bg-navy text-white">
      <div className="mx-auto grid max-w-[1150px] items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_1.2fr] lg:py-0">
        <Reveal className="lg:py-24">
          <h2 className="text-[30px] leading-[1.3] font-light tracking-[4px] uppercase lg:text-[47px] lg:tracking-card">
            {title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-5 max-w-[400px] text-[16px] leading-[26px] lg:text-[17px]">{text}</p>
        </Reveal>
        {/* the reference's own white Pledge 1% mark (Pledge1_-Updated_200x200.svg) */}
        <img src="/assets/community/pledge1-band.svg" alt="Pledge 1%" className="mx-auto h-auto w-full max-w-[520px]" />
      </div>
    </section>
  );
}
