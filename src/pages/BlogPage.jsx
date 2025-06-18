import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, User, Tag, ArrowRight, ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogs = [
    {
      title: "Building Scalable React Applications with Modern Architecture",
      category: "Frontend Development",
      excerpt: "Explore advanced patterns and best practices for building large-scale React applications that are maintainable, performant, and future-proof. Learn about component architecture, state management, and optimization techniques.",
      tags: ["React", "JavaScript", "Architecture", "Performance"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      publishDate: "Jun 10, 2025",
      readTime: "8",
      author: "Sarah Johnson"
    },
    {
      title: "Mastering Node.js: From Basics to Production-Ready APIs",
      category: "Backend Development",
      excerpt: "Deep dive into Node.js development covering everything from fundamental concepts to building robust, scalable APIs. Includes authentication, database integration, testing strategies, and deployment best practices.",
      tags: ["Node.js", "Express", "API", "MongoDB", "Authentication"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      publishDate: "Jun 5, 2025",
      readTime: "12",
      author: "Mike Chen"
    },
    {
      title: "The Future of Web Development: Emerging Trends in 2025",
      category: "Technology Trends",
      excerpt: "Stay ahead of the curve with the latest web development trends shaping the industry. From AI integration to new frameworks, discover what's driving innovation in modern web development.",
      tags: ["Web Development", "AI", "Trends", "Innovation", "Future"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      publishDate: "Jun 1, 2025",
      readTime: "6",
      author: "Alex Rivera"
    },
    {
      title: "Implementing AI-Powered Features in Modern Applications",
      category: "Artificial Intelligence",
      excerpt: "Learn how to integrate cutting-edge AI capabilities into your applications. From natural language processing to computer vision, discover practical approaches to implementing AI features that users love.",
      tags: ["AI", "Machine Learning", "NLP", "Computer Vision", "Integration"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      publishDate: "May 28, 2025",
      readTime: "10",
      author: "Dr. Emily Watson"
    },
    {
      title: "Database Optimization Techniques for High-Performance Apps",
      category: "Backend Development",
      excerpt: "Master the art of database optimization with proven techniques for improving query performance, scaling strategies, and maintaining data integrity in high-traffic applications.",
      tags: ["Database", "Performance", "SQL", "Optimization", "Scaling"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      publishDate: "May 25, 2025",
      readTime: "9",
      author: "James Liu"
    },
    {
      title: "Mobile-First Design: Creating Responsive User Experiences",
      category: "UI/UX Design",
      excerpt: "Explore mobile-first design principles and learn how to create responsive, accessible user interfaces that work seamlessly across all devices and screen sizes.",
      tags: ["Mobile Design", "Responsive", "UX", "Accessibility", "CSS"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      publishDate: "May 22, 2025",
      readTime: "7",
      author: "Maria Rodriguez"
    }
  ];

  const categories = ['All', 'Frontend Development', 'Backend Development', 'Technology Trends', 'Artificial Intelligence', 'UI/UX Design'];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    
    <>
    <Header />
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Blogs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on the latest in technology, development, and innovation.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredBlogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg">No articles found matching your criteria.</div>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      alt={`${blog.title} - ${blog.excerpt}`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      src={blog.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                        <Button size="sm" variant="secondary" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-blue-400 font-medium mb-2">{blog.category}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{blog.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{blog.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{blog.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 pt-4 border-t border-gray-700">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{blog.author}</span>
                      <div className="flex-1"></div>
                      <ArrowRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-effect rounded-2xl p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our <span className="gradient-text">Newsletter</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Get the latest articles, tutorials, and tech insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default BlogPage;