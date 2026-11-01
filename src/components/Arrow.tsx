// Thin-line arrow inside a white square - used by both sliders.
type Props = { dir: "left" | "right"; onClick: () => void; className?: string; label: string };

export default function Arrow({ dir, onClick, className = "", label }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex h-[66px] w-[66px] items-center justify-center bg-white text-navy transition-opacity hover:opacity-80 ${className}`}
    >
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        {dir === "left" ? <path d="M39 12H2M12 1 1 12l11 11" /> : <path d="M1 12h37M28 1l11 11-11 11" />}
      </svg>
    </button>
  );
}
