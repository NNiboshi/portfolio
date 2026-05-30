# Portfolio — Masaki Iwanaga

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion で構築した、
日英切り替え対応のシングルページ・ポートフォリオサイトです。
テック・ダークなデザインで、GitHub Pages（無料）に公開できます。

## 構成セクション（1ページ・スクロール）

- **Home** — アニメーション付きヒーロー（名前・肩書き）
- **About** — 3文の自己紹介 + コード風カード
- **Projects** — 制作・研究（追加・削除が簡単なデータ駆動）
- **Experience** — 学歴・サークル・研究室のタイムライン
- **Contact** — メールアドレス + SNSリンク

ナビのリンクは同じページ内のスムーズスクロールに対応しています。

---

## 開発手順

```bash
npm install      # 依存パッケージのインストール（初回のみ）
npm run dev      # 開発サーバー起動 → http://localhost:3000
npm run build    # 静的エクスポート（out/ が生成されます）
```

Node.js 18 以上を推奨します。

---

## 内容の編集（コードが分からなくても編集できます）

すべての文章・データは `data/` フォルダにまとまっています。

| 編集したいもの | ファイル |
| --- | --- |
| 名前・肩書き・メールアドレス | `data/profile.ts` |
| 自己紹介・各セクションの見出し（日英） | `data/dictionary.ts` |
| Projects（制作経験）の追加・削除 | `data/projects.ts` |
| Experience（経歴）の追加・削除 | `data/experience.ts` |
| GitHub / LinkedIn などのリンク | `data/socials.ts` |

### よくある編集

- **名前の漢字を直す** → `data/profile.ts` の `nameJa` を修正
- **プロジェクトを追加** → `data/projects.ts` の配列に1つオブジェクトを足す
- **経歴の年を正しくする** → `data/experience.ts` の `period`（現在は `20XX` 仮置き）を修正
- **GitHubリンクを表示** → `data/socials.ts` の `url` に実際のURLを入れる（空だと非表示）

> 仮置き（TODO）になっている箇所：名前の漢字、大学・研究室名、経歴の年度、SNSのURL。
> 各ファイル内のコメントに従って正しい値に差し替えてください。

---

## GitHub Pages への公開手順

### 方法A：GitHub Actions で自動公開（推奨）

このプロジェクトには `.github/workflows/deploy.yml` が含まれており、
`main` ブランチへ push するたびに自動でビルド＆公開されます。

1. GitHub で新しいリポジトリを作成（例：`portfolio`）
2. このプロジェクトを push

   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```

3. GitHub のリポジトリで **Settings → Pages → Build and deployment** の
   **Source** を **「GitHub Actions」** に変更
4. 数分待つと
   `https://<ユーザー名>.github.io/<リポジトリ名>/`
   で公開されます

ワークフローがリポジトリ名を `basePath` として自動設定するため、
サブディレクトリ公開でもリンク・画像が正しく表示されます。

### 方法B：手動で out/ を公開

```bash
npm run build           # out/ が生成される
```

`out/` の中身を `gh-pages` ブランチ等にアップロードして公開します。
手動の場合、`basePath` を環境変数で指定してください：

```bash
# 例：リポジトリ名が portfolio の場合
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

### basePath について

- `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開
  → `basePath` に `/<リポジトリ名>` が必要（Actionsが自動設定）
- 独自ドメイン、または `<ユーザー名>.github.io` という名前のリポジトリ
  → `basePath` は不要。`deploy.yml` の `NEXT_PUBLIC_BASE_PATH` 行を削除するか空にしてください

---

## 技術スタック

- [Next.js 14](https://nextjs.org/)（App Router・静的エクスポート `output: 'export'`）
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)（スクロールアニメーション）
- フォント：Cabinet Grotesk / Satoshi（Fontshare）、JetBrains Mono（Google Fonts）

---

## ライセンス

個人ポートフォリオ用。自由に編集してご利用ください。
