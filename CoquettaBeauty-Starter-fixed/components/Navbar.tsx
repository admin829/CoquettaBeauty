"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/80 backdrop-blur border-b border-[var(--border)]">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          {site.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:underline underline-offset-4">
              {item.label}
            </Link>
          ))}
          <Link href="/shop" className="text-sm rounded-full bg-black text-white px-4 py-2">
            Shop
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[var(--border)] px-3 py-2"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <div className={clsx("md:hidden border-t border-[var(--border)]", open ? "block" : "hidden")}>
        <div className="container py-3 flex flex-col gap-3">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
