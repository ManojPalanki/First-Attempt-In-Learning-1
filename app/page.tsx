'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounter from './components/AnimatedCounter';
import { ArrowRight, Play, CheckCircle, Star, Zap, Target, TrendingUp, ShieldCheck, Users, Trophy, Dumbbell, Leaf, BarChart2, MessageCircle, Flame, FileText, ClipboardList, Calendar, Activity } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function SectionHeader({ tag, title, subtitle }: { tag: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <motion.p variants={fadeUp} className="section-tag mb-3">{tag}</motion.p>
      <motion.h2 variants={fadeUp} style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '0.03em', lineHeight: 1.1 }} className="text-white mb-4">
        {title}
      </motion.h2>
      {subtitle && <motion.p variants={fadeUp} className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">{subtitle}</motion.p>}
      <motion.div variants={fadeUp} className="divider-red mx-auto mt-5" />
    </div>
  );
}

const programs = [
  {
    icon: Target,
    title: '90 Day Body Transformation',
    duration: '12 Weeks',
    description: 'Complete physical reinvention with personalized workout and diet system.',
    features: [
      { icon: Dumbbell, label: 'Personalized Workout Plan' },
      { icon: Leaf, label: 'Custom Diet Plan' },
      { icon: BarChart2, label: 'Weekly Progress Tracking' },
      { icon: MessageCircle, label: 'WhatsApp Coach Support' },
      { icon: Flame, label: '90 Day Transformation' },
    ],
    color: '#ff1a1a',
    tag: 'MOST POPULAR',
  },
  {
    icon: TrendingUp,
    title: 'Fat Loss Program',
    duration: '8–12 Weeks',
    description: 'Science-backed fat loss protocol designed for sustainable results.',
    features: [
      { icon: Flame, label: 'Calorie Deficit Strategy' },
      { icon: Dumbbell, label: 'Cardio & HIIT Protocols' },
      { icon: Leaf, label: 'Nutrition Coaching' },
      { icon: BarChart2, label: 'Body Composition Tracking' },
      { icon: MessageCircle, label: 'WhatsApp Coach Support' },
    ],
    color: '#ff4444',
    tag: null,
  },
  {
    icon: Zap,
    title: 'Muscle Building Program',
    duration: '12–16 Weeks',
    description: 'Progressive overload training to maximize muscle growth and strength.',
    features: [
      { icon: Dumbbell, label: 'Progressive Overload Plan' },
      { icon: Leaf, label: 'High Protein Diet Plan' },
      { icon: BarChart2, label: 'Strength Tracking' },
      { icon: MessageCircle, label: 'WhatsApp Coach Support' },
      { icon: Flame, label: 'Supplement Guide' },
    ],
    color: '#cc0000',
    tag: null,
  },
];

const transformations = [
  { name: 'Rahul M.', before: '92 kg', after: '75 kg', weeks: '12 weeks', type: 'Fat Loss', color: '#ff1a1a' },
  { name: 'Arjun K.', before: '65 kg', after: '78 kg', weeks: '16 weeks', type: 'Muscle Gain', color: '#e53e3e' },
  { name: 'Suresh P.', before: '105 kg', after: '82 kg', weeks: '12 weeks', type: 'Fat Loss', color: '#ff1a1a' },
];

const testimonials = [
  { name: 'Priya Sharma', result: 'Lost 15 kg in 3 months', text: 'Praveen Sir\'s program changed my life. The customized diet and workout plan made it so easy to follow. Lost 15kg and gained so much confidence!', stars: 5, program: 'Fat Loss Program' },
  { name: 'Kiran Reddy', result: 'Gained 12 kg muscle', text: 'Best transformation coaching experience. The weekly check-ins kept me motivated and the results speak for themselves. Went from skinny to strong!', stars: 5, program: 'Muscle Building Program' },
  { name: 'Amit Verma', result: '90-Day Transformation', text: 'I tried many programs before but nothing worked like Praveen\'s 90-day plan. The personal attention and accountability is unmatched.', stars: 5, program: '90 Day Transformation' },
];

const youtubeVideos = [
  { id: 'dQw4w9WgXcQ', title: 'Full Body Fat Loss Workout | Beginner Guide', views: '250K views' },
  { id: 'L_jWHffIx5E', title: 'Indian Diet Plan for Fat Loss | Complete Guide', views: '180K views' },
  { id: 'ZbZSe6N_BXs', title: 'Muscle Building Mistakes You Must Avoid', views: '320K views' },
];

