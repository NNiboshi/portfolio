'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import SectionHeaderWithImage from './SectionHeaderWithImage';
import { experience } from '@/data/experience';
import { fadeInLeft, createTransition } from '@/lib/animations';

export default function Experience() {
  const { lang, t } = useLang();

  const kindLabels = {
    ja: { school: '学歴', lab: '研究', club: '課外活動', work: '職歴', life: '誕生' },
    en: { school: 'Education', lab: 'Research', club: 'Activity', work: 'Experience', life: 'Birth' },
  };

  return (
    <section id="experience" className="relative">
      <SectionHeaderWithImage
        title={t.experience.heading}
        subtitle={t.experience.subtitle}
        imageUrl="/puzzle.jpg"
      />

      {/* タイムライン（コンテンツ領域） */}
      <div className="mx-auto max-w-7xl px-6 pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="relative max-w-4xl">


          {/* 左側のタイムライン（縦線） */}
          <div className="absolute left-[11px] md:left-[130px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-base-border/70 to-base-border/10" />

          <div className="flex flex-col gap-6 md:gap-10 mt-4">
            {experience.map((item, i) => {
              const isSchool = item.kind === 'school' || item.kind === 'lab';
              const isClub = item.kind === 'club';

              let dotClass = 'border-ink-muted bg-base';
              let titleClass = 'text-ink';
              let periodClass = 'text-ink-faint';
              let badgeClass = 'border-white/10 bg-white/5 text-ink/80';

              if (isSchool) {
                dotClass = 'border-blue-400 bg-blue-500';
                titleClass = 'text-blue-100';
                periodClass = 'text-blue-300';
                badgeClass = 'border-blue-500/30 bg-blue-500/10 text-blue-200';
              } else if (isClub) {
                dotClass = 'border-emerald-400 bg-emerald-500';
                titleClass = 'text-emerald-100';
                periodClass = 'text-emerald-300';
                badgeClass = 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200';
              }

              return (
                <motion.div
                  key={`${item.titleEn}-${i}`}
                  variants={fadeInLeft}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={createTransition(0.6, i)}
                  className="relative pl-10 md:pl-[170px]"
                >
                  <div className={`absolute left-[3px] md:left-[122px] top-6 h-4 w-4 rounded-full border-2 flex items-center justify-center z-10 shadow-[0_0_8px_rgba(0,0,0,0.5)] ${dotClass}`} />

                  {/* デスクトップ用の年表示（ドットの左側） */}
                  <div className="hidden md:block absolute left-0 top-[1.4rem] w-[105px] text-right">
                    <span className={`font-mono text-[11px] tracking-widest uppercase ${periodClass}`}>
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-col py-2">
                    <div className="flex items-center gap-3 mb-1.5">
                      {/* モバイル用の年表示（カード内） */}
                      <span className={`md:hidden font-mono text-[10px] tracking-widest uppercase ${periodClass}`}>
                        {item.period}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-widest border ${badgeClass}`}>
                        {kindLabels[lang][item.kind]}
                      </span>
                    </div>
                    
                    <h3 className={`font-display font-bold text-lg md:text-xl tracking-tight mb-1 ${titleClass}`}>
                      {lang === 'ja' ? item.titleJa : item.titleEn}
                    </h3>
                    
                    <p className="text-xs text-ink-muted font-medium">
                      {lang === 'ja' ? item.summaryJa : item.summaryEn}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
