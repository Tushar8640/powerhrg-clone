import Reveal from "../Reveal";
import { testimonial as defaultTestimonial } from "@/lib/services-content";

type Props = {
  quote?: string;
  name?: string;
  caption?: string;
  link?: { label: string; href: string } | null;
};

export default function Testimonial({
  quote = defaultTestimonial.quote,
  name = defaultTestimonial.name,
  caption = defaultTestimonial.caption,
  link = { label: "View homeowner stories", href: "#" },
}: Props) {
  return (
    <section className="bg-[#e0e0e0] py-20 text-navy lg:py-24">
      <Reveal className="mx-auto max-w-[1150px] px-6">
        {link && (
          <a href={link.href} className="link-underline mb-14">
            {link.label}
          </a>
        )}
        <blockquote className="-indent-[0.4em] text-[28px] leading-[1.4] font-light lg:text-[47px] lg:leading-[1.3]">“{quote}“</blockquote>
        <p className="mt-8 text-[13px] font-bold tracking-[2.8px] uppercase">{name}</p>
        <p className="mt-2 text-[11px] lg:text-[14px]">{caption}</p>
      </Reveal>
    </section>
  );
}
