"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
  Wallet,
  Upload,
  Clock3,
  CheckCircle2,
  MessageCircle,
  Star,
} from "lucide-react";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const steps = ["Service", "Type", "Size", "Artist", "Details"];

const tattooStyles = [
  "Hyper Realism",
  "Portrait",
  "Minimal",
  "Tribal",
  "Geometric",
  "Mandala",
  "Custom Concept",
  "Color Piece",
  "Miniature",
  "Large Piece",
  "Others / Not Sure",
];

const sizes = ["Small", "Medium", "Large", "Full Sleeve / Big Piece", "Not Sure Yet"];

const artists = [
  "No Preference",
  "Snehal Choudhary",
  "Ganesh M. Lohar",
  "Rupesh S. Nalathati",
  "Akshay Kumar Pawale",
  "Mahesh Rajendra Gunaki",
  "Not Sure Yet",
];

const services = [
  "Tattoo",
  "Piercing",
  "Semi Permanent PMU",
  "Nail Paint",
  "Not Sure",
];

const pmuServices = [
  "Eyebrows",
  "Vitiligo",
  "Lips",
  "Mehendi",
  "Others / Not Sure",
];

const bookingTrust = [
  "Clear and guided consultation before final tattooing",
  "Helps you choose style, size, placement, and artist",
  "Premium and hygienic tattoo studio process",
  "Ideal for both first-time and experienced clients",
];

const bookingBenefits = [
  {
    icon: Sparkles,
    title: "Personalized Consultation",
    desc: "We shape the tattoo around your body flow, visual idea, and personal story.",
  },
  {
    icon: ShieldCheck,
    title: "Sterile Premium Setup",
    desc: "Clean studio standards, guided experience, and a professional premium environment.",
  },
  {
    icon: Wallet,
    title: "Better Planning",
    desc: "Helps align your style, size, complexity, and overall tattoo direction properly.",
  },
];

