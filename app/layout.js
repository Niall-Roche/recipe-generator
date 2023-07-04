import './globals.css'
import {Inter} from 'next/font/google'
import AppHeader from '@/components/headers/AppHeader'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Recipe Generator',
  description: 'Search ingredients and view meals',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppHeader />
        <div className='container my-6 mx-auto max-w-screen-lg px-5 lg:px-0'>
          {children}
        </div>
      </body>
    </html>
  )
}
