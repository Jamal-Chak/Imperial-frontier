// layout.tsx
import './globals.css'
import Navigation from '../components/Navigation'

export const metadata = {
  title: 'Imperial Frontier - Next-Generation Mining Investment',
  description: 'Transformative gold mining investment opportunities with cutting-edge technology and unprecedented returns.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-gray-900 text-white overflow-x-hidden">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
