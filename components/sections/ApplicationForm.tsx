'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { LOAN_CONSTANTS } from '@/lib/loan';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ApplicationForm() {
  const t = useTranslations('form');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const schema = z.object({
    firstName: z.string().min(2, { message: t('errors.required') }),
    lastName: z.string().min(2, { message: t('errors.required') }),
    email: z.string().email({ message: t('errors.email') }),
    phone: z.string().min(8, { message: t('errors.phone') }),
    amount: z.number({ message: t('errors.required') }).min(LOAN_CONSTANTS.MIN_AMOUNT).max(LOAN_CONSTANTS.MAX_AMOUNT),
    months: z.number({ message: t('errors.required') }).min(LOAN_CONSTANTS.MIN_MONTHS).max(LOAN_CONSTANTS.MAX_MONTHS),
  });

  type FormData = z.infer<typeof schema>;

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      amount: 10000,
      months: 48,
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    setIsSubmitted(true);
  };

  return (
    <section id="application-form" className="py-24 bg-brand text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">{t('title')}</h2>
            <p className="text-xl text-brand-light">{t('subtitle')}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Card className="p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4">{t('success.title')}</h3>
                <p className="text-ink2 text-lg">{t('success.desc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-ink mb-2">{t('fields.firstName')}</label>
                    <input 
                      {...register('firstName')} 
                      className={cn("w-full px-4 py-3 rounded-lg border bg-gray-50 text-ink focus:outline-none focus:ring-2 focus:ring-brand", errors.firstName ? "border-red-500" : "border-gray-200")} 
                    />
                    {errors.firstName && <span className="text-red-500 text-sm mt-1 block">{errors.firstName.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-ink mb-2">{t('fields.lastName')}</label>
                    <input 
                      {...register('lastName')} 
                      className={cn("w-full px-4 py-3 rounded-lg border bg-gray-50 text-ink focus:outline-none focus:ring-2 focus:ring-brand", errors.lastName ? "border-red-500" : "border-gray-200")} 
                    />
                    {errors.lastName && <span className="text-red-500 text-sm mt-1 block">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-ink mb-2">{t('fields.email')}</label>
                    <input 
                      type="email"
                      {...register('email')} 
                      className={cn("w-full px-4 py-3 rounded-lg border bg-gray-50 text-ink focus:outline-none focus:ring-2 focus:ring-brand", errors.email ? "border-red-500" : "border-gray-200")} 
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-ink mb-2">{t('fields.phone')}</label>
                    <input 
                      type="tel"
                      {...register('phone')} 
                      className={cn("w-full px-4 py-3 rounded-lg border bg-gray-50 text-ink focus:outline-none focus:ring-2 focus:ring-brand", errors.phone ? "border-red-500" : "border-gray-200")} 
                    />
                    {errors.phone && <span className="text-red-500 text-sm mt-1 block">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-ink mb-2">{t('fields.amount')} (€)</label>
                    <input 
                      type="number"
                      {...register('amount', { valueAsNumber: true })} 
                      className={cn("w-full px-4 py-3 rounded-lg border bg-gray-50 text-ink focus:outline-none focus:ring-2 focus:ring-brand", errors.amount ? "border-red-500" : "border-gray-200")} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-ink mb-2">{t('fields.months')}</label>
                    <input 
                      type="number"
                      {...register('months', { valueAsNumber: true })} 
                      className={cn("w-full px-4 py-3 rounded-lg border bg-gray-50 text-ink focus:outline-none focus:ring-2 focus:ring-brand", errors.months ? "border-red-500" : "border-gray-200")} 
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button type="submit" className="w-full h-14 text-lg">
                    {t('submit')}
                  </Button>
                </div>
                <p className="text-center text-sm text-ink2 mt-4">{t('secureInfo')}</p>
              </form>
            )}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
