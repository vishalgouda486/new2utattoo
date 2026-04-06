"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ShieldCheck,
  PenTool,
  ChevronRight,
  Award,
  CheckCircle2,
  MessageCircle,
  BadgeCheck,
  Plus,
  Minus,
} from "lucide-react";

import SiteNav from "@/components/SiteNav";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageLoader from "@/components/PageLoader";
import SiteFooter from "@/components/SiteFooter";

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  initial: { opacity: 0, y: 60, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.22 },
  transition: { duration: 0.85, ease: "easeOut" as const },
};

const trustItems = [
  {
    id: "sterile",
    title: "Sterile & Safe Process",
    desc: "Single-use hygiene standards, safe setup, and a clean premium tattoo environment.",
    icon: ShieldCheck,
  },
  {
    id: "custom",
    title: "Fully Custom Concepts",
    desc: "Every tattoo is shaped around your story, placement, body flow, and visual impact.",
    icon: PenTool,
  },
  {
    id: "artist",
    title: "Experienced Artists",
    desc: "Work with artists known for realism, portraits, detail, and custom execution.",
    icon: Award,
  },
  {
    id: "consult",
    title: "Consult Before Ink",
    desc: "You can discuss your design, placement, size, and artist preference before final booking.",
    icon: MessageCircle,
  },
];

const styleCards = [
  {
    id: "realism",
    title: "Hyper Realism Tattoos",
    desc: "High-detail realism tattoos with skin depth, shadows, expression, and dimensional finishing.",
    image: "/home/styles/realism.jpg",
  },
  {
    id: "portrait",
    title: "Portrait Tattoos",
    desc: "Emotional portrait tattoos crafted with detail, likeness, contrast, and premium realism work.",
    image: "/home/styles/portrait.jpg",
  },
  {
    id: "fineline",
    title: "Fine Line & Minimal",
    desc: "Elegant fine line tattoos, subtle body art, clean symbolism, and timeless minimal pieces.",
    image: "/home/styles/fineline.jpg",
  },
  {
    id: "tribal",
    title: "Tribal & Geometric",
    desc: "Bold tribal structure, geometric rhythm, sacred symmetry, and strong body-flow composition.",
    image: "/home/styles/tribal.jpg",
  },
];

const miniPortfolio = [
  {
    id: "work-1",
    title: "Black & Grey Realism",
    subtitle: "Portrait • Shadow • Depth",
    image: "/home/portfolio/work-1.jpg",
    height: "aspect-[4/5]",
  },
  {
    id: "work-2",
    title: "Fine Line Symbolism",
    subtitle: "Minimal • Elegant • Clean",
    image: "/home/portfolio/work-2.jpg",
    height: "aspect-[4/6]",
  },
  {
    id: "work-3",
    title: "Heavy Blackwork",
    subtitle: "Bold • Dark • Statement",
    image: "/home/portfolio/work-3.jpg",
    height: "aspect-[4/5]",
  },
  {
    id: "work-4",
    title: "Custom Sleeve Concept",
    subtitle: "Story • Flow • Detail",
    image: "/home/portfolio/work-4.jpg",
    height: "aspect-[4/6]",
  },
];

const artists = [
  {
    id: "artist-snehal",
    name: "Snehal Choudhari",
    role: "Founder • 16+ Years",
    specialty: "Color Portraits • Hyper Realism • Large Pieces",
    desc: "Known for premium portrait work, realism, and large custom compositions that feel powerful and deeply personal.",
    image: "/home/artists/snehal.jpg",
  },
  {
    id: "artist-mahesh",
    name: "Mahesh Rajendra Gunaki",
    role: "Senior Artist • 8+ Years",
    specialty: "Realism • Miniature • Tribal",
    desc: "Known for clean execution, versatile tattooing, miniature detailing, and strong tribal compositions.",
    image: "/home/artists/mahesh.jpg",
  },
  {
    id: "artist-akshay",
    name: "Akshay Kumar Pawale",
    role: "Artist • 4+ Years",
    specialty: "Portraits • Mandala • Geometric • Big Pieces",
    desc: "Focused on portrait tattoos, geometric flow, mandala precision, and large-scale body work.",
    image: "/home/artists/akshay.jpg",
  },
];

