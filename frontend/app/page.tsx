'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gold-500">MINING</span>
              <br />
              <span className="text-white">REIMAGINED</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Next-generation gold mining investment platform combining cutting-edge 
              technology with unprecedented returns in Zimbabwe's richest deposits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors"
              >
                Explore Investment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-500 hover:text-black transition-colors"
              >
                View Prospectus
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { value: "76.8%", label: "Projected Annual ROI" },
              { value: "$3.84M", label: "Monthly Revenue" },
              { value: "10+", label: "Years Mine Life" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 hover:border-gold-500/30 transition-all">
                <div className="text-3xl font-bold text-gold-500 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}