"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight, Volume2, VolumeX } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Play subtle futuristic synth pop on interaction
  const playClickSound = () => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(580, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // AudioContext fallback
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Hero", href: "#hero-scroll" },
    { label: "Selected Work", href: "#work" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Arsenal", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    playClickSound();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-4 sm:p-6 pointer-events-none">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 px-5 py-3 rounded-full transition-all duration-500 border ${
            scrolled
              ? "bg-[#090a0f]/80 backdrop-blur-2xl border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              : "bg-white/[0.03] backdrop-blur-md border-white/10"
          }`}
        >
          {/* Logo / Monogram */}
          <button
            type="button"
            onClick={() => handleLinkClick("#hero-scroll")}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-amber-500 flex items-center justify-center font-black text-black text-xs font-mono group-hover:scale-105 transition-transform">
              AS
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-white tracking-wider">
                ANANTA
              </span>
              <span className="text-[10px] block font-mono text-zinc-400">
                CREATIVE DEV
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-300">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all font-mono tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Action: Sound Toggle + Availability CTA */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playClickSound();
              }}
              title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
              className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
              )}
            </button>

            {/* Let's Talk CTA */}
            <button
              type="button"
              onClick={() => handleLinkClick("#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black text-xs font-semibold tracking-wide transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Initiate</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/10 text-white"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-[#0e1017]/95 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
                Navigation
              </span>
              <div className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Available</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className="text-left text-lg font-medium text-zinc-200 hover:text-cyan-400 transition-colors py-1"
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleLinkClick("#contact")}
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-center text-sm shadow-lg shadow-cyan-500/20"
            >
              Initiate Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
