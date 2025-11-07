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
              I'm a 2024 graduate from <span className="text-text-primary font-semibold">BITS Pilani, Hyderabad Campus</span> with a strong passion for the intersection of business, data, and technology.
            </p>
            <p>
              During my internship at <span className="text-accent font-semibold">Deutsche Bank</span>, I worked as part of the Liquidity Data Management team, gaining hands-on experience in financial data systems and risk reporting.
            </p>
            <p>
              Currently, I'm actively exploring opportunities in <span className="text-accent font-semibold">product management</span> and <span className="text-accent font-semibold">business analyst</span> roles where I can apply my analytical mindset, problem-solving skills, and creative thinking to build meaningful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

