import Reveal from "../Reveal";

// Public media-relations contact, as published on the reference page.
export default function PressContacts({ phone, email }: { phone: string; email: string }) {
  return (
    <section className="bg-white py-16 text-navy lg:py-24">
      <Reveal className="mx-auto max-w-[1150px] px-6">
        <h2 className="text-[30px] font-light tracking-[4px] uppercase lg:text-[47px] lg:tracking-card">Press contacts</h2>
        <a href={`tel:${phone.replace(/\D/g, "")}`} className="mt-8 block w-fit border-b border-navy text-[18px] lg:text-[20px]">
          {phone}
        </a>
        <a href={`mailto:${email}`} className="mt-5 block w-fit border-b border-navy text-[18px] lg:text-[20px]">
          {email}
        </a>
      </Reveal>
    </section>
  );
}
