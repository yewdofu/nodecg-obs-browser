# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

NodeCGバンドル。OBS Studioのブラウザソース経由でシーン切り替えをダッシュボードからリモート操作できるようにする。

## コマンド

```bash
# 開発（TypeScript watch + Vite dev server + NodeCG を並行起動）
npm run dev

# 本番ビルド
npm run build

# スキーマからTypeScript型生成
npm run generate-schema-types
```

開発時は `localhost:9090` でNodeCGダッシュボードにアクセスする。

## アーキテクチャ

### 3層構成

```
Dashboard (src/browser/dashboard/)
  ↕ NodeCG messages
Graphics / OBS Browser Source (src/browser/graphics/)
  ↕ window.obsstudio API
OBS Studio
```

**Extension** (`src/extension/`) — Node.jsサーバーサイド。現状は最小限の実装。

**Graphics** (`src/browser/graphics/views/ObsControl.tsx`) — OBSのブラウザソース内で動作。`window.obsstudio` API（OBS専用）を呼び出す。

**Dashboard** (`src/browser/dashboard/views/SwitchScene.tsx`) — NodeCGダッシュボードのUIパネル。シーン一覧のドロップダウンを表示。

### メッセージフロー

```
Dashboard → "get-scenes" → Graphics → window.obsstudio.getScenes() → "send-scenes" → Dashboard
Dashboard → "change-scene" (scene名) → Graphics → window.obsstudio.setCurrentScene()
```

### ビルドシステム

`vite-plugin-nodecg.mts`（RTA in Japan製カスタムプラグイン）が以下を担う：

- `src/template.html` を元にgraphics / dashboard用のHTMLファイルを自動生成
- ExtensionはRollup + esbuildで別途ビルド（`src/extension/index.ts` → `extension/index.js`）
- Graphicsのglob: `src/browser/graphics/views/**/*.tsx`
- Dashboardのglob: `src/browser/dashboard/views/**/*.tsx`

新しいGraphicsまたはDashboardビューは上記のglobに合致するディレクトリに配置すれば自動的にHTMLとして出力される。

### NodeCGバンドル設定（package.json内）

- ダッシュボードパネル: `SwitchScene`（幅2列）
- グラフィックス: `ObsControl`（1920×1080）
- アセットカテゴリ: `test`（画像形式）

## コードスタイル

- インデント: タブ（幅2）
- クォート: シングル（JSX属性もシングル）
- JSX: `@emotion/react` の jsx pragma を使用
- TypeScript strict mode 有効
