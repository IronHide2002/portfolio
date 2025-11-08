import React, { useEffect, useRef, useState } from 'react'
import { FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      name: 'Move-In-Sync',
      description: 'Strategic product initiative to increase on-time arrival rates for corporate transportation',
      outcome: '85% to 95%',
      outcomeSuffix: ' OTA increase',
      tags: ['Eisenhower Matrix', 'HRMS Integration', 'IVR'],
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop'
    },
    {
      name: 'CricBuzz Enhancement',
      description: 'Conceptualized & prioritized 5 retention features using RICE framework',
      outcome: 'Engagement Boost',
      outcomeSuffix: ' via retention features',
      tags: ['RICE Framework', 'User Engagement', 'Product Strategy'],
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop'
    },
    {
      name: 'SplitWise Features',
      description: 'Developed 4 features to improve engagement & retention with prioritization via RICE',
      outcome: 'Enhanced UX',
      outcomeSuffix: ' & user retention',
      tags: ['Feature Prioritization', 'UX Design', 'Success Metrics'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
    },
    {
      name: 'Hospitality BI Dashboard',
      description: 'Power BI dashboard with KPIs like ADR, RevPAR, occupancy rate across 50K+ bookings',
      outcome: '8-10%',
      outcomeSuffix: ' cancellation reduction',
      tags: ['Power BI', 'Data Visualization', 'Revenue Strategy'],
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop'
    },
    {
      name: 'Business Strategy Analysis',
      description: 'Evaluated industry dynamics via Porter\'s Five Forces, BCG Matrix, and SPACE Analysis',
      outcome: 'Strategic Insights',
      outcomeSuffix: ' for market positioning',
      tags: ['Strategy', 'Market Analysis', 'BCG Matrix'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      name: 'Sports Retail Analysis',
      description: 'Analyzed 3,000+ SKUs using SQL to classify products and identify revenue opportunities',
      outcome: 'Revenue Lift',
      outcomeSuffix: ' via optimization',
      tags: ['SQL', 'Data Analysis', 'Pricing Strategy'],
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop'
    }
  ]

  const productDecks = [
    {
      name: 'BeyondIRR APM Assignment',
      description: 'Product management assignment showcasing strategic thinking and problem-solving',
      pdfPath: '/product_decks/BeyondIRR_APM_Assignment_AryamanKohli.pdf'
    },
    {
      name: 'Blinkit New User Onboarding',
      description: 'Product deck for improving new user onboarding experience',
      pdfPath: '/product_decks/Blinkit New User Onboarding product deck.pdf'
    },
    {
      name: 'Third Party Service Center',
      description: 'Case study on third-party service center operations and optimization',
      pdfPath: '/product_decks/Case_1_Third_Party_Service_Center_2020A2PS1055H.pdf'
    },
    {
      name: 'CoinSwitch Case Study',
      description: 'Comprehensive case study on cryptocurrency exchange platform',
      pdfPath: '/product_decks/Coinswitch_Casestudy.pdf'
    },
    {
      name: 'CricBuzz Product Deck',
      description: 'Product strategy and feature prioritization for sports media platform',
      pdfPath: '/product_decks/CricBuzz Product deck.pdf'
    },
    {
      name: 'Just Do It App',
      description: 'Product deck for task management and productivity application',
      pdfPath: '/product_decks/Just-do-it-App-Lovable.pdf'
    },
    {
      name: 'MoveInSync Product Deck',
      description: 'Strategic product initiative for corporate transportation management',
      pdfPath: '/product_decks/MoveInSync product deck.pdf'
    },
    {
      name: 'CheQ Nextleap',
      description: 'Product development phases for financial technology platform',
      pdfPath: '/product_decks/Phase1_Phase2_CheQ_Nextleap_Ak.pdf'
    },
    {
      name: 'Splitwise Product Deck',
      description: 'Product strategy and feature development for expense sharing platform',
      pdfPath: '/product_decks/Splitwise Product deck.pdf'
    }
  ]

  const handleDeckClick = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 bg-dark-bg"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-text-primary tracking-tight">
            <span className="text-accent glow-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-16 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-dark-card rounded-3xl overflow-hidden border border-dark-lighter hover:border-accent transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-dark-lighter to-dark-card overflow-hidden border-b-2 border-accent/20">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3" style={{fontFamily: "'Playfair Display', serif"}}>
                    {project.name}
                  </h3>
                  
                  <p className="text-text-secondary text-base mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Outcome */}
                  <div className="mb-4 bg-dark-bg/50 p-3 rounded-xl border border-accent/30">
                    <p className="text-sm text-text-muted mb-1">Aim:</p>
                    <p className="text-accent text-lg md:text-xl font-bold glow-text">
                      {project.outcome}
                    </p>
                    <p className="text-text-secondary text-sm">{project.outcomeSuffix}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 text-xs font-medium bg-dark-bg text-accent border border-accent/50 rounded-full hover:bg-accent/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Decks Section */}
        <div className="mt-20">
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary tracking-tight">
              <span className="text-accent glow-text">Product Decks</span>
            </h3>
            <div className="w-20 h-1 bg-accent mb-12 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productDecks.map((deck, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${800 + index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div
                  onClick={() => handleDeckClick(deck.pdfPath)}
                  className="bg-dark-card rounded-3xl overflow-hidden border border-dark-lighter hover:border-accent transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                >
                  {/* PDF Icon Header */}
                  <div className="h-48 bg-gradient-to-br from-dark-lighter to-dark-card overflow-hidden border-b-2 border-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <FaFileAlt className="text-6xl md:text-7xl text-accent mx-auto mb-4 animate-pulse" />
                      <p className="text-text-secondary text-sm font-medium">Click to view PDF</p>
                    </div>
                  </div>

                  {/* Deck Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <FaFileAlt className="text-accent text-xl" />
                      <h3 className="text-2xl md:text-3xl font-bold text-text-primary" style={{fontFamily: "'Playfair Display', serif"}}>
                        {deck.name}
                      </h3>
                    </div>
                    
                    <p className="text-text-secondary text-base mb-4 flex-grow">
                      {deck.description}
                    </p>

                    {/* View PDF Button */}
                    <div className="mt-auto pt-4 border-t border-dark-lighter">
                      <div className="flex items-center gap-2 text-accent font-medium group">
                        <span>View Deck</span>
                        <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

