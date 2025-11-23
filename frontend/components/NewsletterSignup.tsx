'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Subscription error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="solid-panel rounded-xl p-8 text-center border-2 border-yellow-400"
      >
        <div className="text-yellow-400 text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-white mb-2">Successfully Subscribed!</h3>
        <p className="text-gray-300">
          Thank you for joining the Imperial Frontier community. You'll receive updates on our latest projects and investment opportunities.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="solid-panel rounded-xl p-8 border-l-4 border-yellow-400"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Stay Updated with <span className="text-yellow-400">Imperial Frontier</span>
        </h3>
        <p className="text-gray-300">
          Get the latest news on our mining ventures, investment opportunities, and continental expansion plans.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 bg-[#04140B] border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
          />
        </div>
        <motion.button
          type="submit"
          disabled={isLoading || !email}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          style={{ color: '#04140B' }}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </motion.button>
      </form>

      <p className="text-gray-400 text-xs mt-4 text-center">
        We respect your privacy. Unsubscribe at any time. No spam, just valuable insights.
      </p>
    </motion.div>
  )
}
