'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { FileTextIcon, UsersIcon, PresentationIcon, CalendarIcon } from './Icons';
import SectionHeaderWithImage from './SectionHeaderWithImage';
import { publications } from '@/data/publications';
import { fadeInUp, createTransition } from '@/lib/animations';

export default function Publications() {
  const { lang, t } = useLang();

  const heading = t.publications.heading;
  const subtitle = t.publications.subtitle;

  return (
    <section id="publications" className="relative">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <SectionHeaderWithImage
        title={heading}
        subtitle={subtitle}
        imageUrl="/Publications.jpg"
      />

      {/* コンテンツ領域 */}
      <div className="mx-auto max-w-7xl px-6 pt-10 md:pt-16 pb-20 md:pb-28 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {publications.map((item, i) => {
            const title = lang === 'ja' ? item.titleJa : item.titleEn;
            const authors = lang === 'ja' ? item.authorsJa : item.authorsEn;
            const conference = lang === 'ja' ? item.conferenceJa : item.conferenceEn;
            const award = lang === 'ja' ? item.awardJa : item.awardEn;

            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={createTransition(0.5, i)}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.04] border border-white/20 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.05)] hover:bg-white/[0.08] hover:border-white/40 hover:shadow-[0_4px_32px_-8px_rgba(255,255,255,0.15)] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="flex items-start gap-2 text-lg md:text-xl font-display font-bold text-ink leading-tight mb-3 group-hover:text-accent transition-colors">
                      <FileTextIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        {item.link && item.link !== '#' ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {title}
                          </a>
                        ) : (
                          title
                        )}
                      </span>
                    </h3>
                    <p className="flex items-center gap-2 text-sm md:text-sm font-display font-bold text-ink leading-tight mb-3 group-hover:text-accent transition-colors">
                      <UsersIcon className="w-4 h-4 flex-shrink-0" />
                      <span>{authors}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-ink-muted">
                      <span className="flex items-center gap-1.5 font-medium text-ink/70">
                        <PresentationIcon className="w-4 h-4 flex-shrink-0" />
                        {conference}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono">
                        <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {award && (
                    <div className="flex-shrink-0 mt-2 md:mt-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        {award}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
