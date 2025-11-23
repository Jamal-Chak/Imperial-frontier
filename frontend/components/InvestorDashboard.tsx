'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

interface ProjectStatus {
  name: string
  location: string
  phase: string
  progress: number
  investmentTier: string
  expectedROI: string
}

const projectData: ProjectStatus[] = [
  {
    name: 'Zimbabwe Mining Venture',
    location: 'Multiple Provinces',
    phase: 'Exploration & Feasibility',
    progress: 25,
    investmentTier: 'Strategic Tier I',
    expectedROI: '68%'
  },
  {
    name: 'Infrastructure Development',
    location: 'Regional Corridors',
    phase: 'Planning & Partnerships',
    progress: 15,
    investmentTier: 'Venture Tier II',
    expectedROI: '72%'
  },
  {
    name: 'Agribusiness Expansion',
    location: 'Agricultural Zones',
    phase: 'Feasibility Studies',
    progress: 10,
    investmentTier: 'Strategic Tier I',
    expectedROI: '65%'
  }
]

const portfolioMetrics = [
  { label: 'Total Investment Secured', value: 5000000, suffix: '', prefix: '$', color: 'text-yellow-400' },
  { label: 'Active Projects', value: 3, suffix: '', prefix: '', color: 'text-yellow-400' },
  { label: 'Hectares Secured', value: 20000, suffix: '+', prefix: '', color: 'text-yellow-400' },
  { label: 'Jobs Created', value: 150, suffix: '+', prefix: '', color: 'text-yellow-400' }
]

export default function InvestorDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-yellow-400">INVESTOR</span>
            <br />
            <span className="text-white">DASHBOARD</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time tracking of your Imperial Frontier investments and project progress
          </p>
        </motion.div>

        {/* Portfolio Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Portfolio <span className="text-yellow-400">Overview</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioMetrics.map((metric, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center border-t-4 border-yellow-400/70">
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                  <AnimatedCounter 
                    end={metric.value} 
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    className="text-3xl font-bold"
                  />
                </div>
                <div className="text-gray-300 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Status */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Project <span className="text-yellow-400">Status</span>
          </h2>
          <div className="space-y-6">
            {projectData.map((project, index) => (
              <div key={index} className="glass rounded-xl p-6 border-l-4 border-yellow-400">
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-white font-bold text-lg mb-1">{project.name}</h3>
                    <p className="text-gray-400 text-sm">{project.location}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Phase</p>
                    <p className="text-yellow-400 text-sm font-semibold">{project.phase}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Investment Tier</p>
                    <p className="text-white text-sm font-semibold">{project.investmentTier}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Expected ROI</p>
                    <p className="text-yellow-400 text-sm font-bold">{project.expectedROI}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Progress</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-yellow-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                      <span className="text-yellow-400 text-sm font-bold">{project.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Market Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Gold Price Trends */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Gold Price <span className="text-yellow-400">Trends</span>
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300">Current Price (per oz)</span>
                <span className="text-yellow-400 font-bold">$2,045.80</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300">24h Change</span>
                <span className="text-green-400 font-bold">+2.4% ↗</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300">Market Sentiment</span>
                <span className="text-yellow-400 font-bold">Bullish</span>
              </div>
            </div>
          </div>

          {/* Strategic Updates */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Strategic <span className="text-yellow-400">Updates</span>
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border-l-4 border-yellow-400">
                <p className="text-white font-semibold mb-1">New Partnership Secured</p>
                <p className="text-gray-400 text-sm">Strategic alliance with regional mining equipment supplier</p>
                <p className="text-yellow-400 text-xs mt-2">2 days ago</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border-l-4 border-yellow-400">
                <p className="text-white font-semibold mb-1">Feasibility Study Complete</p>
                <p className="text-gray-400 text-sm">Positive results for Zimbabwe mining expansion project</p>
                <p className="text-yellow-400 text-xs mt-2">1 week ago</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border-l-4 border-yellow-400">
                <p className="text-white font-semibold mb-1">Regulatory Approval</p>
                <p className="text-gray-400 text-sm">Mining license application approved for additional 500 hectares</p>
                <p className="text-yellow-400 text-xs mt-2">2 weeks ago</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
