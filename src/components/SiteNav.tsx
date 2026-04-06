"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Artists", href: "/artists" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mobilePanelRef.current) return;

    if (mobileOpen) {
      gsap.fromTo(
        mobilePanelRef.current,
        { opacity: 0, y: -20, scale: 0.98, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.55,
          ease: "power4.out",
        }
      );
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1200] backdrop-blur-2xl bg-black/30 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="container-premium flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="NEW 2 U Logo"
              width={170}
              height={55}
              priority
              className="h-auto w-[125px] sm:w-[150px] md:w-[175px] object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-zinc-300">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="premium-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/booking"
              className="group relative magnetic-btn inline-flex items-center gap-2 overflow-hidden rounded-full border border-[rgba(142,247,231,0.45)] bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-[0_0_0_1px_rgba(142,247,231,0.12),0_0_18px_rgba(142,247,231,0.14)] transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_0_1px_rgba(142,247,231,0.38),0_0_26px_rgba(142,247,231,0.28)]"
            >
              <span className="absolute inset-x-0 bottom-0 h-0 bg-[var(--primary)] transition-all duration-500 ease-out group-hover:h-full" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                Book Now <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-3 text-white backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          ref={mobilePanelRef}
          className="fixed inset-x-0 top-20 z-[1190] md:hidden px-4"
        >
          <div className="container-premium">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-black/78 p-5 backdrop-blur-[34px] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              {/* liquid glass glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(142,247,231,0.06),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />

              {/* subtle top shine */}
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="relative flex flex-col gap-5 text-sm uppercase tracking-[0.18em] text-zinc-300">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`border-b border-white/6 pb-4 transition ${
                      item.label === "Booking"
                        ? "text-[var(--primary)]"
                        : "hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black"
                >
                  Start Booking <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}