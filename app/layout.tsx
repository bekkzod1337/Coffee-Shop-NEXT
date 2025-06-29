import './globals.css'

export const metadata = {
  title: 'Coffee Shop',
  description: 'Best coffee in town',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1A1011] text-[#333] font-sans">{children}</body>
    </html>
  )
}
