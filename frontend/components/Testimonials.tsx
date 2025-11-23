'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mthembu',
    position: 'Investment Director',
    company: 'African Growth Capital',
    content: 'Imperial Frontier\'s strategic approach to mining and infrastructure development aligns perfectly with our investment philosophy. Their commitment to empowering African ownership is genuinely transformative.',
    avatar: 'SM',
    rating: 5
  },
  {
    id: 2,
    name: 'David Chen',
    position: 'Regional Mining Advisor',
    company: 'Continental Resources Group',
    content: 'The level of transparency and professional execution by Imperial Frontier is exceptional. Their feasibility studies and compliance frameworks set a new standard for the industry.',
    avatar: 'DC',
    rating: 5
  },
  {
    id: 3,
    name: 'Amara Okafor',
    position: 'Sustainability Consultant',
    company: 'Green Future Africa',
    content: 'Imperial Frontier\'s commitment to environmental responsibility and community empowerment makes them an ideal partner for sustainable development across the continent.',
    avatar: 'AO',
    rating: 5
  },
  {
    id: 4,
    name: 'James Wellington',
    position: 'Strategic Partner',
    company: 'SADC Development Fund',
    content: 'Working with Imperial Frontier has been transformative. Their vision for regional integration through infrastructure and mining is exactly what Africa needs for the next decade.',
    avatar: 'JW',
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ★
      </span>
    ))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-yellow-400">Partners Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from industry leaders, investors, and strategic partners about their experience working with Imperial Frontier.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 md:p-12 border-l-4 border-yellow-400 max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-center">
                <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-yellow-400">{testimonials[currentIndex].position}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center glass rounded-xl p-6 border-t-4 border-yellow-400/70">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300">Strategic Partners</div>
          </div>
          <div className="text-center glass rounded-xl p-6 border-t-4 border-yellow-400/70">
            <div className="text-3xl font-bold text-yellow-400 mb-2">$2.5B+</div>
            <div className="text-gray-300">Investment Pipeline</div>
          </div>
          <div className="text-center glass rounded-xl p-6 border-t-4 border-yellow-400/70">
            <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-gray-300">Partner Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
