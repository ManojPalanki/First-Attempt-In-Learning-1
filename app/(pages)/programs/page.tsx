'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ChevronRight, Target, TrendingUp, Zap, Clock, Users, Award, Dumbbell, Leaf, BarChart2, MessageCircle, Flame } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const WHATSAPP_URL = 'https://wa.me/917672096669?text=Hi%20Praveen%20I%20want%20to%20join%20your%20fitness%20coaching';

const programs = [
  {
    id: 1,
    icon: Target,
    tag: 'MOST POPULAR',
    title: '90 Day Body Transformation',
    duration: '12 Weeks',
    price: '₹9,999',
    priceNote: 'Starting from',
    audience: 'For anyone serious about a complete physical transformation',
    description: 'Our flagship program designed to completely reinvent your body in 90 days. This comprehensive plan combines personalized workout programming, custom nutrition planning, and weekly accountability check-ins to deliver maximum results.',
    features: [
      { icon: Dumbbell, label: 'Personalized Workout Plan' },
      { icon: Leaf, label: 'Custom Indian Diet Plan' },
      { icon: BarChart2, label: 'Weekly Progress Tracking' },
      { icon: MessageCircle, label: 'WhatsApp Coach Support (24/7)' },
      { icon: Flame, label: '90 Day Transformation Program' },
    ],
    includes: [
      'Personalized Workout Plan (6 days/week)',
      'Custom Indian Diet Plan',
      'Weekly Progress Check-ins',
      'Body Composition Tracking',
      'WhatsApp Support (24/7)',
      'Supplement Guidance',
      'Mindset Coaching',
      'Final Transformation Review',
    ],
    benefits: ['Fat Loss', 'Muscle Building', 'Strength Gain', 'Better Sleep', 'Increased Confidence'],
    color: '#ff1a1a',
  },
  {
    id: 2,
    icon: TrendingUp,
    tag: null,
    title: 'Fat Loss Program',
    duration: '8–12 Weeks',
    price: '₹9,999 – ₹14,999',
    priceNote: '',
    audience: 'For people struggling to lose weight and belly fat',
    description: 'A science-backed fat loss protocol that combines strategic caloric management, targeted cardio, and nutrition timing to help you burn stubborn fat while preserving muscle mass.',
    features: [
      { icon: Flame, label: 'Calorie Deficit Strategy' },
      { icon: Dumbbell, label: 'Cardio & HIIT Protocols' },
      { icon: Leaf, label: 'Nutrition Coaching' },
      { icon: BarChart2, label: 'Body Composition Tracking' },
      { icon: MessageCircle, label: 'WhatsApp Coach Support' },
    ],
    includes: [
      'Calorie Deficit Strategy',
      'Cardio & HIIT Protocols',
      'Meal Timing Plan',
      'Fat Loss Diet Chart',
      'Weekly Body Measurements',
      'Cheat Meal Strategy',
      'Plateau Breaking Techniques',
      'End-to-End Support',
    ],
    benefits: ['Rapid Fat Loss', 'Better Metabolism', 'Reduced Belly Fat', 'Improved Energy', 'Visible Results'],
    color: '#e53e3e',
  },
  {
    id: 3,
    icon: Zap,
    tag: null,
    title: 'Muscle Building Program',
    duration: '12–16 Weeks',
    price: '₹12,999',
    priceNote: 'Starting from',
    audience: 'For skinny guys and beginners who want to build muscle',
    description: 'A progressive overload muscle building system that helps you gain lean muscle mass through structured hypertrophy training combined with a high-protein nutrition plan.',
    features: [
      { icon: Dumbbell, label: 'Progressive Overload Plan' },
      { icon: Leaf, label: 'High Protein Diet Plan' },
      { icon: BarChart2, label: 'Strength & Muscle Tracking' },
      { icon: MessageCircle, label: 'WhatsApp Coach Support' },
      { icon: Flame, label: 'Supplement Stack Guide' },
    ],
    includes: [
      'Progressive Overload Program',
      'High Protein Diet Plan',
      'Supplement Stack Guide',
      'Strength & Muscle Tracking',
      'Recovery & Sleep Protocol',
      'Compound Movement Focus',
      'Weekly Form Reviews',
      'Long-term Muscle Plan',
    ],
    benefits: ['Lean Muscle Gain', 'Strength Increase', 'Better Physique', 'Improved Posture', 'Higher Testosterone'],
    color: '#cc0000',
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 flex items-center" style={{ paddingTop: 'calc(72px + 60px)', background: 'linear-gradient(180deg, #111 0%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,26,26,0.12) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 text-center w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="section-tag mb-3">COACHING PROGRAMS</motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(48px, 8vw, 90px)', letterSpacing: '0.03em', lineHeight: 0.95 }} className="text-white mb-6">
              CHOOSE YOUR <span style={{ color: '#ff1a1a' }}>PATH</span>
            </motion.h1>
            <div className="divider-red mx-auto mb-6" />
            <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Every program is 100% personalized to your body type, fitness level, and goals. No generic plans. Only real transformations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ background: '#0f0f0f' }} className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 space-y-24">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Info */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                {prog.tag && (
                  <span className="inline-block px-3 py-1 text-xs font-bold mb-3" style={{ background: '#ff1a1a', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>
                    {prog.tag}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 flex items-center justify-center" style={{ background: 'rgba(255,26,26,0.1)', border: '1px solid rgba(255,26,26,0.3)' }}>
                    <prog.icon className="w-5 h-5" style={{ color: '#ff1a1a' }} />
                  </div>
                  <span className="section-tag">{prog.duration}</span>
                </div>
                <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '0.03em', lineHeight: 1.05 }} className="text-white mb-2">
                  {prog.title}
                </h2>

                {/* Pricing */}
                <div className="mb-4 flex items-baseline gap-2">
                  {prog.priceNote && <span className="text-gray-500 text-sm">{prog.priceNote}</span>}
                  <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '32px', color: '#ff1a1a', letterSpacing: '0.03em' }}>{prog.price}</span>
                </div>

                <p className="text-gray-500 text-sm mb-4 italic">{prog.audience}</p>
                <div className="divider-red mb-5" />
                <p className="text-gray-300 leading-relaxed mb-6">{prog.description}</p>

                {/* Icon Feature List */}
                <ul className="space-y-2.5 mb-6">
                  {prog.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3 text-gray-200 text-sm">
                      <div className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,26,26,0.1)' }}>
                        <f.icon className="w-3.5 h-3.5" style={{ color: '#ff1a1a' }} />
                      </div>
                      {f.label}
                    </li>
                  ))}
                </ul>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {prog.benefits.map((b) => (
                    <span key={b} className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(255,26,26,0.08)', color: '#ff6b6b', border: '1px solid rgba(255,26,26,0.2)' }}>
                      {b}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Apply for Coaching <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Includes */}
              <div className={`card-dark p-7 rounded-none ${i % 2 === 1 ? 'lg:order-1' : ''}`} style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
                <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '22px', letterSpacing: '0.05em' }} className="text-white mb-5">
                  WHAT&apos;S <span style={{ color: '#ff1a1a' }}>INCLUDED</span>
                </h3>
                <ul className="space-y-3">
                  {prog.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#ff1a1a' }} />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-5" style={{ borderTop: '1px solid #333' }}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-whatsapp block text-center text-sm w-full"
                    style={{ padding: '12px 24px' }}
                  >
                    💬 Get Pricing on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: '#111', borderTop: '1px solid #222' }} className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <p className="section-tag mb-3">WHY CHOOSE US</p>
          <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '0.03em' }} className="text-white mb-4">
            THE <span style={{ color: '#ff1a1a' }}>PRAVEEN DIFFERENCE</span>
          </h2>
          <div className="divider-red mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: '100% Personalized', desc: 'No cookie cutter plans. Every program is designed specifically for you.' },
              { icon: Clock, label: '24/7 Support', desc: 'WhatsApp support whenever you need guidance or motivation.' },
              { icon: Award, label: 'Certified Expert', desc: 'Trained by a certified nutritionist and functional fitness coach.' },
              { icon: Target, label: 'Results Guaranteed', desc: '95% of our clients see visible results within the first 4 weeks.' },
            ].map((item) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-dark p-6 text-center" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(255,26,26,0.1)', border: '1px solid rgba(255,26,26,0.3)' }}>
                  <item.icon className="w-5 h-5" style={{ color: '#ff1a1a' }} />
                </div>
                <h4 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '18px', letterSpacing: '0.05em' }} className="text-white mb-2">{item.label}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
