'use client';

import React from 'react';

export default function SectionHeading({
  title,
  subtitle,
}: {
  index?: string; // 使わないが互換性のため残す
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-16 md:mb-24">
      <h2 className="font-display font-black tracking-tighter text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] text-ink uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-ink-muted font-light max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
