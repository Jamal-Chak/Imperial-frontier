'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Investment() {
  const [interests, setInterests] = useState<{ [key: string]: boolean }>({})
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({})

  const handleExpressInterest = async (tier: string) => {
    setLoading((prev) => ({ ...prev, [tier]: true }))
    try {
      const res = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier,
          user: 'Anonymous Visitor', // Later, replace with actual user data
          project: 'Imperial Frontier Gold Investment',
          timestamp: new Date().toISOString(),
        }),
      })

      if (res.ok) {
        setInterests((prev) => ({ ...prev, [tier]: true }))
      } else {
        console.error('Failed to record interest')
      }
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setLoading((prev) => ({ ...prev, [tier]: false }))
    }
  }

  const tiers = [
    {
      tier: 'TIER 1',
      amount: '$1M - $2M',
      roi: '68%',
      features: [
        'Basic due diligence',
        'Monthly reports',
        'Site visits',
        'Standard returns',
      ],
    },
    {
      tier: 'TIER 2',
      amount: '$2M - $3M',
      roi: '72%',
      features: [
        'Enhanced due diligence',
        'Weekly reports',
        'Priority site access',
        'Enhanced returns',
      ],
    },
    {
      tier: 'TIER 3',
      amount: '$3M - $5M+',
      roi: '76.8%',
      features: [
        'Full due diligence',
        'Real-time monitoring',
        'Executive access',
        'Maximum returns',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gold-500">INVESTMENT</span>
              <br />
              <span className="text-white">OPPORTUNITIES</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              High-yield gold mining investments with proven returns and
              transparent operations.
            </p>
          </motion.div>

          {/* Investment Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-gold-500/30 transition-all"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gold-500 mb-2">
                    {tier.tier}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    {tier.amount}
                  </div>
                  <div className="text-gold-400 text-lg">
                    Projected ROI: {tier.roi}
                  </div>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-gold-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleExpressInterest(tier.tier)}
                  disabled={interests[tier.tier] || loading[tier.tier]}
                  className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
                    interests[tier.tier]
                      ? 'bg-green-600 cursor-default text-white'
                      : 'bg-gold-500 text-black hover:bg-gold-400'
                  }`}
                >
                  {interests[tier.tier]
                    ? 'Interest Expressed ✓'
                    : loading[tier.tier]
                    ? 'Submitting...'
                    : 'Express Interest'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
