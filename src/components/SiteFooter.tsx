"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Artists", href: "/artists" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

const infoTiles = [
  {
    title: "Location",
    value: "RPD cross, Belagavi, Karnataka",
    icon: "📍",
  },
  {
    title: "Contact",
    value: "+91 99161 73301",
    icon: "📞",
    href: "tel:+919916173301",
  },
  {
    title: "Mail",
    value: "contact@new2utattoo.com",
    icon: "✉️",
    mailto: "contact@new2utattoo.com?subject=Tattoo%20Booking%20Enquiry",
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_40%)]" />
      </div>

      <div className="container-premium relative z-10 py-16">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-[10px] uppercase tracking-[0.45em] text-zinc-500"
            >
              Premium Tattoo & Piercing Studio
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-5"
            >
              <Image
                src="/logo.png"
                alt="NEW 2 U Logo"
                width={260}
                height={90}
                priority
                className="h-auto w-[150px] sm:w-[200px] md:w-[230px] object-contain"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 max-w-2xl text-[17px] leading-9 text-zinc-200 sm:text-[18px]"
            >
              Not just a tattoo studio — a place where your ideas, emotions, memories,
              and identity are transformed into premium body art. From realism and portraits
              to custom concepts and piercing, every session is designed to feel personal,
              powerful, and unforgettable.
            </motion.p>

            <div className="mt-10">
              <Link
                href="/booking"
                className="group relative inline-flex min-h-[56px] items-center justify-center overflow-hidden rounded-full border border-white/15 px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:scale-[1.03] hover:border-[var(--primary)]"
              >
                <span className="absolute inset-0 translate-y-full bg-[var(--primary)] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Book Appointment
                </span>
              </Link>
            </div>

            {/* Instagram Button Below Booking */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-5"
            >
              <a
                href="https://instagram.com/new_2_u_tattoomaker"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 backdrop-blur-xl transition-all duration-500 hover:scale-[1.07] hover:border-[var(--primary)] hover:shadow-[0_0_35px_rgba(0,255,255,0.18)]"
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_65%)]" />
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] transition-transform duration-1000 group-hover:translate-x-[120%]" />

                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg transition-all duration-500 group-hover:rotate-[18deg] group-hover:scale-125 group-hover:border-[var(--primary)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.25)]">
                  📷
                </span>

                <div className="relative z-10 flex flex-col leading-none">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500 transition-all duration-300 group-hover:text-zinc-300">
                    Follow Us
                  </span>
                  <span className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-200 transition-all duration-300 group-hover:text-[var(--primary)] group-hover:tracking-[0.22em]">
                    Instagram
                  </span>
                </div>
              </a>
            </motion.div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4">
              {infoTiles.map((item, i) => {
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-125">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                        {item.title}
                      </p>
                      <p className="mt-2 break-all text-sm text-zinc-200 sm:text-[15px]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={`info-${item.title}-${i}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: i * 0.08 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group block rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.05] hover:border-cyan-300"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.05] hover:border-cyan-300">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.42em] text-zinc-500">
                Quick Links
              </p>

              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                {quickLinks.map((item, i) => (
                  <Link
                    key={`footer-link-${item.label}-${i}`}
                    href={item.href}
                    className="group relative inline-flex w-fit text-sm uppercase tracking-[0.18em] text-zinc-200 transition-all duration-300 hover:-translate-y-[2px] hover:text-[var(--primary)]"
                  >
                    <span>{item.label}</span>
                    <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Copyright */}
        <div className="mt-14 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-zinc-600">
          © {new Date().getFullYear()} NEW 2 U Tattoo Studio. All rights reserved.
        </div>

        {/* Brandzo Bottom CTA */}
        <div className="mt-6 border-t border-white/10 pt-5 text-center">
          <a
            href="https://wa.me/917624815112?text=Hi%20Brandzo%20Hub%2C%20I%20want%20a%20premium%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-wrap items-center justify-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zinc-500 transition-all duration-300 hover:text-white"
          >
            <span>Want a premium website like this?</span>
            <span className="text-zinc-700">|</span>
            <span className="relative font-semibold text-zinc-300 transition-all duration-300 group-hover:text-[var(--primary)]">
              Contact Brandzo Hub
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}