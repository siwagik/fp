import { Inter } from 'next/font/google'

import Head from "next/head"
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>FantascticPower</title>

        <meta property='og:title' content='FantasticPower'/>
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fantasticpower.vercel.app/'/>
        <meta property='og:description' content='Описание страницы'/>
        <meta property='og:image' content='https://fantasticpower.vercel.app/cringe.jpg'/>

      </Head>
      <body>{children}</body>
    </html>
  )
}
