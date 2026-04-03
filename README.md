# nodecg-obs-browser

OBS StudioをNodeCGから扱うサンプルBundle

## Usage

### NodeCGの準備

1. Cloneする
2. `npm install`でパッケージをインストール
3. `npm run dev`でNodeCGを開始する
4. ウェブブラウザで`localhost:9090`にアクセスし、Dashboardを開く。

### OBS Studioでの操作

ブラウザソースを追加する。

- URL: `http://localhost:9090/bundles/nodecg-obs-browser/graphics/obscontrol.html`
- ページ権限を `OBSへの高度なアクセス...`に設定

### 使う

Dashboardでシーン一覧が選択できるので、切り替える。

## Credits

- [Cmaさん](https://github.com/cma2819): [Zennの記事](https://zenn.dev/cma2819/articles/try-obs-browser)を拝読したのがきっかけです。
- [RTA in Japan](https://github.com/RTAinJapan/rtainjapan-layouts): `vite-plugin-nodecg.mts`を拝借
