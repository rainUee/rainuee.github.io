import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shiyu Huang - Full Stack Developer',
  description: 'Portfolio of Shiyu Huang, passionate full stack developer specializing in React, Next.js, and modern web technologies',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Shiyu Huang' }],
  openGraph: {
    title: 'Shiyu Huang - Full Stack Developer',
    description: 'Portfolio showcasing my projects and skills',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" />
        <link rel="mask-icon" href="/icon.svg" color="#7c3aed" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}