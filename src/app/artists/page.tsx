"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Award,
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Eye,
  PenTool,
  BadgeCheck,
  Play,
} from "lucide-react";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

gsap.registerPlugin(ScrollTrigger);

type MediaItem = {
  type: "image" | "video";
  src: string;
};

const artists = [
  {
    id: "artist-1",
    slug: "snehal",
    name: "Snehal Choudhari",
    title: "Founder • Lead Artist • Academy Mentor",
    role: "16+ Years • Multi-Award Winner • Certified Artist",
    years: "16+ Years",
    specialty: [
      "All-Rounder",
      "Color Piece",
      "Portraits",
      "Hyper Realistic",
      "Large Piece Tattoos",
    ],
    insta: "@choudharisnehal",
    instaUrl: "https://instagram.com/choudharisnehal",
    desc: "Snehal Choudhari is the founder and driving force behind NEW 2 U Tattoo Studio. With 16+ years of experience in the tattoo industry, he is known for premium realism, large-scale compositions, portraits, hyper-detailed color work, and statement tattoo pieces. He has trained 15+ students who have gone on to become successful tattoo artists and also runs a dedicated tattoo academy.",
    bestFor:
      "Best for clients looking for premium realism, portraits, bold large tattoos, color storytelling pieces, and high-detail custom body art.",
    image: "/artists/snehal/cover.jpg",
    workMedia: [
      { type: "image", src: "/artists/snehal/1.jpg" },
      { type: "image", src: "/artists/snehal/2.jpg" },
      { type: "image", src: "/artists/snehal/3.jpg" },
      { type: "image", src: "/artists/snehal/4.jpg" },
      { type: "image", src: "/artists/snehal/5.jpg" },
      { type: "image", src: "/artists/snehal/6.jpg" },
      { type: "image", src: "/artists/snehal/7.jpg" },
      { type: "image", src: "/artists/snehal/8.jpg" },
      { type: "image", src: "/artists/snehal/9.jpg" },
      { type: "image", src: "/artists/snehal/10.jpg" },
      { type: "image", src: "/artists/snehal/11.jpg" },
      { type: "image", src: "/artists/snehal/12.jpg" },
    ] as MediaItem[],
  },

  {
    id: "artist-2",
    slug: "mahesh",
    name: "Mahesh Rajendra Gunaki",
    title: "Senior Tattoo Artist",
    role: "8+ Years • Multi-Award Winner",
    years: "8+ Years",
    specialty: ["Realism", "Miniature Work", "Tribal", "All-Rounder"],
    insta: "@art_love_mayu",
    instaUrl: "https://instagram.com/art_love_mayu",
    desc: "Mahesh Rajendra Gunaki brings 8+ years of experience and is known for realism, miniature detailing, tribal execution, and versatile all-round tattooing. He is also a multi-award winner and trusted by clients seeking premium and balanced body art.",
    bestFor:
      "Best for realism, miniature work, tribal tattoos, and premium all-round custom tattooing.",
    image: "/artists/mahesh/cover.jpg",
    workMedia: [
      { type: "image", src: "/artists/mahesh/1.jpg" },
      { type: "image", src: "/artists/mahesh/2.jpg" },
      { type: "image", src: "/artists/mahesh/3.jpg" },
      { type: "image", src: "/artists/mahesh/4.jpg" },
      { type: "image", src: "/artists/mahesh/5.jpg" },
      { type: "image", src: "/artists/mahesh/6.jpg" },
      { type: "image", src: "/artists/mahesh/7.jpg" },
      { type: "image", src: "/artists/mahesh/8.jpg" },
      { type: "image", src: "/artists/mahesh/9.jpg" },
    ] as MediaItem[],
  },

  {
    id: "artist-3",
    slug: "akshay",
    name: "Akshay Kumar Pawale",
    title: "Tattoo Artist",
    role: "4+ Years In Tattoo Industry",
    years: "4+ Years",
    specialty: ["Portrait", "Geometric", "Mandala", "Big Portraits"],
    insta: "@ak_ink_tattoo_63",
    instaUrl: "https://instagram.com/ak_ink_tattoo_63",
    desc: "Akshay Kumar Pawale has 4+ years of tattoo industry experience and is known for portrait work, geometric compositions, mandala structures, and larger visual tattoo pieces. His work is ideal for clients who want bold symmetry and premium composition.",
    bestFor:
      "Best for portrait tattoos, mandala tattoos, geometric structure, and larger statement tattoo concepts.",
    image: "/artists/akshay/cover.jpg",
    workMedia: [
      { type: "image", src: "/artists/akshay/1.jpg" },
      { type: "image", src: "/artists/akshay/2.jpg" },
      { type: "image", src: "/artists/akshay/3.jpg" },
      { type: "image", src: "/artists/akshay/4.jpg" },
      { type: "image", src: "/artists/akshay/5.jpg" },
      { type: "image", src: "/artists/akshay/6.jpg" },
    ] as MediaItem[],
  },

  {
    id: "artist-4",
    slug: "ganesh",
    name: "Ganesh M. Lohar",
    title: "Tattoo Artist",
    role: "4+ Years In Tattoo Industry",
    years: "4+ Years",
    specialty: ["Tribal", "Minimal", "Geometric"],
    insta: "@just_ink_it_with_gani",
    instaUrl: "https://instagram.com/just_ink_it_with_gani",
    desc: "Ganesh M. Lohar brings 4+ years of tattoo industry experience and is especially strong in tribal patterns, geometric body art, and minimal tattoos. His work is clean, balanced, modern, and ideal for clients who want sharp visual impact with a structured premium look.",
    bestFor:
      "Best for clients wanting tribal direction, geometric structure, minimal tattoos, and clean modern body art.",
    image: "/artists/ganesh/cover.jpg",
    workMedia: [
      { type: "image", src: "/artists/ganesh/1.jpg" },
      { type: "image", src: "/artists/ganesh/2.jpg" },
      { type: "image", src: "/artists/ganesh/3.jpg" },
      { type: "image", src: "/artists/ganesh/4.jpg" },
      { type: "image", src: "/artists/ganesh/5.jpg" },
      { type: "image", src: "/artists/ganesh/6.jpg" },
    ] as MediaItem[],
  },

  {
    id: "artist-5",
    slug: "rupesh",
    name: "Rupesh S. Nalathati",
    title: "Tattoo Artist",
    role: "3+ Years In Tattoo Industry",
    years: "3+ Years",
    specialty: ["Tribal", "Minimal", "Geometric"],
    insta: "@rxpps_03",
    instaUrl: "https://instagram.com/rxpps_03",
    desc: "Rupesh S. Nalathati is a detail-focused tattoo artist with 3+ years of experience. His strengths lie in clean tribal direction, minimal body art, and geometric compositions, making him a strong fit for modern, wearable, and subtle premium tattoo work.",
    bestFor:
      "Best for clients looking for modern minimal tattoos, tribal body flow, and geometric structure.",
    image: "/artists/rupesh/cover.jpg",
    workMedia: [
      { type: "image", src: "/artists/rupesh/1.jpg" },
      { type: "image", src: "/artists/rupesh/2.jpg" },
      { type: "image", src: "/artists/rupesh/3.jpg" },
      { type: "image", src: "/artists/rupesh/4.jpg" },
      { type: "image", src: "/artists/rupesh/5.jpg" },
      { type: "image", src: "/artists/rupesh/6.jpg" },
      { type: "image", src: "/artists/rupesh/7.jpg" },
      { type: "image", src: "/artists/rupesh/8.jpg" },
      { type: "image", src: "/artists/rupesh/9.jpg" },
    ] as MediaItem[],
  },
];

