'use client';

// ============================================================================
// 言語切り替え（日本語 / 英語）の Context
// ----------------------------------------------------------------------------
// localStorage は使わず React state で保持しています
// （GitHub Pages の静的サイトで安全に動作する形）。
// 初期言語は 'ja'（日本語）。useLang() でどこからでも参照できます。
// ============================================================================

import React, { createContext, useContext, useMemo, useState } from 'react';
import { dictionary, type Lang } from '@/data/dictionary';

export type Dict = typeof dictionary['ja'];

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ja');

  const value = useMemo<I18nContextType>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === 'ja' ? 'en' : 'ja')),
      t: dictionary[lang],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useLang() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useLang must be used within I18nProvider');
  return ctx;
}
