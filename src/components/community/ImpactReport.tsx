import Photo from "../Photo";
import Reveal from "../Reveal";

type Props = { title: string[]; text: string; cta: string; href?: string; image: string; imageAlt: string };

// "Our work in 2025": copy + file link on the left, report cover on the right.
export default function ImpactReport({ title, text, cta, href = "#", image, imageAlt }: Props) {
  return (
    <section className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto grid max-w-[1150px] items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <h2 className="text-[34px] leading-[1.25] font-light tracking-[5px] uppercase lg:text-[63px] lg:tracking-[10px]">
            {title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[26px] lg:text-[20px] lg:leading-[30px]">{text}</p>
          <a href={href} className="link-underline mt-8 text-navy">
            {cta}{" "}
            {/* eslint-disable-next-line @next/next/no-img-element -- tiny static icon from the reference */}
            <img src="/assets/community/open-file-icon.png" alt="" aria-hidden className="ml-1 inline h-[12px] w-auto" />
          </a>
        </Reveal>
        <Reveal delay={150}>
          <Photo src={image} contain label={imageAlt} className="mx-auto aspect-square w-full max-w-[420px]" />
        </Reveal>
      </div>
    </section>
  );
}
