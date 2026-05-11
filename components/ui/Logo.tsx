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
    <div className={cn("flex items-center gap-3", className)}>
      {/* Icon */}
      <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#0052D4] rounded-[10px] shadow-sm">
        <span className="text-white font-black text-lg tracking-tighter">UK</span>
      </div>
      
      {/* Text Content */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-[#0A0A0A] dark:text-white font-extrabold text-xl tracking-tight">
            Union Kredit
          </span>
          {showSlogan && (
            <span className="text-[#666666] dark:text-gray-400 font-bold text-[10px] uppercase tracking-[0.15em]">
              {t('slogan')}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
