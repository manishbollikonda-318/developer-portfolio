'use client';

import React from 'react';
import { motion } from 'framer-motion';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/manish-bollikonda-894bb237a',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.47 2H3.53A1.45 1.45 0 002.06 3.43v17.14A1.45 1.45 0 003.53 22h16.94a1.45 1.45 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0012.85 13a2 2 0 00-.1.73v5h-3v-9h3v1.2a3 3 0 012.71-1.5c2 0 3.45 1.29 3.45 4.06v5.25z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/manishbollikonda-318',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Unstop',
    href: 'https://unstop.com/u/manisbol43293',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#090a0f] py-24 md:py-32 px-6 md:px-16 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-indigo-500 rounded-full" />
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">Get In Touch</p>
            <div className="w-8 h-[2px] bg-indigo-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Let&apos;s build<br /><span className="text-neutral-500">something together.</span>
          </h2>
          <p className="text-neutral-500/80 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-8 font-light">
            Open to internship opportunities in AI/ML engineering, automation, and software development. Let&apos;s connect.
          </p>

          {/* Email CTA */}
          <motion.a
            href="mailto:manishbollikonda318@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-100 transition-colors duration-200 shadow-xl shadow-white/[0.08]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            manishbollikonda318@gmail.com
          </motion.a>

          <p className="mt-4 text-neutral-600 text-xs tracking-wide">+91 93324 05567 · Hyderabad, Telangana</p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mt-10"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center text-neutral-600 text-[11px] tracking-wider">
        <p>© {new Date().getFullYear()} Manish Bollikonda</p>
        <p className="mt-2 md:mt-0">Next.js · Framer Motion · Canvas</p>
      </div>
    </section>
  );
}
