import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Podovital',
  description: 'Clínica podológica en Cunco región de la Araucanía',
  keywords: ['podovital','podología','podologia','cunco','araucanía', 'araucania','uña encarnada','clínica podológica','clinica podologica']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
