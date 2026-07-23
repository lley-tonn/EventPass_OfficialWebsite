import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants/brand';

const Testimonials = () => {
  const prefersReducedMotion = useReducedMotion();
  const [startIndex, setStartIndex] = useState(0);
  const testimonials = TESTIMONIALS;

  // Get 3 testimonials to display based on startIndex
  const getDisplayedTestimonials = () => {
    const displayed = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % testimonials.length;
      displayed.push(testimonials[index]);
    }
    return displayed;
  };

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length, prefersReducedMotion]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' },
    viewport: { once: true, margin: '-50px' },
  };

  const displayedTestimonials = getDisplayedTestimonials();

  return (
    <section className="section-padding relative bg-surface-raised/30" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-gradient-radial from-primary/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" aria-hidden="true" />
      
      <div className="container relative">
        <motion.div
          {...sectionAnimation}
          className="text-center mb-16"
        >
          <span className="inline-block text-label uppercase tracking-[0.2em] text-primary mb-4">Stories</span>
          <h2
            id="testimonials-heading"
            className="text-section-title font-bold text-white mb-4"
          >
            Loved by organizers & attendees
          </h2>
          <p className="text-body text-gray-400 max-w-2xl mx-auto">
            Real stories from real people powering events across Africa with EventPass.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {displayedTestimonials.map((testimonial, cardIndex) => {
                const globalIndex = (startIndex + cardIndex) % testimonials.length;
                return (
                  <motion.div
                    key={`card-${cardIndex}-${globalIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: cardIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full"
                  >
                    <div className="h-full rounded-card border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                      <div className="flex items-center mb-5">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">
                          {testimonial.initials}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-card-title font-semibold text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-meta text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="mb-4 flex text-primary">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-sm">★</span>
                        ))}
                      </div>
                      <p className="text-body text-gray-300 leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/[0.05]">
                        <span className="text-label uppercase tracking-wider text-gray-600">
                          {testimonial.type === 'organizer' ? 'Organizer' : 'Attendee'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {!prefersReducedMotion && (
            <div className="flex items-center justify-center gap-6 mt-12">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm p-3 text-white transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.08] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, groupIndex) => {
                  const isActive = Math.floor(startIndex / 3) === groupIndex;
                  return (
                    <button
                      key={groupIndex}
                      onClick={() => setStartIndex(groupIndex * 3)}
                      aria-label={`Go to testimonial group ${groupIndex + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        isActive
                          ? 'w-8 bg-primary shadow-glow'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  );
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                aria-label="Next testimonials"
                className="rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm p-3 text-white transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.08] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
