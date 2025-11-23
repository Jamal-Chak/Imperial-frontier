// C:\Users\Tessl\Documents\GitHub\Imperial-frontier\frontend\components\GoldPriceTicker.tsx 

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
      
      if (!response.ok) {
        throw new Error(`Server Error: Failed to fetch gold price (Status: ${response.status})`)
      }
      
      const data: GoldPriceData = await response.json()
      setGoldPrice(data)
      setError(null) 
    } catch (err) {
      console.error('Gold price fetch error:', err)
      
      // 👇 ENHANCED ERROR HANDLING: Display last price if available
      if (goldPrice) {
         // Show a "data stale" warning if a price was previously loaded
         setError("⚠️ Data is not real-time. Our live feed is temporarily down. Please refresh.");
      } else {
         // Show the full connection refused message if no price ever loaded
         setError("ℹ️ Our live data feed is temporarily experiencing an issue. We're working to restore real-time pricing immediately. Please try refreshing.")
      }
      // Note: We intentionally DO NOT setGoldPrice(null) here, preserving the last known data.
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchGoldPrice()
    const interval = setInterval(fetchGoldPrice, 30000) 
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
      // 🟢 Use new imperial-green for loading
      <div className="bg-yellow-400 text-white py-2 px-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <span className="text-sm">Loading gold prices...</span>
        </div>
      </div>
    )
  }

  // Display the error bar only if error is present, regardless of price state
  if (error) {
    return (
      // 🟠 Use existing gold-600 (amber/orange) for caution message
      <div className="bg-gold-600 text-white py-2 px-4 text-center">
        <span className="text-sm">{error}</span>
      </div>
    )
  }

  // If no error AND a price exists (standard successful rendering)
  if (goldPrice) {
    return (
      // 🟢 Use new imperial-green gradient for success state
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-1 sm:space-y-0">
            {/* Left side - Live indicator */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold">LIVE</span>
              </div>
              <span className="text-xs text-green-100">Gold Prices</span>
            </div>

            {/* Center - Price display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={goldPrice.price_per_kg}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-6"
              >
                <div className="text-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">Per KG:</span>
                    <span className="text-lg font-bold">{formatPrice(goldPrice.price_per_kg)}</span>
                    {goldPrice.trend === 'up' ? (
                      <span className="text-green-300 text-sm">↗</span>
                    ) : (
                      <span className="text-red-300 text-sm">↘</span>
                    )}
                  </div>
                </div>

                <div className="hidden md:block text-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">Per Ounce:</span>
                    <span className="text-lg font-bold">{formatPrice(goldPrice.price_per_ounce)}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right side - Last updated */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-green-100 hidden sm:block">
                Updated: {formatTime(goldPrice.last_updated)}
              </span>
              <button 
                onClick={fetchGoldPrice}
                // 🟢 Use darker green for the refresh button
                className="text-xs bg-yellow-600 hover:bg-yellow-500 px-2 py-1 rounded transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // Fallback for when not loading, no price, and no error message (should rarely happen)
  return null;
}
