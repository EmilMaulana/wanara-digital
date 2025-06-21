import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PT Wanara Digital Indonesia",
  description:
    "Mitra terpercaya untuk solusi digital inovatif, pengembangan perangkat lunak, dan transformasi teknologi.",
  keywords: [
    "wanara digital",
    "PT Wanara Digital Indonesia",
    "pengembangan perangkat lunak",
    "startup teknologi Indonesia",
    "jasa pembuatan aplikasi",
    "transformasi digital",
  ],
  authors: [
    { name: "PT Wanara Digital Indonesia", url: "https://wanara.digital" },
  ],
  creator: "PT Wanara Digital Indonesia",
  openGraph: {
    title: "PT Wanara Digital Indonesia",
    description:
      "Solusi teknologi untuk masa depan. Kami menyediakan layanan pengembangan perangkat lunak dan solusi digital yang handal.",
    url: "https://wanara.digital",
    siteName: "Wanara Digital Indonesia",
    images: [
      {
        url: "/og-image.jpg", // Pastikan kamu punya file ini di public/
        width: 1200,
        height: 630,
        alt: "Wanara Digital Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Wanara Digital Indonesia",
    description:
      "Solusi teknologi untuk masa depan. Pengembangan software dan transformasi digital.",
    images: ["/og-image.jpg"],
    site: "@wanaradigital",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
