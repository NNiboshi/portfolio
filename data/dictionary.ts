// ============================================================================
// UI テキスト辞書（日本語 / 英語）
// ----------------------------------------------------------------------------
// ナビゲーションや各セクションの見出し・固定文言をまとめています。
// 文言を変えたいときはここを編集してください。
// ============================================================================

export type Lang = 'ja' | 'en';

export const dictionary = {
  ja: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      publications: 'Publications',
      contact: 'Contact',
    },
    hero: {
      greeting: 'こんにちは',
      iam: 'です。',
      scroll: 'スクロール',
    },
    about: {
      heading: 'About',
      // 3文程度の自己紹介（日本語）
      body: '東京農工大学 工学府 知能情報システム工学専攻所属の学生です．\n主にソフトウェアエンジニアとして活動しています．高校でのロボコン制作・機械学習研究から，大学でのVRゲーム開発・Web開発・信号処理研究まで，アルゴリズム設計とチーム開発を幅広く経験してきました．幅広い技術を持ち，様々な課題を解決できるエンジニアを目指しています．\n趣味はゲーム，ハードコア音楽，哲学など．\n\n現在は早川研究室に所属し，信号処理の分野で研究を行っています．',
      labText: '研究室Webサイトへ',
      labUrl: 'https://web.tuat.ac.jp/~hayakawa-lab/',
      certificationsHeading: '資格・免許',
    },
    projects: {
      heading: 'Projects',
      subtitle: 'これまでに取り組んできた制作・研究',
      view: '詳細を見る',
    },
    experience: {
      heading: 'Experience',
      subtitle: 'これまでの歩み',
    },
    publications: {
      heading: 'Publications',
      subtitle: '論文・学会発表',
    },
    contact: {
      heading: 'Contact',
      subtitle: '',
      send: 'メールを送る',
      copy: 'コピー',
      copied: 'コピーしました',
    },
    footer: {
      built: 'Next.js で制作',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      publications: 'Publications',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm ",
      iam: '',
      scroll: 'Scroll',
    },
    about: {
      heading: 'About',
      // 3-sentence self introduction (English)
      body: 'M.Eng. student in Computer and Information Sciences at Tokyo University of Agriculture and Technology. From robotics and machine learning in high school to VR game development, web applications, and audio signal processing in university, I have a broad range of experience in algorithm design and team development. I aim to be an engineer who can leverage technology to drive business impact.',
      labText: 'Visit Lab Website',
      labUrl: '#',
      certificationsHeading: 'Certifications',
    },
    projects: {
      heading: 'Projects',
      subtitle: 'Things I have built and researched',
      view: 'View',
    },
    experience: {
      heading: 'Experience',
      subtitle: 'Education, circles, and research',
    },
    publications: {
      heading: 'Publications',
      subtitle: 'Research Papers & Presentations',
    },
    contact: {
      heading: 'Contact',
      subtitle: 'Feel free to reach out',
      send: 'Send Email',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: {
      built: 'Built with Next.js / Hosted on GitHub Pages',
    },
  },
};
