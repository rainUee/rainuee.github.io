"use client"
import React from 'react'
import { Code, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

type Links = {
  github: string;
  linkedin: string;
  mail: string;
}

type Props = {
  name?: string
  tagline?: string
  links?: Links
}

export default function Hero({ name, tagline, links }: Props) {
  const finalName = name ?? 'Joe Doe'
  const finalTagline = String(tagline ?? 'Full Stack Developer crafting beautiful and innovative digital experiences')
  const finalLinks: Links = links ?? { github: '#', linkedin: '#', mail: 'mailto:your@email.com' }
  const taglineParts = finalTagline.split(' ')

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-8">
          {/* Animated avatar */}
          <div className="inline-block relative">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <Code size={48} className="text-white relative z-10" />
              <Sparkles size={20} className="text-white absolute top-2 right-2 animate-ping" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse" />
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 animate-fade-in">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                {finalName}
              </span>
            </h1>

            <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>

          <p className="text-xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-light">
            {taglineParts.map((part: string, i: number) => (
              <span key={i} className={part === 'beautiful' ? 'text-purple-600 font-semibold' : part === 'innovative' ? 'text-pink-600 font-semibold' : ''}>
                {part}{i < taglineParts.length - 1 ? ' ' : ''}
              </span>
            ))}
          </p>

          <div className="flex gap-4 justify-center pt-6">
            <a
              href={finalLinks.github}
              className="group p-4 bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100 rounded-full transition shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              <Github size={24} className="text-purple-600 group-hover:text-purple-700" />
            </a>
            <a
              href={finalLinks.linkedin}
              className="group p-4 bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100 rounded-full transition shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              <Linkedin size={24} className="text-purple-600 group-hover:text-purple-700" />
            </a>
            <a
              href={finalLinks.mail}
              className="group p-4 bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100 rounded-full transition shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              <Mail size={24} className="text-purple-600 group-hover:text-purple-700" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
