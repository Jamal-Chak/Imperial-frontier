'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Prospectus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gold-500 mb-6"
        >
          Investor Prospectus
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed"
        >
          Explore the detailed financials, projections, and strategic insights 
          behind <span className="text-gold-400 font-semibold">Imperial Frontier</span>’s 
          next-generation gold mining operations.
        </motion.p>

        {/* Prospectus Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-xl hover:border-gold-500/30 transition-all"
        >
          <h2 className="text-2xl font-semibold text-gold-500 mb-4">
            Imperial Frontier 2025 Prospectus
          </h2>
          <p className="text-gray-300 mb-8">
            Learn about our proven gold deposits, sustainability initiatives, 
            and investor ROI structure. This document provides transparency 
            and confidence for long-term partners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/documents/ImperialFrontier_Prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-all"
            >
              View Prospectus (PDF)
            </a>
            <Link
              href="/contact"
              className="border border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-semibold hover:bg-gold-500 hover:text-black transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-gray-400 mt-12 text-sm"
        >
          *The Imperial Frontier Prospectus outlines forward-looking statements 
          and investment risks in compliance with international investor guidelines.
        </motion.p>
      </div>
    </div>
  )
}
