"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Orbit, Wrench, Layers } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Arsenal", icon: Layers },
    { id: "creative", label: "Creative & Motion", icon: Orbit },
    { id: "frontend", label: "Frontend & Core", icon: Code },
    { id: "systems", label: "Systems & Real-time", icon: Terminal },
    { id: "tools", label: "Tools & 3D", icon: Wrench },
  ];

  const skills = [
    {
      name: "HTML5 Canvas & 2D Context",
      category: "creative",
      level: "Mastery",
      desc: "Pixel buffers, image sequence scrubbing, particle systems, offscreen rendering.",
      tag: "Canvas API",
    },
    {
      name: "Framer Motion",
      category: "creative",
      level: "Advanced",
      desc: "Scroll-linked useScroll orchestration, spring physics, layout animations.",
      tag: "Motion",
    },
    {
      name: "WebGL & Three.js",
      category: "creative",
      level: "Proficient",
      desc: "Custom shaders, post-processing pipelines, geometry instancing, lighting.",
      tag: "3D",
    },
    {
      name: "Next.js 14 (App Router)",
      category: "frontend",
      level: "Mastery",
      desc: "Server components, streaming SSR, route handlers, Turbopack optimizations.",
      tag: "Next.js",
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: "Mastery",
      desc: "Strict type systems, generics, custom utility types, zero any policy.",
      tag: "Language",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "Mastery",
      desc: "Modern design token architectures, dark mode systems, custom glass plugins.",
      tag: "Styling",
    },
    {
      name: "Web Audio API",
      category: "systems",
      level: "Advanced",
      desc: "Synthesizers, audio visualization, FFT frequency analyzers, AudioWorklets.",
      tag: "Audio",
    },
    {
      name: "WebSockets & Streaming",
      category: "systems",
      level: "Advanced",
      desc: "Low-latency streaming telemetry, bi-directional state, reconnection guards.",
      tag: "Real-time",
    },
    {
      name: "Web Workers",
      category: "systems",
      level: "Proficient",
      desc: "Heavy data crunching and procedural generation off the browser main thread.",
      tag: "Performance",
    },
    {
      name: "Blender & 3D Assets",
      category: "tools",
      level: "Proficient",
      desc: "Low-poly modeling, UV unwrapping, Draco compression, GLTF export.",
      tag: "3D Tooling",
    },
    {
      name: "Figma & Design Systems",
      category: "tools",
      level: "Advanced",
      desc: "Tokens, auto-layout components, prototyping micro-interactions.",
      tag: "Design",
    },
    {
      name: "Vercel & CI/CD",
      category: "tools",
      level: "Mastery",
      desc: "Edge middleware, analytics, preview deployments, lighthouse automation.",
      tag: "DevOps",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative w-full py-32 px-6 md:px-16 bg-[#090a0f] z-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              Skills & Capabilities
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-md">
            Specialized toolkit refined over years of building high-performance creative web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300 group hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between pb-3">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-cyan-400 border border-white/10">
                  {skill.tag}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {skill.level}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h3>

              <p className="text-zinc-400 text-xs leading-relaxed pt-2">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
