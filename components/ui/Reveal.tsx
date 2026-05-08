'use client';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function Reveal({ children, delay = 0, className }: { children: ReactNode, delay?: number, className?: string }) {
  const { ref, isVisible } = useReveal();
  
  return (
    <div 
      ref={ref} 
      className={cn('reveal', isVisible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
