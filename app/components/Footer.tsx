'use client';

import Link from 'next/link';
import { Dumbbell, Instagram, Youtube, Facebook, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/917672096669?text=Hi%20Praveen%20I%20want%20to%20join%20your%20fitness%20coaching';

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #222' }}>
      {/* Mini CTA above footer */}
      <div className="relative py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a0000 50%, #0f0f0f 100%)', borderBottom: '1px solid #1e1e1e' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(255,26,26,0.1) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '0.03em', lineHeight: 1 }} className="text-white mb-3">
            START YOUR TRANSFORMATION <span style={{ color: '#ff1a1a' }}>TODAY</span>
          </h2>
          <p className="text-gray-400 text-sm mb-7 max-w-md mx-auto leading-relaxed">
            Join thousands of people who transformed their bodies with Praveen&apos;s coaching programs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary text-sm" style={{ padding: '12px 32px' }}>
              Join Coaching
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm inline-block" style={{ padding: '12px 28px' }}>
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                <Dumbbell className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '20px', letterSpacing: '0.05em' }}>PRAVEEN&apos;S</span>
                <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '13px', letterSpacing: '0.12em', color: '#ff1a1a' }}>FITNESS FAMILY</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Certified Nutritionist & Functional Fitness Coach helping 6000+ clients transform their bodies with personalized programs.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 border border-gray-700 flex items-center justify-center hover:border-red-500 hover:bg-red-500/10 transition-all duration-200 rounded"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-red-400" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', fontSize: '14px' }} className="uppercase text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Programs', href: '/programs' },
                { label: 'Transformations', href: '/transformations' },
                { label: 'Testimonials', href: '/testimonials' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-red-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', fontSize: '14px' }} className="uppercase text-white font-semibold mb-4">
              Programs
            </h3>
            <ul className="space-y-2.5 mb-6">
              {[
                '90 Day Transformation',
                'Fat Loss Program',
                'Muscle Building',
              ].map((p) => (
                <li key={p}>
                  <Link href="/programs" className="text-gray-400 text-sm hover:text-red-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a href="mailto:praveenfitness@gmail.com" className="flex items-center gap-2 text-gray-400 text-sm hover:text-red-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                praveenfitness@gmail.com
              </a>
              <a href="tel:+917672096669" className="flex items-center gap-2 text-gray-400 text-sm hover:text-red-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +91 76720 96669
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1a1a1a' }} className="py-5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Praveen&apos;s Fitness Family. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with ❤️ for fitness transformation
          </p>
        </div>
      </div>
    </footer>
  );
}
