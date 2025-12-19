import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'How CinQ is Revolutionizing Event Ticketing in Uganda',
      excerpt: 'Discover how our mobile-first platform is changing the way Ugandans experience events.',
      date: 'January 15, 2024',
      readTime: '5 min read',
    },
    {
      title: 'Top 10 Events to Attend in Kampala This Month',
      excerpt: 'From music festivals to tech conferences, here are the must-attend events in Kampala.',
      date: 'January 10, 2024',
      readTime: '3 min read',
    },
    {
      title: 'Security Best Practices for Event Organizers',
      excerpt: 'Learn how to keep your events safe and secure with CinQ verification systems.',
      date: 'January 5, 2024',
      readTime: '4 min read',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-h1 font-semibold text-white"
        >
          CinQ Blog
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cursor-pointer rounded-2xl border border-white/5 bg-[#0f0f0f]/85 p-6 shadow-soft-glow transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
            >
              <h2 className="mb-4 text-card-title font-semibold text-white">
                {post.title}
              </h2>
              <p className="mb-4 text-body text-gray-400">{post.excerpt}</p>
              <div className="flex justify-between text-label uppercase tracking-[0.3em] text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center text-body text-gray-500"
        >
          <p>More articles coming soon...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;
