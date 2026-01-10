'use client';

import { Locale, defaultLocale } from '@/lib/i18n';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const { theme, setTheme } = useTheme();

  function changeLanguage(locale: Locale) {
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/') || '/';
    router.replace(newPath);
  }

  const currentLocale = (pathname.split('/')[1] as Locale) || defaultLocale;
  const targetLocale: Locale = currentLocale === 'en' ? 'pt-BR' : 'en';
  const label = currentLocale === 'en' ? 'EN' : 'PT';

  return (
    <button
      type='button'
      className='font-medium hover:text-primary text-sm'
      aria-label={`Switch language to ${targetLocale}`}
      onPointerDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
          (e.nativeEvent as any)?.stopImmediatePropagation?.();
        } catch (err) {}
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentTheme = theme || 'dark';
        try {
          localStorage.setItem('theme', currentTheme as string);
        } catch (err) {}
        changeLanguage(targetLocale);
        setTimeout(() => {
          try {
            setTheme(currentTheme as any);
          } catch (err) {}
        }, 100);
      }}
    >
      {label}
    </button>
  );
}
