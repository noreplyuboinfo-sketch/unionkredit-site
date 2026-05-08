'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { useEffect, useState, useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';

function CountUp({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useReveal();
  const started = useRef(false);

  useEffect(() => {
    if (isVisible && !started.current) {
      started.current = true;
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  const t = useTranslations('stats');
  
  const items = [
    { value: t('items.0.value'), label: t('items.0.label') },
    { value: t('items.1.value'), label: t('items.1.label') },
    { value: t('items.2.value'), label: t('items.2.label') },
    { value: "8000+", label: t('items.3.label'), isCount: true, endValue: 8000, suffix: '+' },
  ];

  return (
    <section className="bg-brand text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/20">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 100} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black mb-2">
                {item.isCount ? <CountUp end={item.endValue!} suffix={item.suffix!} /> : item.value}
              </div>
              <div className="text-brand-light font-medium">{item.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
