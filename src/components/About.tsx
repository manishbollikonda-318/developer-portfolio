'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { label: 'AI & Automation', items: ['n8n', 'AI Bots', 'MCP Servers', 'LLM Orchestration', 'Gen AI', 'RAG'], color: '#6366f1' },
  { label: 'ML Frameworks', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Streamlit', 'OpenCV'], color: '#8b5cf6' },
  { label: 'API & Integration', items: ['REST APIs', 'Webhooks', 'OAuth', 'Third-Party Integrations'], color: '#10b981' },
  { label: 'Languages', items: ['Python', 'C', 'SQL'], color: '#f59e0b' },
  { label: 'Security & Infra', items: ['AES Encryption', 'IoT Cloud', 'Zero-Trust', 'Docker'], color: '#ef4444' },
  { label: 'Dev Tools', items: ['Git', 'VS Code', 'Cursor', 'Bolt.new', 'v0.dev', 'Canva'], color: '#06b6d4' },
];

const experience = {
  title: 'Information Technology Intern',
  company: 'DLT Solutions',
  period: 'Dec 2025 – Feb 2026',
  highlights: [
    'Designed and automated 5+ recurring data workflows, eliminating manual reporting overhead.',
    'Analysed operational data sets and produced structured insight reports for decision-making.',
    'Authored technical documentation covering 3 core internal processes.',
  ],
};

const education = [
  { degree: 'B.Tech — AIML', institution: 'GRIET, Hyderabad', year: '2025 – 2029 · 1st Year' },
  { degree: 'Senior Secondary (XII)', institution: 'Sri Chaitanya, Madhapur', year: '2025 · 94.70%' },
  { degree: 'SSC (10th Grade)', institution: 'Sri Chaitanya School, Warangal', year: '2023 · 10.0 GPA' },
];

const certifications = [
  'HackerRank — C Gold Badge (2026)',
  'Cisco Generative AI (2025)',
  'Cisco Networking (2025)',
  'DLT Solutions Internship Certificate',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function About() {
  return (
    <section className="relative z-20 bg-[#0c0e14] py-24 md:py-32 px-6 md:px-16 text-white overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/[0.025] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-0 w-[300px] h-[300px] bg-indigo-600/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-violet-500 rounded-full" />
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">Background</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About<span className="text-violet-500">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left — Experience & Education */}
          <div className="space-y-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-base font-semibold text-white mb-5 tracking-wide flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                Experience
              </h3>
              <div className="relative pl-6 border-l border-white/[0.08]">
                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/30" />
                <p className="text-white font-medium text-sm">{experience.title}</p>
                <p className="text-neutral-500 text-xs mt-1">{experience.company} · {experience.period}</p>
                <ul className="mt-4 space-y-2.5">
                  {experience.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-neutral-400/90 leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-base font-semibold text-white mb-5 tracking-wide flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((e, i) => (
                  <div key={i} className="relative pl-6 border-l border-white/[0.06]">
                    <div className="absolute left-[-4px] top-1.5 w-[8px] h-[8px] rounded-full bg-emerald-500/50" />
                    <p className="text-white font-medium text-sm">{e.degree}</p>
                    <p className="text-neutral-500 text-xs mt-0.5">{e.institution} · {e.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="text-base font-semibold text-white mb-5 tracking-wide flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Certifications
              </h3>
              <ul className="space-y-2.5">
                {certifications.map((c, i) => (
                  <li key={i} className="text-sm text-neutral-400/90 flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-amber-500/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right — Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-7"
          >
            <h3 className="text-base font-semibold text-white mb-4 tracking-wide flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Technical Skills
            </h3>
            {skills.map((group) => (
              <motion.div key={group.label} variants={itemVariants}>
                <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-2.5 font-medium">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-neutral-300 border transition-all duration-200 cursor-default hover:scale-[1.03]"
                      style={{
                        backgroundColor: `${group.color}08`,
                        borderColor: `${group.color}15`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
