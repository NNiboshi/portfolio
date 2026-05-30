'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { profile } from '@/data/profile';

export default function Hero() {
  const { lang, t } = useLang();
  const name = lang === 'ja' ? profile.nameJa : profile.nameEn;
  const tagline = lang === 'ja' ? profile.taglineJa : profile.taglineEn;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 背景画像と高級感のあるグラデーションオーバーレイ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ backgroundImage: `url("${basePath}/back.jpg")` }}
        />
        {/* 上部の固定ヘッダー付近を少し暗くし、中央は透過させ画像を明るく、下部はセクションの背景色へと溶け込ませる */}
        <div className="absolute inset-0 bg-gradient-to-b from-base/75 via-transparent to-base" />
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* タイトルサイズはキープ */}
          <h1 className="font-display font-black leading-tight tracking-tight text-5xl md:text-7xl lg:text-8xl text-ink">
            <span className="block text-xl md:text-2xl font-medium tracking-tight text-ink-muted mb-4">
              {t.hero.greeting}
            </span>
            <span className="block text-accent transition-colors hover:text-accent-light">
              {name}
            </span>
          </h1>

          {/* 本文（説明）を標準の読みやすいサイズに縮小 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 md:mt-10 max-w-2xl text-base leading-relaxed text-ink-muted font-body font-light"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex items-center gap-8"
          >
            <a
              href="#about"
              className="group flex items-center gap-2 text-sm font-bold tracking-tight text-ink hover:text-accent transition-colors"
            >
              {lang === 'ja' ? 'もっと詳しく' : 'Meet Masaki'}
              <span className="block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
