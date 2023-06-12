import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>FantasticPower</title>
        <meta property="og:title" content="FantasticPower" />
        <meta property="og:description" content="Сеть увлекательных игровых сервер в Minecraft" />
        <meta property="og:type" content="website" />
      </head>
      <body>{children}</body>
    </html>
  );
}