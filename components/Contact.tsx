'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import { SocialIcon, MailIcon, CopyIcon, CheckIcon, ArrowUpRight } from './Icons';

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // クリップボードが使えない場合は何もしない
    }
  };

  const visibleSocials = socials.filter((s) => s.url.trim() !== '');

  return (
    <section id="contact" className="section-pad relative bg-base-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={t.contact.heading} subtitle={t.contact.subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <div className="py-8 md:py-10 border-t border-base-border flex justify-start">
            <div className="flex items-center gap-4 p-4 md:p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all max-w-full overflow-x-auto">
              <div className="text-ink-muted shrink-0">
                <MailIcon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col gap-1 md:gap-1.5 pr-4 md:pr-8">
                <span className="font-bold text-ink text-base md:text-lg leading-none">Email</span>
                <span className="font-mono text-xs md:text-sm text-ink-muted leading-none">
                  {profile.email.replace('@', ' [at] ')}
                </span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 ml-auto pl-4 border-l border-white/10 shrink-0">
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-white/10 transition-colors"
                  aria-label={t.contact.copy}
                >
                  {copied ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-white/10 transition-colors"
                  aria-label={t.contact.send}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* SNSリンク */}
          {visibleSocials.length > 0 && (
            <div className="flex items-center gap-6 pt-6">
              {visibleSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  <SocialIcon icon={s.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
