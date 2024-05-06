import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '동아줄',
  description: '커리어 연결 플랫폼 동아줄입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
