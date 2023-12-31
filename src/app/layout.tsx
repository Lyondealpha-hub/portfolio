
import Main_Layout from '@/components/Main'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body style={{ backgroundColor: '#2d2d30' }} className={inter.className}>
        <Main_Layout children={children} />

      </body>
    </html>
  )
}
