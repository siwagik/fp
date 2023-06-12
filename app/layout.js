import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FantasticPower',
  description: 'МААААААААААААЙНКРАФТ МОЯ ЖИЗНЬ',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
