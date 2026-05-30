export type ExperienceItem = {
  period: string;
  titleJa: string;
  titleEn: string;
  summaryJa: string;
  summaryEn: string;
  kind: 'school' | 'lab' | 'club' | 'work' | 'life';
};

export type PublicationItem = {
  titleJa: string;
  titleEn: string;
  authorsJa: string;
  authorsEn: string;
  conferenceJa: string;
  conferenceEn: string;
  year: string;
  link?: string;
  awardJa?: string;
  awardEn?: string;
};

export type ProjectItem = {
  title?: string;
  titleJa?: string;
  titleEn?: string;
  summaryJa: string;
  summaryEn: string;
  ja: string;
  en: string;
  tags: string[];
  link: string;
  imageUrls?: string[];
  year: string;
  month: string;
};
