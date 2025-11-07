import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 inline-block animate-float">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-light p-1 shadow-2xl shadow-accent/50">
            <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden">
              {/* Profile image */}
              <img 
                src="/profile.jpg" 
                alt="Aryaman Kohli" 
                className="w-full h-full object-cover scale-125 translate-x-[-2%]"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-text-primary tracking-tight">
          Aryaman <span className="text-accent glow-text">Kohli</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-12 font-medium leading-relaxed">
          Aspiring Product Manager <span className="text-accent">|</span> BITS Pilani '24
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://www.linkedin.com/in/aryamankohli02/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-dark-bg font-bold rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] min-w-[200px] justify-center"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          
          <a
            href="mailto:aryamankohli02@gmail.com"
            className="group flex items-center gap-2 px-8 py-4 bg-dark-card hover:bg-dark-lighter text-text-primary font-bold rounded-3xl border-2 border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] min-w-[200px] justify-center"
          >
            <FaEnvelope className="text-xl group-hover:text-accent" />
            Email
          </a>

          <a
            href="/resume.pdf"
            download="AryamanKohli_Resume.pdf"
            className="group flex items-center gap-2 px-8 py-4 bg-dark-card hover:bg-dark-lighter text-text-primary font-bold rounded-3xl border-2 border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] min-w-[200px] justify-center"
          >
            <FaFileDownload className="text-xl group-hover:text-accent" />
            Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContact}
          className="animate-bounce-slow text-accent text-4xl cursor-pointer hover:text-accent-light transition-colors"
          aria-label="Scroll down"
        >
          <FaChevronDown />
        </button>
      </div>
    </section>
  )
}

export default Hero

