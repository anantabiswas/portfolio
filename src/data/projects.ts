export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  award?: string;
  description: string;
  image: string;
  tech: string[];
  stats: { label: string; value: string }[];
  liveUrl: string;
  githubUrl: string;
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    id: "aetheria-os",
    title: "Aetheria Spatial OS",
    tagline: "Next-generation 3D spatial desktop in the browser",
    category: "Spatial Web & WebGL",
    year: "2026",
    award: "Site of the Day",
    description:
      "An experimental browser operating system combining raymarched volumetric shaders, real-time physics simulation, and fluid glassmorphic windowing systems.",
    image: "/projects/aetheria.jpg",
    tech: ["Next.js 14", "WebGL", "Three.js", "Framer Motion", "Tailwind CSS"],
    stats: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Asset Size", value: "< 2.1 MB" },
      { label: "Recognition", value: "FWA & Awwwards" },
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "kroma-studio",
    title: "Kroma Generative Studio",
    tagline: "Node-based procedural shader engine & visual lab",
    category: "Creative Coding & WebGPU",
    year: "2025",
    award: "Developer Award",
    description:
      "A high-performance visual node graph tool designed for real-time generative visual art, procedural noise algorithms, and instant WebGPU shader compilation.",
    image: "/projects/kroma.jpg",
    tech: ["WebGPU", "TypeScript", "GLSL Shaders", "Canvas API", "Zustand"],
    stats: [
      { label: "Compute Nodes", value: "100+ Nodes" },
      { label: "Throughput", value: "120 FPS" },
      { label: "Render Engine", value: "WebGPU" },
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    accent: "from-amber-500/20 via-rose-500/10 to-transparent",
  },
  {
    id: "hyperion-finance",
    title: "Hyperion Telemetry",
    tagline: "High-throughput algorithmic trading canvas interface",
    category: "Fintech & Data Visualization",
    year: "2025",
    award: "Best UI/UX",
    description:
      "Ultra-low latency institutional market visualizer rendering 50,000+ streaming data points per frame with custom HTML5 Canvas pipelines and offscreen Web Workers.",
    image: "/projects/hyperion.jpg",
    tech: ["Next.js 14", "HTML5 Canvas", "Web Workers", "WebSockets", "Tailwind CSS"],
    stats: [
      { label: "Data Stream", value: "50k pts/sec" },
      { label: "Latency", value: "< 8ms" },
      { label: "Memory Footprint", value: "18 MB" },
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "vortex-audio",
    title: "Vortex Synthesizer",
    tagline: "Spatial audio-reactive 3D waveform instrument",
    category: "Interactive Audio & Physics",
    year: "2024",
    award: "Interactive Innovation",
    description:
      "A dual-oscillator polyphonic synthesizer powered by Web Audio API and AudioWorklets, coupled with real-time Fast Fourier Transform 3D audio particle meshes.",
    image: "/projects/vortex.jpg",
    tech: ["Web Audio API", "AudioWorklet", "Canvas 2D", "Framer Motion", "TypeScript"],
    stats: [
      { label: "Sample Rate", value: "48 kHz" },
      { label: "Polyphony", value: "16 Voices" },
      { label: "Harmonics", value: "Real-time FFT" },
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    accent: "from-purple-500/20 via-cyan-500/10 to-transparent",
  },
];
