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
        <meta property="og:url" content="https://fantasticpower.vercel.app/" />
        <meta property="og:image" content="https://fantasticpower.vercel.app/cringe.jpg" />
        <meta property='og:image:width' content='1200'/>
        <meta property='og:image:height' content='630'/>
      </head>
      <body>{children}</body>
    </html>
  );
}