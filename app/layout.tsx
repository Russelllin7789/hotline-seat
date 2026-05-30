import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

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
    <html lang="zh-TW" className={notoSansTC.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
