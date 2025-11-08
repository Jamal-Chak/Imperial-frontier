'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import GoldPriceTicker from './GoldPriceTicker' // Adjust path if needed

export default function Navigation() {
  const pathname = usePathname()

  useEffect(() => {
    console.log('Current path:', pathname)
  }, [pathname])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Investment', href: '/investment' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <GoldPriceTicker />
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-gold-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gold-500">
                IMPERIAL FRONTIER
              </Link>
              <span className="ml-2 text-xs text-gold-500/70 bg-gold-500/10 px-2 py-1 rounded">
                PRIVATE LIMITED
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-gold-500 bg-gold-500/10'
                      : 'text-gray-300 hover:text-gold-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
