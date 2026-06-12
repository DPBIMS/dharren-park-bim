import './globals.css';
import { Syne, DM_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' });

export const metadata = {
  title: 'Dharren Park BIM System',
  description: 'Learn BIM from a Senior Specialist',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}