"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowDown, Code2, Sparkles, Terminal, Cpu } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
  loadedProgress: number;
  isReady: boolean;
}

export default function Overlay({
  scrollYProgress,
  loadedProgress,
  isReady,
}: OverlayProps) {
  // Section 1: 0% scroll (Center aligned)
  const s1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 0.85, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.2], [0, -90]);
  const s1Scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.92]);

  // Section 2: 30% scroll (Left aligned)
  const s2Opacity = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.38, 0.48],
    [0, 1, 1, 0]
  );
  const s2Y = useTransform(scrollYProgress, [0.18, 0.28, 0.48], [70, 0, -70]);
  const s2X = useTransform(scrollYProgress, [0.18, 0.28, 0.48], [-40, 0, 10]);

  // Section 3: 60% scroll (Right aligned)
  const s3Opacity = useTransform(
    scrollYProgress,
    [0.48, 0.58, 0.68, 0.78],
    [0, 1, 1, 0]
  );
  const s3Y = useTransform(scrollYProgress, [0.48, 0.58, 0.78], [70, 0, -70]);
  const s3X = useTransform(scrollYProgress, [0.48, 0.58, 0.78], [40, 0, -10]);

  // Section 4: 85% - 100% scroll (Transition to Projects)
  const s4Opacity = useTransform(
    scrollYProgress,
    [0.78, 0.88, 0.98],
    [0, 1, 1]
  );
  const s4Y = useTransform(scrollYProgress, [0.78, 0.88, 1], [60, 0, -20]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-16 overflow-hidden">
        
        {/* Preload Progress Indicator (Disappears when 100%) */}
        {!isReady && (
          <div className="absolute z-30 inset-0 flex flex-col items-center justify-center bg-[#090a0f]/90 backdrop-blur-md transition-opacity duration-700">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
                <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
              <div className="text-center space-y-1">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-mono">
                  Loading Frame Sequence
                </p>
                <p className="text-2xl font-bold font-mono text-zinc-100">
                  {loadedProgress}%
                </p>
              </div>
              <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-amber-500 transition-all duration-200"
                  style={{ width: `${loadedProgress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* SECTION 1: 0% Scroll - Hero (Center Aligned) */}
        <motion.div
          style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
          className="max-w-4xl w-full text-center flex flex-col items-center space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-300 font-mono">
              Available for Q3/Q4 Projects
            </span>
          </div>

          {/* Main Title & Identity */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white drop-shadow-2xl">
              ANANTA
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-300 tracking-wide">
              Creative Developer & Interaction Architect
            </p>
          </div>

          <p className="max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            Specializing in high-performance WebGL, HTML5 Canvas physics, and
            Awwwards-grade digital narratives with sub-16ms precision.
          </p>

          {/* Scroll CTA Indicator */}
          <div className="pt-8 flex flex-col items-center gap-2.5 text-zinc-500">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-400">
              Scroll to scrub timeline
            </span>
            <div className="w-5 h-9 rounded-full border border-zinc-500/40 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-amber-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: 30% Scroll - Interactive Philosophy (Left Aligned) */}
        <motion.div
          style={{ opacity: s2Opacity, y: s2Y, x: s2X }}
          className="absolute left-6 md:left-20 max-w-xl text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.25em] uppercase">
            <Code2 className="w-4 h-4" />
            <span>01 / Craft & Execution</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              I build digital experiences.
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
          </div>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Sculpting fluid user interfaces where interactive physics, real-time
            canvas rendering, and tactile micro-animations converge to leave an
            unforgettable visual impression.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {[
              "HTML5 Canvas 2D",
              "60 FPS Scrubbing",
              "Custom Shader Hooks",
              "Sub-16ms Frame Budget",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* SECTION 3: 60% Scroll - Engineering Rigor (Right Aligned) */}
        <motion.div
          style={{ opacity: s3Opacity, y: s3Y, x: s3X }}
          className="absolute right-6 md:right-20 max-w-xl text-right space-y-6"
        >
          <div className="inline-flex items-center justify-end gap-2 text-amber-400 font-mono text-xs tracking-[0.25em] uppercase">
            <span>02 / Synthesis & Performance</span>
            <Cpu className="w-4 h-4" />
          </div>

          <div className="space-y-2 flex flex-col items-end">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Bridging design and engineering.
            </h2>
            <div className="h-1 w-20 bg-gradient-to-l from-amber-500 to-transparent rounded-full" />
          </div>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Where pixel-perfect aesthetics meet bulletproof software engineering.
            Every frame is preloaded, every gesture responds with zero latency,
            and every interaction is calibrated for maximum tactile satisfaction.
          </p>

          {/* Stats Bar */}
          <div className="flex justify-end gap-6 pt-2">
            <div className="text-right">
              <p className="text-2xl font-bold font-mono text-white">74</p>
              <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider">
                Sync Frames
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-right">
              <p className="text-2xl font-bold font-mono text-amber-400">0ms</p>
              <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider">
                Input Lag
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-right">
              <p className="text-2xl font-bold font-mono text-cyan-400">100%</p>
              <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider">
                Fluid Motion
              </p>
            </div>
          </div>
        </motion.div>

        {/* SECTION 4: 90% Scroll - Work Transition (Center Aligned) */}
        <motion.div
          style={{ opacity: s4Opacity, y: s4Y }}
          className="absolute bottom-16 max-w-xl text-center flex flex-col items-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.25em] uppercase">
            <Terminal className="w-4 h-4" />
            <span>03 / Selected Works</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Explore Case Studies
          </h3>
          <p className="text-sm text-zinc-400 max-w-md">
            Scroll down to inspect featured web apps, generative experiments, and
            open-source architectural systems.
          </p>
          <div className="pt-2">
            <ArrowDown className="w-5 h-5 text-zinc-400 animate-bounce" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