const processSteps = [
  {
    id: "step-1",
    title: "Share Your Idea",
    desc: "Tell us what you want — style, concept, placement, reference, or even just the vibe.",
  },
  {
    id: "step-2",
    title: "Consultation & Planning",
    desc: "We discuss size, detail, placement, budget, artist preference, and how the tattoo should flow.",
  },
  {
    id: "step-3",
    title: "Custom Design Direction",
    desc: "Your tattoo is shaped with intention — not rushed, copied, or randomly placed.",
  },
  {
    id: "step-4",
    title: "Ink With Confidence",
    desc: "Premium execution with hygiene, comfort, detail, and an artist-led experience from start to finish.",
  },
];

const chooseUs = [
  "Premium hygiene and sterile tattoo setup",
  "Experienced tattoo artists in Belagavi",
  "Custom tattoo design consultation",
  "Portrait, realism, tribal, geometric, and fine line expertise",
  "Guidance for first-time tattoo clients",
  "Tattoo placement and style recommendations",
  "Piercing and body art consultation support",
  "Easy booking via WhatsApp",
];

const faqs = [
  {
    id: "faq-1",
    q: "Do I need to finalise my tattoo design before booking?",
    a: "No. Most clients do not come in with a final design. You can book a consultation first, discuss your idea, references, placement, size, and style direction, and the studio will help shape it properly before finalising anything.",
  },
  {
    id: "faq-2",
    q: "Is tattooing safe at your studio?",
    a: "Yes. NEW 2 U follows a clean, hygienic, and professional process. Safety, sterile setup, artist care, and studio cleanliness are major priorities before any tattoo or piercing session begins.",
  },
  {
    id: "faq-3",
    q: "How much does a tattoo usually cost in Belagavi?",
    a: "Tattoo pricing depends on the design complexity, size, placement, detailing, and time required. The best way to get an accurate quote is to share your idea through booking or WhatsApp so the studio can guide you properly.",
  },
  {
    id: "faq-4",
    q: "Can I choose my artist before booking?",
    a: "Yes. If you already know which artist’s style suits your idea best, you can mention your preferred artist while booking. If not, the studio can also help match you based on your tattoo concept.",
  },
  {
    id: "faq-5",
    q: "Do tattoos hurt a lot?",
    a: "Pain depends on the placement, your tolerance, and the size or duration of the tattoo. Some areas are more sensitive than others, but most clients manage it well with proper breaks, guidance, and a calm studio experience.",
  },
  {
    id: "faq-6",
    q: "Do you do custom tattoos in Belagavi?",
    a: "Yes. Custom tattoos are one of the main strengths of NEW 2 U — especially portraits, realism, symbolism, mandala, geometric, minimal, and personal concept tattoos designed around your body flow and style.",
  },
  {
    id: "faq-7",
    q: "How long does a tattoo session take?",
    a: "It depends on the size, detailing, and complexity of the design. Some tattoos can be done in a shorter sitting, while larger custom pieces may need longer sessions or multiple sittings.",
  },
  {
    id: "faq-8",
    q: "Do you also offer piercing?",
    a: "Yes. NEW 2 U also offers piercing services, and you can enquire through the same booking flow or WhatsApp.",
  },
];

const marqueeImages = [
  "/home/marquee/1.jpg",
  "/home/marquee/2.jpg",
  "/home/marquee/3.jpg",
  "/home/marquee/4.jpg",
  "/home/marquee/5.jpg",
  "/home/marquee/6.jpg",
  "/home/marquee/7.jpg",
  "/home/marquee/8.jpg",
];

