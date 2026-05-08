'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { localeNames, locales } from '@/lib/locales';
import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (newLocale: string) => {
    setIsOpen(false);
    // @ts-ignore
    router.replace(pathname, { locale: newLocale as any });
  };

  return (
    <div className="relative" ref={ref}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-ink font-medium"
      >
        <Globe className="w-5 h-5 text-brand" />
        <span className="hidden sm:inline-block uppercase text-sm">{locale}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-card shadow-card border border-gray-100 overflow-hidden z-50">
          <div className="py-1">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => handleChange(l)}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-bg transition-colors",
                  locale === l ? "text-brand font-bold bg-brand-light/20" : "text-ink2"
                )}
              >
                {localeNames[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
