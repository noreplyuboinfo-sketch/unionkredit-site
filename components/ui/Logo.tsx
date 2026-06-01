import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface LogoProps {
  className?: string;
  showText?: boolean;
  showSlogan?: boolean;
}

export const Logo = ({ className, showText = true, showSlogan = true }: LogoProps) => {
  const t = useTranslations('header');

  return (
    <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
      {/* Icon */}
      <div className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#0052D4] rounded-[8px] sm:rounded-[10px] shadow-sm">
        <span className="text-white font-black text-sm sm:text-lg tracking-tighter">UK</span>
      </div>
      
      {/* Text Content */}
      {showText && (
        <div className="flex flex-col leading-none text-left">
          <span className="text-[#0A0A0A] dark:text-white font-extrabold text-base sm:text-xl tracking-tight leading-tight">
            Union Kredit
          </span>
          {showSlogan && (
            <span className="hidden sm:inline-block text-[#666666] dark:text-gray-400 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mt-0.5">
              {t('slogan')}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
