'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Head from 'next/head'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investmentTier: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
  }

  return (
    <>
      <Head>
        <title>Contact Imperial Frontier - Investment & Partnership Inquiries</title>
        <meta name="description" content="Contact Imperial Frontier Pvt Ltd for investment opportunities, partnerships, and business inquiries. Zimbabwean-registered enterprise building Africa's future." />
      </Head>

      <div className="min-h-screen relative pt-16">
        {/* Background Image with Glass Effect */}
        <div
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Zimbabwe_Activity_BungeeJumping.jpg')",
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
                  <span className="text-yellow-400">CONTACT</span>
                  <br />
                  <span className="text-white">IMPERIAL FRONTIER</span>
                </h1>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  Ready to be part of Africa's transformation? Connect with us for investment opportunities,
                  partnerships, and strategic ventures.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 mt-16">
                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
                >
                  <div className="solid-panel rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-yellow-400/50 pb-3">
                      Business Information
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="text-yellow-400 text-2xl mr-4 mt-1">📍</div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">Registered Office</h3>
                          <p className="text-gray-300">
                            6 Muchecheni Street, Mufakose<br />
                            Harare, Zimbabwe
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="text-yellow-400 text-2xl mr-4 mt-1">📧</div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">Email Contact</h3>
                          <p className="text-gray-300">
                            info@imperialfrontier.africa
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="text-yellow-400 text-2xl mr-4 mt-1">🏢</div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">Company Registration</h3>
                          <p className="text-gray-300">
                            Entity Number: 64094A02102025<br />
                            Registered under Companies Act of Zimbabwe<br />
                            Established: 2025
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="text-yellow-400 text-2xl mr-4 mt-1">⛏️</div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">Core Operations</h3>
                          <p className="text-gray-300">
                            Mining (100 000 + hectares) • Infrastructure<br />
                            Agribusiness • Property Development
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="solid-panel rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-yellow-400/50 pb-3">
                      Leadership Team
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-yellow-400 font-semibold">Co-Founders</h3>
                        <p className="text-gray-300 text-sm">Mukondeleli Tshikalange</p>
                        <p className="text-gray-300 text-sm">Serbiot Pardon Munetsi</p>
                      </div>
                      <div>
                        <h3 className="text-yellow-400 font-semibold">Strategic Leadership</h3>
                        <p className="text-gray-300 text-sm">Matthew Munava</p>
                        <p className="text-gray-300 text-sm">Taurai Chinheya (Secretary General)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="solid-panel rounded-xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 border-b border-yellow-400/50 pb-3">
                    Investment & Partnership Inquiry
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#04140B] border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#04140B] border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Company/Organization</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#04140B] border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Investment Interest</label>
                        <select
                          name="investmentTier"
                          value={formData.investmentTier}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#04140B] border border-yellow-400/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        >
                          <option value="" className="bg-gray-800">Select investment tier</option>
                          <option value="strategic" className="bg-gray-800">Strategic Tier I ($1M - $2M)</option>
                          <option value="venture" className="bg-gray-800">Venture Tier II ($2M - $3M)</option>
                          <option value="sovereign" className="bg-gray-800">Sovereign Tier III ($3M - $5M+)</option>
                          <option value="partnership" className="bg-gray-800">Strategic Partnership</option>
                          <option value="consultation" className="bg-gray-800">Consultation Only</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#04140B] border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                        placeholder="Please describe your investment interest, questions, or partnership opportunities..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-yellow-400 text-white py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all shadow-lg"
                      style={{ color: '#04140B' }}
                    >
                      Send Inquiry
                    </motion.button>
                  </form>

                  <div className="mt-6 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/30">
                    <p className="text-sm text-gray-300">
                      <strong className="text-yellow-400">Note:</strong> All inquiries are reviewed by our founding circle.
                      We respond within 48 hours to qualified investment opportunities and strategic partnerships.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
