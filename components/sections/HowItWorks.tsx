'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { Accordion } from '../ui/Accordion';

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  
  const items = [
    { id: 'step1', title: t('items.0.title'), content: t('items.0.desc') },
    { id: 'step2', title: t('items.1.title'), content: t('items.1.desc') },
    { id: 'step3', title: t('items.2.title'), content: t('items.2.desc') },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">{t('title')}</h2>
            <Accordion items={items} showNumbers={true} />
          </Reveal>
          
          <Reveal delay={200} className="relative hidden lg:block h-full min-h-[500px]">
            <div className="absolute inset-0 bg-brand rounded-card overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center text-white/20">
                 <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="2" y="6" width="20" height="12" rx="2" />
                   <circle cx="12" cy="12" r="2" />
                   <path d="M6 12h.01M18 12h.01" />
                 </svg>
               </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
