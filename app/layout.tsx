import './globals.css';
import { Inter } from 'next/font/google';
import CartContextProvider from '@/context/addToCart';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E Commerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
