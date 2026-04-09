"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Eye,
  Star,
  Camera,
  PenTool,
  X,
} from "lucide-react";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: "portfolio-4",
    title: "Mandala Geometry",
    subtitle: "Symmetry • Balance • Structure",
    img: "/portfolio/work-4.jpg",
    icon: PenTool,
    desc: "Precise structure and body flow designed for clean long-term visual appeal.",
    tag: "Geometric",
  },
  {
    id: "portfolio-5",
    title: "Color Story Piece",
    subtitle: "Color • Depth • Contrast",
    img: "/portfolio/work-5.jpg",
    icon: Camera,
    desc: "Designed to create a more alive and expressive tattoo presence on skin.",
    tag: "Color Work",
  },
  {
    id: "portfolio-6",
    title: "Minimal Symbolism",
    subtitle: "Subtle • Personal • Timeless",
    img: "/portfolio/work-6.jpg",
    icon: Star,
    desc: "Small, intentional tattoos that carry personal meaning without visual noise.",
    tag: "Micro Tattoo",
  },
];

const galleryImages = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/6.jpg",
  "/portfolio/7.jpg",
  "/portfolio/8.jpg",
  "/portfolio/9.jpg",
  "/portfolio/10.jpg",
  "/portfolio/11.jpg",
  "/portfolio/12.jpg",
  "/portfolio/13.jpg",
];

const portfolioPoints = [
  "Every tattoo should feel intentional, not randomly placed.",
  "Good tattoo work is not only about design — it’s about body flow, contrast, and permanence.",
  "A strong portfolio helps you trust the artist and choose with confidence.",
  "This page exists to show the standard of work and style direction NEW 2 U stands for.",
];

