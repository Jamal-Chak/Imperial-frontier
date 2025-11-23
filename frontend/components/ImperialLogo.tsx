'use client'

import { motion } from 'framer-motion'

interface ImperialLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  animated?: boolean
}

export default function ImperialLogo({ size = 'md', showText = true, animated = false }: ImperialLogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl'
  }

  const LogoElement = (
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden border-4 border-yellow-400 p-1`}>
        <img
          src="/images/unnamed.jpg"
          alt="Imperial Frontier Logo"
          className="w-full h-full object-cover rounded-full"
        />
        {animated && (
          <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-pulse"></div>
        )}
      </div>

      {/* Logo Text */}
      {showText && (
        <div className={`${textSizes[size]} font-bold`}>
          <div className="text-yellow-400">IMPERIAL</div>
          <div className="text-white">FRONTIER</div>
        </div>
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {LogoElement}
      </motion.div>
    )
  }

  return <div className="cursor-pointer">{LogoElement}</div>
}
