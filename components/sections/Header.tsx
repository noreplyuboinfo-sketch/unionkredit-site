'use client';
import { useTranslations } from 'next-intl';
import { Logo } from '../ui/Logo';
import { LangSwitcher } from '../ui/LangSwitcher';
import { Button } from '../ui/Button';
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function Header() {
  const t = useTranslations('header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
      {/* Top Bar for Contact Info */}
      <div className="bg-ink text-white/80 text-xs py-2 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-x-4 gap-y-2 text-center">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5">
            <a href="tel:+393508938067" className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-brand" />
              <span>+39 3508938067</span>
            </a>
            <a href="tel:+31613519042" className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-brand" />
              <span>+31 613519042</span>
            </a>
          </div>
          <a href="mailto:contact@unionkredit.info" className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
            <Mail className="w-3.5 h-3.5 text-brand" />
            <span>contact@unionkredit.info</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => { window.location.href = window.location.pathname; }}
          className="hover:opacity-80 transition-opacity cursor-pointer shrink-0"
        >
          <Logo />
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
          <a href="#loans" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-ink2 hover:text-brand transition-colors py-2">{t('loans')}</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-ink2 hover:text-brand transition-colors py-2">{t('howItWorks')}</a>
          <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-ink2 hover:text-brand transition-colors py-2">{t('reviews')}</a>
          
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <a href="tel:+393508938067" className="flex items-center gap-2 text-ink2 hover:text-brand transition-colors text-sm whitespace-nowrap">
              <Phone className="w-4 h-4 text-brand" />
              <span>+39 3508938067</span>
            </a>
            <a href="tel:+31613519042" className="flex items-center gap-2 text-ink2 hover:text-brand transition-colors text-sm whitespace-nowrap">
              <Phone className="w-4 h-4 text-brand" />
              <span>+31 613519042</span>
            </a>
            <a href="mailto:contact@unionkredit.info" className="flex items-center gap-2 text-ink2 hover:text-brand transition-colors text-sm whitespace-nowrap">
              <Mail className="w-4 h-4 text-brand" />
              <span>contact@unionkredit.info</span>
            </a>
          </div>

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
