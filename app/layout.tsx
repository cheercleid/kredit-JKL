import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Digital Loan Origination - PT. JKL',
  description: 'MVP sistem pengajuan kredit kendaraan'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  )
}
