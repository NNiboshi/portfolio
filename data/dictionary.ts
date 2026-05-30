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
      body: 'I am a student in the Department of Intelligent Information Systems Engineering, Graduate School of Engineering, Tokyo University of Agriculture and Technology. \nI mainly work as a software engineer. I have a wide range of experience in algorithm design and team development, from building robots for high school and researching machine learning to developing VR games, web development, and researching signal processing at university. I aim to be an engineer with a wide range of skills who can solve various problems. \nMy hobbies include games, hardcore music, and philosophy. \n\nI am currently a member of the Hayakawa Laboratory, where I am conducting research in the field of signal processing.',
      labText: 'Visit Lab Website',
      labUrl: 'https://web.tuat.ac.jp/~hayakawa-lab/',
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
