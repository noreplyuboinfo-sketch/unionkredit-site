export const locales = ['fr', 'en', 'nl', 'de', 'it', 'pt', 'es', 'no', 'da'] as const;
export const defaultLocale = 'fr' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  nl: 'Nederlands',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  es: 'Español',
  no: 'Norsk',
  da: 'Dansk'
};
