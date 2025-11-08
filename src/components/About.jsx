import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 bg-dark-bg"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-text-primary tracking-tight">
            About <span className="text-accent glow-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-12 rounded-full"></div>

          {/* About Content */}
          <div className="space-y-8 text-text-secondary text-lg md:text-xl leading-loose max-w-4xl">
            <p>
              I'm a <span className="text-accent font-semibold">2024 BITS Pilani</span> graduate driven by curiosity and a strong interest in building user-focused products.
            </p>
            <p>
              As an <span className="text-accent font-semibold">Analyst Intern at Deutsche Bank</span>, I worked on large-scale data systems using <span className="text-accent font-semibold">SQL, Excel, and automation tools</span> to improve accuracy, reporting speed, and process efficiency — an experience that strengthened my data-driven and problem-solving mindset.
            </p>
            <p>
              I enjoy combining analytical thinking with a product-focused approach — understanding users, identifying key problems, and building impactful solutions. I'm currently exploring <span className="text-accent font-semibold">product management, product analyst, business analyst</span>, and other related roles where I can learn, grow, and contribute to building meaningful products.
            </p>
            <p>
              Outside work, I'm a passionate photographer and previously led the <span className="text-accent font-semibold">Photography Department at BITS</span>, an experience that shaped my eye for detail, storytelling, and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

