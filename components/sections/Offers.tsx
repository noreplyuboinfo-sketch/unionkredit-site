'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';
import { Home, User, Landmark } from 'lucide-react';

export function Offers() {
  const t = useTranslations('offers');
  
  const offers = [
    { id: 'conso', icon: User, title: t('conso.title'), desc: t('conso.desc'), amount: t('conso.amount') },
    { id: 'immo', icon: Home, title: t('immo.title'), desc: t('immo.desc'), amount: t('immo.amount') },
    { id: 'travaux', icon: Landmark, title: t('travaux.title'), desc: t('travaux.desc'), amount: t('travaux.amount') },
  ];

  return (
    <section id="loans" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">{t('title')}</h2>
            <p className="text-xl text-ink2">{t('subtitle')}</p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <Reveal key={offer.id} delay={i * 100}>
              <Card hoverEffect className="p-8 h-full flex flex-col cursor-pointer group relative overflow-hidden transition-all duration-300 border-transparent hover:border-brand/20">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <offer.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-ink group-hover:text-brand transition-colors">{offer.title}</h3>
                  <p className="text-ink2 mb-8 flex-grow">{offer.desc}</p>
                  <div className="pt-6 border-t border-gray-100">
                    <div className="text-sm text-ink2 mb-1">{t('upTo')}</div>
                    <div className="text-2xl font-bold text-ink">{offer.amount}</div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
