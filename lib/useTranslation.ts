import en from '@/dictionaries/en.json';
import ptBR from '@/dictionaries/pt-BR.json';
import { useRouter } from 'next/router';

const translations = {
  'pt-BR': ptBR,
  en: en,
};

export function useTranslation() {
  const { locale } = useRouter();

  const t = (key: keyof typeof ptBR) => {
    return translations[locale as 'pt-BR' | 'en'][key];
  };

  return { t };
}
