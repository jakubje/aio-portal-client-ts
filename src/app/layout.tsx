import './globals.css';
import SideNav from './ui/sidenav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import ThemeSwitcher from './components/ThemeSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AIO Verse',
  description: 'All In One Hobby App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex">
            <ThemeSwitcher />
            <SideNav />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