export default function PortfolioPage() {
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const blur = document.getElementById("cursor-blur");
    const isTouch =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || "ontouchstart" in window);

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const move = (e: MouseEvent) => {
      if (cursor && blur && !isTouch) {
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

    const elements = document.querySelectorAll(
      "a, button, .glass, .portfolio-card, .tilt-3d, .gallery-card, .zoomable-media"
    );
    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    gsap.fromTo(
      ".portfolio-reveal",
      { opacity: 0, y: 80, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
      }
    );

    document.querySelectorAll(".tilt-3d").forEach((card) => {
      const el = card as HTMLElement;

      const onMove = (e: MouseEvent) => {
        if (window.innerWidth < 1024) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateX = (y - 0.5) * 10;
        const rotateY = (x - 0.5) * -10;

        gsap.to(el, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          transformOrigin: "center",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    });

if (isTouch) {
  const mobileImages = gsap.utils.toArray<HTMLElement>(".mobile-scroll-reveal");

  mobileImages.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 75%",
      end: "bottom 25%",
      invalidateOnRefresh: true,

      onUpdate: (self) => {
        // center zone logic (not just enter/leave)
        if (self.progress > 0.35 && self.progress < 0.65) {
          el.classList.add("is-active");
        } else {
          el.classList.remove("is-active");
        }
      },
    });
  });

  ScrollTrigger.refresh();
}

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      if (!isTouch) {
        document.removeEventListener("mousemove", move);
      }

      document.removeEventListener("keydown", onKeyDown);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <main className="min-h-screen bg-black text-white overflow-hidden noise relative">
        <FloatingWhatsApp />
        <SiteNav />

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
          <div className="absolute bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-[130px]" />
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,214,0.08),transparent_35%)]" />
          <div className="container-premium py-14 md:py-24 relative z-10">
            <p className="portfolio-reveal text-[10px] sm:text-xs uppercase tracking-[0.38em] sm:tracking-[0.45em] text-zinc-500">
              Featured Work
            </p>
            <h1 className="portfolio-reveal mt-5 font-sync text-[2.35rem] uppercase leading-[0.94] sm:text-6xl md:text-7xl">
              Portfolio Of
              <span className="outline-text block">Skin Stories</span>
            </h1>

            <p className="portfolio-reveal mt-7 max-w-3xl text-[15px] leading-7 text-zinc-300 md:text-lg md:leading-8">
              This is where artistic intent, placement flow, style direction, and visual craftsmanship come together.
            </p>

            <p className="portfolio-reveal mt-4 max-w-3xl text-[15px] leading-7 text-zinc-500 md:text-lg md:leading-8">
              If you want to see what premium tattoo composition can feel like before you book,
              this portfolio is built to give you that confidence.
            </p>

            <div className="portfolio-reveal mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                href="/booking"
                className="magnetic-btn premium-btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-black hover:bg-[var(--primary)]"
              >
                Book Consultation <ArrowRight size={16} />
              </Link>

              <Link
                href="/artists"
                className="premium-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 sm:px-8 py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Meet Artists
              </Link>
            </div>
          </div>
        </section>

        {/* REEL STYLE STACK - KEPT SAME */}
        <section className="container-premium py-12 md:py-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.38em] sm:tracking-[0.45em] text-zinc-500">
                More Featured Work
              </p>
              <h2 className="mt-4 font-sync text-[2rem] uppercase sm:text-5xl">
                Scroll Through
                <span className="gradient-text block">Tattoo Frames</span>
              </h2>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {works.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.95, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40"
                >
                  <div className="relative h-[64vh] min-h-[420px] max-h-[760px] overflow-hidden sm:h-[70vh] sm:min-h-[500px]">

                    {item.id === "portfolio-5" ? (
                      <div
                        className="absolute inset-0 flex items-center justify-center overflow-hidden cursor-pointer zoomable-media"
                        onClick={() => setSelectedImage(item.img)}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          suppressHydrationWarning
                          className="mobile-scroll-reveal mobile-image-fx grayscale brightness-[0.42] transition duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-[0.96] group-hover:scale-[1.18] w-full h-full object-contain scale-[2.05] md:scale-[1.05] rotate-90 md:rotate-0"
                        />
                      </div>
                    ) : item.id === "portfolio-6" ? (
                      <div
                        className="absolute inset-0 flex items-center justify-center overflow-hidden cursor-pointer zoomable-media"
                        onClick={() => setSelectedImage(item.img)}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          suppressHydrationWarning
                          className="mobile-scroll-reveal mobile-image-fx grayscale brightness-[0.42] transition duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-[0.96] group-hover:scale-[1.25] w-full h-full object-contain scale-[1.55] md:scale-[1.20] rotate-90 md:rotate-0"
                        />
                      </div>
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.42] transition duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-[0.96] mobile-scroll-reveal mobile-image-fx cursor-pointer zoomable-media"
                        style={{ backgroundImage: `url(${item.img})` }}
                        onClick={() => setSelectedImage(item.img)}
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3.5 sm:px-4 py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.35em] text-zinc-300 backdrop-blur-md">
                      <Icon size={16} />
                      {item.tag}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10">
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.35em] text-zinc-400">
                        {item.subtitle}
                      </p>
                      <h2 className="mt-3 font-sync text-[1.8rem] uppercase leading-tight sm:text-5xl">
                        {item.title}
                      </h2>
                      <p className="mt-4 sm:mt-5 max-w-2xl text-[14px] sm:text-base text-zinc-300 leading-7 sm:leading-8">
                        {item.desc}
                      </p>
                      <Link
                        href="/booking"
                        className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[var(--primary)]"
                      >
                        Book This Style <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 13 PLACEHOLDER IMAGES */}
        <section className="container-premium pb-16 md:pb-20">
          <div className="columns-2 gap-3 sm:columns-2 md:columns-3 xl:columns-4 sm:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={`gallery-${i}`}
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.8, delay: i * 0.03 }}
                className="gallery-card group relative mb-3 break-inside-avoid overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/40 sm:mb-4 cursor-pointer zoomable-media"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Tattoo work ${i + 1}`}
                  className="mobile-scroll-reveal mobile-image-fx block h-auto w-full grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="section-spacing bg-white/[0.02]">
          <div className="container-premium grid gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.38em] sm:tracking-[0.45em] text-zinc-500">
                Why Portfolio Matters
              </p>
              <h2 className="mt-5 font-sync text-[2rem] uppercase leading-tight sm:text-5xl">
                Great Tattoos Start With
                <span className="gradient-text block">Visual Trust</span>
              </h2>

              <p className="mt-7 sm:mt-8 text-[15px] sm:text-base text-zinc-300 leading-7 sm:leading-8">
                A tattoo is permanent. So before you book, you need to feel sure the artist and studio
                can create something that feels aligned with your style, identity, and long-term confidence.
              </p>

              <div className="mt-8 sm:mt-10 grid gap-4">
                {portfolioPoints.map((item, i) => (
                  <div key={`portfolio-point-${i}`} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 text-[var(--primary)] shrink-0" size={18} />
                    <p className="text-[14px] sm:text-base text-zinc-300 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[2rem] p-5 sm:p-6">
              <div className="grid gap-4">
                {[
                  {
                    icon: Sparkles,
                    title: "Artist-Led Work",
                    desc: "Designed with intention, not rushed trends or generic copy-paste work.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Premium Execution",
                    desc: "The goal is not just a tattoo — but a result that still feels powerful years later.",
                  },
                  {
                    icon: Eye,
                    title: "Visual Confidence",
                    desc: "A strong portfolio helps you know what you’re saying yes to before you commit.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`portfolio-card-info-${i}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:scale-[1.02]"
                    >
                      <Icon className="text-[var(--primary)]" />
                      <h3 className="mt-4 font-sync text-[1rem] sm:text-lg uppercase">{item.title}</h3>
                      <p className="mt-3 text-[14px] sm:text-base text-zinc-400 leading-7">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing">
          <div className="container-premium">
            <div className="glass glow-red rounded-[2rem] p-6 sm:p-8 md:p-12">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.38em] sm:tracking-[0.45em] text-zinc-500">
                Ready For Your Own Piece?
              </p>
              <h2 className="mt-5 font-sync text-[2rem] uppercase leading-tight sm:text-5xl">
                Let’s Build Something
                <span className="outline-text block">Worth Wearing Forever</span>
              </h2>

              <p className="mt-6 max-w-3xl text-[15px] sm:text-base text-zinc-300 leading-7 sm:leading-8">
                If you want a tattoo that feels personal, visually powerful, and properly thought through,
                the next step is simple — book your consultation.
              </p>

              <div className="mt-8">
                <Link
                  href="/booking"
                  className="magnetic-btn premium-btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-black hover:bg-[var(--primary)]"
                >
                  Book Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>

      {/* IMAGE POPUP */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[99999] bg-black/88 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md"
            >
              <X size={20} />
            </motion.button>

            <motion.img
              src={selectedImage}
              alt="Expanded tattoo work"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="popup-media-color max-h-[88vh] w-auto max-w-[95vw] rounded-[1.6rem] border border-white/10 object-contain shadow-[0_25px_100px_rgba(0,0,0,0.55)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}