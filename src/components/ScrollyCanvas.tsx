"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { TOTAL_FRAMES, getFramePath } from "@/data/frames";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const isRenderingRef = useRef<boolean>(false);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Framer Motion useScroll hook mapped across the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // High-performance canvas render function with object-fit: cover logic
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Retrieve cached image or fall back to nearest loaded frame
    let img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame as fallback to prevent any flicker
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = imagesRef.current[index - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[index + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Retina / High-DPI support capped at 2 for performance
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    const targetW = Math.round(displayWidth * dpr);
    const targetH = Math.round(displayHeight * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    // Object-fit: cover calculation
    const hRatio = canvas.width / img.naturalWidth;
    const vRatio = canvas.height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio);

    const drawW = img.naturalWidth * ratio;
    const drawH = img.naturalHeight * ratio;
    const centerShiftX = (canvas.width - drawW) / 2;
    const centerShiftY = (canvas.height - drawH) / 2;

    // Fill background with exact matching deep tone
    ctx.fillStyle = "#090a0f";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw frame centered and covered
    ctx.drawImage(
      img,
      0,
      0,
      img.naturalWidth,
      img.naturalHeight,
      centerShiftX,
      centerShiftY,
      drawW,
      drawH
    );
  }, []);

  // Preload all 74 image frames on mount
  useEffect(() => {
    let active = true;
    let localLoaded = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    // Preload frame 0 first for instant visual feedback
    const frame0 = new Image();
    frame0.src = getFramePath(0);
    frame0.onload = () => {
      if (!active) return;
      images[0] = frame0;
      localLoaded++;
      setLoadedCount(localLoaded);
      // Immediately draw frame 0 so the canvas is never blank
      renderFrame(0);

      // Now preload remaining frames in parallel
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          if (!active) return;
          images[i] = img;
          localLoaded++;
          setLoadedCount(localLoaded);
          if (localLoaded >= TOTAL_FRAMES) {
            setIsReady(true);
          }
        };
        img.onerror = () => {
          if (!active) return;
          localLoaded++;
          setLoadedCount(localLoaded);
          if (localLoaded >= TOTAL_FRAMES) {
            setIsReady(true);
          }
        };
      }
    };

    return () => {
      active = false;
    };
  }, [renderFrame]);

  // Handle scroll progress change with requestAnimationFrame throttling
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
    );

    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      if (!isRenderingRef.current) {
        isRenderingRef.current = true;
        requestAnimationFrame(() => {
          renderFrame(frameIndex);
          isRenderingRef.current = false;
        });
      }
    }
  });

  // Resize listener to maintain crispness and responsive cover layout
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  const loadedPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div
      ref={containerRef}
      id="hero-scroll"
      className="relative w-full h-[500vh] bg-[#090a0f]"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#090a0f]">
        
        {/* HTML5 Canvas rendering image sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block object-cover z-0"
        />

        {/* Cinematic atmospheric edge blends & vignette */}
        <div className="absolute inset-0 pointer-events-none z-[5] bg-gradient-to-t from-[#090a0f] via-transparent to-[#090a0f]/80" />
        <div className="absolute inset-0 pointer-events-none z-[5] bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#090a0f_95%)] opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none z-[6] bg-gradient-to-t from-[#090a0f] via-[#090a0f]/90 to-transparent" />

        {/* Parallax Overlay */}
        <Overlay
          scrollYProgress={scrollYProgress}
          loadedProgress={loadedPercentage}
          isReady={isReady || loadedCount > 20}
        />
      </div>
    </div>
  );
}
