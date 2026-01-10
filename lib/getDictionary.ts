import { Locale } from './i18n';

const dictionaries: Record<Locale, () => Promise<any>> = {
  'pt-BR': () => import('@/dictionaries/pt-BR.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  const loader = (dictionaries as any)[locale] ?? dictionaries['pt-BR'];

  if (typeof loader === 'function') {
    try {
      return await loader();
    } catch (err) {
      console.error('Error loading dictionary for', locale, err);

      return await dictionaries['pt-BR']();
    }
  }

  try {
    const res = await Promise.resolve(loader);
    return res?.default ?? res;
  } catch (err) {
    console.error('Unexpected dictionary format for', locale, err);
    return await dictionaries['pt-BR']();
  }
};
