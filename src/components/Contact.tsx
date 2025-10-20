"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-purple-100/50">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            Say Hello
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
