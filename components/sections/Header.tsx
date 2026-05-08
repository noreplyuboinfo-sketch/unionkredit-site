'use client';
import { useTranslations } from 'next-intl';
import { LangSwitcher } from '../ui/LangSwitcher';
import { Button } from '../ui/Button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function Header() {
  const t = useTranslations('header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => { window.location.href = window.location.pathname; }}
          className="flex items-center gap-2 font-display text-2xl font-black text-ink tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
            <span className="text-white">U</span>
          </div>
          Union-Kredit
        </button>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-ink2">
          <a href="#loans" className="hover:text-brand transition-colors">{t('loans')}</a>
          <a href="#how-it-works" className="hover:text-brand transition-colors">{t('howItWorks')}</a>
          <a href="#reviews" className="hover:text-brand transition-colors">{t('reviews')}</a>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <LangSwitcher />
          <Button 
            className="hidden lg:inline-flex h-10 px-6 py-2 text-sm" 
            onClick={() => document.getElementById('application-form')?.scrollIntoView({behavior: 'smooth'})}
          >
            {t('cta')}
          </Button>
          <button 
            className="md:hidden p-2 text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
          <a href="#loans" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-ink2 hover:text-brand transition-colors py-2">{t('loans')}</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-ink2 hover:text-brand transition-colors py-2">{t('howItWorks')}</a>
          <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-ink2 hover:text-brand transition-colors py-2">{t('reviews')}</a>
          <Button 
            className="w-full mt-2" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('application-form')?.scrollIntoView({behavior: 'smooth'});
            }}
          >
            {t('cta')}
          </Button>
        </div>
      )}
    </header>
  );
}
