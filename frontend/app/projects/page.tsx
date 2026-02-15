'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'

// Data extracted directly from the Imperial Frontier Business Profile (Page 8 & 6)
const projectData = {
  name: '(TBD) Multiple Provinces Project',
  location: 'Multiple Provinces, Zimbabwe',
  minerals: ['Gold', 'Copper', 'Lithium', 'Coal', 'Nickel'],
  phase: 'Exploration & Feasibility',
  capacity: '100 000 Hectares secured',
  note: 'Project names and capacities will be updated as investor engagements and feasibility studies progress.',
  valueChain: [
    'Primary Operations: Gold, copper, lithium, coal, and nickel extraction (facilitated through JV models)',
    'Value Chain Services: Stone processing, logistics, and mineral marketing',
    'Consulting Services: Geological exploration, feasibility studies, and strategic facilitation',
  ]
};

// Strategic Partnerships from PDF
const partnerships = [
  'Mine owners for JV structuring',
  'Equipment suppliers for scalable operations',
  'Processing plants for beneficiation and export',
  'Transport/logistics firms for corridor integration',
  'Legal and financial advisors within our founding circle'
];

// Milestones from PDF
const milestones = [
  { year: '2025', event: 'Co-founded by Mukondeleli and Serbiot' },
  { year: '2025', event: 'Branded and published the Imperial Frontier Vision Charter' },
  { year: '2025', event: 'Secured investor interest in mining ventures' },
  { year: '2025', event: 'Built a founding circle of legal and financial advisors' },
  { year: '2025', event: 'Launched a movement for African upliftment' },
  { year: 'Future', event: 'Preparing for future listing on ASEX and JSE' }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Imperial Frontier - Project Operations & Status</title>
        <meta name="description" content="Real-time status and operational details for Imperial Frontier's core mining projects in Zimbabwe, focusing on Gold, Copper, Lithium, Coal, and Nickel extraction." />
      </Head>

      <div className="min-h-screen pt-16 relative">
        {/* Background Image with Glass Effect */}
        <div
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/DGZ-Plant.jpg')",
            filter: 'blur(1px) brightness(0.6)',
            zIndex: 0
          }}
        />
        {/* Glass Effect Overlay with Dark Forest Green / Deep Emerald Black */}
        <div className="fixed inset-0 backdrop-blur-sm bg-gradient-to-b from-[#0D2617]/30 via-[#04140B]/40 to-[#04140B]/60" style={{ zIndex: 1 }} />

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-yellow-400">PROJECT</span>
                <br />
                <span className="text-white">OPERATIONS & STATUS</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transparency on our active ventures, reflecting the data from the official Business Profile.
              </p>
            </motion.div>

            {/* Project Status Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="solid-panel rounded-xl p-10 mt-16 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-yellow-400/50 pb-3">
                Current Project: {projectData.name}
              </h2>

              <div className="grid md:grid-cols-4 gap-6 text-center">
                {/* Data Card: Location */}
                <div className="p-4 rounded-lg bg-[#04140B] border border-yellow-400/30">
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg font-semibold text-white mt-1">{projectData.location}</p>
                </div>

                {/* Data Card: Phase */}
                <div className="p-4 rounded-lg bg-[#04140B] border border-yellow-400/30">
                  <p className="text-sm text-gray-400">Development Phase</p>
                  <p className="text-lg font-semibold text-yellow-400 mt-1">{projectData.phase}</p>
                </div>

                {/* Data Card: Minerals */}
                <div className="p-4 rounded-lg bg-[#04140B] border border-yellow-400/30">
                  <p className="text-sm text-gray-400">Target Minerals</p>
                  <p className="text-lg font-semibold text-white mt-1">{projectData.minerals.join(', ')}</p>
                </div>

                {/* Data Card: Capacity */}
                <div className="p-4 rounded-lg bg-[#04140B] border border-yellow-400/30">
                  <p className="text-sm text-gray-400">Estimated Capacity</p>
                  <p className="text-lg font-semibold text-yellow-400 mt-1">{projectData.capacity}</p>
                </div>
              </div>

              {/* Feasibility Note */}
              <p className="text-sm text-gray-400 mt-8 text-center italic">
                **Note:** {projectData.note}
              </p>

            </motion.div>

            {/* Value Chain Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-10">
                Integrated Products & Value Chain Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {projectData.valueChain.map((item, index) => (
                  <div key={index} className="solid-panel p-6 rounded-xl border-l-4 border-yellow-400 hover:shadow-lg transition-all">
                    <p className="text-lg font-semibold text-yellow-400 mb-3">
                      {item.split(': ')[0]}
                    </p>
                    <p className="text-gray-300">
                      {item.split(': ')[1]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Strategic Partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-10">
                Strategic <span className="text-yellow-400">Partnerships</span>
              </h2>
              <div className="solid-panel rounded-xl p-8">
                <p className="text-gray-300 text-center mb-8">
                  We are actively facilitating partnerships with:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partnerships.map((partnership, index) => (
                    <div key={index} className="flex items-center p-4 bg-[#04140B] rounded-lg border border-yellow-400/30">
                      <span className="text-yellow-400 mr-3">✓</span>
                      <span className="text-gray-300 text-sm">{partnership}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Milestones & Momentum */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-10">
                Milestones & <span className="text-yellow-400">Momentum</span>
              </h2>
              <div className="solid-panel rounded-xl p-8">
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center p-4 bg-[#04140B] rounded-lg border border-yellow-400/30 hover:border-yellow-400/60 transition-all">
                      <div className="text-yellow-400 font-bold text-lg mr-4 min-w-[80px]">
                        {milestone.year}
                      </div>
                      <div className="text-gray-300">
                        {milestone.event}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Future Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-10">
                Future <span className="text-yellow-400">Vision</span>
              </h2>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { goal: '10,000+ Jobs Created', desc: 'across sectors', icon: '👥' },
                  { goal: 'Listed on ASEX/JSE', desc: 'as a continental giant', icon: '📈' },
                  { goal: 'New African Cities', desc: 'built from the ground up', icon: '🏙️' },
                  { goal: 'Regional Integration', desc: 'through infrastructure and trade corridors', icon: '🌍' },
                  { goal: 'Mining-led Industrialization', desc: 'with beneficiation and export value chains', icon: '🏭' }
                ].map((vision, index) => (
                  <div key={index} className="text-center solid-panel p-6 rounded-xl border-t-4 border-yellow-400/70">
                    <div className="text-4xl mb-4">{vision.icon}</div>
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">{vision.goal}</h3>
                    <p className="text-gray-400 text-sm">{vision.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  )
}
