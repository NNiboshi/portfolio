/** @type {import('next').NextConfig} */

// ============================================================================
// GitHub Pages 公開時の設定
// ----------------------------------------------------------------------------
// リポジトリを https://<ユーザー名>.github.io/<リポジトリ名>/ で公開する場合は、
// 下の BASE_PATH に "/リポジトリ名" を設定してください（先頭スラッシュ必須）。
//   例) リポジトリ名が "portfolio" なら:  const BASE_PATH = '/portfolio';
//
// 独自ドメイン、または <ユーザー名>.github.io というリポジトリ名で
// ルート公開する場合は、空文字 '' のままで構いません。
//
// 環境変数 NEXT_PUBLIC_BASE_PATH でも上書きできます（GitHub Actions で自動設定）。
// ============================================================================
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig = {
  output: 'export', // 静的HTMLとしてエクスポート（GitHub Pages 向け）
  images: {
    unoptimized: true, // 静的エクスポートでは画像最適化を無効化
  },
  basePath: BASE_PATH || undefined,
  assetPrefix: BASE_PATH ? `${BASE_PATH}/` : undefined,
  trailingSlash: true, // GitHub Pages でのルーティング安定化
};

export default nextConfig;
