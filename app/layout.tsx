import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026 熱線募款感恩會",
  description: "台灣同志諮詢熱線協會 2026 募款感恩會 — Together Stronger",
  icons: {
    icon: "https://hotline.org.tw/sites/hotline.org.tw/files/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">{children}</body>
    </html>
  );
}
