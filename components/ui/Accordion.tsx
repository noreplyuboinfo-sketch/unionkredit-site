'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  showNumbers?: boolean;
}

export function Accordion({ items, className, showNumbers = true }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={item.id} 
            className="border border-gray-100 bg-surface rounded-card overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <div className="flex items-center gap-4">
                {showNumbers && (
                  <span className="text-xl font-bold text-gray-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}
                <span className="text-lg font-bold text-ink">{item.title}</span>
              </div>
              <ChevronDown 
                className={cn("w-5 h-5 text-gray-500 transition-transform duration-300", isOpen && "rotate-180")} 
              />
            </button>
            <div 
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pt-0 text-ink2 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
