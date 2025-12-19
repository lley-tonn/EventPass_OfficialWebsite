import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const prefersReducedMotion = useReducedMotion();
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Event Organizer',
      content: 'CinQ has revolutionized how I manage my events. The QR verification is seamless!',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Michael C.',
      role: 'Music Fan',
      content: 'Buying tickets has never been easier. The app is intuitive and fast.',
      avatar: '👨‍🎤',
      rating: 5,
    },
    {
      name: 'Emma D.',
      role: 'Tech Enthusiast',
      content: 'Love the push notifications and personalized event suggestions. Highly recommended!',
      avatar: '👩‍💻',
      rating: 5,
    },
    {
      name: 'David K.',
      role: 'Festival Goer',
      content: 'The QR code entry is so smooth. No more waiting in long lines!',
      avatar: '🎪',
      rating: 5,
    },
    {
      name: 'Grace M.',
      role: 'Concert Lover',
      content: 'Best ticketing platform in Uganda. Secure payments and instant tickets.',
      avatar: '🎵',
      rating: 5,
    },
    {
      name: 'James T.',
      role: 'Business Owner',
      content: 'As an event organizer, CinQ has made ticket sales management effortless.',
      avatar: '💼',
      rating: 5,
    },
    {
      name: 'Linda A.',
      role: 'Event Attendee',
      content: 'Quick ticket purchase and easy entry. The app works perfectly every time!',
      avatar: '🎫',
      rating: 5,
    },
    {
      name: 'Robert P.',
      role: 'Music Producer',
      content: 'Managing ticket sales for my events has never been this simple and efficient.',
      avatar: '🎼',
      rating: 5,
    },
  ];

  // Get 4 testimonials to display based on startIndex
  const getDisplayedTestimonials = () => {
    const displayed = [];
    for (let i = 0; i < 4; i++) {
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
    <section className="py-20 bg-[#050505]" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <motion.h2
          id="testimonials-heading"
          {...sectionAnimation}
          className="mb-12 text-center text-h2 font-semibold text-white"
        >
          What Our Users Say
        </motion.h2>

        {/* Testimonial Cards Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: 'easeInOut' }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {displayedTestimonials.map((testimonial, cardIndex) => {
                const globalIndex = (startIndex + cardIndex) % testimonials.length;
                return (
                  <div
                    key={`card-${cardIndex}-${globalIndex}`}
                    className="relative h-full min-h-[280px]"
                  >
                    <div className="h-full rounded-2xl border border-white/5 bg-[rgba(15,15,15,0.85)] p-6 shadow-soft-glow flex flex-col">
                      <div className="flex items-center mb-4">
                        <span className="mr-3 text-3xl">{testimonial.avatar}</span>
                        <div>
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
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {!prefersReducedMotion && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="rounded-full border border-white/10 bg-black/50 p-2 text-white transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, groupIndex) => {
                  const isActive = Math.floor(startIndex / 4) === groupIndex;
                  return (
                    <button
                      key={groupIndex}
                      onClick={() => setStartIndex(groupIndex * 4)}
                      aria-label={`Go to testimonial group ${groupIndex + 1}`}
                      className={`h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        isActive
                          ? 'w-8 bg-primary'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  );
                })}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next testimonials"
                className="rounded-full border border-white/10 bg-black/50 p-2 text-white transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
