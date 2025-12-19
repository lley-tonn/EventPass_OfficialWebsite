import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

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
  ];

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length, prefersReducedMotion]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const animationConfig = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' },
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' },
    viewport: { once: true, margin: '-50px' },
  };

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

        {/* Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-8 min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              {...animationConfig}
              className="w-full"
            >
              <div className="rounded-2xl border border-white/5 bg-[rgba(15,15,15,0.85)] p-8 shadow-soft-glow">
                <div className="flex items-center mb-4">
                  <span className="mr-4 text-4xl">{testimonials[currentIndex].avatar}</span>
                  <div>
                    <h3 className="text-card-title font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-meta text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <div className="mb-4 flex text-primary">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-body text-gray-300 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {!prefersReducedMotion && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full border border-white/10 bg-black/50 p-2 text-white transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:-translate-x-12"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border border-white/10 bg-black/50 p-2 text-white transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:translate-x-12"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
