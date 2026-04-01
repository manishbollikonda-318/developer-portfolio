'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'AuraGuard Encryption',
    category: 'Cybersecurity · Hackathon',
    description: 'Emotion-aware encryption system. Full-stack NLP pipeline classifying emotional context with AES-level encryption in real time — zero-trust security in a single sprint.',
    tech: ['Python', 'Streamlit', 'NLP', 'AES', 'REST API'],
    image: '/auraguard.png',
    color: '#6366f1',
    github: 'https://github.com/manishbollikonda-318',
  },
  {
    id: 2,
    title: 'Project VoltEdge',
    category: 'IoT · Cloud · AI',
    description: 'Secure IoT-to-cloud telemetry pipeline for critical grid data. Automated end-to-end data flows using n8n and integrated AI-driven supply chain models.',
    tech: ['Python', 'IoT', 'Cloud', 'n8n', 'API Integration'],
    image: '/voltedge.png',
    color: '#10b981',
    github: 'https://github.com/manishbollikonda-318',
  },
  {
    id: 3,
    title: 'AICROP-DETECTOR',
    category: 'Machine Learning · Agriculture',
    description: 'AI-powered Smart Farming with real-time crop recommendations, ML-based disease detection, live weather API, and an automated advisory bot for data-driven farming.',
    tech: ['Python', 'ML', 'Weather API', 'REST APIs', 'AI Bot'],
    image: '/aicrop.png',
    color: '#22c55e',
    github: 'https://github.com/manishbollikonda-318',
  },
  {
    id: 4,
    title: 'Academic Software Suite',
    category: 'Finance · Data Analysis',
    description: 'Three independent tools — Investment Portfolio Tracker, Expense & Budget Analyser, and Library Management System — each with external APIs and automated reports.',
    tech: ['Python', 'SQL', 'Data Analysis', 'API Integration', 'Finance'],
    image: '/academic_suite.png',
    color: '#f59e0b',
    github: 'https://github.com/manishbollikonda-318',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className="inline-block px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase backdrop-blur-xl border border-white/10"
              style={{ backgroundColor: `${project.color}18`, color: project.color }}
            >
              {project.category}
            </span>
          </div>

          {/* Floating action — appears on hover */}
          <div className="absolute bottom-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-7">
          <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-2.5 group-hover:text-neutral-100 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400/80 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.03] text-neutral-500 border border-white/[0.05] tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow — subtle */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
          style={{
            boxShadow: `inset 0 1px 0 0 ${project.color}10, 0 0 40px ${project.color}05`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} className="relative z-20 bg-[#090a0f] py-24 md:py-32 px-6 md:px-16 text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-[-150px] left-1/4 w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-1/3 w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-indigo-500 rounded-full" />
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">Selected Work</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects<span className="text-indigo-500">.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
