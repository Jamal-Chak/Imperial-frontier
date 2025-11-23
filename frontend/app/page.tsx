'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import ImperialLogo from '../components/ImperialLogo'
import Testimonials from '../components/Testimonials'
import NewsletterSignup from '../components/NewsletterSignup'
import BusinessProfileDownload from '../components/BusinessProfileDownload'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen pt-16 relative overflow-visible">
      {/* Background Image with Glass Effect */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/investment-5241253_1280.jpg')",
          filter: 'blur(1px) brightness(0.6)',
          zIndex: 0
        }}
      />
      {/* Glass Effect Overlay */}
      <div className="fixed inset-0 backdrop-blur-sm bg-gradient-to-b from-green-900/30 via-[#04140B]/40 to-[#04140B]/60" style={{ zIndex: 1 }} />
      
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Imperial Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <ImperialLogo size="xl" showText={false} animated={true} />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="text-yellow-400">
                IMPERIAL
              </span>
              <br />
              <span className="text-white">FRONTIER</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
              Building Africa's future through high-impact ventures in mining, infrastructure, agribusiness, and property development.
            </p>
            
            <p className="text-lg text-yellow-400 mb-10 max-w-3xl mx-auto font-medium">
              "Shifting Africa's narrative from dependency to dignity"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/investment')}
                className="bg-yellow-400 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-yellow-500/40 hover:bg-yellow-500 transition-all"
                style={{ color: '#04140B' }}
              >
                Explore Investments
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/about')}
                className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-white transition-all"
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>

          {/* Company Overview Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { value: '500+', label: 'Hectares Secured', subtitle: 'Mining Interests' },
              { value: '4', label: 'Core Sectors', subtitle: 'Mining • Infrastructure • Agribusiness • Property' },
              { value: '2025', label: 'Established', subtitle: 'Zimbabwean Registered' },
              { value: '∞', label: 'Vision', subtitle: 'Africa\'s Future' },
            ].map((stat, index) => (
              <div
                key={index}
                className="solid-panel rounded-xl p-6 text-center border border-yellow-400/30 hover:border-yellow-400/60 hover:shadow-[0_0_20px_rgba(201,198,59,0.15)] transition-all"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.subtitle}</div>
              </div>
            ))}
          </motion.div>

          {/* Core Sectors Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Our <span className="text-yellow-400">Strategic Sectors</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  sector: 'Mining',
                  description: 'Gold, copper, and nickel extraction across 500+ hectares',
                  icon: '⛏️'
                },
                {
                  sector: 'Infrastructure', 
                  description: 'Rail corridors, roads, water systems, energy grids',
                  icon: '🏗️'
                },
                {
                  sector: 'Agribusiness',
                  description: 'Climate-smart farming, processing hubs, logistics',
                  icon: '🌾'
                },
                {
                  sector: 'Property',
                  description: 'Affordable housing, industrial parks, new cities',
                  icon: '🏘️'
                }
              ].map((item, index) => (
                <div key={index} className="solid-panel rounded-xl p-6 border-l-4 border-yellow-400 hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.sector}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-20 text-center"
          >
            <div className="solid-panel rounded-xl p-10 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Our Founding Vision</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We exist to shift Africa's narrative from dependency to dignity. Our mission is to facilitate and co-create 
                transformative ventures that empower African ownership, generate employment, and build lasting infrastructure.
              </p>
              <p className="text-lg text-yellow-400 font-medium">
                Every project is designed to catalyze regional integration, industrial upliftment, and generational legacy.
              </p>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <Testimonials />

          {/* Newsletter Signup */}
          <div className="mt-20">
            <NewsletterSignup />
          </div>

          {/* Business Profile Download */}
          <BusinessProfileDownload />
        </div>
      </section>
    </div>
  )
}
