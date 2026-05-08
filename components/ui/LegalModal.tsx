'use client';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const t = useTranslations('legal');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-card shadow-2xl overflow-hidden flex flex-col">
        <div className="p-6 border-b flex items-center justify-between bg-white sticky top-0 z-10">
          <h2 className="text-2xl font-black text-ink">
            {type === 'privacy' ? t('privacyTitle') : t('termsTitle')}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-bg rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-ink" />
          </button>
        </div>
        
        <div className="p-8 overflow-y-auto prose prose-slate max-w-none prose-headings:font-black prose-headings:text-ink prose-p:text-ink2 prose-p:leading-relaxed prose-li:text-ink2">
          {type === 'privacy' ? (
            <div dangerouslySetInnerHTML={{ __html: t.raw('privacyBody') }} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: t.raw('termsBody') }} />
          )}
        </div>
        
        <div className="p-6 border-t bg-bg/30 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-brand text-white font-bold rounded-pill hover:bg-brand-dark transition-all"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
}
