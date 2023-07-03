import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Recipe Generator',
  description: 'Search ingredients and view meals',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container my-12 mx-auto px-4 md:px-12'>
          {children}
        </div>
      </body>
    </html>
  )
}
