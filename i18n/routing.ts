import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import { locales, defaultLocale } from '@/lib/locales';

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localeDetection: true
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