const artistTrust = [
  "Choose an artist based on style match, not only availability.",
  "Different artists naturally excel in different tattoo directions.",
  "The right artist fit improves both result and experience.",
  "This page is designed to help clients book with confidence.",
];

function WorkMediaCard({
  item,
  artistId,
  idx,
  isTouch,
}: {
  item: MediaItem;
  artistId: string;
  idx: number;
  isTouch: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleEnter = async () => {
    if (item.type === "video" && !isTouch && videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
      } catch {}
    }
  };

  const handleLeave = () => {
    if (item.type === "video" && !isTouch && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      key={`${artistId}-media-${idx}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="artist-work popup-hover group relative mb-3 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:mb-4"
    >
      {item.type === "image" ? (
        <img
          src={item.src}
          alt="Tattoo work"
          className="mobile-scroll-reveal mobile-image-fx block w-full grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          loading="lazy"
        />
      ) : (
        <div className="relative">
          <video
            ref={videoRef}
            src={item.src}
            muted
            loop
            playsInline
            autoPlay={isTouch}
            className="mobile-scroll-reveal mobile-video-fx block w-full grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          />
          {!isTouch && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border border-white/20 bg-black/45 p-3 backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:border-[var(--primary)]">
                <Play size={18} className="ml-0.5 text-white" fill="white" />
              </div>
            </div>
          )}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
}

export default function ArtistsPage() {
  const [activeArtist, setActiveArtist] = useState<(typeof artists)[0] | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchCheck =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || "ontouchstart" in window);

    setIsTouch(touchCheck);

    const cursor = document.getElementById("cursor");
    const blur = document.getElementById("cursor-blur");

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const move = (e: MouseEvent) => {
      if (cursor && blur && !touchCheck) {
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

    if (!touchCheck) {
      document.addEventListener("mousemove", move);
    }

    const bindHoverEvents = () => {
      const elements = document.querySelectorAll(
        "a, button, .glass, .artist-card, .artist-work, .popup-hover, .popup-image-hover"
      );
      elements.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
      return elements;
    };

    let elements = bindHoverEvents();

    gsap.fromTo(
      ".artist-reveal",
      { opacity: 0, y: 60, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
      }
    );

    if (touchCheck) {
      const mobileItems = gsap.utils.toArray<HTMLElement>(".mobile-scroll-reveal");

      mobileItems.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "center 70%",
          end: "center 30%",
          onEnter: () => el.classList.add("is-active"),
          onEnterBack: () => el.classList.add("is-active"),
          onLeave: () => el.classList.remove("is-active"),
          onLeaveBack: () => el.classList.remove("is-active"),
        });
      });
    }

    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      elements = bindHoverEvents();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (!touchCheck) {
        document.removeEventListener("mousemove", move);
      }

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });

      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (activeArtist) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeArtist]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white noise">
      <FloatingWhatsApp />
      <SiteNav />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,214,0.08),transparent_35%)]" />
        <div className="container-premium relative z-10 py-14 md:py-24">
          <p className="artist-reveal text-[10px] uppercase tracking-[0.38em] text-zinc-500 sm:text-xs sm:tracking-[0.45em]">
            Meet The Team
          </p>
          <h1 className="artist-reveal mt-5 font-sync text-[2.2rem] uppercase leading-tight sm:text-6xl md:text-7xl">
            Artists Of
            <span className="gradient-text block">NEW 2 U</span>
          </h1>

          <p className="artist-reveal mt-6 max-w-3xl text-[15px] leading-7 text-zinc-300 md:text-lg md:leading-8">
            Explore the artists behind NEW 2 U Tattoo Studio — each with their own style,
            strengths, experience, and tattoo direction.
          </p>

          <div className="artist-reveal mt-8 flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/booking"
              className="magnetic-btn premium-btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-black hover:bg-[var(--primary)] sm:px-8 sm:text-sm sm:tracking-[0.2em]"
            >
              Book Consultation <ArrowRight size={16} />
            </Link>

            <Link
              href="/portfolio"
              className="premium-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:border-[var(--primary)] hover:text-[var(--primary)] sm:px-8 sm:text-sm sm:tracking-[0.2em]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ARTIST GRID */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {artists.map((artist, i) => (
              <motion.button
                key={artist.id}
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{ duration: 0.85, delay: i * 0.05 }}
                onClick={() => setActiveArtist(artist)}
                className="artist-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] text-left transition-all duration-500 hover:scale-[1.02] hover:border-[var(--primary)]"
              >
                <div className="relative h-[340px] overflow-hidden sm:h-[360px]">
                  <div
                    className="mobile-scroll-reveal mobile-image-fx absolute inset-0 bg-cover bg-center grayscale brightness-[0.55] transition duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-[0.95]"
                    style={{ backgroundImage: `url(${artist.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3.5 py-2 text-[9px] uppercase tracking-[0.28em] text-zinc-300 backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:text-[10px] sm:tracking-[0.35em]">
                    {artist.years}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-400 sm:text-[10px] sm:tracking-[0.35em]">
                      {artist.specialty.slice(0, 3).join(" • ")}
                    </p>
                    <h2 className="mt-3 font-sync text-[1.35rem] uppercase sm:text-2xl">
                      {artist.name}
                    </h2>
                    <p className="mt-2 text-[13px] text-zinc-300 sm:text-sm">{artist.title}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 border-t border-white/10 bg-white/[0.02]">
                  <div className="p-3.5 text-center sm:p-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 sm:text-[10px] sm:tracking-[0.25em]">
                      Exp
                    </p>
                    <p className="mt-2 text-[13px] text-white sm:text-sm">{artist.years}</p>
                  </div>
                  <div className="border-x border-white/10 p-3.5 text-center sm:p-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 sm:text-[10px] sm:tracking-[0.25em]">
                      Works
                    </p>
                    <p className="mt-2 text-[13px] text-white sm:text-sm">
                      {artist.workMedia.length} Media
                    </p>
                  </div>
                  <div className="p-3.5 text-center sm:p-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 sm:text-[10px] sm:tracking-[0.25em]">
                      Insta
                    </p>
                    <p className="mt-2 truncate text-[13px] text-[var(--primary)] sm:text-sm">
                      {artist.insta}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ARTIST MATTERS */}
      <section className="section-spacing bg-white/[0.02]">
        <div className="container-premium grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.38em] text-zinc-500 sm:text-xs sm:tracking-[0.45em]">
              Why Artist Match Matters
            </p>
            <h2 className="mt-5 font-sync text-[2rem] uppercase leading-tight sm:text-5xl">
              Great Tattoos Need
              <span className="gradient-text block">The Right Artist Match</span>
            </h2>

            <p className="mt-7 text-[15px] leading-7 text-zinc-300 sm:mt-8 sm:text-base sm:leading-8">
              Tattooing is not just about ink. The right artist understands body flow,
              detailing, placement, style direction, and what will still look powerful over time.
            </p>

            <div className="mt-8 grid gap-4 sm:mt-10">
              {artistTrust.map((item, i) => (
                <div key={`artist-trust-${i}`} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-[var(--primary)]" size={18} />
                  <p className="text-[14px] leading-7 text-zinc-300 sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[2rem] p-5 sm:p-6">
            <div className="grid gap-4">
              {[
                {
                  icon: Sparkles,
                  title: "Style-Specific Strength",
                  desc: "Each artist naturally excels in different tattoo directions and visual moods.",
                },
                {
                  icon: Eye,
                  title: "Better Final Outcome",
                  desc: "Choosing the right artist increases confidence in the final tattoo result.",
                },
                {
                  icon: PenTool,
                  title: "Better Design Flow",
                  desc: "The right artist match improves the full process from concept to execution.",
                },
                {
                  icon: ShieldCheck,
                  title: "Premium Studio Confidence",
                  desc: "A transparent artist page builds trust and improves booking confidence.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`artist-info-${i}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:scale-[1.02]"
                  >
                    <Icon className="text-[var(--primary)]" />
                    <h3 className="mt-4 font-sync text-[1rem] uppercase sm:text-lg">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-7 text-zinc-400 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {activeArtist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/85 backdrop-blur-xl"
          >
            <div className="h-full overflow-y-auto">
              <div className="container-premium py-5 sm:py-10">
                <div className="sticky top-4 z-20 flex justify-end">
                  <button
                    onClick={() => setActiveArtist(null)}
                    className="popup-hover flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:scale-110 hover:border-[var(--primary)] sm:h-12 sm:w-12"
                  >
                    <X size={20} />
                  </button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 backdrop-blur-2xl"
                >
                  <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                    {/* LEFT IMAGE */}
                    <div className="popup-image-hover group relative min-h-[320px] overflow-hidden sm:min-h-[520px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center grayscale-0 scale-100 transition-all duration-700 ease-out md:grayscale md:group-hover:scale-105 md:group-hover:grayscale-0"
                        style={{ backgroundImage: `url(${activeArtist.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3.5 py-2 text-[9px] uppercase tracking-[0.28em] text-zinc-300 backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:text-[10px] sm:tracking-[0.35em]">
                        {activeArtist.years}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                        <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-400 sm:text-[10px] sm:tracking-[0.35em]">
                          {activeArtist.specialty.join(" • ")}
                        </p>
                        <h2 className="mt-3 font-sync text-[2rem] uppercase leading-tight sm:text-5xl">
                          {activeArtist.name}
                        </h2>
                        <p className="mt-2 text-[13px] text-zinc-300 sm:text-base">
                          {activeArtist.title}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="p-5 sm:p-8 md:p-10">
                      <div className="flex flex-wrap gap-3">
                        <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[9px] uppercase tracking-[0.28em] text-zinc-300 sm:text-[10px] sm:tracking-[0.35em]">
                          {activeArtist.role}
                        </div>

                        <a
                          href={activeArtist.instaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-4 py-2 text-[9px] uppercase tracking-[0.28em] text-[var(--primary)] transition hover:scale-[1.03] hover:border-[var(--primary)] hover:bg-[var(--primary)]/15 sm:text-[10px] sm:tracking-[0.35em]"
                        >
                          {activeArtist.insta}
                        </a>
                      </div>

                      <p className="mt-7 text-[15px] leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-8">
                        {activeArtist.desc}
                      </p>

                      {/* STAT CARDS */}
                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {[
                          {
                            icon: Award,
                            title: "Experience",
                            value: activeArtist.years,
                          },
                          {
                            icon: BadgeCheck,
                            title: "Premium Style",
                            value: "Verified",
                          },
                        ].map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={`stat-${i}`}
                              className="popup-hover rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:scale-[1.03] hover:border-[var(--primary)]"
                            >
                              <Icon className="text-[var(--primary)]" size={20} />
                              <p className="mt-4 text-[9px] uppercase tracking-[0.24em] text-zinc-500 sm:text-[10px] sm:tracking-[0.3em]">
                                {item.title}
                              </p>
                              <p className="mt-2 text-[1rem] text-white sm:text-lg">{item.value}</p>
                            </div>
                          );
                        })}
                      </div>

                      {/* SPECIALTY TAGS */}
                      <div className="mt-8">
                        <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-500 sm:text-[10px] sm:tracking-[0.35em]">
                          Expertise
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          {activeArtist.specialty.map((item, idx) => (
                            <span
                              key={`${activeArtist.id}-special-${idx}`}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-zinc-300 sm:text-[11px] sm:tracking-[0.18em]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* BEST FOR */}
                      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-500 sm:text-[10px] sm:tracking-[0.35em]">
                          Best For
                        </p>
                        <p className="mt-3 text-[14px] leading-7 text-zinc-300 sm:text-base">
                          {activeArtist.bestFor}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-4">
                        <a
                          href={`https://wa.me/919916173301?text=${encodeURIComponent(
                            `Hi NEW 2 U Tattoo Studio, I want to book with ${activeArtist.name}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="popup-hover magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[var(--primary)] hover:text-black sm:text-sm sm:tracking-[0.2em]"
                        >
                          Book This Artist <ArrowRight size={16} />
                        </a>

                        <Link
                          href="/booking"
                          className="popup-hover inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[var(--primary)] hover:text-[var(--primary)] sm:text-sm sm:tracking-[0.2em]"
                        >
                          General Booking
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* WORK GRID */}
                  <div className="border-t border-white/10 p-5 sm:p-8 md:p-10">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-500 sm:text-[10px] sm:tracking-[0.35em]">
                          Featured Work
                        </p>
                        <h3 className="mt-3 font-sync text-[1.5rem] uppercase leading-tight sm:text-3xl">
                          Tattoo Works By {activeArtist.name.split(" ")[0]}
                        </h3>
                      </div>
                    </div>

                    <div className="columns-2 gap-3 sm:columns-2 md:columns-3 sm:gap-4">
                      {activeArtist.workMedia.map((item, idx) => (
                        <WorkMediaCard
                          key={`${activeArtist.id}-media-${idx}`}
                          item={item}
                          artistId={activeArtist.id}
                          idx={idx}
                          isTouch={isTouch}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </main>
  );
}