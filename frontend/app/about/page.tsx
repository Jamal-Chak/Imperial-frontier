'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'

export default function About() {
  // Key data points extracted from the Business Profile document
  const missionText = "To facilitate and co-create transformative ventures that empower African ownership, generate employment, and build lasting infrastructure. Every project is designed to catalyze regional integration, industrial upliftment, and generational legacy."
  const overviewText = "Imperial Frontier Pvt Ltd is a Zimbabwean-registered enterprise established in 2025. We are building Africa's future through high-impact ventures in mining, infrastructure, agribusiness, and property development."
  
  const facts = [
    {
      title: "Core Sector: Mining Operations",
      description: "Our mining interests span over 500 hectares across multiple provinces in Zimbabwe, primarily targeting gold, copper, and nickel deposits through strategic JV models.",
      icon: "⛏️"
    },
    {
      title: "Strategic Facilitation",
      description: "We operate as bridge-builders between communities, investors, and technical partners, facilitating transformative ventures across mining, infrastructure, agribusiness, and property.",
      icon: "🌉"
    },
    {
      title: "Continental Expansion",
      description: "Starting in Zimbabwe with plans to scale across SADC and pan-African corridors, building investor-ready ventures that empower African ownership.",
      icon: "🌍"
    }
  ];

  const companyStory = [
    {
      year: '2025',
      title: 'Foundation',
      description: 'Imperial Frontier Pvt Ltd co-founded by Mukondeleli Tshikalange and Serbiot Pardon Munetsi, with strategic leadership from Matthew Munava and Taurai Chinheya.'
    },
    {
      year: '2025',
      title: 'Vision Charter',
      description: 'Branded and published the Imperial Frontier Vision Charter, establishing our mission to shift Africa\'s narrative from dependency to dignity.'
    },
    {
      year: '2025',
      title: 'Investor Engagement',
      description: 'Secured investor interest in mining ventures and built a founding circle of legal and financial advisors to ensure strategic compliance.'
    },
    {
      year: 'Future',
      title: 'Continental Growth',
      description: 'Preparing for future listing on ASEX and JSE as we scale across Africa, creating 10,000+ jobs and building new African cities.'
    }
  ];

  return (
    <>
      <Head>
        <title>Imperial Frontier - About Us & Company Story</title>
        <meta name="description" content="Learn about Imperial Frontier's mission to build Africa's future through strategic facilitation in mining, infrastructure, agribusiness, and property development." />
      </Head>

      <div className="min-h-screen pt-16 relative">
        {/* Background Image with Glass Effect */}
        <div 
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/p0czbqyj.jpg')",
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
                <span className="text-yellow-400">ABOUT</span>
                <br />
                <span className="text-white">IMPERIAL FRONTIER</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                {overviewText}
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="solid-panel rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Mission & Founding Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  {missionText}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="solid-panel rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Strategic Sectors</h3>
                <p className="text-gray-300 leading-relaxed">
                  We operate as strategic facilitators across four primary industries: <strong>Mining</strong> (strategic minerals, beneficiation, export pathways), 
                  <strong> Infrastructure</strong> (rail corridors, roads, energy grids), <strong>Agribusiness</strong> (climate-smart farming, processing hubs), 
                  and <strong>Property</strong> (affordable housing, industrial parks, new city development).
                </p>
              </motion.div>
            </div>

            {/* Company Story Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Our <span className="text-yellow-400">Company Story</span>
              </h2>
              <div className="space-y-8">
                {companyStory.map((story, index) => (
                  <div key={index} className="flex items-start solid-panel rounded-xl p-6 border-l-4 border-yellow-400">
                    <div className="text-yellow-400 font-bold text-lg mr-6 min-w-[100px]">
                      {story.year}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{story.title}</h3>
                      <p className="text-gray-300">{story.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Document-Backed Facts */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-center text-white mb-12">Our Strategic Approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {facts.map((item, index) => (
                  <div key={index} className="text-center solid-panel p-6 rounded-xl border-t-4 border-yellow-400/70">
                    <div className="text-4xl mb-4" role="img" aria-label={item.title}>{item.icon}</div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leadership Team Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Leadership <span className="text-yellow-400">Team</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Mukondeleli Tshikalange', role: 'Co-Founder & Strategic Lead', initials: 'MT' },
                  { name: 'Serbiot Pardon Munetsi', role: 'Co-Founder & Operational Lead', initials: 'SP' },
                  { name: 'Matthew Munava', role: 'Strategic Leadership', initials: 'MM' },
                  { name: 'Taurai Chinheya', role: 'Secretary General', initials: 'TC' }
                ].map((leader, index) => (
                  <div key={index} className="text-center solid-panel p-6 rounded-xl border-t-4 border-yellow-400/70">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gray-700 mb-4 flex items-center justify-center text-xl text-yellow-400 font-bold">
                      {leader.initials}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-yellow-400 text-sm">{leader.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Official Document Download */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-20 text-center"
            >
              <div className="solid-panel rounded-xl p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Official Business Profile</h2>
                <p className="text-gray-300 mb-6 text-lg">
                  For a detailed review of our corporate structure, strategic approach, and full project pipeline, 
                  please download the official Imperial Frontier Business Profile document.
                </p>
                <a 
                  href="/imperial-frontier-business-profile.pdf"
                  download
                  className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 text-lg"
                  style={{ color: '#04140B' }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Download Imperial Frontier Business Profile (PDF)
                </a>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  )
}
