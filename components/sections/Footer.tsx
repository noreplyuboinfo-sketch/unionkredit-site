'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { LegalModal } from '../ui/LegalModal';
import { Logo } from '../ui/Logo';
import { Phone, Mail } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export function Footer() {
  const t = useTranslations('footer');
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-16">
          <div className="sm:col-span-2">
            <div className="mb-6">
              <Logo showText={false} className="w-12 h-12" />
            </div>
            <p className="text-gray-400 max-w-sm mb-6">{t('about')}</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">{t('links.title')}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#loans" className="hover:text-brand transition-colors">{t('links.loans')}</a></li>
              <li><a href="#how-it-works" className="hover:text-brand transition-colors">{t('links.howItWorks')}</a></li>
              <li><a href="#reviews" className="hover:text-brand transition-colors">{t('links.reviews')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">{t('legal.title')}</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <button 
                  onClick={() => setModalType('privacy')}
                  className="hover:text-white transition-colors"
                >
                  {t('legal.privacy')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setModalType('terms')}
                  className="hover:text-white transition-colors"
                >
                  {t('legal.terms')}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">{t('contact')}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
                <a href="mailto:contact@unionkredit.info" className="hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap">
                  <Mail className="w-4 h-4 text-brand shrink-0" />
                  <span>contact@unionkredit.info</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Union-Kredit. {t('copyright')}</div>
          <div className="font-medium text-gray-400">{t('responsible')}</div>
        </div>
      </div>

      <LegalModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        type={modalType} 
      />
    </footer>
  );
}
