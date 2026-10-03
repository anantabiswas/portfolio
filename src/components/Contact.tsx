"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Copy,
  Check,
  Mail,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>("");

  const email = "ananta.dev@outlook.com";

  // Update live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Fire fireworks confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#06b6d4", "#f59e0b", "#3b82f6", "#ffffff"],
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    { label: "GitHub", href: "https://github.com", icon: GithubIcon },
    { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
    { label: "X / Twitter", href: "https://twitter.com", icon: TwitterIcon },
  ];

  return (
    <section id="contact" className="relative w-full py-32 px-6 md:px-16 bg-[#090a0f] z-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-t from-cyan-500/10 via-amber-500/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Initiate Collaboration</span>
        </div>

        {/* Hero Contact Text */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05]">
            Have an ambitious project in mind? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400">
              Let&apos;s build it.
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            I partner with forward-thinking design teams, founders, and studios to
            engineer high-impact digital experiences that push browser boundaries.
          </p>
        </div>

        {/* Interactive Email Copy Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          onClick={handleCopyEmail}
          className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/15 hover:border-cyan-500/40 backdrop-blur-2xl cursor-pointer group shadow-2xl transition-all duration-300"
        >
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-400 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              Direct Electronic Mail
            </span>
            <div className="text-2xl sm:text-4xl md:text-5xl font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
              {email}
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 group-hover:bg-cyan-500 group-hover:text-black text-white font-mono text-xs uppercase tracking-wider transition-all duration-300">
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400 group-hover:text-black" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Click to Copy</span>
              </>
            )}
          </div>
        </motion.div>

        {/* Metadata Footer Bar: Location & Clock + Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
          
          {/* Status */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Current Status
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-sm font-medium text-zinc-200">
                Accepting select Q3/Q4 contracts
              </p>
            </div>
          </div>

          {/* Time Zone */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-zinc-400" />
              Local Time (IST / UTC+5:30)
            </span>
            <p className="text-sm font-mono font-semibold text-zinc-200">
              {time || "12:45:00"} • New Delhi, India
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Networks
            </span>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-500/50 hover:bg-white/[0.08] transition-all"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 ml-2"
              >
                <span>Write</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
