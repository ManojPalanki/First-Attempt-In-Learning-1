'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const testimonials = [
  { name: 'Priya Sharma', city: 'Mumbai', program: 'Fat Loss Program', result: 'Lost 15 kg in 3 months', stars: 5, story: 'I had been struggling with my weight for years. Tried every diet but nothing worked. Praveen sir\'s program was completely different — it was personalized, realistic, and the support was incredible. Lost 15kg and I feel like a completely new person. The diet plan was practical for Indian food which was a huge plus!' },
  { name: 'Kiran Reddy', city: 'Hyderabad', program: '90 Day Transformation', result: 'Gained 12 kg lean muscle', stars: 5, story: 'As a skinny 24-year-old, I thought building muscle was impossible for my body type. Praveen sir proved me wrong. The structured program, protein-rich diet plan, and consistent check-ins led to 12kg of visible muscle gain in 90 days. Best decision I ever made!' },
  { name: 'Amit Verma', city: 'Delhi', program: '90 Day Transformation', result: 'Complete body transformation', stars: 5, story: 'I tried many online programs before but the personalization and accountability with Praveen sir is unmatched. He actually understands your lifestyle and builds a plan around it. My office colleagues couldn\'t believe the transformation when I came back after 3 months. Simply amazing!' },
  { name: 'Neha Gupta', city: 'Bangalore', program: 'Fat Loss Program', result: 'Lost 18 kg postpartum', stars: 5, story: 'After my pregnancy, I had completely lost confidence in my body. Praveen sir\'s program was perfect for my situation — a gradual, safe approach to fat loss that respected my body. I lost 18kg in 4 months and feel better than I did before pregnancy.' },
  { name: 'Suresh K.', city: 'Chennai', program: 'Muscle Building Program', result: 'Achieved dream physique', stars: 5, story: 'The muscle building program was exactly what I needed. Clear nutrition guidance, progressive workout plans, and the supplement guide helped me go from 65kg to 80kg in 4 months. The monthly physique comparisons kept me motivated throughout.' },
  { name: 'Rahul Bansal', city: 'Pune', program: 'Fat Loss Program', result: 'Lost 22 kg belly fat', stars: 5, story: 'Had severe belly fat and was borderline diabetic. Doctor recommended exercise and diet changes. Found Praveen sir on YouTube and enrolled. In 5 months I lost 22kg, my sugar levels are normal, and I have more energy than I did in my 20s. Life changing!' },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 flex items-center" style={{ paddingTop: 'calc(72px + 60px)', background: 'linear-gradient(180deg, #111 0%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,26,26,0.12) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 text-center w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="section-tag mb-3">CLIENT SUCCESS STORIES</motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(48px, 8vw, 90px)', letterSpacing: '0.03em', lineHeight: 0.95 }} className="text-white mb-6">
              HEAR FROM OUR <span style={{ color: '#ff1a1a' }}>CLIENTS</span>
            </motion.h1>
            <div className="divider-red mx-auto mb-5" />
            <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-xl mx-auto">
              Real stories from real people. These aren&apos;t paid actors — they are genuine clients who trusted the process.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section style={{ background: '#0f0f0f' }} className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-dark p-6 flex flex-col rounded-none relative"
                style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8" style={{ color: 'rgba(255,26,26,0.15)' }} />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>

                {/* Result Badge */}
                <div className="inline-flex items-center gap-1 mb-3 self-start">
                  <span className="text-xs font-semibold px-2 py-0.5" style={{ background: 'rgba(255,26,26,0.12)', color: '#ff6b6b', border: '1px solid rgba(255,26,26,0.25)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em' }}>
                    {t.result}
                  </span>
                </div>

                {/* Story */}
                <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1 italic">&ldquo;{t.story}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #2a2a2a' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,26,26,0.15)', border: '1px solid rgba(255,26,26,0.3)', fontFamily: 'Bebas Neue, cursive', fontSize: '18px', color: '#ff1a1a' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.city} · {t.program}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{ background: '#1a0000', borderTop: '1px solid rgba(255,26,26,0.2)', borderBottom: '1px solid rgba(255,26,26,0.2)' }} className="py-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <p style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: '0.03em' }} className="text-white">
            JOIN <span style={{ color: '#ff1a1a' }}>6000+ HAPPY CLIENTS</span> AND START YOUR TRANSFORMATION TODAY
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#111' }} className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gray-300 mb-6 text-lg">Ready to write your own success story?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn-primary">Join Coaching Today</a>
            <a href="https://wa.me/917672096669" target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-block">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
