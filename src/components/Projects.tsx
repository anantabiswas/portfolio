"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, X, Layers, ArrowUpRight, Trophy } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS, Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative w-full py-32 px-6 md:px-16 z-20 bg-[#090a0f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-amber-500/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Case Studies & Systems</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              Selected Works
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed">
            A curated collection of spatial web applications, procedural graphics engines, and
            high-throughput canvas interfaces engineered for maximum visual impact.
          </p>
        </div>

        {/* 2x2 Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(6,182,212,0.12)]"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Shroud */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Award Pill */}
                {project.award && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-amber-500/40 text-amber-300 backdrop-blur-md text-xs font-mono">
                    <Trophy className="w-3 h-3 text-amber-400" />
                    <span>{project.award}</span>
                  </div>
                )}

                {/* Category & Year Pill */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-zinc-300 backdrop-blur-md text-xs font-mono">
                  <span>{project.year}</span>
                </div>

                {/* Quick inspect button hover hint */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-7 sm:p-8 space-y-6 justify-between">
                <div className="space-y-3">
                  <div className="text-xs uppercase font-mono tracking-widest text-cyan-400">
                    {project.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5 bg-white/[0.01] rounded-lg px-2">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xs font-bold font-mono text-zinc-200">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300 bg-white/[0.04] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e1017] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-zinc-400 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 pr-10">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
                  <Layers className="w-4 h-4" />
                  <span>{selectedProject.category}</span>
                  <span>•</span>
                  <span>{selectedProject.year}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-zinc-300 text-lg">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Preview Image in Modal */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Architecture Deep Dive */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
                  Engineering Overview
                </h4>
                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                  {selectedProject.description} Designed from the ground up for
                  maximum visual fidelity and ultra-smooth frame delivery. The
                  pipeline utilizes custom shaders, hardware acceleration, and
                  optimized memory models to achieve seamless real-time interactivity.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                {selectedProject.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-bold font-mono text-cyan-400">
                      {s.value}
                    </p>
                    <p className="text-xs text-zinc-400 uppercase font-mono tracking-wider">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-mono text-zinc-200 bg-white/[0.06] border border-white/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-center text-sm transition-all shadow-lg shadow-cyan-500/20"
                >
                  Launch Project
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
