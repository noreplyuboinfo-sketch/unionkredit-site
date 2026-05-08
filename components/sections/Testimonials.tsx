'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Testimonials() {
  const t = useTranslations('testimonials');
  
  const testimonials = Array.from({ length: 10 }).map((_, i) => ({
    name: t(`items.${i}.name`),
    role: t(`items.${i}.role`),
    text: t(`items.${i}.text`),
    rating: 5
  }));

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let animationId: number;
    let isPaused = false;
    
    const scroll = () => {
      if (el && !isPaused) {
        el.scrollLeft += 1;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; };
    
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause);
    el.addEventListener('touchend', resume);
    
    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-black">{t('title')}</h2>
        </Reveal>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pb-8 px-6 md:px-12 xl:px-[calc((100vw-1280px)/2+24px)]"
      >
        {[...testimonials, ...testimonials].map((testi, i) => (
          <div key={i} className="shrink-0 w-[300px] md:w-[400px]">
            <Card className="p-8 h-full flex flex-col">
              <div className="flex gap-1 text-star mb-6">
                {Array.from({length: testi.rating}).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-ink font-medium leading-relaxed mb-8 flex-grow">
                "{testi.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-lg">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-ink">{testi.name}</div>
                  <div className="text-sm text-ink2">{testi.role}</div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
