'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const navItems = [
  { label: 'Home', target: 'hero' },
  { label: 'Projects', target: 'projects' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('hero');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 300);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach(({ target }) => {
      const el = document.getElementById(target);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-full bg-[#090a0f]/60 backdrop-blur-2xl border border-white/[0.06] shadow-2xl shadow-black/40"
        >
          {navItems.map(({ label, target }) => (
            <button
              key={target}
              onClick={() => scrollTo(target)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 ${
                active === target ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {active === target && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.1]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
