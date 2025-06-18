import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Blog = () => {
 
  const blogs = [
    {
      title: "Building Scalable React Applications with Modern Architecture",
      category: "Frontend Development",
      excerpt: "Explore advanced patterns and best practices for building large-scale React applications that are maintainable, performant, and future-proof. Learn about component architecture, state management, and optimization techniques.",
      tags: ["React", "JavaScript", "Architecture", "Performance"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      publishDate: "Jun 10, 2025",
      readTime: "8"
    },
    {
      title: "Mastering Node.js: From Basics to Production-Ready APIs",
      category: "Backend Development",
      excerpt: "Deep dive into Node.js development covering everything from fundamental concepts to building robust, scalable APIs. Includes authentication, database integration, testing strategies, and deployment best practices.",
      tags: ["Node.js", "Express", "API", "MongoDB", "Authentication"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      publishDate: "Jun 5, 2025",
      readTime: "12"
    },
    {
      title: "The Future of Web Development: Emerging Trends in 2025",
      category: "Technology Trends",
      excerpt: "Stay ahead of the curve with the latest web development trends shaping the industry. From AI integration to new frameworks, discover what's driving innovation in modern web development.",
      tags: ["Web Development", "AI", "Trends", "Innovation", "Future"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      publishDate: "Jun 1, 2025",
      readTime: "6"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Blogs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {/* From idea to impact — dive into the stories behind our most transformative projects. */}
          Explore success stories from our clients' digital transformation journeys.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
       <motion.div
       key={blog.title}
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ delay: index * 0.1, duration: 0.8 }}
       whileHover={{ y: -10 }}
       className="glass-effect rounded-2xl overflow-hidden group"
     >
       <div className="relative overflow-hidden">
         <img
           alt={`${blog.title} - ${blog.excerpt}`}
           className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
           src={blog.image || "https://images.unsplash.com/photo-1486312338219-ce68e2c6b865"}
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
             <Button size="sm" variant="secondary" className="flex-1">
               <ExternalLink className="h-4 w-4 mr-2" />
               Read More
             </Button>
             {/* <Button size="sm" variant="outline" className="flex-1">
               <Bookmark className="h-4 w-4 mr-2" />
               Save
             </Button> */}
           </div>
         </div>
       </div>
       <div className="p-6">
         <div className="text-sm text-blue-400 font-medium mb-2">{blog.category}</div>
         <h3 className="text-xl font-bold text-white mb-3">{blog.title}</h3>
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
         <div className="flex items-center justify-between text-xs text-gray-500">
           <span>{blog.publishDate}</span>
           <span>{blog.readTime} min read</span>
         </div>
       </div>
     </motion.div>
     ))}
     </div>
     <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to='/blogs'>
          <Button 
             
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            View All Blogs
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;