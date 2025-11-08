import React, { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaCamera, FaTimes } from 'react-icons/fa'

const Photography = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
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

  // Real photography images
  const photos = [
    { id: 1, src: '/photos/_DSC0797.jpg', alt: 'Concert Photography' },
    { id: 2, src: '/photos/1000004653.jpg', alt: 'Event Photography' },
    { id: 3, src: '/photos/750_5037.jpg', alt: 'Live Performance' },
    { id: 4, src: '/photos/AmitTrivedi Piano.jpg', alt: 'Amit Trivedi Piano Performance' },
    { id: 5, src: '/photos/WhatsApp Image 2025-06-24 at 14.30.22_cd4df793.jpg', alt: 'Event Coverage' },
    { id: 6, src: '/photos/WhatsApp Image 2025-06-24 at 14.34.14_23c64c28.jpg', alt: 'Event Photography' },
  ]

  return (
    <section
      id="photography"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-text-primary tracking-tight flex items-center gap-4">
            <FaCamera className="text-accent" />
            <span>
              Photo<span className="text-accent glow-text">graphy</span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-8 rounded-full"></div>

          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl leading-relaxed">
            From macro wonders to wild landscapes and vibrant concerts — photography is my way of slowing down, creating, and reliving moments I love <span className="text-red-500 inline-block animate-pulse">❤️</span>
          </p>
        </div>

        {/* Photo Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-3xl aspect-square transition-all duration-500 delay-${index * 50} shadow-lg hover:shadow-2xl cursor-pointer`}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Real Photo */}
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaCamera className="text-accent text-6xl animate-pulse" />
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent transition-all duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-accent text-4xl transition-colors z-10"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Instagram CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <a
            href="https://www.instagram.com/snapitastic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]"
          >
            <FaInstagram className="text-2xl" />
            See more @snapitastic
          </a>
          <p className="mt-4 text-text-muted">Check out my photography work on Instagram</p>
        </div>
      </div>
    </section>
  )
}

export default Photography

