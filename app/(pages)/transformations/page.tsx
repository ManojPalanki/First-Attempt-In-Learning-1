'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const transformations = [
  { name: 'Rahul Mehta', before: '92 kg', after: '75 kg', weeks: '12 weeks', type: 'Fat Loss', lostGained: '-17 kg fat lost', city: 'Mumbai' },
  { name: 'Arjun Kumar', before: '65 kg', after: '78 kg', weeks: '16 weeks', type: 'Muscle Gain', lostGained: '+13 kg muscle', city: 'Bangalore' },
  { name: 'Suresh Patel', before: '105 kg', after: '82 kg', weeks: '12 weeks', type: 'Fat Loss', lostGained: '-23 kg fat lost', city: 'Ahmedabad' },
  { name: 'Deepak Singh', before: '88 kg', after: '72 kg', weeks: '10 weeks', type: 'Fat Loss', lostGained: '-16 kg fat lost', city: 'Delhi' },
  { name: 'Vikram Nair', before: '60 kg', after: '74 kg', weeks: '14 weeks', type: 'Muscle Gain', lostGained: '+14 kg muscle', city: 'Chennai' },
  { name: 'Ankit Sharma', before: '95 kg', after: '78 kg', weeks: '12 weeks', type: 'Fat Loss', lostGained: '-17 kg fat lost', city: 'Pune' },
  { name: 'Rohan Das', before: '58 kg', after: '68 kg', weeks: '12 weeks', type: 'Beginner', lostGained: '+10 kg muscle', city: 'Kolkata' },
  { name: 'Manish Verma', before: '110 kg', after: '87 kg', weeks: '16 weeks', type: 'Fat Loss', lostGained: '-23 kg fat lost', city: 'Hyderabad' },
  { name: 'Kartik Gupta', before: '63 kg', after: '75 kg', weeks: '14 weeks', type: 'Beginner', lostGained: '+12 kg muscle', city: 'Jaipur' },
];

const filters = [
  { label: 'All', emoji: '🔴', value: 'All' },
  { label: 'Fat Loss', emoji: '⚡', value: 'Fat Loss' },
  { label: 'Muscle Gain', emoji: '💪', value: 'Muscle Gain' },
  { label: 'Beginner', emoji: '🔥', value: 'Beginner' },
];

export default function TransformationsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? transformations : transformations.filter((t) => t.type === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 flex items-center" style={{ paddingTop: 'calc(72px + 60px)', background: 'linear-gradient(180deg, #111 0%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,26,26,0.12) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 text-center w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="section-tag mb-3">PROOF OF RESULTS</motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(48px, 8vw, 90px)', letterSpacing: '0.03em', lineHeight: 0.95 }} className="text-white mb-6">
              REAL <span style={{ color: '#ff1a1a' }}>TRANSFORMATIONS</span>
            </motion.h1>
            <div className="divider-red mx-auto mb-5" />
            <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-xl mx-auto">
              These results are real. No filters, no editing — just commitment, hard work, and the right guidance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: '#111', borderBottom: '1px solid #1e1e1e' }} className="py-5 sticky top-16 z-30">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 flex flex-wrap items-center gap-2.5">
          <span className="text-gray-500 text-xs uppercase mr-1" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>Filter:</span>
          {filters.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  letterSpacing: '0.06em',
                  background: isActive ? '#ff1a1a' : '#1a1a1a',
                  color: isActive ? '#ffffff' : '#cccccc',
                  border: `1px solid ${isActive ? '#ff1a1a' : '#2e2e2e'}`,
                  boxShadow: isActive ? '0 0 16px rgba(255,26,26,0.3)' : 'none',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <span>{f.emoji}</span>
                <span>{f.label.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ background: '#0f0f0f' }} className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filtered.map((t, i) => (
                <motion.div
                  key={`${t.name}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="card-dark overflow-hidden rounded-none"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
                >
                  {/* Before/After Images */}
                  <div className="relative h-52 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      <Image src="/before1.png" alt={`${t.name} Before`} fill className="object-cover grayscale" />
                      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.1)' }} />
                      <div className="absolute bottom-2 left-2 text-xs font-bold px-2 py-0.5" style={{ background: 'rgba(0,0,0,0.85)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>BEFORE</div>
                      <div className="absolute top-2 left-2 text-xs text-gray-300" style={{ fontFamily: 'Oswald, sans-serif' }}>{t.before}</div>
                    </div>
                    <div className="w-1/2 relative overflow-hidden">
                      <Image src="/coach.png" alt={`${t.name} After`} fill className="object-cover object-top" />
                      <div className="absolute bottom-2 right-2 text-xs font-bold px-2 py-0.5" style={{ background: '#ff1a1a', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>AFTER</div>
                      <div className="absolute top-2 right-2 text-xs text-white font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>{t.after}</div>
                    </div>
                    {/* Center divider */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-7 h-7 rounded-full bg-black border-2 border-red-500 flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                      </div>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '18px', letterSpacing: '0.05em' }} className="text-white">{t.name}</h3>
                        <p className="text-gray-500 text-xs">{t.city}</p>
                      </div>
                      <span className="text-xs px-2 py-0.5 mt-0.5" style={{ background: 'rgba(255,26,26,0.1)', color: '#ff6b6b', border: '1px solid rgba(255,26,26,0.25)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                        {t.type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-bold text-sm">{t.lostGained}</span>
                      <span className="text-gray-500 text-xs">{t.weeks}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#111', borderTop: '1px solid #222' }} className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(32px, 5vw, 52px)' }} className="text-white mb-4">
            YOUR TRANSFORMATION IS <span style={{ color: '#ff1a1a' }}>NEXT</span>
          </h2>
          <p className="text-gray-400 mb-8">Join 6000+ people who have already changed their lives. Your journey starts with one decision.</p>
          <a href="/contact" className="btn-primary inline-block">Start My Transformation</a>
        </div>
      </section>
    </>
  );
}
