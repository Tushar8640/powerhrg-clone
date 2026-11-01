export default function EeoPolicy({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-white px-6 pt-6 pb-20 text-ink">
      <div className="mx-auto max-w-[790px]">
        <p className="text-[13px] uppercase">{title}</p>
        <p className="mt-4 text-[11px] leading-[17px]">{text}</p>
      </div>
    </section>
  );
}
