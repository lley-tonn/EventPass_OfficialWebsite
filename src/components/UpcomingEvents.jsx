import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const events = [
    {
      id: 1,
      title: 'Kampala Music Festival',
      date: 'March 15, 2024',
      location: 'Kololo Airstrip, Kampala',
      price: 'UGX 50,000',
      image: '🎵',
      availability: 'Available',
    },
    {
      id: 2,
      title: 'Tech Innovation Summit',
      date: 'March 22, 2024',
      location: 'Sheraton Hotel, Kampala',
      price: 'UGX 75,000',
      image: '💻',
      availability: 'Available',
    },
    {
      id: 3,
      title: 'Comedy Night Live',
      date: 'March 28, 2024',
      location: 'National Theatre, Kampala',
      price: 'UGX 30,000',
      image: '🎭',
      availability: 'Limited',
    },
    {
      id: 4,
      title: 'Food & Wine Expo',
      date: 'April 5, 2024',
      location: 'Lugogo Mall, Kampala',
      price: 'UGX 40,000',
      image: '🍷',
      availability: 'Available',
    },
    {
      id: 5,
      title: 'Fashion Week Uganda',
      date: 'April 12, 2024',
      location: 'Speke Resort, Munyonyo',
      price: 'UGX 100,000',
      image: '👗',
      availability: 'Available',
    },
    {
      id: 6,
      title: 'Youth Entrepreneurship Forum',
      date: 'April 18, 2024',
      location: 'Makerere University',
      price: 'Free',
      image: '🚀',
      availability: 'Available',
    },
  ];

  const animationConfig = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' },
  };

  const hoverConfig = prefersReducedMotion
    ? {}
    : {
        scale: 1.02,
        transition: { duration: 0.15, ease: 'easeOut' },
      };

  return (
    <section className="py-20 bg-black" aria-labelledby="upcoming-events-heading">
      <div className="container mx-auto px-4">
        <motion.h2
          id="upcoming-events-heading"
          {...animationConfig}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-12 text-center text-h2 font-semibold text-white"
        >
          Upcoming Events
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 6).map((event, index) => (
            <motion.article
              key={event.id}
              {...animationConfig}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={hoverConfig}
              transition={{ ...animationConfig.transition, delay: prefersReducedMotion ? 0 : index * 0.05 }}
              className="group relative rounded-2xl border border-white/5 bg-[rgba(15,15,15,0.85)] overflow-hidden shadow-soft-glow transition-all duration-200 hover:border-white/15 cursor-pointer"
            >
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="text-4xl">{event.image}</div>
                  <span
                    className={`rounded-full px-3 py-1 text-meta font-medium ${
                      event.availability === 'Limited'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {event.availability}
                  </span>
                </div>
                <h3 className="mb-2 text-card-title font-semibold text-white group-hover:text-primary transition-colors duration-200">
                  {event.title}
                </h3>
                <div className="space-y-2 text-meta text-gray-400">
                  <p className="flex items-center">
                    <span className="mr-2">📅</span>
                    {event.date}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📍</span>
                    {event.location}
                  </p>
                  <p className="flex items-center font-semibold text-primary">
                    <span className="mr-2">💰</span>
                    {event.price}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          {...animationConfig}
          viewport={{ once: true }}
          transition={{ ...animationConfig.transition, delay: prefersReducedMotion ? 0 : 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/events"
            className="inline-flex items-center justify-center rounded-lg border border-primary/60 bg-primary px-8 py-3 text-button font-semibold tracking-wide text-black transition-all duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            Browse More Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

