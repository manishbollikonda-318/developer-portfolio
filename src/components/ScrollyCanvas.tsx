'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 192;

const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.041s.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number>(-1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload all images with progress
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = imgs;
          setIsLoaded(true);
        }
      };
      imgs[i] = img;
    }
  }, []);

  // Resize canvas to match device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  }, []);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // Draw function — skip duplicate frames for performance
  const drawFrame = useCallback((index: number) => {
    if (index === lastFrameRef.current) return; // Skip if same frame
    lastFrameRef.current = index;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;

    // Object-fit: cover
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Subscribe to frame changes
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    if (isLoaded) {
      drawFrame(Math.round(latest));
    }
  });

  // Draw first frame once loaded
  useEffect(() => {
    if (isLoaded) drawFrame(0);
  }, [isLoaded, drawFrame]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#090a0f]">
      {/* Loading state with progress */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#090a0f]">
          <div className="flex flex-col items-center gap-5">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-2 border-white/[0.06] rounded-full" />
              <div
                className="absolute inset-0 border-2 border-transparent border-t-indigo-500 rounded-full animate-spin"
                style={{ animationDuration: '0.8s' }}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase font-medium">Loading Experience</p>
              <div className="w-32 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <p className="text-white/20 text-[10px] tabular-nums">{loadProgress}%</p>
            </div>
          </div>
        </div>
      )}

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="block" />
        <Overlay scrollYProgress={scrollYProgress} />

        {/* Scroll indicator — visible only at start */}
        {isLoaded && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
