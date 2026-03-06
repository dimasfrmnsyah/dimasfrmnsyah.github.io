import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: {
    default: "Dimas Firmansyah — Web & Backend Developer",
    template: "%s — Dimas Firmansyah"
  },
  description:
    "Web & backend developer berpengalaman membangun aplikasi dari perencanaan hingga maintenance dengan fokus pada keamanan dan kualitas sistem.",
  metadataBase: new URL("https://example.com"),
  keywords: [
    "Web Developer",
    "Backend Developer",
    "Next.js Portfolio",
    "Node.js",
    "PHP",
    "Golang",
    "System Security"
  ],
  openGraph: {
    title: "Dimas Firmansyah — Web & Backend Developer",
    description:
      "Portfolio profesional web & backend developer dengan fokus pada API, keamanan sistem, dan delivery end-to-end.",
    url: "https://example.com",
    siteName: "Dimas Firmansyah",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${jetBrainsMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
