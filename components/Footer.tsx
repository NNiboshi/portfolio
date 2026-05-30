'use client';

import React from 'react';
import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-base">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs tracking-widest uppercase text-ink-faint">
          © {year} {profile.nameEn}
        </p>
        <p className="font-mono text-xs tracking-widest uppercase text-ink-faint">
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
