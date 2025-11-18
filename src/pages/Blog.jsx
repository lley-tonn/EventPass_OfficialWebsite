import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'How EventPass is Revolutionizing Event Ticketing in Uganda',
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
      excerpt: 'Learn how to keep your events safe and secure with EventPass verification systems.',
      date: 'January 5, 2024',
      readTime: '4 min read',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          EventPass Blog
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-4 text-primary hover:text-orange-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-500">
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
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400">More articles coming soon...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;