const faqItems = [
  {
    q: "Do I need to know my exact tattoo design before booking?",
    a: "No. Most clients book even when they only have a rough idea. The consultation helps shape the concept properly.",
  },
  {
    q: "Will I get help choosing style and placement?",
    a: "Yes. The booking and consultation process is designed to help you decide what suits your body flow and idea best.",
  },
  {
    q: "Can I choose a specific artist?",
    a: "Yes. You can select your preferred artist, or choose no preference if you want the studio to guide you.",
  },
];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [form, setForm] = useState({
    service: "",
    pmuService: "",
    style: "",
    size: "",
    artist: "",
    name: "",
    phone: "",
    date: "",
    idea: "",
  });

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

    const elements = document.querySelectorAll("a, button, input, textarea, .glass");
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
  }, [step]);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const generateWhatsApp = () => {
    const message = `Hi NEW 2 U Tattoo Studio,

I want to book a consultation.

━━━━━━━━━━━━━━
BOOKING DETAILS
━━━━━━━━━━━━━━

Service: ${form.service || "Not Provided"}
${form.service === "Semi Permanent PMU" ? `PMU Sub Service: ${form.pmuService || "Not Provided"}` : ""}
Style / Type: ${form.style || "Not Provided"}
Size / Area: ${form.size || "Not Provided"}
Preferred Artist: ${form.artist || "Not Provided"}

━━━━━━━━━━━━━━
CLIENT DETAILS
━━━━━━━━━━━━━━

Name: ${form.name || "Not Provided"}
Phone: ${form.phone || "Not Provided"}
Preferred Date: ${form.date || "Not Provided"}

━━━━━━━━━━━━━━
IDEA / NOTES
━━━━━━━━━━━━━━

${form.idea || "No extra details provided."}`;

    window.open(
      `https://wa.me/917624815112?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const selectedClass =
    "border-[var(--primary)] bg-white/[0.05] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]";
  const normalClass =
    "border-white/10 bg-white/[0.02] hover:border-white/20";

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden noise">
      <FloatingWhatsApp />
      <SiteNav />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,214,0.08),transparent_35%)]" />
        <div className="container-premium relative z-10 py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">Luxury Consultation</p>
          <h1 className="mt-5 font-sync text-4xl uppercase leading-tight sm:text-6xl md:text-7xl">
            Book Your
            <span className="gradient-text block">Session</span>
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-300 md:text-lg">
            This booking flow is designed to feel easy, premium, and guided — helping the studio
            understand your service requirement before the actual consultation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/917624815112?text=Hi%20NEW%202%20U%20Tattoo%20Studio%2C%20I%20want%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              <MessageCircle size={16} />
              Quick WhatsApp Booking
            </a>

            <button
              onClick={() => {
                const formSection = document.getElementById("booking-form");
                formSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="premium-btn inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Fill Booking Form
            </button>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="relative z-10">
        <div className="container-premium py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] items-start">
            {/* LEFT */}
            <div>
              <div className="glass rounded-[2rem] p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Why Book Now</p>
                <h2 className="mt-4 font-sync text-3xl uppercase leading-tight sm:text-4xl">
                  Make Your
                  <span className="gradient-text block">Idea Real Faster</span>
                </h2>

                <p className="mt-6 leading-8 text-zinc-300">
                  Whether you already know exactly what you want or you’re still figuring it out,
                  this process helps create clarity before you commit.
                </p>

                <div className="mt-8 grid gap-4">
                  {bookingBenefits.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={`booking-benefit-${i}`}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex items-start gap-4 transition hover:-translate-y-1"
                      >
                        <Icon className="text-[var(--primary)] mt-1" />
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">
                            {item.title}
                          </p>
                          <p className="mt-2 text-zinc-400 leading-7">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 grid gap-4">
                  {bookingTrust.map((item, i) => (
                    <div key={`booking-trust-${i}`} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 text-[var(--primary)]" size={18} />
                      <p className="text-zinc-300 leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div id="booking-form" className="glass rounded-[2rem] p-6 md:p-8">
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-zinc-500">
                  <span>Step {step + 1} / {steps.length}</span>
                  <span>{steps[step]}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {step === 0 && (
                  <div>
                    <h2 className="font-sync text-2xl uppercase">Choose Service</h2>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {services.map((service, i) => (
                        <button
                          key={`service-${i}`}
                          onClick={() =>
                            setForm({
                              ...form,
                              service,
                              pmuService: "",
                              style: "",
                            })
                          }
                          className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                            form.service === service ? selectedClass : normalClass
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-medium">{service}</p>
                            {form.service === service && (
                              <Check size={18} className="text-[var(--primary)] shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <h2 className="font-sync text-2xl uppercase">
                      {form.service === "Semi Permanent PMU" ? "Select PMU Service" : "Select Style / Type"}
                    </h2>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {(form.service === "Semi Permanent PMU" ? pmuServices : tattooStyles).map((item, i) => (
                        <button
                          key={`type-${i}`}
                          onClick={() =>
                            form.service === "Semi Permanent PMU"
                              ? setForm({ ...form, pmuService: item, style: item })
                              : setForm({ ...form, style: item })
                          }
                          className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                            (form.service === "Semi Permanent PMU" ? form.pmuService : form.style) === item
                              ? selectedClass
                              : normalClass
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-medium">{item}</p>
                            {(form.service === "Semi Permanent PMU" ? form.pmuService : form.style) === item && (
                              <Check size={18} className="text-[var(--primary)] shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="font-sync text-2xl uppercase">Select Size / Area</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {sizes.map((size, i) => (
                        <button
                          key={`size-${i}`}
                          onClick={() => setForm({ ...form, size })}
                          className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                            form.size === size ? selectedClass : normalClass
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-medium">{size}</p>
                            {form.size === size && (
                              <Check size={18} className="text-[var(--primary)] shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="font-sync text-2xl uppercase">Preferred Artist</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {artists.map((artist, i) => (
                        <button
                          key={`artist-${i}`}
                          onClick={() => setForm({ ...form, artist })}
                          className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                            form.artist === artist ? selectedClass : normalClass
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-medium">{artist}</p>
                            {form.artist === artist && (
                              <Check size={18} className="text-[var(--primary)] shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="font-sync text-2xl uppercase">Final Details</h2>

                    <div className="mt-8 grid gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[var(--primary)]"
                      />

                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[var(--primary)]"
                      />

                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[var(--primary)]"
                      />

                      <textarea
                        rows={5}
                        placeholder="Describe your tattoo / piercing / PMU / nail idea..."
                        value={form.idea}
                        onChange={(e) => setForm({ ...form, idea: e.target.value })}
                        className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[var(--primary)]"
                      />

                      <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5">
                        <div className="flex items-center gap-3 text-zinc-400">
                          <Upload size={18} />
                          <span className="text-sm">
                            Reference image upload can be added later (optional UI block ready).
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                        <div className="flex items-start gap-3 text-zinc-400">
                          <MessageCircle size={18} className="mt-1 text-[var(--primary)]" />
                          <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">
                              What happens next?
                            </p>
                            <p className="mt-2 leading-7">
                              Once you submit, your details will open in WhatsApp so the studio can respond directly and guide you further.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <button
                  onClick={prev}
                  disabled={step === 0}
                  className={`inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] ${
                    step === 0 ? "text-zinc-700" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  Back
                </button>

                {step < steps.length - 1 ? (
                  <button
                    onClick={next}
                    className="magnetic-btn premium-btn inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black hover:bg-[var(--primary)] hover:text-black"
                  >
                    Next <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={generateWhatsApp}
                    className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
                  >
                    Send on WhatsApp <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-white/[0.02]">
        <div className="container-premium">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">Before You Book</p>
            <h2 className="mt-5 font-sync text-3xl uppercase leading-tight sm:text-5xl">
              Common Questions
              <span className="gradient-text block">Before Booking</span>
            </h2>
            <p className="mt-6 text-zinc-400 leading-8">
              These are the most common things clients want clarity on before they confirm a session.
            </p>
          </div>

          <div className="mt-14 grid gap-5">
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={`booking-faq-${i}`}
                  className="glass overflow-hidden rounded-[1.8rem] self-start border border-white/10"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="font-sync text-lg uppercase">{item.q}</h3>
                    <div className="text-[var(--primary)] text-xl">{isOpen ? "−" : "+"}</div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.34, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="leading-8 text-zinc-400">{item.a}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="glass glow-red rounded-[2rem] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">Still Unsure?</p>
            <h2 className="mt-5 font-sync text-3xl uppercase leading-tight sm:text-5xl">
              You Don’t Need To
              <span className="outline-text block">Know Everything Yet</span>
            </h2>

            <p className="mt-6 max-w-3xl text-zinc-300 leading-8">
              If you’re still unsure about your style, size, artist, placement, or service,
              that’s completely normal. The consultation is designed to help you decide properly before finalising anything.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-zinc-400">
              <div className="inline-flex items-center gap-2">
                <Clock3 size={16} className="text-[var(--primary)]" />
                Guided consultation
              </div>
              <div className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-[var(--primary)]" />
                Clean premium setup
              </div>
              <div className="inline-flex items-center gap-2">
                <MessageCircle size={16} className="text-[var(--primary)]" />
                Easy WhatsApp follow-up
              </div>
              <div className="inline-flex items-center gap-2">
                <Star size={16} className="text-[var(--primary)]" />
                Better style clarity
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/917624815112?text=Hi%20NEW%202%20U%20Tattoo%20Studio%2C%20I%20need%20help%20before%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
              >
                <MessageCircle size={16} />
                Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}