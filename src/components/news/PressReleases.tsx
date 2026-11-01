import Reveal from "../Reveal";

type Release = { date: string; title: string };

// Light-blue band of the three latest press releases, each under a lime rule.
export default function PressReleases({ releases }: { releases: Release[] }) {
  return (
    <section className="bg-sky py-16 text-navy lg:py-24">
      <Reveal className="mx-auto max-w-[1150px] px-6">
        <h2 className="text-[30px] font-light tracking-[4px] uppercase lg:text-[47px] lg:tracking-card">Latest press releases</h2>
        <ul className="mt-10 grid gap-10 md:grid-cols-3">
          {releases.map((r) => (
            <li key={r.title} className="border-t-4 border-lime pt-6">
              <p className="text-[14px] font-bold lg:text-[16px]">{r.date}</p>
              <a href="#" className="mt-3 block max-w-[300px] text-[13px] leading-[22px] hover:underline lg:text-[14px]">
                {r.title} <span aria-hidden>→</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="link-underline mt-12">
          All press releases
        </a>
      </Reveal>
    </section>
  );
}
