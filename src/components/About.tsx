"use client"
import React from 'react';

type AboutShape = {
  title: string;
  paragraphs: string[];
  techTitle: string;
}

const About = ({ about, skills }: { about: AboutShape; skills: string[] }) => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {about.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100/50">
          <div className="space-y-6 text-lg text-gray-700">
            {about.paragraphs.map((para: string, i: number) => (
              <p key={i} className="text-xl leading-relaxed">{para.includes('TypeScript') ? (
                <>{para.split('TypeScript')[0]}<span className="text-purple-600 font-semibold">TypeScript</span>{para.split('TypeScript')[1]}</>
              ) : para}</p>
            ))}
          </div>

          {/* Skills with fancy design */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">{about.techTitle}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="group px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-700 rounded-full font-medium shadow-md hover:shadow-xl transition transform hover:scale-110 cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
