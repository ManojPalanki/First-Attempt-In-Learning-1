'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Transformations', href: '/transformations' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Content', href: '/content' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/20' : 'bg-transparent'
        }`}
        style={{ borderBottom: scrolled ? '1px solid rgba(255,26,26,0.2)' : 'none' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-red-600 flex items-center justify-center" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                <Dumbbell className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '18px', letterSpacing: '0.05em' }}>PRAVEEN&apos;S</span>
                <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '12px', letterSpacing: '0.12em', color: '#ff1a1a' }}>FITNESS FAMILY</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', fontSize: '14px' }}
                  className={`uppercase font-medium transition-all duration-200 hover:text-red-500 relative group ${
                    pathname === link.href ? 'text-red-500' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-200 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-primary text-sm" style={{ padding: '10px 24px', fontSize: '13px' }}>
                Join Coaching
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-white hover:text-red-500 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col"
            style={{ paddingTop: '72px' }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '36px', letterSpacing: '0.1em' }}
                    className={`uppercase hover:text-red-500 transition-colors ${pathname === link.href ? 'text-red-500' : 'text-white'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link href="/contact" className="btn-primary mt-4">
                  Join Coaching
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
