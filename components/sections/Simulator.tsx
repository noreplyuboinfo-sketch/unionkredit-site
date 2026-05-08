'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '../ui/Card';
import { Slider } from '../ui/Slider';
import { Button } from '../ui/Button';
import { monthlyPayment, totalCost, LOAN_CONSTANTS } from '@/lib/loan';

export function Simulator() {
  const t = useTranslations('simulator');
  const [amount, setAmount] = useState(10000);
  const [months, setMonths] = useState(48);

  const monthly = monthlyPayment(amount, LOAN_CONSTANTS.RATE, months);
  const total = totalCost(monthly, months, amount);

  const handleApply = () => {
    const form = document.getElementById('application-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="p-4 sm:p-8 md:p-12 max-w-xl mx-auto relative overflow-hidden w-full box-border">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-ink">{t('title')}</h3>
      
      <div className="space-y-8 sm:space-y-10">
        <div>
          <div className="flex justify-between items-end mb-3">
            <label className="text-ink2 text-sm sm:text-base font-medium">{t('amountLabel')}</label>
            <span className="text-lg sm:text-2xl font-bold text-ink">€ {amount.toLocaleString()}</span>
          </div>
          <Slider 
            min={LOAN_CONSTANTS.MIN_AMOUNT}
            max={LOAN_CONSTANTS.MAX_AMOUNT}
            step={500}
            value={amount}
            onChange={setAmount}
          />
        </div>

        <div>
          <div className="flex justify-between items-end mb-3">
            <label className="text-ink2 text-sm sm:text-base font-medium">{t('durationLabel')}</label>
            <span className="text-lg sm:text-2xl font-bold text-ink">{months} {t('months')}</span>
          </div>
          <Slider 
            min={LOAN_CONSTANTS.MIN_MONTHS}
            max={LOAN_CONSTANTS.MAX_MONTHS}
            step={6}
            value={months}
            onChange={setMonths}
          />
        </div>
      </div>

      <div className="mt-8 sm:mt-12 bg-bg -mx-4 sm:-mx-8 md:-mx-12 -mb-4 sm:-mb-8 md:-mb-12 p-5 sm:p-8 md:p-12 border-t border-gray-100">
        <div className="flex flex-col gap-5 sm:gap-8">
          <div className="text-center sm:text-left">
            <div className="text-ink2 text-[10px] sm:text-sm font-medium uppercase tracking-wider mb-2">{t('monthlyPayment')}</div>
            <div className="text-3xl sm:text-5xl font-display font-black text-brand mb-4">
              € {monthly.toFixed(2)}
            </div>
            <div className="text-xs sm:text-sm text-ink2 flex flex-col sm:flex-row sm:gap-4 justify-center sm:justify-start">
              <span>{t('taeg')} <span className="font-bold text-ink">{(LOAN_CONSTANTS.RATE * 100).toFixed(2)}%</span></span>
              <span className="hidden sm:inline">•</span>
              <span>{t('totalCost')}: <span className="font-bold text-ink">€ {total.toFixed(2)}</span></span>
            </div>
          </div>
          <Button onClick={handleApply} withChevron className="w-full text-xs sm:text-base py-3.5 sm:py-3 h-auto">
            {t('cta')}
          </Button>
        </div>
      </div>
    </Card>
  );
}
