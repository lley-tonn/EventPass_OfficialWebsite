import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Event Organizer',
      content: 'EventPass has revolutionized how I manage my events. The QR verification is seamless!',
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Music Fan',
      content: 'Buying tickets has never been easier. The app is intuitive and fast.',
      avatar: '👨‍🎤',
    },
    {
      name: 'Emma Davis',
      role: 'Tech Enthusiast',
      content: 'Love the push notifications and personalized event suggestions. Highly recommended!',
      avatar: '👩‍💻',
    },
  ];

  return (
    <section className="py-20 bg-[#050505]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-semibold text-white md:text-4xl"
        >
          What Our Users Say
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 165, 0, 0.1)'
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-2xl border border-white/5 bg-[rgba(15,15,15,0.85)] p-6 shadow-soft-glow transition-all duration-300 hover:border-white/15 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <span className="mr-4 text-3xl">{testimonial.avatar}</span>
                <div>
                  <h3 className="text-base font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
