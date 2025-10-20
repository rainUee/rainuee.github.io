'use client'
import React from 'react'
import TimelineItem from './TimelineItem'

type Experience = {
  company: string
  role: string
  period: string
  details: string[]
}

type Props = {
  items?: Experience[]
}

export default function ExperienceTimeline({ items = [] }: Props) {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-300 to-pink-300 opacity-40" />

          <div className="space-y-12">
            {items.map((exp, idx) => (
              <TimelineItem key={idx} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
