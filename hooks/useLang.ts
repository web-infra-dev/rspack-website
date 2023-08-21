import { useLang as useLangRaw } from '@modern-js/doc-tools/runtime';

const useLang = () => {
  const lang = useLangRaw();

  return [lang, lang === 'en'];
};

export { useLang };
