"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Gauge, Compass } from "lucide-react";

export default function Experience() {
  const pillars = [
    {
      icon: Gauge,
      number: "01",
      title: "Sub-16ms Frame Budget",
      accent: "text-cyan-400",
      description:
        "Every animation, scroll scrub, and canvas render is optimized for 60/120 FPS displays. We eliminate layout thrashing, leverage offscreen canvas buffers, and keep the main thread unblocked.",
      tags: ["RAF Pipelines", "DevicePixelRatio Adapters", "WebGL Fallbacks"],
    },
    {
      icon: Eye,
      number: "02",
      title: "Tactile Visual Rhythm",
      accent: "text-amber-400",
      description:
        "Great creative development is not just about motion—it is about psychological weight and intent. Springs are tuned with physical mass and damping, micro-interactions reward curiosity, and typography breathes.",
      tags: ["Spring Physics", "Micro-Interactions", "Aesthetic Weight"],
    },
    {
      icon: Compass,
      number: "03",
      title: "Architectural Rigor",
      accent: "text-emerald-400",
      description:
        "Experimental visuals without technical stability are meaningless. All components are built with Next.js App Router, strict TypeScript definitions, dynamic imports, and accessible semantic structures.",
      tags: ["App Router", "Strict TypeScript", "Modular Componentry"],
    },
  ];

  const milestones = [
    {
      period: "2024 — Present",
      role: "Lead Creative Developer",
      company: "Independent Studio",
      highlight: "Engineering bespoke 3D web apps, scrollytelling narratives, and interactive marketing platforms for high-growth tech brands.",
    },
    {
      period: "2022 — 2024",
      role: "Senior Frontend & Interaction Engineer",
      company: "Digital Dynamics",
      highlight: "Architected high-throughput data visualizations and canvas animation engines serving over 2.4 million monthly active users.",
    },
    {
      period: "2020 — 2022",
      role: "Creative Technologist",
      company: "Aether Labs",
      highlight: "Explored early WebGL, Three.js shaders, and procedural sound interfaces for generative art installations and interactive product launches.",
    },
  ];

  return (
    <section id="philosophy" className="relative w-full py-32 px-6 md:px-16 bg-[#090a0f] z-20">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Philosophy Intro */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-amber-400 font-mono text-xs tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>Engineering Philosophy</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <h2 className="lg:col-span-7 text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Aesthetics that stun. <br />
              <span className="text-zinc-500">Performance that persists.</span>
            </h2>
            <p className="lg:col-span-5 text-zinc-400 text-base leading-relaxed pt-2">
              Modern users have zero tolerance for sluggish animations or jarring layout shifts.
              My work unites cinematic visual storytelling with mathematical precision to build
              digital experiences that feel alive.
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-300 group hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-500 tracking-widest">
                      {pillar.number}
                    </span>
                    <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${pillar.accent}`} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/5">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/[0.03] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Milestones / Journey */}
        <div className="space-y-8 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Journey & Impact
            </h3>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Selected Chronology
            </span>
          </div>

          <div className="divide-y divide-white/5 border-y border-white/5">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group"
              >
                <div className="md:col-span-3 font-mono text-xs text-cyan-400">
                  {m.period}
                </div>
                <div className="md:col-span-4">
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {m.role}
                  </h4>
                  <p className="text-xs font-mono text-zinc-500">{m.company}</p>
                </div>
                <div className="md:col-span-5 text-sm text-zinc-400 leading-relaxed">
                  {m.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
