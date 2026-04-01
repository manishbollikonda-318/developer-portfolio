'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // ── Section 1: Name & Subheadings ──
  const opacityName = useTransform(scrollYProgress, [0, 0.04, 0.13, 0.16], [0, 1, 1, 0]);
  const yName = useTransform(scrollYProgress, [0, 0.16], [20, -40]);
  const scaleName = useTransform(scrollYProgress, [0, 0.16], [0.97, 1.01]);

  const opacitySub = useTransform(scrollYProgress, [0.02, 0.06, 0.13, 0.16], [0, 1, 1, 0]);
  const ySub = useTransform(scrollYProgress, [0.02, 0.16], [30, -40]);

  // ── Section 2: What I Do — 28%→35% in, holds→43%, fades by 48% ──
  const opacity2 = useTransform(scrollYProgress, [0.28, 0.33, 0.43, 0.48], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.28, 0.48], [50, -40]);

  // ── Section 3: Philosophy — 58%→63% in, holds→73%, fades by 78% ──
  const opacity3 = useTransform(scrollYProgress, [0.58, 0.63, 0.73, 0.78], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.58, 0.78], [50, -40]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">

      {/* ── SECTION 1 — Name, centered ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.p
          style={{ opacity: opacitySub, y: ySub }}
          className="text-xs md:text-sm uppercase tracking-[0.35em] text-neutral-300 mb-5 font-light will-change-transform drop-shadow-md"
        >
          AI / ML Engineer · Software Developer
        </motion.p>
        <motion.h1
          style={{ opacity: opacityName, y: yName, scale: scaleName }}
          className="text-5xl md:text-[7rem] font-extrabold tracking-tighter text-white leading-[0.95] drop-shadow-2xl will-change-transform"
        >
          Manish<br />Bollikonda<span className="text-indigo-400">.</span>
        </motion.h1>
        <motion.p
          style={{ opacity: opacitySub, y: ySub }}
          className="mt-7 text-base md:text-lg text-neutral-300 font-light max-w-md tracking-wide will-change-transform drop-shadow-md"
        >
          AI Generalist · Gen AI Engineer · Automation Architect
        </motion.p>
      </div>

      {/* ── SECTION 2 — What I Do, left aligned ── */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center px-8 md:px-20 will-change-transform"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-indigo-500 rounded-full" />
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-400/70 font-medium">What I Do</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            I build intelligent<br /><span className="text-neutral-500">digital systems.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-neutral-500/80 leading-relaxed max-w-md font-light">
            From NLP pipelines & LLM orchestration to IoT telemetry and end-to-end automation workflows.
          </p>
        </div>
      </motion.div>

      {/* ── SECTION 3 — Philosophy, right aligned ── */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-20 will-change-transform"
      >
        <div className="max-w-2xl text-right">
          <div className="flex items-center justify-end gap-3 mb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/70 font-medium">Philosophy</p>
            <div className="w-8 h-[2px] bg-emerald-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Bridging AI<br /><span className="text-neutral-500">& engineering.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-neutral-500/80 leading-relaxed max-w-md ml-auto font-light">
            Hackathon-tested. Production-ready. Building systems that think, adapt, and ship.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
