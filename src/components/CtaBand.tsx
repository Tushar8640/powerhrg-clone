import Reveal from "./Reveal";

// Full-width light-blue band with a centred heading and a navy button ("Ready to make a difference?").
export default function CtaBand({ title, label, href = "#" }: { title: string[]; label: string; href?: string }) {
  return (
    <section className="bg-sky px-6 py-20 text-center text-navy lg:py-24">
      <Reveal>
        <h2 className="text-[30px] leading-[1.3] font-light tracking-[5px] uppercase lg:text-[63px] lg:tracking-[10px]">
          {title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h2>
        <a
          href={href}
          className="mt-10 inline-block bg-navy px-6 py-4 text-[12px] font-bold tracking-[3px] text-white uppercase transition-colors hover:bg-lime hover:text-navy lg:text-[14px] lg:tracking-[4.2px]"
        >
          {label}
        </a>
      </Reveal>
    </section>
  );
}
