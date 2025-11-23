'use client'

import { motion } from 'framer-motion'

export default function BusinessProfileDownload() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/imperial-frontier-business-profile.pdf'
    link.download = 'Imperial-Frontier-Business-Profile.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      <div className="glass rounded-2xl p-8 border-l-4 border-yellow-400">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">
            Download Official <span className="text-yellow-400">Business Profile</span>
          </h3>
          
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Get the complete Imperial Frontier business profile with detailed information about our 
            mining interests, strategic approach, leadership, and investment opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-yellow-500/40 transition-all flex items-center space-x-2"
              style={{ color: '#183E0C' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Business Profile</span>
            </motion.button>

            <div className="text-center">
              <p className="text-gray-400 text-sm">PDF Document</p>
              <p className="text-white text-sm font-medium">2.4 MB • 14 Pages</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-yellow-400 font-bold">Company Overview</p>
              <p className="text-gray-400 text-sm">Complete business profile</p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">Investment Details</p>
              <p className="text-gray-400 text-sm">Strategic approach</p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">Leadership Team</p>
              <p className="text-gray-400 text-sm">Founding vision</p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">Future Projects</p>
              <p className="text-gray-400 text-sm">Mining & development</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
