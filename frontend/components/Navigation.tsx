'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldPriceTicker from './GoldPriceTicker'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Close the menu on route change
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Investment', href: '/investment' },
    { name: 'Prospectus', href: '/prospectus' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-gold-500/20 z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section - gold ticker */}
        <div className="border-b border-gold-500/20">
          <GoldPriceTicker />
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gold-500">
              IMPERIAL FRONTIER
            </Link>
            <span className="ml-2 text-xs text-gold-500/70 bg-gold-500/10 px-2 py-1 rounded">
              PRIVATE LIMITED
            </span>
          </div>

          {/* Desktop Nav */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold-500 hover:text-gold-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full md:hidden border-t border-gold-500/20 bg-gradient-to-b from-gray-900 via-black to-[#1a1a1a] shadow-[0_4px_20px_rgba(255,215,0,0.15)] z-[9999]"
            >
              <div className="flex flex-col items-center py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-center py-2 rounded-md text-base font-medium tracking-wide transition-colors ${
                      pathname === item.href
                        ? 'text-gold-400 bg-white/10'
                        : 'text-gray-200 hover:text-gold-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
