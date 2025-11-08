'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GoldPriceData {
  price_per_kg: number
  price_per_ounce: number
  currency: string
  last_updated: string
  trend: 'up' | 'down'
}

export default function GoldPriceTicker() {
  const [goldPrice, setGoldPrice] = useState<GoldPriceData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchGoldPrice = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/gold/price')
      if (!response.ok) throw new Error('Failed to fetch gold price')
      
      const data: GoldPriceData = await response.json()
      setGoldPrice(data)
      setError(null)
    } catch (err) {
      setError('Failed to load gold price')
      console.error('Gold price fetch error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchGoldPrice()
    const interval = setInterval(fetchGoldPrice, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  if (isLoading) {
    return (
      <div className="bg-gold-600 text-white py-2 px-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <span className="text-sm">Loading gold prices...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-600 text-white py-2 px-4 text-center">
        <span className="text-sm">⚠️ {error}</span>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-gold-600 to-gold-700 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-1 sm:space-y-0">
          {/* Left side - Live indicator */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold">LIVE</span>
            </div>
            <span className="text-xs text-gold-100">Gold Prices</span>
          </div>

          {/* Center - Price display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={goldPrice?.price_per_kg}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-6"
            >
              <div className="text-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold">Per KG:</span>
                  <span className="text-lg font-bold">{formatPrice(goldPrice?.price_per_kg || 0)}</span>
                  {goldPrice?.trend === 'up' ? (
                    <span className="text-green-300 text-sm">↗</span>
                  ) : (
                    <span className="text-red-300 text-sm">↘</span>
                  )}
                </div>
              </div>

              <div className="hidden md:block text-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold">Per Ounce:</span>
                  <span className="text-lg font-bold">{formatPrice(goldPrice?.price_per_ounce || 0)}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right side - Last updated */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gold-100 hidden sm:block">
              Updated: {goldPrice ? formatTime(goldPrice.last_updated) : '--:--:--'}
            </span>
            <button 
              onClick={fetchGoldPrice}
              className="text-xs bg-gold-500 hover:bg-gold-400 px-2 py-1 rounded transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}