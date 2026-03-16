'use client';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (inView && !hasStarted.current) {
      hasStarted.current = true;
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl sm:text-5xl font-black text-white mb-1 group-hover:text-red-400 transition-colors duration-300" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '0.02em' }}>
        <span style={{ color: '#ff1a1a' }}>{prefix}</span>
        {count.toLocaleString()}
        <span style={{ color: '#ff1a1a' }}>{suffix}</span>
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em', fontSize: '12px' }}>
        {label}
      </div>
    </div>
  );
}
