"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#cost", label: "قیمت تمام‌شده" },
  { href: "#features", label: "امکانات" },
  { href: "#extras", label: "امکانات بیشتر" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="text-xl font-black tracking-tight text-[var(--ink)]">
          بندو
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[var(--ink-soft)] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#features"
          className="rounded-md bg-[var(--ink)] px-3.5 py-2 text-sm font-medium text-[var(--paper)] transition hover:bg-[var(--accent)]"
        >
          امکانات
        </a>
      </div>
    </header>
  );
}
