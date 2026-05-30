'use client';

import React from 'react';

import { useLang } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { ArrowUpRight } from './Icons';

const FACTS_JA = [
  { key: 'Role', value: '修士課程（情報工学）' },
  { key: 'Field', value: '信号処理，ソフトウェア全般' },
  { key: 'Interests', value: 'アルゴリズム，数理最適化' },
  { key: 'Base', value: '関東，日本' },
];

const FACTS_EN = [
  { key: 'Role', value: 'M.Eng. Student (Computer Science)' },
  { key: 'Field', value: 'Signal Processing, Software' },
  { key: 'Interests', value: 'Algorithms, Optimization' },
  { key: 'Base', value: 'Kanto, JP' },
];

const CERTIFICATIONS_JA = [
  { date: '2022年5月', name: '基本情報技術者試験' },
  { date: '2025年12月', name: 'TOEIC L&R TEST 660点' },
];

const CERTIFICATIONS_EN = [
  { date: 'Apr 2022', name: 'Fundamental Information Technology Engineer Examination' },
  { date: 'Dec 2025', name: 'TOEIC L&R TEST 660' },
];

export default function About() {
  const { lang, t } = useLang();
  const facts = lang === 'ja' ? FACTS_JA : FACTS_EN;
  const certifications = lang === 'ja' ? CERTIFICATIONS_JA : CERTIFICATIONS_EN;

  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={t.about.heading} />

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-8">
            {/* 本文の font-light を外し、より確実にレンダリングされるようにする */}
            <p className="text-base md:text-lg leading-relaxed text-ink font-body tracking-wide whitespace-pre-wrap">
              {t.about.body}
            </p>

            {t.about.labUrl && (
              <div className="mt-8">
                <a
                  href={t.about.labUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold tracking-widest uppercase text-ink hover:text-accent transition-colors"
                >
                  {t.about.labText} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            )}


          </div>

          <div className="md:col-span-4">
            <dl className="space-y-6">
              {facts.map((fact) => (
                <div key={fact.key} className="border-b border-base-border/50 pb-3">
                  <dt className="font-mono text-[11px] text-ink-faint tracking-[0.2em] uppercase mb-1">
                    {fact.key}
                  </dt>
                  <dd className="text-base text-ink font-bold tracking-tight">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <h3 className="font-mono text-[11px] text-ink-faint tracking-[0.2em] uppercase mb-4">
                {t.about.certificationsHeading}
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="border-b border-base-border/50 pb-3 last:border-0 last:pb-0">
                    <div className="font-mono text-[11px] text-accent tracking-[0.1em] mb-1">{cert.date}</div>
                    <div className="text-base text-ink font-bold tracking-tight leading-snug">{cert.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
