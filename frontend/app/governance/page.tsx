'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'

// Data extracted from the Imperial Frontier Business Profile
const teamData = [
  {
    name: 'Mukondeleli Tshikalange',
    role: 'Co-Founder / Strategic Lead',
    description: 'Visionary co-founder driving the mission to shift Africa\'s narrative from dependency to dignity.',
    source: 12
  },
  {
    name: 'Serbiot Pardon Munetsi',
    role: 'Co-Founder / Operational Lead',
    description: 'Co-founder overseeing the execution of high-impact ventures in mining and infrastructure.',
    source: 12
  },
  {
    name: 'Matthew Munava',
    role: 'Strategic Leadership Team',
    description: 'Provides key strategic guidance and business model alignment across all core sectors.',
    source: 12
  },
  {
    name: 'Taurai Chinheya',
    role: 'Strategic Leadership Team',
    description: 'A key member of the leadership team, ensuring project success and compliance frameworks.',
    source: 12
  },
]

// Company Values from PDF
const companyValues = [
  {
    value: 'Integrity',
    description: 'We operate with complete transparency and ethical standards in all our ventures.',
    icon: '⚖️'
  },
  {
    value: 'Safety',
    description: 'Prioritizing the safety of our workforce and communities in every operation.',
    icon: '🛡️'
  },
  {
    value: 'Innovation',
    description: 'Embracing cutting-edge technology and creative solutions for sustainable growth.',
    icon: '💡'
  },
  {
    value: 'Sustainability',
    description: 'Building environmentally responsible ventures that benefit future generations.',
    icon: '🌱'
  },
  {
    value: 'Empowerment',
    description: 'Creating opportunities that empower African ownership and economic dignity.',
    icon: '🚀'
  }
]

export default function Governance() {
  return (
    <>
      <Head>
        <title>Imperial Frontier - Leadership & Governance</title>
        <meta name="description" content="Meet the co-founders and strategic leadership of Imperial Frontier, committed to transparency and compliance under the Companies Act of Zimbabwe." />
      </Head>

      <div className="min-h-screen pt-16 relative">
        {/* Background Image with Glass Effect */}
        <div 
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/shutterstock-538942345.jpg')",
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
                <span className="text-yellow-400">LEADERSHIP</span>
                <br />
                <span className="text-white"> & GOVERNANCE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Our vision is driven by a committed team and anchored by strict legal compliance and governance principles.
              </p>
            </motion.div>

            {/* Company Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-10 border-b border-yellow-400/20 pb-4">
                Our Core <span className="text-yellow-400">Values</span>
              </h2>
              <div className="grid md:grid-cols-5 gap-6">
                {companyValues.map((item, index) => (
                  <div key={index} className="text-center solid-panel p-6 rounded-xl border-t-4 border-yellow-400/70">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">{item.value}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leadership Profiles */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-20"
            >
                <h2 className="text-3xl font-bold text-white text-center mb-10 border-b border-yellow-400/20 pb-4">
                    Founders & Strategic Leadership
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamData.map((member, index) => (
                        <div key={index} 
                            className="solid-panel rounded-xl p-6 text-center border-t-4 border-yellow-400/70 hover:shadow-lg transition-all"
                        >
                            {/* Placeholder for images - replace with actual team photos */}
                            <div className="w-24 h-24 mx-auto rounded-full bg-gray-700 mb-4 flex items-center justify-center text-xl text-yellow-400 font-bold">
                                {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                            </div>
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-yellow-400 text-sm font-semibold mb-3">{member.role}</p>
                            <p className="text-gray-400 text-sm">{member.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Strategic Approach & Founders Charter */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-20 grid md:grid-cols-2 gap-10"
            >
                <div className="solid-panel rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-yellow-400/50 pb-3">
                        Strategic Approach
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-yellow-400 text-xl mr-3">1</span>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Micro-JV Model</h3>
                                <p className="text-gray-300 text-sm">Launching pilot projects with limited capital to prove the concept and attract scale investment.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-yellow-400 text-xl mr-3">2</span>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Investor-Ready Documentation</h3>
                                <p className="text-gray-300 text-sm">Vision Charters, concept notes, branded pitch decks, and legal frameworks.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-yellow-400 text-xl mr-3">3</span>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Equity Partnerships</h3>
                                <p className="text-gray-300 text-sm">Co-creation roles in every venture to protect legacy and ensure shared ownership.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-yellow-400 text-xl mr-3">4</span>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Continental Expansion</h3>
                                <p className="text-gray-300 text-sm">Starting in Zimbabwe, scaling across SADC and pan-African corridors.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="solid-panel rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-yellow-400/50 pb-3">
                        Founders Charter
                    </h2>
                    <p className="text-gray-300 mb-4">
                        Governance is anchored in a Founders Charter that vests strategic authority and legacy protection within the co-founders. 
                        All external engagements are approved by the founding circle.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <span className="text-yellow-400 mr-2">✓</span>
                            <span className="text-gray-300 text-sm">Strategic decision authority with co-founders</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-yellow-400 mr-2">✓</span>
                            <span className="text-gray-300 text-sm">Legacy protection mechanisms</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-yellow-400 mr-2">✓</span>
                            <span className="text-gray-300 text-sm">Founding circle approval for partnerships</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-yellow-400 mr-2">✓</span>
                            <span className="text-gray-300 text-sm">Transparent governance framework</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Governance & Compliance Summary */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-20 p-10 solid-panel rounded-xl"
            >
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-yellow-400/20 pb-3">
                    Corporate Compliance & Accountability
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-yellow-400 mb-3">Legal Registration</h3>
                        <p className="text-gray-300">
                            Imperial Frontier Pvt Ltd is formally <strong>Registered under the Companies Act of Zimbabwe</strong>.
                            We adhere strictly to the legal compliance frameworks of the host country for every project.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-yellow-400 mb-3">Future-Proofing & Expansion</h3>
                        <p className="text-gray-300">
                            The company is actively engaged in <strong>securing mining licenses and safety certifications</strong>. 
                            We are also <strong>exploring B-BBEE compliance</strong> for future South African partnerships, 
                            reflecting our commitment to continental expansion.
                        </p>
                    </div>
                </div>
                
                <div className="mt-8 p-6 bg-yellow-400/10 rounded-lg border border-yellow-400/30">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <h4 className="text-yellow-400 font-bold mb-2">Registered Office</h4>
                            <p className="text-gray-300 text-sm">6 Muchecheni Street, Mufakose, Harare</p>
                        </div>
                        <div>
                            <h4 className="text-yellow-400 font-bold mb-2">Entity Number</h4>
                            <p className="text-gray-300 text-sm">64094A02102025</p>
                        </div>
                        <div>
                            <h4 className="text-yellow-400 font-bold mb-2">Established</h4>
                            <p className="text-gray-300 text-sm">2025</p>
                        </div>
                    </div>
                </div>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  )
}
