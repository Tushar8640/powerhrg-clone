import Photo from "./Photo";
import Reveal from "./Reveal";
import { awards } from "@/lib/content";

export default function Awards() {
  return (
    <section className="bg-sky-soft py-20 lg:py-36">
      <Reveal className="mx-auto max-w-[1300px] px-6 text-center">
        <h2 className="text-[28px] font-light tracking-[4px] text-navy uppercase lg:text-[40px] lg:tracking-[5px]">
          High standards come standard
        </h2>
        <ul className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-5">
          {awards.map((a) => (
            <li key={a.image} className="flex flex-col items-center">
              <Photo src={a.image} contain label={a.label.join(" ")} className="h-[145px] w-[145px]" />
              <p className="mt-5 text-[12px] leading-[20px] font-bold tracking-[2.4px] text-navy uppercase">
                {a.label.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
