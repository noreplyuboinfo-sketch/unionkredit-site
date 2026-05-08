'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { AlertCircle, Clock, FileText } from 'lucide-react';

export function Problem() {
  const t = useTranslations('problem');
  const items = [
    { icon: Clock, title: t('items.0.title'), desc: t('items.0.desc') },
    { icon: FileText, title: t('items.1.title'), desc: t('items.1.desc') },
    { icon: AlertCircle, title: t('items.2.title'), desc: t('items.2.desc') },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">{t('title')}</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 100} className="bg-bg p-8 rounded-card border border-gray-100">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-brand">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-ink2 leading-relaxed">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
