import { Locale } from './i18n';

const dictionaries: Record<Locale, () => Promise<any>> = {
  'pt-BR': () => import('@/dictionaries/pt-BR.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
