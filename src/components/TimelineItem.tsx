'use client'
import React from 'react'

type Experience = {
  company: string
  role: string
  period: string
  details: string[]
}

type Props = {
  exp: Experience
  idx: number
}

export default function TimelineItem({ exp, idx }: Props) {
  const isLeft = idx % 2 === 0

  return (
    <div key={idx} className="relative md:grid md:grid-cols-9 md:items-start">
      {/* Left column (desktop): show card on left for even items */}
      <div className={`hidden md:block md:col-span-4 md:pr-8 ${isLeft ? 'md:text-right' : ''}`}>
        {isLeft ? (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-purple-100/50 hover:shadow-2xl transition text-left">
            <div className="text-sm text-purple-600 font-medium mb-2">{exp.period}</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">{exp.role}</h4>
            <p className="text-sm text-gray-700 mb-3 font-medium">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Center marker column */}
      <div className="md:col-span-1 flex justify-center md:justify-center my-4">
        <div className="relative">
          <div
            className={`w-4 h-4 rounded-full shadow-md mx-auto transform transition-transform duration-200 hover:scale-110 ${isLeft ? 'bg-purple-300 border-4 border-purple-100' : 'bg-pink-300 border-4 border-pink-100'}`}
            style={{ boxShadow: isLeft ? '0 6px 20px rgba(139,92,246,0.15)' : '0 6px 20px rgba(236,72,153,0.12)' }}
          />

          {isLeft ? (
            <div className="hidden md:block absolute -right-16 top-1/2 transform -translate-y-1/2 h-0.5 w-12 bg-gradient-to-r from-purple-200 to-transparent" />
          ) : (
            <div className="hidden md:block absolute -left-16 top-1/2 transform -translate-y-1/2 h-0.5 w-12 bg-gradient-to-l from-pink-200 to-transparent" />
          )}
        </div>
      </div>

      {/* Right column (desktop): show card on right for odd items */}
      <div className={`hidden md:block md:col-span-4 md:pl-8 ${!isLeft ? '' : ''}`}>
        {!isLeft ? (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-purple-100/50 hover:shadow-2xl transition text-left">
            <div className="text-sm text-purple-600 font-medium mb-2">{exp.period}</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">{exp.role}</h4>
            <p className="text-sm text-gray-700 mb-3 font-medium">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Mobile / stacked card (always full width) */}
      <div className="md:hidden">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-purple-100/50 hover:shadow-2xl transition text-left">
          <div className="text-sm text-purple-600 font-medium mb-2">{exp.period}</div>
          <h4 className="text-lg font-semibold text-gray-900 mb-1">{exp.role}</h4>
          <p className="text-sm text-gray-700 mb-3 font-medium">{exp.company}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {exp.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
