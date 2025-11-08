'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// Define the investment range enum to match backend
enum InvestmentRange {
  TIER_1 = "$1M - $2M",
  TIER_2 = "$2M - $3M", 
  TIER_3 = "$3M - $5M",
  TIER_4 = "$5M+"
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    investment_range: InvestmentRange.TIER_1,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('http://localhost:8000/api/v1/investors/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || undefined, // Send as undefined if empty
          phone: formData.phone || undefined,
          investment_range: formData.investment_range,
          message: formData.message || undefined
        })
      })
      
      if (response.ok) {
        const result = await response.json()
        console.log('Submission successful:', result)
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          investment_range: InvestmentRange.TIER_1,
          message: ''
        })
      } else {
        const errorData = await response.json()
        console.error('Submission failed:', errorData)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              <span className="text-gold-500">CONTACT</span>
              <br />
              <span className="text-white">US</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Ready to invest in the future of gold mining? Get in touch with our team to discuss investment opportunities.
            </p>
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-600 text-white p-4 rounded-lg mb-6 text-center"
            >
              ✅ Thank you for your interest! Our team will contact you within 24 hours.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-600 text-white p-4 rounded-lg mb-6 text-center"
            >
              ❌ There was an error submitting your form. Please try again or contact us directly.
            </motion.div>
          )}

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-gold-500 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Investment Range *</label>
                  <select
                    name="investment_range"
                    value={formData.investment_range}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    <option value={InvestmentRange.TIER_1}>$1M - $2M</option>
                    <option value={InvestmentRange.TIER_2}>$2M - $3M</option>
                    <option value={InvestmentRange.TIER_3}>$3M - $5M</option>
                    <option value={InvestmentRange.TIER_4}>$5M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Tell us about your investment interests and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 text-black py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-gold-500 mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-gold-500 mr-4">📧</div>
                    <div>
                      <p className="text-gray-300">investments@imperialfrontier.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="text-gold-500 mr-4">📞</div>
                    <div>
                      <p className="text-gray-300">+263 24 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="text-gold-500 mr-4">📍</div>
                    <div>
                      <p className="text-gray-300">Mashonaland Central, Zimbabwe</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-gold-500 mb-4">Investment Inquiries</h3>
                <p className="text-gray-300 mb-4">
                  For serious investment inquiries ($1M+), please contact our dedicated investment team for personalized consultation.
                </p>
                <button className="bg-gold-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors">
                  Schedule a Call
                </button>
              </div>

              {/* Response Time Info */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-gold-500 mb-2">What happens next?</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• We'll review your inquiry within 24 hours</li>
                  <li>• Our investment team will contact you directly</li>
                  <li>• Receive detailed project documentation</li>
                  <li>• Schedule a site visit if interested</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}