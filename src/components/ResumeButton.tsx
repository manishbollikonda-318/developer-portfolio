'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeButton() {
  const [open, setOpen] = useState(false);

  const RESUME_URL = 'https://drive.google.com/file/d/1_EZ1vgkRX3xJxPgy5_a-SoEiVGcuCsKO/view?usp=drivesdk';
  const DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1_EZ1vgkRX3xJxPgy5_a-SoEiVGcuCsKO';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex flex-col gap-2 mb-2"
          >
            {/* Preview */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200 shadow-lg shadow-black/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview Resume
            </a>

            {/* Download */}
            <a
              href={DOWNLOAD_URL}
              download
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-lg shadow-black/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl shadow-black/50 hover:shadow-white/20 transition-shadow duration-300"
        aria-label="Resume options"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg key="doc" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
