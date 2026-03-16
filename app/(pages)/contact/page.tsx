'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Instagram, Youtube, MapPin, CheckCircle } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const goals = ['Fat Loss', 'Muscle Building', '90-Day Transformation', 'Weight Maintenance', 'Beginner Fitness', 'Other'];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goal: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 flex items-center" style={{ paddingTop: 'calc(72px + 60px)', background: 'linear-gradient(180deg, #111 0%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,26,26,0.12) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 text-center w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="section-tag mb-3">GET IN TOUCH</motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(48px, 8vw, 90px)', letterSpacing: '0.03em', lineHeight: 0.95 }} className="text-white mb-5">
              START YOUR <span style={{ color: '#ff1a1a' }}>JOURNEY</span>
            </motion.h1>
            <div className="divider-red mx-auto mb-5" />
            <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-xl mx-auto">
              Ready to transform? Reach out and let&apos;s discuss your goals. First consultation is free!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: '#0f0f0f' }} className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="card-dark p-10 text-center h-full flex flex-col items-center justify-center rounded-none" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(255,26,26,0.15)', border: '2px solid #ff1a1a' }}>
                    <CheckCircle className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '36px', letterSpacing: '0.05em' }} className="text-white mb-3">MESSAGE SENT!</h3>
                  <p className="text-gray-300 max-w-xs mx-auto">Thanks for reaching out! Praveen will contact you within 24 hours. Welcome to the fitness family! 💪</p>
                </motion.div>
              ) : (
                <motion.form onSubmit={handleSubmit} initial="hidden" animate="visible" variants={stagger} className="card-dark p-7 rounded-none space-y-5" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
                  <motion.div variants={fadeUp}>
                    <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '28px', letterSpacing: '0.03em' }} className="text-white mb-1">SEND A MESSAGE</h2>
                    <div className="divider-red" />
                  </motion.div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div variants={fadeUp}>
                      <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>Full Name *</label>
                      <input required type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-transparent text-white text-sm py-3 px-4 outline-none focus:border-red-500 transition-colors" style={{ border: '1px solid #333', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }} />
                    </motion.div>
                    <motion.div variants={fadeUp}>
                      <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>Email Address *</label>
                      <input required type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent text-white text-sm py-3 px-4 outline-none focus:border-red-500 transition-colors" style={{ border: '1px solid #333', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }} />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-transparent text-white text-sm py-3 px-4 outline-none focus:border-red-500 transition-colors" style={{ border: '1px solid #333', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }} />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>Your Goal *</label>
                    <div className="flex flex-wrap gap-2">
                      {goals.map((goal) => (
                        <button
                          key={goal} type="button"
                          onClick={() => setFormData({ ...formData, goal })}
                          className="px-3 py-1.5 text-xs font-medium transition-all duration-200"
                          style={{
                            fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em',
                            background: formData.goal === goal ? '#ff1a1a' : 'transparent',
                            color: formData.goal === goal ? 'white' : '#888',
                            border: `1px solid ${formData.goal === goal ? '#ff1a1a' : '#333'}`,
                            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                          }}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>Your Message</label>
                    <textarea rows={4} placeholder="Tell us about your fitness journey, challenges, or questions..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent text-white text-sm py-3 px-4 outline-none focus:border-red-500 transition-colors resize-none" style={{ border: '1px solid #333', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }} />
                  </motion.div>

                  <motion.button variants={fadeUp} type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base" style={{ padding: '14px 28px' }}>
                    <Send className="w-4 h-4" /> Send Message
                  </motion.button>
                </motion.form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              {/* WhatsApp */}
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-dark p-6 rounded-none" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}>
                <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '20px', letterSpacing: '0.05em' }} className="text-white mb-3">INSTANT CONNECT</h3>
                <p className="text-gray-400 text-sm mb-4">Reach Praveen directly on WhatsApp for quick responses and consultations.</p>
                <a href="https://wa.me/917672096669?text=Hi Praveen, I am interested in joining your fitness coaching!" target="_blank" rel="noopener noreferrer" className="btn-whatsapp block text-center" style={{ padding: '12px 24px' }}>
                  💬 Chat on WhatsApp
                </a>
              </motion.div>

              {/* Contact Details */}
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card-dark p-6 rounded-none space-y-4" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}>
                <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '20px', letterSpacing: '0.05em' }} className="text-white mb-3">CONTACT INFO</h3>
                {[
                  { icon: Mail, label: 'Email', value: 'praveenfitness@gmail.com', href: 'mailto:praveenfitness@gmail.com' },
                  { icon: Phone, label: 'Phone/WhatsApp', value: '+91 99999 99999', href: 'tel:+919999999999' },
                  { icon: MapPin, label: 'Location', value: 'India (Online Coaching)', href: '#' },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(255,26,26,0.1)', border: '1px solid rgba(255,26,26,0.25)' }}>
                      <item.icon className="w-3.5 h-3.5" style={{ color: '#ff1a1a' }} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>{item.label}</div>
                      <div className="text-gray-200 text-sm group-hover:text-red-400 transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </motion.div>

              {/* Socials */}
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="card-dark p-6 rounded-none" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}>
                <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '20px', letterSpacing: '0.05em' }} className="text-white mb-4">FOLLOW ALONG</h3>
                <div className="space-y-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 group transition-all duration-200 hover:border-red-500" style={{ border: '1px solid #333' }}>
                    <Instagram className="w-5 h-5 text-pink-400" />
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">@praveens.fitness</div>
                      <div className="text-gray-500 text-xs">Instagram</div>
                    </div>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 group transition-all duration-200 hover:border-red-500" style={{ border: '1px solid #333' }}>
                    <Youtube className="w-5 h-5 text-red-500" />
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">Praveen&apos;s Fitness Family</div>
                      <div className="text-gray-500 text-xs">YouTube · 200K+ Subscribers</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
