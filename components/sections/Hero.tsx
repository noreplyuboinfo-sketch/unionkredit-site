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
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center lg:justify-items-start">
        <Reveal delay={100} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full overflow-hidden max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-[11px] sm:text-sm mb-6">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
            <span className="px-1">{t('badge')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-ink leading-[1.15] tracking-tight mb-6 w-full break-words text-center lg:text-left">
            {t.rich('title', {
              highlight: (chunks) => (
                <span className="relative inline-block text-brand z-10">
                  {chunks}
                </span>
              )
            })}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-ink2 mb-8 max-w-lg leading-relaxed text-center lg:text-left">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-sm sm:max-w-none items-center justify-center lg:justify-start">
            <Button 
              withChevron 
              onClick={() => document.getElementById('application-form')?.scrollIntoView({behavior: 'smooth'})}
              className="w-full sm:w-auto min-w-[180px]"
            >
              {t('ctaPrimary')}
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto min-w-[180px]">
              {t('ctaSecondary')}
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-ink2 w-full">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand shrink-0" />
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand shrink-0" />
              <span>{t('feature2')}</span>
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={200} className="relative z-10 w-full flex justify-center">
          <Simulator />
        </Reveal>
      </div>
    </section>
  );
}
