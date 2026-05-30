import React from 'react';
import SectionHeading from './SectionHeading';

type SectionHeaderWithImageProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageOpacity?: string;
};

export default function SectionHeaderWithImage({
  title,
  subtitle,
  imageUrl,
  imageOpacity = 'opacity-35',
}: SectionHeaderWithImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* 背景画像とオーバーレイ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${imageOpacity} scale-105`}
          style={{ backgroundImage: `url("${basePath}${imageUrl}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/75 via-transparent to-base" />
      </div>

      {/* 見出しコンテンツ */}
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeading title={title} subtitle={subtitle} />
      </div>
    </div>
  );
}
