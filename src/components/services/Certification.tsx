import Photo from "../Photo";
import Reveal from "../Reveal";

type Props = { image: string; alt: string; title: string[]; text: string };

// Certification badge on the left, short explanation on the right.
export default function Certification({ image, alt, title, text }: Props) {
  return (
    <section className="bg-white pb-10 text-navy">
      <div className="mx-auto grid max-w-[1150px] items-center gap-10 px-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Photo src={image} contain label={alt} className="mx-auto h-[280px] w-[280px] lg:h-[330px] lg:w-[330px]" />
        </Reveal>
        <Reveal delay={150}>
          <h2 className="text-[26px] leading-[1.3] font-light tracking-[8px] uppercase lg:text-[35px] lg:tracking-[15px]">
            {title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-5 max-w-[400px] text-[15px] leading-[24px] lg:text-[16px]">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
