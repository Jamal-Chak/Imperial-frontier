'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Head from 'next/head'

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
          user: 'Anonymous Visitor',
          project: 'Imperial Frontier Strategic Investment',
          timestamp: new Date().toISOString(),
        }),
      })

      if (res.ok) {
        setInterests((prev) => ({ ...prev, [tier]: true }))
      } else {
        console.error('Failed to record interest', await res.json())
      }
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setLoading((prev) => ({ ...prev, [tier]: false }))
    }
  }

  const tiers = [
    {
      tier: 'Strategic Tier I',
      amount: '$1M - $2M',
      roi: '68%',
      details: 'High-Level Partnership',
      features: [
        'Detailed Quarterly Reporting',
        'Annual Project Site Visits',
        'Streamlined Due Diligence Access',
        'Standard Profit-Share Model',
      ],
    },
    {
      tier: 'Venture Tier II',
      amount: '$2M - $3M',
      roi: '72%',
      details: 'Enhanced Access Partnership',
      features: [
        'Dedicated Investor Relations Manager',
        'Bi-Weekly Operational Updates',
        'Priority Access to New Projects',
        'Enhanced Profit-Share Model',
      ],
    },
    {
      tier: 'Sovereign Tier III',
      amount: '$3M - $5M+',
      roi: '76.8%',
      details: 'Executive Joint Venture',
      features: [
        'Real-time Operational Monitoring',
        'Executive Board Access & Briefings',
        'Full Due Diligence Documents',
        'Maximum Returns & Equity Mandate',
      ],
    },
  ]

  // Strategic Approach from PDF
  const strategicApproach = [
    {
      step: 'Micro-JV Model',
      description: 'Launching pilot projects with limited capital to prove the concept and attract scale investment.',
      icon: '🚀'
    },
    {
      step: 'Investor-Ready Documentation',
      description: 'Vision Charters, concept notes, branded pitch decks, and legal frameworks.',
      icon: '📋'
    },
    {
      step: 'Equity Partnerships',
      description: 'Co-creation roles in every venture to protect legacy and ensure shared ownership.',
      icon: '🤝'
    },
    {
      step: 'Continental Expansion',
      description: 'Starting in Zimbabwe, scaling across SADC and pan-African corridors.',
      icon: '🌍'
    }
  ];

  return (
    <>
      <Head>
        <title>Imperial Frontier - Investment Opportunities & Strategic Partnership</title>
        <meta name="description" content="Explore high-yield investment tiers in Imperial Frontier's strategic approach to building Africa's future through mining, infrastructure, agribusiness, and property development." />
      </Head>

      <div className="min-h-screen pt-16 relative">
        {/* Background Image with Glass Effect */}
        <div 
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/zimbabwe-gold.jpg')",
            filter: 'blur(1px) brightness(0.6)',
            zIndex: 0
          }}
        />
        {/* Glass Effect Overlay with Dark Forest Green / Deep Emerald Black */}
        <div className="fixed inset-0 backdrop-blur-sm bg-gradient-to-b from-[#0D2617]/30 via-[#04140B]/40 to-[#04140B]/60" style={{ zIndex: 1 }} />
        
        {/* Main Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-yellow-400">STRATEGIC</span>
                  <br />
                  <span className="text-white">INVESTMENT OPPORTUNITIES</span>
                </h1>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  Partner with Imperial Frontier in building Africa's future through high-impact ventures in mining, 
                  infrastructure, agribusiness, and property development.
                </p>
              </motion.div>

              {/* Strategic Approach Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16"
              >
                <h2 className="text-3xl font-bold text-white text-center mb-10">
                  Our <span className="text-yellow-400">Strategic Approach</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {strategicApproach.map((approach, index) => (
                    <div key={index} className="solid-panel rounded-xl p-6 border-l-4 border-yellow-400 hover:shadow-lg transition-all">
                      <div className="text-3xl mb-3">{approach.icon}</div>
                      <h3 className="text-lg font-bold text-yellow-400 mb-3">{approach.step}</h3>
                      <p className="text-gray-300 text-sm">{approach.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Investment Tiers */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                {tiers.map((tier, index) => (
                  <motion.div
                    key={tier.tier}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="solid-panel rounded-xl p-8 border border-yellow-400/30 hover-lift"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                        {tier.tier}
                      </h3>
                      <div className="text-sm text-gray-400 mb-1">{tier.details}</div>
                      
                      {/* Highlight the investment range */}
                      <div className="text-4xl font-extrabold text-white mb-2 py-2 border-t border-b border-yellow-400/30">
                        {tier.amount}
                      </div>
                      <div className="text-yellow-400 text-xl font-bold">
                        Projected ROI: {tier.roi}
                      </div>
                    </div>
                    
                    {/* Feature List */}
                    <ul className="space-y-3 pt-4 border-t border-yellow-400/30">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-gray-300 text-sm"
                        >
                          <span className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Call to Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleExpressInterest(tier.tier)}
                      disabled={interests[tier.tier] || loading[tier.tier]}
                      className={`w-full mt-8 py-3 rounded-lg font-bold text-lg transition-all shadow-xl ${
                        interests[tier.tier]
                          ? 'bg-yellow-600 cursor-default text-white'
                          : 'bg-yellow-400 text-white hover:bg-yellow-600'
                      }`}
                      style={{ color: '#04140B' }}
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
              
              {/* Facilitation Mandate */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-20"
              >
                <div className="solid-panel rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white text-center mb-8">
                    Our <span className="text-yellow-400">Facilitation Mandate</span>
                  </h2>
                  <p className="text-gray-300 text-center text-lg max-w-4xl mx-auto mb-8">
                    Acting as bridge-builders between communities, investors, and technical partners. 
                    We facilitate transformative ventures that empower African ownership, generate employment, 
                    and build lasting infrastructure across the continent.
                  </p>
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div className="p-4">
                      <div className="text-yellow-400 text-2xl mb-2">🎯</div>
                      <h3 className="text-white font-bold mb-2">Strategic Facilitation</h3>
                      <p className="text-gray-400 text-sm">JV structuring across mining, infrastructure, agribusiness</p>
                    </div>
                    <div className="p-4">
                      <div className="text-yellow-400 text-2xl mb-2">🤝</div>
                      <h3 className="text-white font-bold mb-2">Partnership Building</h3>
                      <p className="text-gray-400 text-sm">Connecting stakeholders for scalable impact</p>
                    </div>
                    <div className="p-4">
                      <div className="text-yellow-400 text-2xl mb-2">📈</div>
                      <h3 className="text-white font-bold mb-2">Growth Catalyst</h3>
                      <p className="text-gray-400 text-sm">Industrial upliftment and regional integration</p>
                    </div>
                    <div className="p-4">
                      <div className="text-yellow-400 text-2xl mb-2">🏛️</div>
                      <h3 className="text-white font-bold mb-2">Legacy Building</h3>
                      <p className="text-gray-400 text-sm">Generational wealth and continental transformation</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Download Link Footer */}
              <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="mt-20 text-center"
              >
                  <p className="text-gray-400 text-lg mb-4">
                      All investment terms, corporate structure, and project details are outlined in the official document.
                  </p>
                  <a 
                      href="/Dark Modern Company Business Proposal A4pdf_251114_133844.pdf"
                      download
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-500 font-semibold transition-colors border-b border-yellow-400"
                  >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                      Download Official Business Profile
                  </a>
              </motion.div>

            </div>
          </section>
        </div>
      </div>
    </>
  )
}
