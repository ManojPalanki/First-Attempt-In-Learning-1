'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/917672096669?text=Hi%20Praveen%20I%20want%20to%20join%20your%20fitness%20coaching';

export default function FloatingCTA() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [pulse, setPulse] = useState(false);
  const pulseTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const tooltipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ---------- Tooltip: show after 5s, auto-hide after 6s ---------- */
  useEffect(() => {
    tooltipTimer.current = setTimeout(() => {
      if (!tooltipDismissed) setShowTooltip(true);
    }, 5000);
    return () => {
      if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    };
  }, [tooltipDismissed]);

  useEffect(() => {
    if (showTooltip) {
      const hide = setTimeout(() => setShowTooltip(false), 6000);
      return () => clearTimeout(hide);
    }
  }, [showTooltip]);

  /* ---------- Pulse every 8 seconds ---------- */
  useEffect(() => {
    pulseTimer.current = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 900);
    }, 8000);
    return () => {
      if (pulseTimer.current) clearInterval(pulseTimer.current);
    };
  }, []);

  /* ---------- Sticky bar at 60% scroll ---------- */
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setShowStickyBar(scrolled / total >= 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <div className="fixed z-50 flex flex-col items-end gap-2" style={{ bottom: '24px', right: '24px' }}>
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !tooltipDismissed && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 shadow-2xl"
              style={{
                background: '#1a1a1a',
                border: '1px solid #333',
                maxWidth: '220px',
                whiteSpace: 'nowrap',
              }}
            >
              <p className="text-white text-xs font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Need help starting your fitness journey?
              </p>
              <button
                onClick={() => { setShowTooltip(false); setTooltipDismissed(true); }}
                className="text-gray-500 hover:text-white flex-shrink-0 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0, y: 40 }}
          animate={{
            opacity: 1,
            scale: pulse ? [1, 1.18, 1] : 1,
            y: 0,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 rounded-full text-white font-semibold shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #25d366, #128c7e)',
            padding: '13px 20px',
            boxShadow: '0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0)',
            fontFamily: 'Oswald, sans-serif',
            letterSpacing: '0.05em',
            fontSize: '14px',
          }}
          onClick={() => setShowTooltip(false)}
        >
          {/* WhatsApp icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 flex-shrink-0"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.12 1.524 5.855L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.868 9.868 0 01-5.031-1.377l-.361-.214-3.741.981.999-3.648-.235-.374A9.869 9.869 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.467 0 9.882 4.415 9.882 9.882 0 5.467-4.415 9.882-9.882 9.882z" />
          </svg>
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </motion.a>
      </div>

      {/* ===== STICKY CTA BAR (60% scroll) ===== */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-40"
            style={{
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(255,26,26,0.25)',
              boxShadow: '0 -4px 30px rgba(0,0,0,0.5)',
            }}
          >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Text */}
              <p
                className="text-white text-center sm:text-left"
                style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(14px, 2.5vw, 20px)', letterSpacing: '0.04em' }}
              >
                Start Your <span style={{ color: '#ff1a1a' }}>90 Day Transformation</span> Today
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="btn-primary text-sm"
                  style={{ padding: '10px 24px' }}
                >
                  Join Coaching
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm inline-block"
                  style={{ padding: '10px 20px' }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
