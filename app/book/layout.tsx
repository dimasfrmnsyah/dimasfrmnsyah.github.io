import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./book.css";

const pressStart2P = Press_Start_2P({
  variable: "--font-book",
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Book Portfolio — Dimas Firmansyah",
  description: "Interactive book-style portfolio experience."
};

export default function BookLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`${pressStart2P.variable} book-theme`}>
      {children}
    </section>
  );
}
