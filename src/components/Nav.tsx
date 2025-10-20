'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-40 border-b border-purple-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          SH.
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-gray-700 hover:text-purple-600 transition relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
          </a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
          </a>
          <a href="#experience" className="text-gray-700 hover:text-purple-600 transition relative group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
          </a>
          <a href="#projects" className="text-gray-700 hover:text-purple-600 transition relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition transform hover:scale-105"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-purple-100/50">
          <div className="flex flex-col gap-4 px-6 py-4">
            <a href="#home" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600">About</a>
            <a href="#experience" className="text-gray-700 hover:text-purple-600">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}
