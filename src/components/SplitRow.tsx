import Photo from "./Photo";
import Reveal from "./Reveal";

type Props = {
  title: string[];
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  /** Which side the photo sits on. */
  imageSide: "left" | "right";
  /** Text-side tone: pale blue or white. */
  tone: "blue" | "white";
  cta?: { label: string; href?: string };
  /**
   * "bleed": 50/50 full-width row, photo fills its half (community programs).
   * "contained": photo + copy inside the 1150px column (belonging).
   */
  variant: "bleed" | "contained";
};

// One alternating image/text row. Pages stack several, flipping imageSide and tone each time.
export default function SplitRow({ title, paragraphs, image, imageAlt = "", imageSide, tone, cta, variant }: Props) {
  const bg = tone === "blue" ? "bg-[#edf3fd]" : "bg-white";

  const copy = (
    <Reveal className="max-w-[420px]">
      <h2 className="text-[30px] leading-[1.3] font-light tracking-[4px] text-navy uppercase lg:text-[47px] lg:tracking-card">
        {title.map((l) => (
          <span key={l} className="block">
            {l}
          </span>
        ))}
      </h2>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 24)} className="mt-5 text-[16px] leading-[24px] text-navy lg:text-[17px] lg:leading-[26px]">
          {p}
        </p>
      ))}
      {cta && (
        <a href={cta.href ?? "#"} className="link-underline mt-6 text-navy">
          {cta.label}
        </a>
      )}
    </Reveal>
  );

  if (variant === "bleed") {
    return (
      <section className={`grid lg:grid-cols-2 ${bg}`}>
        <div className={`flex items-center px-6 py-16 lg:min-h-[36vw] lg:px-[10%] ${imageSide === "left" ? "lg:order-2" : ""}`}>{copy}</div>
        <Photo src={image} label={imageAlt} className={`aspect-[4/3] lg:aspect-auto lg:min-h-[36vw] ${imageSide === "left" ? "lg:order-1" : ""}`} />
      </section>
    );
  }

  return (
    <section className={`${bg} py-16 lg:py-24`}>
      {/* the photo always takes the wider column, whichever side it is on */}
      <div
        className={`mx-auto grid max-w-[1150px] items-center gap-10 px-6 lg:gap-[110px] ${
          imageSide === "left" ? "lg:grid-cols-[1.3fr_1fr]" : "lg:grid-cols-[1fr_1.3fr]"
        }`}
      >
        <Reveal className={imageSide === "right" ? "lg:order-2" : ""}>
          <Photo src={image} label={imageAlt} className="aspect-[660/540] w-full" />
        </Reveal>
        <div className={imageSide === "right" ? "lg:order-1" : ""}>{copy}</div>
      </div>
    </section>
  );
}
