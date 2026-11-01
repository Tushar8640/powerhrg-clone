import Reveal from "../Reveal";

type Props = {
  title: string;
  stats: { value: string; label: string }[];
  /** "md" = /about all-star stats (pale blue band, 6 items). "lg" = /about/community impact (white, 3 big figures). */
  size?: "md" | "lg";
};

// Static figures in a 3-column grid under a ruled heading.
export default function StatGrid({ title, stats, size = "md" }: Props) {
  const lg = size === "lg";
  return (
    <section className={`${lg ? "bg-white" : "bg-[#edf3fd]"} py-16 text-navy lg:py-20`}>
      <div className="mx-auto max-w-[1150px] px-6">
        <Reveal>
          <h2
            className={`border-b-2 border-sky pb-8 font-light uppercase ${
              lg ? "text-[30px] tracking-[4px] lg:text-[47px] lg:tracking-card" : "text-[24px] tracking-[3px] lg:text-[30px]"
            }`}
          >
            {title}
          </h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-3">
          {stats.map((s, i) => (
            <li key={s.label}>
              <Reveal delay={(i % 3) * 100}>
                <p
                  className={`font-light ${
                    lg ? "text-[40px] tracking-[5px] lg:text-[63px] lg:tracking-[10px]" : "text-[32px] tracking-[4px] lg:text-[40px] lg:tracking-card"
                  }`}
                >
                  {s.value}
                </p>
                <p className="mt-4 max-w-[300px] text-[12px] leading-[20px] font-bold tracking-[3px] uppercase lg:text-[14px] lg:tracking-[4.2px]">
                  {s.label}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
