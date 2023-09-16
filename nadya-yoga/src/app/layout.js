import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import StickyFooter from '@/components/StickyFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nadya Yoga',
  description: 'A community based yoga website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <StickyFooter />
      
      </body>
    </html>
  )
}
