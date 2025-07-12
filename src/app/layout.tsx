import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vanessa Johnson - Android Engineer',
  description: 'Android Engineer at The New York Times, speaker at KotlinConf 2025, and Google Summer of Code contributor.',
  keywords: ['Android', 'Kotlin', 'Mobile Development', 'The New York Times', 'KotlinConf', 'Google Summer of Code'],
  authors: [{ name: 'Vanessa Johnson' }],
  creator: 'Vanessa Johnson',
  openGraph: {
    title: 'Vanessa Johnson - Android Engineer',
    description: 'Android Engineer at The New York Times, speaker at KotlinConf 2025, and Google Summer of Code contributor.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanessa Johnson - Android Engineer',
    description: 'Android Engineer at The New York Times, speaker at KotlinConf 2025, and Google Summer of Code contributor.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 