function FaqItem({
  q,
  a,
  index,
  openIndex,
  setOpenIndex,
}: {
  q: string;
  a: string;
  index: number;
  openIndex: number | null;
  setOpenIndex: (v: number | null) => void;
}) {
  const isOpen = openIndex === index;

  return (
    <motion.div
      key={`faq-motion-${index}`}
      {...fadeUp}
      transition={{ duration: 0.75, delay: index * 0.03 }}
      className="glass overflow-hidden rounded-[1.8rem] self-start border border-white/10"
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <h3 className="font-sync text-[15px] sm:text-lg uppercase leading-6">{q}</h3>
        <div className="text-[var(--primary)]">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.34, ease: "easeInOut" }}
        className="faq-answer"
      >
        <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
          <p className="leading-7 sm:leading-8 text-zinc-400 text-[15px] sm:text-base">{a}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const isTouch =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || "ontouchstart" in window);

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const typingTarget = document.querySelector(".typing-text");
    const whyParagraphs = document.querySelectorAll(".why-reveal-line");

    if (typingTarget) {
      const originalHTML = typingTarget.innerHTML;
      typingTarget.innerHTML = "";

      let hasTyped = false;

      ScrollTrigger.create({
        trigger: ".why-trigger",
        start: "top 68%",
        end: "bottom 20%",
        onEnter: () => {
          if (hasTyped) return;
          hasTyped = true;

          let i = 0;
          const temp = document.createElement("div");
          temp.innerHTML = originalHTML;
          const plainText = temp.textContent || "";

          typingTarget.innerHTML = "";

          const interval = setInterval(() => {
            const current = plainText.slice(0, i + 1);

            if (current.includes("Confidence, Art & Trust")) {
              typingTarget.innerHTML = current.replace(
                "Confidence, Art & Trust",
                `<span class="gradient-text block">Confidence, Art & Trust</span>`
              );
            } else {
              typingTarget.textContent = current;
            }

            i++;
            if (i >= plainText.length) clearInterval(interval);
          }, 40);

          gsap.fromTo(
            whyParagraphs,
            { opacity: 0, y: 24, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              stagger: 0.12,
              duration: 0.85,
              ease: "power3.out",
              delay: 0.35,
            }
          );
        },
      });
    }

    const move = (e: MouseEvent) => {
      if (cursor && !isTouch) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }

      if (isTouch) return;

      const cards = document.querySelectorAll<HTMLElement>(".hero-float-card");
      cards.forEach((card, index) => {
        const strength = index === 0 ? 24 : index === 1 ? 18 : 20;
        const x = (window.innerWidth / 2 - e.clientX) / strength;
        const y = (window.innerHeight / 2 - e.clientY) / strength;

        gsap.to(card, {
          x,
          y,
          duration: 1.2,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    const addHover = () => cursor?.classList.add("cursor-grow");
    const removeHover = () => cursor?.classList.remove("cursor-grow");
    const addActive = () => cursor?.classList.add("cursor-active");
    const removeActive = () => cursor?.classList.remove("cursor-active");

    if (!isTouch) {
      document.addEventListener("mousemove", move);
      document.addEventListener("mousedown", addActive);
      document.addEventListener("mouseup", removeActive);
    }

    const elements = document.querySelectorAll(
      "a, button, .glass, .tilt-card, .hero-float-card, input, textarea"
    );
    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    gsap.fromTo(
      ".hero-reveal",
      { opacity: 0, y: 50, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    gsap.utils.toArray<HTMLElement>(".spotlight-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        if (isTouch) return;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--x", `${x}%`);
        card.style.setProperty("--y", `${y}%`);
      });
    });

    gsap.utils.toArray<HTMLElement>(".parallax-soft").forEach((el) => {
      if (isTouch) return;

      gsap.to(el, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".section-fade").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 55, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (!isTouch) {
      document.querySelectorAll(".tilt-3d").forEach((card) => {
        card.addEventListener("mousemove", (e: any) => {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;

          const rotateX = (y - 0.5) * 8;
          const rotateY = (x - 0.5) * -8;

          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 1200,
            transformOrigin: "center",
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.45,
            ease: "power3.out",
          });
        });
      });
    }

    if (!isTouch) {
      document.querySelectorAll(".magnetic-btn").forEach((btn) => {
        btn.addEventListener("mousemove", (e: any) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(btn, {
            x: x * 0.12,
            y: y * 0.12,
            duration: 0.28,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          });
        });
      });
    }

    if (isTouch) {
      const mobileImages = gsap.utils.toArray<HTMLElement>(".mobile-scroll-reveal");

      mobileImages.forEach((el) => {
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

    return () => {
      if (!isTouch) {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mousedown", addActive);
        document.removeEventListener("mouseup", removeActive);
      }

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "NEW 2 U Tattoo Studio Homepage",
        url: "https://yourdomain.com",
        description:
          "Premium tattoo studio in Belagavi for realism tattoos, portrait tattoos, fine line tattoos, custom tattoos, piercing, and artist-led tattoo experiences.",
        inLanguage: "en-IN",
        primaryImageOfPage: "https://yourdomain.com/og-image.jpg",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Tattoo Styles at NEW 2 U",
        itemListElement: styleCards.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <main className="min-h-screen noise relative overflow-hidden bg-black pt-20">
        <PageLoader />
        <FloatingWhatsApp />

        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={false}
            animate={{ x: [0, 30, 0], y: [0, -18, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]"
          />
          <motion.div
            initial={false}
            animate={{ x: [0, -35, 0], y: [0, 20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[130px]"
          />
          <div className="grid-glow absolute inset-0 opacity-25" />
        </div>

        <SiteNav />

        {/* HERO */}
        <section className="relative z-10 min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
          <div className="container-premium grid items-center gap-10 md:gap-16 py-10 md:py-16 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative z-10">
              <p className="hero-reveal mb-4 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.38em] sm:tracking-[0.5em] text-zinc-400">
                Belagavi&apos;s Premium Tattoo & Piercing Studio
              </p>

              <h1 className="hero-reveal font-sync text-[2.4rem] leading-[0.94] uppercase sm:text-6xl lg:text-8xl">
                More Than Ink.
                <span className="gradient-text block">This Is Identity.</span>
              </h1>

              <p className="hero-reveal mt-6 sm:mt-8 max-w-2xl text-[15px] leading-7 sm:text-base sm:leading-8 md:text-lg text-zinc-400">
                NEW 2 U Tattoo Studio in Belagavi creates premium tattoos and piercing experiences
                built around expression, detail, sterile execution, custom design, confidence, and unforgettable visual impact.
              </p>

              <p className="hero-reveal mt-4 sm:mt-5 max-w-2xl text-[15px] leading-7 sm:text-base sm:leading-8 md:text-lg text-zinc-500">
                Whether you want a portrait tattoo, realism piece, fine line design, tribal tattoo,
                symbolic artwork, sleeve concept, or piercing consultation — this is where your idea becomes permanent art.
              </p>

              <div className="hero-reveal mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/booking"
                  className="magnetic-btn premium-btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-black hover:bg-[var(--primary)] hover:text-black"
                >
                  Secure a Session <ArrowRight size={16} />
                </Link>

                <Link
                  href="/portfolio"
                  className="premium-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 sm:px-8 py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  Explore Gallery
                </Link>
              </div>

              <div className="hero-reveal mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-[10px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-zinc-500">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck size={16} className="text-[var(--primary)]" />
                  Custom Concepts
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[var(--primary)]" />
                  Sterile Setup
                </span>
                <span className="inline-flex items-center gap-2">
                  <Award size={16} className="text-[var(--primary)]" />
                  Artist-Led Work
                </span>
              </div>
            </div>

            <div ref={heroWrapRef} className="relative hero-image-glow">
              <div className="relative mx-auto h-[300px] sm:h-[680px] w-full max-w-[680px] md:h-[540px]">
                <div className="absolute left-[50%] top-[50%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />

                {/* DESKTOP ONLY - UNCHANGED */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [-8, -5, -8] }}
                  transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
                  className="hero-float-card parallax-soft perspective tilt-3d absolute left-[48%] top-[52%] z-20 hidden w-[340px] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] md:block"
                >
                  <div className="hero-panel rounded-[2rem] p-4 tilt-inner">
                    <div
                      className="h-[420px] rounded-[1.6rem] bg-cover bg-center grayscale brightness-[0.62] transition duration-700 hover:grayscale-0 hover:scale-[1.04] hover:brightness-[1.12]"
                      style={{
                        backgroundImage: "url('/home/hero/hero-main.jpg')",
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [13, 16, 13] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                  className="hero-float-card parallax-soft perspective tilt-3d absolute top-[18px] right-[10px] z-30 hidden w-[230px] rotate-[13deg] md:block"
                >
                  <div className="hero-panel rounded-[2rem] p-4 tilt-inner">
                    <div
                      className="h-64 rounded-[1.5rem] bg-cover bg-center grayscale brightness-[0.62] transition duration-700 hover:grayscale-0 hover:scale-[1.05] hover:brightness-[1.12]"
                      style={{
                        backgroundImage: "url('/home/hero/hero-side-1.jpg')",
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [-14, -10, -14] }}
                  transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
                  className="hero-float-card parallax-soft perspective tilt-3d absolute bottom-[18px] left-[8px] z-30 hidden w-[230px] -rotate-[14deg] md:block"
                >
                  <div className="hero-panel rounded-[2rem] p-4 tilt-inner">
                    <div
                      className="h-60 rounded-[1.5rem] bg-cover bg-center grayscale brightness-[0.62] transition duration-700 hover:grayscale-0 hover:scale-[1.05] hover:brightness-[1.12]"
                      style={{
                        backgroundImage: "url('/home/hero/hero-side-2.jpg')",
                      }}
                    />
                  </div>
                </motion.div>

                {/* MOBILE ONLY */}
                <div className="absolute bottom-0 left-1/2 w-full max-w-[96%] -translate-x-1/2 rounded-[2rem] border border-white/10 bg-black/45 p-4 backdrop-blur-xl md:hidden">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      "/home/hero/hero-main.jpg",
                      "/home/hero/hero-side-1.jpg",
                      "/home/hero/hero-side-2.jpg",
                    ].map((img, i) => (
                      <div
                        key={i}
                        className={`overflow-hidden rounded-[1.2rem] ${
                          i === 0 ? "rotate-[-5deg]" : i === 1 ? "rotate-[4deg]" : "rotate-[-3deg]"
                        }`}
                      >
                        <div
                          className="mobile-scroll-reveal mobile-image-fx h-36 rounded-[1.2rem] bg-cover bg-center"
                          style={{ backgroundImage: `url(${img})` }}
                        />
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                    Premium Tattoo Experience
                  </p>
                  <p className="mt-3 text-[14px] leading-7 text-zinc-300">
                    Realism, portraits, custom concepts, premium detailing, and artist-led body art in Belagavi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-premium relative z-10">
          <div className="section-divider" />
        </div>

        {/* TRUST STRIP */}
        <section className="relative z-10 bg-white/[0.02]">
          <div className="container-premium grid gap-6 py-8 md:grid-cols-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`trust-${item.id}-${index}`}
                  {...fadeUp}
                  transition={{ duration: 0.75, delay: index * 0.04 }}
                  className="section-fade flex items-start gap-4"
                >
                  <Icon className="mt-1 text-[var(--primary)] shrink-0" />
                  <div>
                    <h3 className="font-sync text-[12px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] leading-5">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] sm:text-sm leading-7 text-zinc-400">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="container-premium relative z-10">
          <div className="section-divider" />
        </div>

        {/* WHY CHOOSE */}
        <section className="section-spacing relative z-10 why-trigger">
          <div className="container-premium grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div {...fadeUp} className="section-fade">
              <p className="why-reveal-line text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-zinc-500 opacity-0">
                Why Clients Choose NEW 2 U
              </p>

              <h2 className="mt-4 sm:mt-5 font-sync text-[2rem] uppercase leading-tight sm:text-5xl typing-text min-h-[78px] sm:min-h-[150px]">
                A Tattoo Studio Built For
                <span className="gradient-text block">Confidence, Art & Trust</span>
              </h2>

              <p className="why-reveal-line mt-6 sm:mt-8 text-zinc-400 text-[15px] leading-7 sm:leading-8 opacity-0">
                Most people don’t just want a tattoo. They want clarity, confidence, safety, artist guidance,
                and a result they’ll feel proud to wear for years. That’s exactly where NEW 2 U stands apart.
              </p>

              <p className="why-reveal-line mt-4 sm:mt-5 text-zinc-500 text-[15px] leading-7 sm:leading-8 opacity-0">
                We help clients in Belagavi choose the right tattoo style, body placement, scale, artist, and design direction —
                whether it’s your first tattoo or your next major piece.
              </p>

              <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2">
                {chooseUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[var(--primary)]"
                      size={18}
                    />
                    <p className="text-zinc-300 text-[14px] sm:text-base leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="section-fade glass rounded-[2rem] p-4 sm:p-5 spotlight-card premium-spotlight border border-white/10"
            >
              <div
                className="mobile-scroll-reveal mobile-image-fx aspect-[4/5] rounded-[1.6rem] bg-cover bg-center md:grayscale md:brightness-[0.6] md:transition md:duration-700 md:hover:grayscale-0 md:hover:scale-[1.03] md:hover:brightness-[1.08]"
                style={{
                  backgroundImage: "url('/home/why/why-main.jpg')",
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* STYLES */}
        <section className="section-spacing relative z-10 bg-white/[0.02]">
          <div className="container-premium">
            <motion.div {...fadeUp} className="section-fade max-w-3xl">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-zinc-500">
                Tattoo Styles & Services
              </p>
              <h2 className="mt-4 sm:mt-5 font-sync text-[2rem] uppercase leading-tight sm:text-5xl">
                Signature Styles That
                <span className="gradient-text block">Match Your Personality</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-zinc-400 text-[15px] leading-7 sm:leading-8">
                Looking for the best tattoo style in Belagavi? Whether you want realism, portrait work,
                fine line tattoos, tribal body art, geometric patterns, symbolic tattoos, custom sleeves,
                or piercing services — NEW 2 U gives you artist-led direction and premium execution.
              </p>
            </motion.div>

            <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
              {styleCards.map((item, i) => (
                <motion.div
                  key={`style-${item.id}-${i}`}
                  {...fadeUp}
                  transition={{ duration: 0.8, delay: i * 0.06 }}
                  className="section-fade group glass tilt-card tilt-3d perspective overflow-hidden rounded-[2rem] premium-spotlight spotlight-card border border-white/10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden tilt-inner">
                    <div
                      className="absolute inset-0 mobile-scroll-reveal mobile-image-fx md:grayscale md:brightness-[0.42] md:transition-all md:duration-700 md:group-hover:scale-110 md:group-hover:grayscale-0 md:group-hover:brightness-[1.05] bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <h3 className="font-sync text-[1.35rem] sm:text-2xl uppercase leading-tight">{item.title}</h3>
                      <p className="mt-3 sm:mt-4 text-zinc-300 text-[14px] sm:text-base leading-7">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MINI PORTFOLIO */}
        <section className="section-spacing relative z-10">
          <div className="container-premium">
            <motion.div {...fadeUp} className="section-fade max-w-3xl">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-zinc-500">
                Featured Work
              </p>
              <h2 className="mt-4 sm:mt-5 font-sync text-[2rem] uppercase leading-tight sm:text-5xl">
                A Glimpse Of
                <span className="gradient-text block">Premium Skin Stories</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-zinc-400 text-[15px] leading-7 sm:leading-8">
                This section gives you a preview of the kind of visual quality and artistic direction
                clients come to NEW 2 U for — from high-detail realism to minimal elegance and bold custom work.
              </p>
            </motion.div>

            <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
              {miniPortfolio.map((item, i) => (
                <motion.div
                  key={`portfolio-${item.id}-${i}`}
                  {...fadeUp}
                  transition={{ duration: 0.78, delay: i * 0.05 }}
                  className={`section-fade group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 ${item.height} tilt-card tilt-3d perspective md:hover:-translate-y-2 transition-all duration-500`}
                >
                  <div className="tilt-inner h-full w-full">
                    <div
                      className="absolute inset-0 mobile-scroll-reveal mobile-image-fx md:grayscale md:brightness-[0.45] md:scale-[1.02] md:transition-all md:duration-700 md:group-hover:scale-110 md:group-hover:grayscale-0 md:group-hover:brightness-[1.05] bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                      <p className="text-[10px] uppercase tracking-[0.32em] sm:tracking-[0.4em] text-zinc-500">
                        {item.subtitle}
                      </p>
                      <h3 className="mt-3 font-sync text-[1.2rem] sm:text-2xl uppercase leading-tight">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-[11px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[var(--primary)]"
              >
                Explore Full Portfolio <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* MARQUEE VISUAL STRIP */}
        <section
          className="relative z-10 overflow-hidden py-4 sm:py-6"
          aria-label="Tattoo studio visual showcase"
        >
          <div className="marquee-shell">
            <div className="marquee-track gap-4 sm:gap-6 px-4 sm:px-6">
              {[...marqueeImages, ...marqueeImages].map((img, i) => (
                <div
                  key={`marquee-${i}`}
                  className="group relative h-[200px] w-[150px] sm:h-[220px] sm:w-[170px] md:h-[280px] md:w-[220px] shrink-0 overflow-hidden rounded-[1.6rem] sm:rounded-[1.8rem] border border-white/10 bg-black/40"
                >
                  <div
                    className="absolute inset-0 mobile-scroll-reveal mobile-image-fx md:grayscale md:brightness-[0.5] md:transition md:duration-700 md:group-hover:scale-110 md:group-hover:grayscale-0 md:group-hover:brightness-[1.04] bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARTISTS */}
        <section className="section-spacing relative z-10 bg-white/[0.02]">
          <div className="container-premium">
            <motion.div {...fadeUp} className="section-fade max-w-3xl">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-zinc-500">
                Meet The Artists
              </p>
              <h2 className="mt-4 sm:mt-5 font-sync text-[2rem] uppercase leading-tight sm:text-5xl">
                The Artists Behind
                <span className="gradient-text block">The Work</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-zinc-400 text-[15px] leading-7 sm:leading-8">
                One of the biggest client questions is simple — “Who will tattoo me?”
                That’s why we believe the artist matters just as much as the design.
              </p>
            </motion.div>

            <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {artists.map((artist, i) => (
                <motion.div
                  key={`artist-${artist.id}-${i}`}
                  {...fadeUp}
                  transition={{ duration: 0.8, delay: i * 0.06 }}
                  className="section-fade h-full"
                >
                  <Link
                    href="/artists"
                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 tilt-card tilt-3d perspective md:hover:-translate-y-2 transition-all duration-500"
                    aria-label={`Explore artist profile for ${artist.name}`}
                  >
                    <div className="tilt-inner flex h-full flex-col">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <div
                          className="absolute inset-0 mobile-scroll-reveal mobile-image-fx md:grayscale md:brightness-[0.55] md:transition-all md:duration-700 md:group-hover:scale-110 md:group-hover:grayscale-0 md:group-hover:brightness-[1.04] bg-cover bg-center"
                          style={{ backgroundImage: `url(${artist.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                          <p className="text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.35em] text-zinc-400">
                            {artist.specialty}
                          </p>
                          <h3 className="mt-3 font-sync text-[1.35rem] sm:text-2xl uppercase leading-tight">{artist.name}</h3>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 flex flex-1 flex-col">
                        <p className="text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--primary)]">
                          {artist.role}
                        </p>
                        <p className="mt-4 text-zinc-400 text-[14px] sm:text-base leading-7 sm:leading-8 flex-1">
                          {artist.desc}
                        </p>
                        <span className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--primary)]">
                          Explore Artist Profile <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section-spacing relative z-10">
          <div className="container-premium">
            <motion.div {...fadeUp} className="section-fade max-w-3xl">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-zinc-500">
                How Booking Works
              </p>
              <h2 className="mt-4 sm:mt-5 font-sync text-[2rem] uppercase leading-tight sm:text-5xl">
                What Happens
                <span className="gradient-text block">After You Enquire?</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-zinc-400 text-[15px] leading-7 sm:leading-8">
                If you’ve never booked a tattoo before, this removes the confusion.
                The process is designed to be easy, guided, and premium from start to finish.
              </p>
            </motion.div>

            <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={`process-${step.id}-${i}`}
                  {...fadeUp}
                  transition={{ duration: 0.75, delay: i * 0.05 }}
                  className="section-fade rounded-[1.8rem] p-[1px] bg-transparent transition-all duration-300"
                >
                  <div className="glass rounded-[1.8rem] p-6 sm:p-7 tilt-card tilt-3d perspective border border-white/10 hover:border-cyan-300/90 hover:bg-white/[0.03] transition-all duration-300">
                    <div className="tilt-inner">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-zinc-500">
                        0{i + 1}
                      </p>
                      <h3 className="mt-4 sm:mt-5 font-sync text-[1.1rem] sm:text-xl uppercase leading-tight">{step.title}</h3>
                      <p className="mt-4 sm:mt-5 text-[14px] sm:text-base leading-7 sm:leading-8 text-zinc-400">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-spacing relative z-10 bg-white/[0.02]">
          <div className="container-premium">
            <motion.div {...fadeUp} className="section-fade max-w-3xl">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-zinc-500">
                Frequently Asked Questions
              </p>
              <h2 className="mt-4 sm:mt-5 font-sync text-[2rem] uppercase leading-tight sm:text-5xl">
                Everything Clients Usually
                <span className="gradient-text block">Ask Before Booking</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-zinc-400 text-[15px] leading-7 sm:leading-8">
                We’ve answered the most common questions about tattoo booking, design consultation,
                artist choice, safety, pricing, pain, and studio experience so you feel clear before you book.
              </p>
            </motion.div>

            <div className="mt-10 sm:mt-14 grid items-start gap-5 md:grid-cols-2">
              {faqs.map((item, i) => (
                <FaqItem
                  key={item.id}
                  q={item.q}
                  a={item.a}
                  index={i}
                  openIndex={openFaq}
                  setOpenIndex={setOpenFaq}
                />
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}