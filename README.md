# 熱線募款感恩會 — 內場組招募

Next.js + React + TypeScript + Tailwind CSS 建置的單頁招募網站，部署於 GitHub Pages。

## 開發

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 預覽（本地開發不需要 `/hotline-seat` 前綴）。

若出現 `Cannot read properties of undefined (reading 'call')` 或 webpack 模組找不到，通常是 `.next` 快取損壞，請執行：

```bash
npm run dev:clean
```

## 正式環境

GitHub Pages 網址：[https://russelllin7789.github.io/hotline-seat/](https://russelllin7789.github.io/hotline-seat/)

## 建置

```bash
npm run build
```

靜態輸出目錄為 `out/`，供 GitHub Pages 部署使用。
