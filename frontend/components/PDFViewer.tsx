'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface PDFViewerProps {
  title: string
  description: string
  fileUrl: string
}

export default function PDFViewer({ title, description, fileUrl }: PDFViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = 'imperial-frontier-business-profile.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setIsLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass rounded-xl overflow-hidden border-l-4 border-yellow-400"
    >
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            {isExpanded ? 'Collapse' : 'Preview'}
          </motion.button>
        </div>
      </div>

      {/* Preview Section */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-white/10"
        >
          {/* PDF Preview */}
          <div className="relative bg-gray-900">
            <div className="aspect-[3/4] max-h-96 overflow-hidden">
              <iframe
                src={fileUrl}
                className="w-full h-full"
                title="Imperial Frontier Business Profile"
                style={{ border: 'none' }}
              />
            </div>
            
            {/* Overlay with controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none">
              <div className="absolute bottom-4 left-4 right-4 flex justify-center pointer-events-auto">
                <motion.button
                  onClick={handleDownload}
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 hover:bg-yellow-600 disabled:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition-colors"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Download PDF</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Document Info */}
          <div className="p-6 bg-white/5">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-400 text-sm">Pages</p>
                <p className="text-yellow-400 font-bold">14</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Last Updated</p>
                <p className="text-white font-bold">2025</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Size</p>
                <p className="text-white font-bold">2.4 MB</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
