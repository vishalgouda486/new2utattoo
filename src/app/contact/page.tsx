"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function ContactPage() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const blur = document.getElementById("cursor-blur");

    const isTouch =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || "ontouchstart" in window);

    const move = (e: MouseEvent) => {
      if (!isTouch && cursor && blur) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        blur.style.left = `${e.clientX}px`;
        blur.style.top = `${e.clientY}px`;
      }
    };

    const addHover = () => {
      cursor?.classList.add("cursor-grow");
      blur?.classList.add("cursor-blur-grow");
    };

    const removeHover = () => {
      cursor?.classList.remove("cursor-grow");
      blur?.classList.remove("cursor-blur-grow");
    };

    if (!isTouch) {
      document.addEventListener("mousemove", move);
    }

    const elements = document.querySelectorAll("a, button, .glass, iframe");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden noise">
      <FloatingWhatsApp />
      <SiteNav />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,214,0.08),transparent_35%)]" />
        <div className="container-premium relative z-10 py-12 sm:py-14 md:py-24">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            {/* LEFT */}
            <div className="order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-zinc-500"
              >
                Reach The Studio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9 }}
                className="mt-4 sm:mt-5 font-sync text-[2.3rem] uppercase leading-[0.96] sm:text-6xl md:text-7xl"
              >
                Contact
                <span className="gradient-text block">NEW 2 U</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.08 }}
                className="mt-5 sm:mt-6 max-w-3xl text-[15px] leading-7 text-zinc-300 sm:text-base sm:leading-8 md:text-lg"
              >
                Whether you want to enquire about a tattoo, piercing, consultation, or artist selection,
                this page helps you reach the studio quickly and confidently.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.15 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <a
                  href="https://wa.me/919916173301?text=Hi%20NEW%202%20U%20Tattoo%20Studio%2C%20I%20want%20to%20enquire."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn premium-btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-black hover:bg-[var(--primary)]"
                >
                  Chat on WhatsApp <ArrowRight size={16} />
                </a>

                <Link
                  href="/booking"
                  className="premium-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 sm:px-8 py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>

            {/* RIGHT BIG IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="order-1 lg:order-2 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] min-h-[240px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[420px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-[center_22%] transition duration-700 hover:scale-105"
                style={{
                  backgroundImage: "url('/home/contact/1.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.35em] text-zinc-300">
                  Studio Exterior
                </p>
                <h3 className="mt-3 font-sync text-[1.7rem] uppercase leading-tight sm:text-3xl md:text-4xl">
                  Find The Studio
                  <span className="gradient-text block">Easily</span>
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP + SIMPLE INFO */}
      <section className="section-spacing relative z-10">
        <div className="container-premium grid gap-8 md:gap-10 lg:grid-cols-[1.08fr_0.92fr] items-start">
          {/* MAP */}
          <div className="glass rounded-[2rem] overflow-hidden border border-white/10">
            <div className="p-5 sm:p-6 md:p-8 border-b border-white/10">
              <div className="flex items-start sm:items-center gap-3">
                <MapPin className="text-[var(--primary)] mt-1 sm:mt-0 shrink-0" />
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.35em] text-zinc-500">
                    Studio Location
                  </p>
                  <h2 className="mt-2 font-sync text-[1.55rem] uppercase leading-tight sm:text-3xl">
                    Visit NEW 2 U Tattoo Studio
                  </h2>
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-[14px] sm:text-base text-zinc-400 leading-7 sm:leading-8">
                Prefer visiting the studio before booking? Use the map below to find the location easily.
              </p>
            </div>

            <div className="h-[320px] sm:h-[380px] md:h-[420px] w-full">
              <iframe
                title="NEW 2 U Tattoo Studio Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1613.8555674399202!2d74.5040105020208!3d15.834663338288031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf6684098ea88f%3A0x883f8551283779b9!2sNew%202U%20Tattoo%20Maker!5e0!3m2!1sen!2sin!4v1775365110241!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>

          {/* RIGHT SIDE CLEAN BLOCK */}
          <div className="grid gap-5">
            <div className="glass rounded-[2rem] p-5 sm:p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Clock3 className="text-[var(--primary)] mt-1 shrink-0" />
                <div>
                  <p className="text-[11px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-zinc-300">
                    Working Hours
                  </p>
                  <p className="mt-3 text-[14px] sm:text-base text-zinc-400 leading-7 sm:leading-8">
                    11:00 AM to 10:00 PM
                    <br />
                    Open Everyday
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-[2rem] p-5 sm:p-6 md:p-8">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.35em] text-zinc-500">
                Quick Booking
              </p>
              <h3 className="mt-4 font-sync text-[1.7rem] uppercase leading-tight sm:text-3xl">
                Book On
                <span className="gradient-text block">WhatsApp</span>
              </h3>

              <p className="mt-5 text-[14px] sm:text-base text-zinc-400 leading-7 sm:leading-8">
                For fastest response, bookings and enquiries are best handled directly on WhatsApp.
              </p>

              <div className="mt-8">
                <a
                  href="https://wa.me/919916173301?text=Hi%20NEW%202%20U%20Tattoo%20Studio%2C%20I%20want%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-black transition hover:scale-105"
                >
                  <MessageCircle size={16} />
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}