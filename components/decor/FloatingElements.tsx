'use client';
import { Banknote, Wallet, Coins, TrendingUp, PiggyBank, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function FloatingElements({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <div className="absolute top-[5%] right-[5%] lg:right-[15%] animate-float opacity-70 z-0">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand/5 flex items-center justify-center rotate-12">
          <Banknote className="w-6 h-6 md:w-8 md:h-8 text-brand" />
        </div>
      </div>
      <div className="absolute top-[40%] right-[5%] lg:right-[35%] animate-float-delayed opacity-60 z-0">
        <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand/5 flex items-center justify-center -rotate-6">
          <Wallet className="w-5 h-5 md:w-7 md:h-7 text-emerald-500" />
        </div>
      </div>
      <div className="absolute top-[15%] left-[5%] lg:left-[45%] animate-float-slow opacity-50 z-0">
        <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand/5 flex items-center justify-center rotate-45">
          <Coins className="w-4 h-4 md:w-6 md:h-6 text-star" />
        </div>
      </div>
      <div className="absolute bottom-[25%] left-[2%] lg:left-[10%] animate-float opacity-60 z-0" style={{ animationDelay: '1.5s' }}>
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand/5 flex items-center justify-center -rotate-12">
          <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
        </div>
      </div>
      <div className="absolute bottom-[10%] right-[10%] lg:right-[20%] animate-float-delayed opacity-50 z-0" style={{ animationDelay: '0.5s' }}>
        <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand/5 flex items-center justify-center rotate-12">
          <PiggyBank className="w-5 h-5 md:w-7 md:h-7 text-pink-500" />
        </div>
      </div>
      <div className="absolute top-[60%] left-[10%] lg:left-[25%] animate-float-slow opacity-40 z-0" style={{ animationDelay: '2.5s' }}>
        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand/5 flex items-center justify-center -rotate-12">
          <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
        </div>
      </div>
    </div>
  );
}
