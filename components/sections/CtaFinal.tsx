'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

export function CtaFinal() {
  const t = useTranslations('ctaFinal');

  return (
    <section className="py-32 bg-white relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/5 via-white to-white" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">{t('title')}</h2>
          <p className="text-xl text-ink2 mb-12 max-w-2xl mx-auto">{t('subtitle')}</p>
          <Button 
            className="h-16 px-10 text-lg" 
            withChevron
            onClick={() => document.getElementById('application-form')?.scrollIntoView({behavior: 'smooth'})}
          >
            {t('cta')}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
