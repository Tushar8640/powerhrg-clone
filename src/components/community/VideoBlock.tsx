import Photo from "../Photo";

// The reference embeds a Vimeo player ("Power For Good - Anthem"). This clone shows a still with a
// play button instead of loading a third-party player; drop a poster frame at `poster` to fill it.
export default function VideoBlock({ title, poster }: { title: string; poster: string }) {
  return (
    <section className="bg-white px-6 pb-20 lg:pb-28">
      <div className="relative mx-auto aspect-video max-w-[1330px] overflow-hidden bg-[#3b4a57]">
        <Photo src={poster} label={title} className="absolute inset-0 bg-[#3b4a57]" />
        <span className="absolute top-4 left-4 bg-navy/90 px-3 py-1 text-[14px] font-bold text-lime">{title}</span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-[70px] w-[110px] items-center justify-center rounded-md bg-navy/90" aria-hidden>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="#fff">
              <path d="M0 0v30l26-15z" />
            </svg>
          </span>
        </span>
      </div>
    </section>
  );
}