export default function HomePage() {
  const [programsRef, programsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [transformRef, transformInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialRef, testimonialInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '72px' }}>
        {/* Background */}
        <div className="absolute inset-0">
          <Image src="/hero-bg.png" alt="Gym Training" fill className="object-cover" priority quality={90} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0.7) 50%, rgba(15,15,15,0.85) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(255,26,26,0.12) 0%, transparent 60%)' }} />
        </div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 grid-lines opacity-30" />

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
              <span className="section-tag">CERTIFIED NUTRITIONIST & FITNESS COACH</span>
            </motion.div>
            
            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(52px, 10vw, 110px)', letterSpacing: '0.03em', lineHeight: 0.95 }}
              className="text-white mb-3"
            >
              TRANSFORM<br />
              YOUR BODY<br />
              <span style={{ color: '#ff1a1a' }} className="glow-red-text">IN 90 DAYS</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-8 mt-4 max-w-xl leading-relaxed">
              <span style={{ color: '#ff1a1a' }}>Fat Loss</span> • <span style={{ color: '#ff1a1a' }}>Muscle Gain</span> • <span style={{ color: '#ff1a1a' }}>Discipline</span> • <span style={{ color: '#ff1a1a' }}>Real Transformations</span>
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="btn-primary">
                Join Coaching
              </Link>
              <Link href="/transformations" className="btn-outline">
                View Transformations
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeUp} className="mb-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { icon: CheckCircle, text: 'Certified Nutritionist' },
                  { icon: Users, text: '6000+ Clients Coached' },
                  { icon: Trophy, text: '10+ Years Experience' },
                  { icon: ShieldCheck, text: 'ISO Certified Nutrition' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2.5 px-3 py-3 rounded-xl group cursor-default transition-all duration-200 hover:border-red-500/50"
                    style={{ background: 'rgba(21,21,21,0.9)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,26,26,0.12)' }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: '#ff1a1a' }} />
                    </div>
                    <span className="text-white text-xs font-medium leading-tight">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp}>
              <div className="flex flex-wrap gap-10">
                <AnimatedCounter end={6000} suffix="+" label="Clients Coached" />
                <div className="w-px bg-gray-700 self-stretch hidden sm:block" />
                <AnimatedCounter end={200} suffix="K+" label="YouTube Community" />
                <div className="w-px bg-gray-700 self-stretch hidden sm:block" />
                <AnimatedCounter end={10} suffix="+" label="Years Experience" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, repeat: Infinity, repeatType: 'reverse', duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <div className="w-0.5 h-10 bg-gradient-to-b from-red-500 to-transparent" />
        </motion.div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section style={{ background: '#111111' }} className="relative py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,26,26,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative" style={{ height: '500px' }}>
                <div className="absolute inset-0 rounded-none overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}>
                  <Image src="/coach.png" alt="Praveen - Fitness Coach" fill className="object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,15,0.6) 0%, transparent 50%)' }} />
                </div>
                {/* Red accent border */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-red-600/40 rounded-none" style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }} />
                {/* Badge */}
                <div className="absolute -bottom-5 -left-5 p-4 rounded" style={{ background: '#ff1a1a', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                  <div className="text-center">
                    <div style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '28px' }}>6000+</div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '11px', letterSpacing: '0.1em' }}>CLIENTS COACHED</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-tag mb-3">MEET YOUR COACH</p>
              <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '0.03em', lineHeight: 1.05 }} className="text-white mb-6">
                I AM <span style={{ color: '#ff1a1a' }}>PRAVEEN</span><br />YOUR TRANSFORMATION GUIDE
              </h2>
              <div className="divider-red mb-6" />
              <p className="text-gray-300 leading-relaxed mb-6">
                Certified Nutritionist and Functional Fitness Coach who has helped <strong className="text-white">6000+ clients</strong> transform their bodies through personalized workout and diet systems. My approach combines science-backed nutrition with functional training for <strong className="text-white">real, sustainable results</strong>.
              </p>
              <ul className="space-y-3 mb-8">
                {['Certified Sports Nutritionist', 'Functional Fitness Expert', '10+ Years Coaching Experience', '90-Day Transformation Specialist'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#ff1a1a' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Read Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS PREVIEW ===== */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#0f0f0f' }} ref={programsRef}>
        <div style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,26,26,0.08) 0%, transparent 60%)' }} className="absolute inset-0 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div initial="hidden" animate={programsInView ? 'visible' : 'hidden'} variants={staggerChildren}>
            <SectionHeader tag="COACHING PROGRAMS" title={<>CHOOSE YOUR <span style={{ color: '#ff1a1a' }}>TRANSFORMATION PATH</span></>} subtitle="Personalized programs designed for your specific goals. Each program includes expert coaching, custom nutrition, and weekly accountability." />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((prog, i) => (
                <motion.div key={prog.title} variants={fadeUp} className="card-dark relative p-6 rounded-none" style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                  {prog.tag && (
                    <div className="absolute -top-3 right-4 px-3 py-1 text-xs font-bold" style={{ background: '#ff1a1a', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>
                      {prog.tag}
                    </div>
                  )}
                  <div className="w-12 h-12 flex items-center justify-center mb-4" style={{ background: 'rgba(255,26,26,0.1)', border: '1px solid rgba(255,26,26,0.3)' }}>
                    <prog.icon className="w-6 h-6" style={{ color: '#ff1a1a' }} />
                  </div>
                  <div className="section-tag text-xs mb-2">{prog.duration}</div>
                  <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '22px', letterSpacing: '0.03em' }} className="text-white mb-3">{prog.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{prog.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {prog.features.map((f) => (
                      <li key={f.label} className="flex items-center gap-2.5 text-gray-200 text-sm">
                        <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,26,26,0.1)' }}>
                          <f.icon className="w-3.5 h-3.5" style={{ color: '#ff1a1a' }} />
                        </div>
                        {f.label}
                      </li>
                    ))}
                  </ul>
                  <Link href="/programs" className="btn-primary block text-center text-sm mt-auto" style={{ padding: '10px 20px' }}>
                    Apply for Coaching
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TRANSFORMATIONS PREVIEW ===== */}
      <section ref={transformRef} className="py-24 relative" style={{ background: '#111111' }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div initial="hidden" animate={transformInView ? 'visible' : 'hidden'} variants={staggerChildren}>
            <SectionHeader tag="CLIENT RESULTS" title={<>REAL <span style={{ color: '#ff1a1a' }}>TRANSFORMATIONS</span></>} subtitle="These aren't filters or photoshop. These are real results from real people who trusted the process." />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {transformations.map((t, i) => (
                <motion.div key={t.name} variants={fadeUp} className="card-dark overflow-hidden rounded-none" style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                  {/* Before/After Image Area */}
                  <div className="relative h-56 bg-gray-900 flex">
                    <div className="w-1/2 relative">
                      <Image src="/before1.png" alt="Before" fill className="object-cover grayscale" />
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 text-xs font-bold" style={{ background: 'rgba(0,0,0,0.8)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>BEFORE</div>
                    </div>
                    <div className="w-1/2 relative">
                      <Image src="/coach.png" alt="After" fill className="object-cover object-top" />
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 text-xs font-bold" style={{ background: '#ff1a1a', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>AFTER</div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-8 h-8 rounded-full bg-black border-2 border-red-500 flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-4 h-4 text-red-500" />
                      </div>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '20px', letterSpacing: '0.03em' }} className="text-white">{t.name}</h4>
                      <span className="text-xs px-2 py-0.5" style={{ background: 'rgba(255,26,26,0.1)', color: '#ff1a1a', border: '1px solid rgba(255,26,26,0.3)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>{t.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="text-gray-300">{t.before}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-white font-semibold">{t.after}</span>
                      <span className="ml-auto text-gray-500 text-xs">{t.weeks}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center">
              <Link href="/transformations" className="btn-outline inline-flex items-center gap-2">
                View All Transformations <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section ref={testimonialRef} className="py-24 relative" style={{ background: '#0f0f0f' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(255,26,26,0.06) 0%, transparent 50%)' }} />
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div initial="hidden" animate={testimonialInView ? 'visible' : 'hidden'} variants={staggerChildren}>
            <SectionHeader tag="TESTIMONIALS" title={<>WHAT CLIENTS <span style={{ color: '#ff1a1a' }}>SAY</span></>} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <motion.div key={t.name} variants={fadeUp} className="card-dark p-6 rounded-none relative" style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                  <div className="absolute top-4 right-4 text-5xl leading-none" style={{ color: 'rgba(255,26,26,0.2)', fontFamily: 'Georgia, serif' }}>&quot;</div>
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center" style={{ fontFamily: 'Bebas Neue, cursive', color: '#ff1a1a', fontSize: '16px' }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{t.name}</div>
                      <div className="text-gray-500 text-xs" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>{t.result}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== YouTube Content Section ===== */}
      <section ref={contentRef} className="py-24" style={{ background: '#111111' }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div initial="hidden" animate={contentInView ? 'visible' : 'hidden'} variants={staggerChildren}>
            <SectionHeader tag="FREE RESOURCES" title={<>FREE WORKOUT <span style={{ color: '#ff1a1a' }}>&amp; DIET GUIDES</span></>} subtitle="Subscribe to the channel for daily fitness motivation, workout tutorials, and diet tips." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {youtubeVideos.map((video) => (
                <motion.div key={video.id} variants={fadeUp} className="card-dark overflow-hidden rounded-none" style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                  <div className="relative aspect-video bg-gray-900">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium leading-snug mb-1">{video.title}</p>
                    <p className="text-gray-500 text-xs">{video.views}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                <Play className="w-4 h-4" /> Visit YouTube Channel
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 relative" style={{ background: '#0a0a0a' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,26,26,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="text-center mb-14">
            <p className="section-tag mb-3">COACHING PROCESS</p>
            <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '0.03em', lineHeight: 1.1 }} className="text-white mb-4">
              HOW THE <span style={{ color: '#ff1a1a' }}>COACHING WORKS</span>
            </h2>
            <div className="divider-red mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', icon: ClipboardList, title: 'Apply for Coaching', desc: 'Fill out the form telling us your goals, body type, and fitness level.' },
              { step: '02', icon: FileText, title: 'Get Custom Plan', desc: 'Receive a personalized workout & diet plan designed specifically for you.' },
              { step: '03', icon: Calendar, title: 'Start Training', desc: 'Begin training with weekly check-ins and WhatsApp support from your coach.' },
              { step: '04', icon: Activity, title: 'Track & Transform', desc: 'Monitor progress, crush milestones, and celebrate your transformation.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative p-6 rounded-none text-center group"
                style={{ background: '#151515', border: '1px solid #222', clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
              >
                {/* Step number */}
                <div className="absolute top-3 right-4 text-3xl font-bold" style={{ fontFamily: 'Bebas Neue, cursive', color: 'rgba(255,26,26,0.15)' }}>{item.step}</div>
                {/* Connector line */}
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5" style={{ background: 'linear-gradient(to right, #ff1a1a, transparent)' }} />}
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded" style={{ background: 'rgba(255,26,26,0.1)', border: '1px solid rgba(255,26,26,0.3)' }}>
                  <item.icon className="w-5 h-5" style={{ color: '#ff1a1a' }} />
                </div>
                <h4 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '20px', letterSpacing: '0.05em' }} className="text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24" style={{ background: '#111111', borderTop: '1px solid #1e1e1e' }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <p className="section-tag mb-3">WHY US</p>
            <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '0.03em', lineHeight: 1.1 }} className="text-white mb-4">
              THE PRAVEEN <span style={{ color: '#ff1a1a' }}>DIFFERENCE</span>
            </h2>
            <div className="divider-red mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: CheckCircle, text: 'Personalized workout plans tailored to your body' },
              { icon: MessageCircle, text: 'Daily accountability support via WhatsApp' },
              { icon: Users, text: 'WhatsApp coaching guidance whenever you need' },
              { icon: Trophy, text: 'Real transformation results — no fake before/afters' },
            ].map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-5 rounded-xl transition-all duration-200 hover:border-red-500/30"
                style={{ background: '#151515', border: '1px solid #222' }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,26,26,0.12)' }}>
                  <Icon className="w-4 h-4" style={{ color: '#ff1a1a' }} />
                </div>
                <p className="text-gray-200 text-sm font-medium">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a0000 0%, #0f0f0f 50%, #1a0000 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(255,26,26,0.15) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 grid-lines opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-tag mb-4">READY TO CHANGE YOUR LIFE?</p>
            <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(42px, 8vw, 90px)', letterSpacing: '0.03em', lineHeight: 0.95 }} className="text-white mb-6">
              START YOUR TRANSFORMATION<br /><span style={{ color: '#ff1a1a' }}>TODAY</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              Join 6000+ clients who chose to invest in themselves. Your 90-day body transformation starts now.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base" style={{ padding: '16px 44px' }}>
                Join Coaching
              </Link>
              <a href="https://wa.me/917672096669?text=Hi%20Praveen%20I%20want%20to%20join%20your%20fitness%20coaching" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base inline-block" style={{ padding: '16px 44px' }}>
                💬 Message on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
