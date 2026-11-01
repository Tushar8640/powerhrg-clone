import Reveal from "../Reveal";
import { testimonial } from "@/lib/services-content";

export default function Testimonial() {
  return (
    <section className="bg-[#e0e0e0] py-20 text-navy lg:py-24">
      <Reveal className="mx-auto max-w-[1150px] px-6">
        <a href="#" className="link-underline">
          View homeowner stories
        </a>
        <blockquote className="mt-14 -indent-[0.4em] text-[28px] leading-[1.4] font-light lg:text-[47px] lg:leading-[1.3]">
          “{testimonial.quote}“
        </blockquote>
        <p className="mt-8 text-[13px] font-bold tracking-[2.8px] uppercase">{testimonial.name}</p>
        <p className="mt-2 text-[11px] lg:text-[14px]">{testimonial.caption}</p>
      </Reveal>
    </section>
  );
}
