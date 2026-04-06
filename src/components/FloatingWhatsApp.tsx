"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919916173301?text=Hi%20NEW%202%20U%20Tattoo%20Studio%2C%20I%20have%20a%20query%20regarding%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-30 right-4 md:bottom-6 md:right-6 z-[1200] flex items-center gap-3 rounded-full border border-white/10 bg-black/65 px-3.5 py-3 md:px-4 md:py-3 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300"
    >
      {/* subtle premium edge glow */}
      <span className="pointer-events-none absolute inset-0 rounded-full border border-[#25D366]/30 opacity-70" />

      {/* pulse ring */}
      <span className="pointer-events-none absolute inset-0 rounded-full border border-[#25D366]/25 animate-ping opacity-25" />

      {/* icon */}
      <div className="relative flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_8px_18px_rgba(37,211,102,0.28)]">
        <MessageCircle size={18} strokeWidth={2.3} />
      </div>

      {/* text */}
      <div className="flex flex-col leading-none">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-zinc-400">
          Quick Chat
        </span>
        <span className="mt-1 text-[11px] md:text-sm font-semibold uppercase tracking-[0.14em] md:tracking-[0.18em] text-white">
          Free Consultation
        </span>
      </div>
    </motion.a>
  );
}