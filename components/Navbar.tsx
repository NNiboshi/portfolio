'use client';

import React, { useEffect, useState } from 'react';
import { useLang } from '@/lib/i18n';
import { profile } from '@/data/profile';

const NAV_KEYS = ['about', 'projects', 'experience', 'publications', 'contact'] as const;

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-base/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* ロゴテキスト */}
        <a href="#home" className="group flex items-center" aria-label="Home">
          <span className="font-display font-black tracking-tighter text-xl uppercase text-ink group-hover:text-accent transition-colors">
            {profile.nameEn}
          </span>
        </a>

        {/* デスクトップメニュー */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_KEYS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-[13px] font-bold tracking-widest uppercase text-ink hover:text-accent transition-colors"
            >
              {t.nav[key]}
            </a>
          ))}
          <LangToggle lang={lang} onClick={toggle} />
        </div>

        {/* モバイル: 言語トグル + ハンバーガー */}
        <div className="flex items-center gap-4 md:hidden">
          <LangToggle lang={lang} onClick={toggle} />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="text-ink hover:text-accent transition-colors"
          >
            <span className="text-[13px] font-bold tracking-widest uppercase">
              {menuOpen ? 'CLOSE' : 'MENU'}
            </span>
          </button>
        </div>
      </nav>

      {/* モバイルメニュー展開 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-base ${
          menuOpen ? 'max-h-screen py-8 border-b border-base-border' : 'max-h-0'
        }`}
      >
        <div className="px-6 flex flex-col gap-6">
          {NAV_KEYS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-display font-bold tracking-tight text-ink hover:text-accent transition-colors"
            >
              {t.nav[key]}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function LangToggle({ lang, onClick }: { lang: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-ink-muted hover:text-ink transition-colors"
      aria-label="Toggle language"
    >
      <span className={lang === 'ja' ? 'text-accent' : ''}>JA</span>
      <span className="opacity-30">/</span>
      <span className={lang === 'en' ? 'text-accent' : ''}>EN</span>
    </button>
  );
}
