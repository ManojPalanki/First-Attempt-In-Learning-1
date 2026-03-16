'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Users, Target, Mountain, Flame, Clock, Award, ShieldCheck } from 'lucide-react';
import AnimatedCounter from '../../components/AnimatedCounter';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const storyCards = [
  {
    icon: Mountain,
    title: 'My Struggle',
    text: 'At 25, I was 30kg overweight, lethargic, and battling low self-confidence. No diet worked and no workout stuck. That pain became the fuel for the biggest change of my life.',
  },
  {
    icon: Flame,
    title: 'My Transformation',
    text: 'Through disciplined training and clean nutrition, I transformed my body and mindset completely. I got certified in sports nutrition and functional fitness — and never looked back.',
  },
  {
    icon: Target,
    title: 'My Mission',
    text: 'Today, with 6000+ successful transformations, my mission is simple: give every person the right guidance, accountability, and motivation to become the best version of themselves.',
  },
];

const certifications = [
  'Certified Sports Nutritionist',
  'Functional Fitness Coach',
  'Body Transformation Specialist',
  'Certified Personal Trainer',
  'Nutrition Coach (ISSA)',
  'Strength & Conditioning Expert',
];

const timeline = [
  { year: '2014', title: 'The Beginning', desc: 'Started my own fitness transformation journey, losing 25kg and discovering the power of disciplined training.' },
  { year: '2016', title: 'First Clients', desc: 'Started coaching friends and family, seeing dramatic transformations that fueled my passion for coaching.' },
  { year: '2018', title: 'Going Professional', desc: 'Obtained certified nutritionist credentials and opened my full-time coaching practice.' },
  { year: '2020', title: 'Online Expansion', desc: 'Launched online coaching programs, reaching clients across India and helping 2000+ people transform.' },
  { year: '2024', title: '6000+ Strong', desc: 'Grown to a family of 6000+ transformed clients and 200K+ YouTube subscribers spreading fitness knowledge.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center" style={{ paddingTop: '72px', background: 'linear-gradient(180deg, #111111 0%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(255,26,26,0.1) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 pt-20 pb-20 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="section-tag mb-3">THE MAN BEHIND THE TRANSFORMATIONS</motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(48px, 8vw, 90px)', letterSpacing: '0.03em', lineHeight: 0.95 }} className="text-white mb-4">
              ABOUT <span style={{ color: '#ff1a1a' }}>PRAVEEN</span>
            </motion.h1>
            <div className="divider-red mb-5" />
            <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-xl leading-relaxed">
              Certified Nutritionist. Functional Fitness Coach. Body Transformation Specialist. Dedicated to changing lives — one transformation at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Photo + Quote */}
      <section style={{ background: '#0f0f0f' }} className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="relative" style={{ height: '520px' }}>
                <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}>
                  <Image src="/coach.png" alt="Praveen - Fitness Coach" fill className="object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,15,0.5) 0%, transparent 60%)' }} />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-red-600/30" style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
              <p className="section-tag mb-3">MY STORY</p>
              <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '0.03em' }} className="text-white mb-5">
                FROM STRUGGLE TO <span style={{ color: '#ff1a1a' }}>STRENGTH</span>
              </h2>
              <div className="divider-red mb-8" />

              {/* 3 Story Cards */}
              <div className="space-y-4">
                {storyCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="p-5 rounded-xl group transition-all duration-200 hover:border-red-500/30"
                    style={{ background: '#151515', border: '1px solid #222' }}
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,26,26,0.12)' }}>
                        <card.icon className="w-4 h-4" style={{ color: '#ff1a1a' }} />
                      </div>
                      <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '20px', letterSpacing: '0.05em' }} className="text-white">{card.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-5" style={{ background: '#1a1a1a', borderLeft: '4px solid #ff1a1a' }}>
                <p className="text-white italic text-base">&ldquo;Fitness is not about being better than someone else. It&apos;s about being better than you used to be.&rdquo;</p>
                <p className="text-red-400 text-sm mt-2" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>— PRAVEEN, FITNESS COACH</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#1a0000', borderTop: '1px solid rgba(255,26,26,0.2)', borderBottom: '1px solid rgba(255,26,26,0.2)' }} className="py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={6000} suffix="+" label="Clients Coached" />
          <AnimatedCounter end={200} suffix="K+" label="YouTube Subscribers" />
          <AnimatedCounter end={10} suffix="+" label="Years Experience" />
          <AnimatedCounter end={95} suffix="%" label="Success Rate" />
        </div>
      </section>

      {/* Trust Logos / Certifications */}
      <section style={{ background: '#111111' }} className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          {/* Certified By */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="section-tag mb-3">CERTIFIED AND TRUSTED BY</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-8 mt-8">
              {['ISSA', 'ACE', 'Sports Nutrition Institute'].map((name) => (
                <div key={name} className="px-8 py-4 rounded-lg transition-all duration-300 grayscale hover:grayscale-0 hover:border-red-500/40" style={{ background: '#151515', border: '1px solid #222' }}>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" style={{ color: '#666' }} />
                    <span className="text-gray-400 text-sm font-semibold" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>{name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certification Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="section-tag mb-3">CREDENTIALS</motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '0.03em' }} className="text-white">
              CERTIFICATIONS & <span style={{ color: '#ff1a1a' }}>EXPERTISE</span>
            </motion.h2>
            <div className="divider-red mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div key={cert} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-dark flex items-center gap-3 p-4 rounded-none" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#ff1a1a' }} />
                <span className="text-gray-200 text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: '#0f0f0f' }} className="py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="section-tag mb-3">THE JOURNEY</p>
            <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '0.03em' }} className="text-white">
              MILESTONE <span style={{ color: '#ff1a1a' }}>TIMELINE</span>
            </h2>
            <div className="divider-red mx-auto mt-4" />
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #ff1a1a, rgba(255,26,26,0.1))' }} />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-8">
                  <div className="relative flex-shrink-0 w-16 flex items-start justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-red-500 mt-1" style={{ background: '#ff1a1a', boxShadow: '0 0 15px rgba(255,26,26,0.5)' }} />
                  </div>
                  <div className="card-dark p-5 flex-1 rounded-none mb-2" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="section-tag text-xs">{item.year}</span>
                      <h4 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '18px', letterSpacing: '0.05em' }} className="text-white">{item.title}</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: '#0f0f0f', borderTop: '1px solid #222' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(32px, 5vw, 52px)' }} className="text-white mb-4">LET&apos;S START YOUR JOURNEY</h2>
          <p className="text-gray-400 mb-8">Ready to transform together? Join the fitness family today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Join Coaching</Link>
            <a href="https://wa.me/917672096669?text=Hi%20Praveen%20I%20want%20to%20join%20your%20fitness%20coaching" target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-block">💬 Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
