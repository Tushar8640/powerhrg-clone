import Reveal from "./Reveal";

// Centred heading + paragraph used to open a block ("Our programs").
export default function SectionIntro({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-white px-6 py-16 text-center text-navy lg:py-24">
      <Reveal>
        <h2 className="text-[34px] font-light tracking-[8px] uppercase lg:text-[63px] lg:tracking-[15px]">{title}</h2>
        <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-[26px] lg:text-[20px] lg:leading-[30px]">{text}</p>
      </Reveal>
    </section>
  );
}
