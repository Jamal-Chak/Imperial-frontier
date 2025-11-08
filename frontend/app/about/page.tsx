'use client'

import { motion } from 'framer-motion'

export default function About() {
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
              <span className="text-gold-500">ABOUT</span>
              <br />
              <span className="text-white">IMPERIAL FRONTIER</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Pioneering the future of sustainable gold mining through innovation, technology, and strategic partnerships.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize gold mining in Zimbabwe by combining cutting-edge technology with sustainable practices, 
                delivering exceptional returns for our investors while positively impacting local communities and the environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become Africa's leading gold mining investment platform, setting new standards for transparency, 
                efficiency, and environmental responsibility in the mining industry.
              </p>
            </motion.div>
          </div>

          {/* Key Facts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose Imperial Frontier?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Proven Expertise",
                  description: "20+ years of mining experience in African operations with proven track record of successful projects.",
                  icon: "🏆"
                },
                {
                  title: "Cutting-Edge Technology",
                  description: "Advanced mining technology and real-time monitoring systems for maximum efficiency and transparency.",
                  icon: "⚡"
                },
                {
                  title: "Sustainable Practices",
                  description: "Commitment to environmental responsibility and positive community impact in all our operations.",
                  icon: "🌱"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gold-500 mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}