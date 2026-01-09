'use client';

import { Locale } from '@/lib/i18n';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(locale: Locale) {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  }

  return <button onClick={() => changeLanguage('en')}>EN</button>;
}
