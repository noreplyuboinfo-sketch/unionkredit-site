export const locales = ['it', 'de'] as const;
export const defaultLocale = 'it' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  it: 'Italiano',
  de: 'Deutsch'
};

