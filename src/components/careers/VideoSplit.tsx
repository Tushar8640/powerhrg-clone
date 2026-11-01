import Photo from "../Photo";
import Reveal from "../Reveal";

type Props = {
  title: string[];
  paragraphs: string[];
  cta: { label: string; href: string };
  video: { title: string; poster: string };
};

export default function VideoSplit({ title, paragraphs, cta, video }: Props) {
  return (
    <section className="bg-[#edf3fd] py-20 text-navy lg:py-28">
      <div className="mx-auto grid max-w-[1150px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-6">
        <Reveal className="max-w-[540px]">
          <h2 className="text-[30px] leading-[1.3] font-light tracking-[4px] uppercase lg:text-[47px] lg:tracking-card">
            {title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-[16px] leading-[24px] lg:text-[17px] lg:leading-[26px]">
              {p}
            </p>
          ))}
          <a href={cta.href} className="link-underline mt-8">
            {cta.label}
          </a>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative aspect-video w-full overflow-hidden bg-[#3b4a57]">
            <Photo src={video.poster} label={video.title} className="absolute inset-0 bg-[#3b4a57]" />
            <span className="absolute top-3 left-3 flex flex-col items-start gap-1">
              <span className="bg-navy/90 px-2 py-[2px] text-[13px] font-bold text-lime">{video.title}</span>
              <span className="bg-navy/90 px-2 py-[2px] text-[10px] font-bold text-lime">Power Home Remodeling</span>
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-[56px] w-[88px] items-center justify-center rounded-md bg-navy/90" aria-hidden>
                <svg width="22" height="26" viewBox="0 0 26 30" fill="#fff">
                  <path d="M0 0v30l26-15z" />
                </svg>
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
