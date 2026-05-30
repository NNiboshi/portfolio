'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import SectionHeaderWithImage from './SectionHeaderWithImage';
import { projects } from '@/data/projects';
import { fadeInUp, createTransition } from '@/lib/animations';
import { ArrowUpRight, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { ProjectItem } from '@/types';

export default function Projects() {
  const { lang, t } = useLang();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section id="projects" className="relative">
      <SectionHeaderWithImage
        title={t.projects.heading}
        subtitle={t.projects.subtitle}
        imageUrl="/coding.jpg"
      />

      {/* プロジェクトリスト（コンテンツ領域） */}
      <div className="mx-auto max-w-7xl px-6 pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <motion.article
              key={p.title || p.titleEn || p.titleJa}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={createTransition(0.8)}
              onClick={() => {
                setSelectedProject(p);
                setCurrentImageIndex(0);
              }}
              className="group relative flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-10 py-10 border-b border-base-border transition-colors hover:bg-base-surface cursor-pointer"
            >
              <div className="md:w-1/2 flex flex-col">
                <span className="font-mono text-xs text-accent tracking-widest mb-2 block">
                  {p.year}.{p.month}
                </span>
                {/* 見出しサイズはキープ */}
                <h3 className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight group-hover:text-accent transition-colors">
                  {lang === 'ja' ? (p.titleJa || p.title) : (p.titleEn || p.title)}
                </h3>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-ink-faint tracking-widest uppercase border border-base-border/50 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2 flex flex-col justify-between h-full">
                {/* 説明文の文字サイズを小さく (text-sm) */}
                <p className="text-sm text-ink-muted leading-relaxed font-light whitespace-pre-wrap">
                  {lang === 'ja' ? p.summaryJa : p.summaryEn}
                </p>

                {p.link && (
                  <div className="mt-6">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} link`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-ink hover:text-accent transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      More Info <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-base text-ink w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative pointer-events-auto border border-base-border"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-base-surface hover:bg-base-border transition-colors z-10"
                  aria-label="Close"
                >
                  <CloseIcon className="w-5 h-5 text-ink" />
                </button>
                
                {selectedProject.imageUrls && selectedProject.imageUrls.length > 0 && (
                  <div className="w-full bg-base-surface/30 border-b border-base-border flex justify-center p-4 md:p-6">
                    <div className="w-full max-w-md aspect-square relative group/carousel rounded-lg overflow-hidden bg-base-surface shadow-sm">
                      <img 
                        src={`${basePath}${selectedProject.imageUrls[currentImageIndex]}`} 
                        alt={`${lang === 'ja' ? (selectedProject.titleJa || selectedProject.title) : (selectedProject.titleEn || selectedProject.title)} - image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain transition-opacity duration-300"
                      />
                    
                    {selectedProject.imageUrls.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => 
                              prev === 0 ? (selectedProject.imageUrls?.length ?? 1) - 1 : prev - 1
                            );
                          }}
                          className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-base/80 hover:bg-base text-ink opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                          aria-label="Previous image"
                        >
                          <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => 
                              prev === (selectedProject.imageUrls?.length ?? 1) - 1 ? 0 : prev + 1
                            );
                          }}
                          className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-base/80 hover:bg-base text-ink opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                          aria-label="Next image"
                        >
                          <ChevronRightIcon className="w-5 h-5" />
                        </button>
                        
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {selectedProject.imageUrls.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                              }}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                idx === currentImageIndex ? 'bg-ink' : 'bg-ink/30'
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    </div>
                  </div>
                )}
                
                <div className="p-6 md:p-10">
                  <span className="font-mono text-sm text-accent tracking-widest mb-1 block">
                    {selectedProject.year}.{selectedProject.month}
                  </span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight mb-4">
                    {lang === 'ja' ? (selectedProject.titleJa || selectedProject.title) : (selectedProject.titleEn || selectedProject.title)}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-ink-faint tracking-widest uppercase border border-base-border/50 px-3 py-1 rounded-full bg-base-surface"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p 
                    className="text-base text-ink-muted leading-relaxed font-light mb-8 whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: lang === 'ja' ? selectedProject.ja : selectedProject.en }}
                  />
                  
                  {selectedProject.link && (
                    <div>
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase bg-ink text-[#0a0a0f] px-6 py-3 rounded-full hover:scale-105 transition-transform"
                      >
                        More Info <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
