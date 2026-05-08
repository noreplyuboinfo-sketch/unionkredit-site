'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { Simulator } from './Simulator';
import { DotGrid } from '../decor/DotGrid';
import { BlurStar } from '../decor/BlurStar';
import { FloatingElements } from '../decor/FloatingElements';
import { CheckCircle2, Star } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');
  
  return (
    <section className="relative overflow-hidden bg-bg pt-12 pb-24 md:pt-20 md:pb-32">
      <DotGrid className="absolute top-0 right-0 -mt-20 -mr-20 text-brand opacity-50 hidden lg:block" />
      <BlurStar className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-96 h-96 opacity-50" />
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal delay={100} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand font-bold text-sm mb-6">
            <Star className="w-4 h-4 fill-current" />
            {t('badge')}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-ink leading-[1.1] tracking-tight mb-6 max-w-2xl">
            {t.rich('title', {
              highlight: (chunks) => (
                <span className="relative inline-block text-brand z-10">
                  {chunks}
                </span>
              )
            })}
          </h1>
          <p className="text-lg md:text-xl text-ink2 mb-8 max-w-lg leading-relaxed">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <Button 
              withChevron 
              onClick={() => document.getElementById('application-form')?.scrollIntoView({behavior: 'smooth'})}
              className="w-full sm:w-auto"
            >
              {t('ctaPrimary')}
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto">
              {t('ctaSecondary')}
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-ink2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand" />
              {t('feature1')}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand" />
              {t('feature2')}
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={200} className="relative z-10">
          <Simulator />
        </Reveal>
      </div>
    </section>
  );
}
