"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navMenu } from "@/lib/content";

type Props = {
  /** Home page: transparent over the hero until scroll. Inner pages: frosted from the start. */
  transparentAtTop?: boolean;
};

export default function Header({ transparentAtTop = true }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop dropdown
  const [mobileGroup, setMobileGroup] = useState<string | null>(null); // mobile accordion
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!openMenu) return;
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  // Close everything after navigating. Adjusting state during render (not in an effect)
  // is React's recommended pattern for "reset state when a value changes".
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const solid = scrolled || mobileOpen || openMenu !== null || !transparentAtTop;
  const bigLogo = transparentAtTop && !scrolled && !mobileOpen && openMenu === null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white/85 text-navy backdrop-blur-md" : "bg-transparent text-white"
      } ${
        // Inner pages on the reference have a 1px lime rule under the bar (home does not).
        transparentAtTop ? "" : "border-b border-lime"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <div className="relative flex h-[73px] items-stretch justify-between">
        {/* Logo is allowed to hang below the bar while large */}
        <Link href="/" className="relative z-10 flex items-start pt-[10px] pl-5" aria-label="Home">
          {/* eslint-disable-next-line @next/next/no-img-element -- static SVG logo */}
          <img
            src={solid ? "/assets/logo/power-navy.svg" : "/assets/logo/power-white.svg"}
            alt="Power"
            className={`w-auto transition-all duration-300 ${bigLogo ? "h-[78px]" : "h-[52px]"}`}
          />
        </Link>

        <nav ref={navRef} aria-label="Main" className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-stretch lg:flex">
          <ul className="flex items-stretch gap-10">
            {navMenu.map((group) => {
              const isOpen = openMenu === group.label;
              const id = `menu-${group.label.toLowerCase()}`;
              return (
                <li key={group.label} className="relative flex items-center">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpenMenu(isOpen ? null : group.label)}
                    className={`border-b-2 py-1 text-[13px] font-bold tracking-[3.5px] uppercase transition-colors ${
                      isOpen ? "border-lime" : "border-transparent hover:border-lime"
                    }`}
                  >
                    {group.label}
                  </button>

                  {/* Dropdown: white 300px panel flush with the bottom of the bar */}
                  <ul
                    id={id}
                    className={`absolute top-full -left-5 w-[300px] bg-white shadow-sm transition-all duration-200 ${
                      isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    {group.items
                      .filter((item) => !item.hidden)
                      .map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpenMenu(null)}
                            className="group flex items-center justify-between py-[18px] pr-6 pl-5 text-[20px] leading-[26px] text-navy transition-colors hover:bg-lime focus-visible:bg-lime"
                          >
                            {item.label}
                            <span aria-hidden className="text-[16px] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              );
            })}
            <li className="flex items-center">
              <button type="button" aria-label="Search" className="hover:opacity-70">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="6.5" cy="6.5" r="5.5" />
                  <path d="m10.5 10.5 4.5 4.5" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex">
          <Link
            href="#"
            className="hidden items-center bg-lime px-[26px] text-[13px] font-bold tracking-[3.5px] whitespace-nowrap text-navy uppercase transition-colors hover:bg-white md:flex lg:w-[221px] lg:justify-center"
          >
            Get a free quote
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex w-[73px] items-center justify-center lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${mobileOpen ? "top-2 rotate-45" : "top-0"}`} />
              <span className={`absolute top-2 left-0 h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${mobileOpen ? "top-2 -rotate-45" : "top-4"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile: each group is an accordion */}
      {mobileOpen && (
        <nav aria-label="Mobile" className="max-h-[calc(100vh-73px)] overflow-y-auto border-t border-navy/10 bg-white px-6 pb-8 lg:hidden">
          {navMenu.map((group) => {
            const isOpen = mobileGroup === group.label;
            return (
              <div key={group.label} className="border-b border-navy/10">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setMobileGroup(isOpen ? null : group.label)}
                  className="flex w-full items-center justify-between py-4 text-[20px] text-navy"
                >
                  {group.label}
                  <span aria-hidden className="text-[22px] font-light">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <ul className="pb-3">
                    {group.items
                      .filter((item) => !item.hidden)
                      .map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="block py-2 pl-4 text-[16px] text-navy hover:bg-lime">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            );
          })}
          <Link href="#" className="mt-6 block bg-lime py-4 text-center text-[13px] font-bold tracking-[3.5px] text-navy uppercase">
            Get a free quote
          </Link>
        </nav>
      )}
    </header>
  );
}
