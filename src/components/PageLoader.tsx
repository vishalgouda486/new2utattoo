"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* BG GLOW */}
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[120px]"
          />

          {/* CONTENT */}
          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[12px] sm:text-[13px] uppercase tracking-[0.5em] text-zinc-500"
            >
              Premium Tattoo, Piercing and Semi Permanent PMU Studio
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
              className="mt-5 flex justify-center"
            >
              <Image
                src="/logo.png"
                alt="NEW 2 U Logo"
                width={320}
                height={130}
                priority
                className="h-auto w-[210px] sm:w-[270px] md:w-[320px] object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "220px", opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.45, ease: "easeInOut" }}
              className="mx-auto mt-8 h-[2px] overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 rounded-full bg-[var(--primary)]"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}