'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 pt-16 relative overflow-hidden">
      {/* Hero Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="text-gold-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]">
                MINING
              </span>
              <br />
              <span className="text-white">REIMAGINED</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Next-generation gold mining investment platform combining cutting-edge 
              technology with unprecedented returns in Zimbabwe&apos;s richest deposits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/investment')}
                className="bg-gold-500 text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-yellow-500/40 hover:bg-gold-400 transition-all"
              >
                Explore Investments
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/prospectus')}
                className="border border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-500 hover:text-black transition-all"
              >
                View Prospectus
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { value: "76.8%", label: "Projected Annual ROI" },
              { value: "$3.84M", label: "Monthly Revenue" },
              { value: "10+", label: "Years Mine Life" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 text-center border border-white/10 hover:border-gold-500/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] transition-all"
              >
                <div className="text-4xl font-bold text-gold-500 mb-3 drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
