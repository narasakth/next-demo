import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js API-first (SSR) • Demo',
  description: 'Pages fetch API directly; Vercel-ready'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: 16 }}>{children}</main>
        <footer style={{ padding: 16, borderTop: '1px solid #eee', color: '#555' }}>
          API-first • SSR • Vercel
        </footer>
      </body>
    </html>
  );
}
