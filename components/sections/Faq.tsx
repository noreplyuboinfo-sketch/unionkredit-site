'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { Accordion } from '../ui/Accordion';

export function Faq() {
  const t = useTranslations('faq');
  const items = Array.from({ length: 5 }).map((_, i) => ({
    id: `faq-${i}`,
    title: t(`items.${i}.q`),
    content: t(`items.${i}.a`)
  }));

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">{t('title')}</h2>
            <p className="text-xl text-ink2">{t('subtitle')}</p>
          </div>
          <Accordion items={items} showNumbers={false} />
        </Reveal>
      </div>
    </section>
  );
}
