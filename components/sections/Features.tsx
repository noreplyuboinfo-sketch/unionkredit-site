'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { ShieldCheck, Zap, Percent, ThumbsUp } from 'lucide-react';

export function Features() {
  const t = useTranslations('features');
  
  const features = [
    { icon: Zap, title: t('items.0.title'), desc: t('items.0.desc') },
    { icon: Percent, title: t('items.1.title'), desc: t('items.1.desc') },
    { icon: ShieldCheck, title: t('items.2.title'), desc: t('items.2.desc') },
    { icon: ThumbsUp, title: t('items.3.title'), desc: t('items.3.desc') },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">{t('title')}</h2>
            <p className="text-xl text-ink2 mb-8">{t('subtitle')}</p>
            <div className="w-24 h-2 bg-brand rounded-full"></div>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <Reveal key={i} delay={i * 100} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-ink2 leading-relaxed">{feature.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
