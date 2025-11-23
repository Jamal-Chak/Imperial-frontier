'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldPriceTicker from './GoldPriceTicker'
import ImperialLogo from './ImperialLogo'

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
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Governance', href: '/governance' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#0D2617] border-b border-yellow-400/20 z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section - gold ticker */}
        <div className="border-b border-yellow-400/20">
          <GoldPriceTicker />
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex items-center">
            <ImperialLogo size="sm" showText={true} animated={true} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400 hover:text-yellow-400/80 focus:outline-none"
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
              className="absolute top-full left-0 w-full md:hidden border-t border-yellow-400/20 bg-[#04140B] shadow-[0_4px_20px_rgba(201,198,59,0.15)] z-[9999]"
            >
              <div className="flex flex-col items-center py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-center py-2 rounded-md text-base font-medium tracking-wide transition-colors ${
                      pathname === item.href
                        ? 'text-yellow-400 bg-yellow-400/10'
                        : 'text-gray-200 hover:text-yellow-400/80'
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
