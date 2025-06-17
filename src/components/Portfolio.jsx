import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile application for healthcare management with appointment scheduling and telemedicine features.',
      tech: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56'
    },
    {
      title: 'AI-Powered Analytics',
      category: 'AI & ML',
      description: 'Machine learning solution for predictive analytics and business intelligence with real-time data processing.',
      tech: ['Python', 'TensorFlow', 'AWS', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Development',
      description: 'Comprehensive financial management dashboard with real-time market data and portfolio tracking.',
      tech: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3'
    },
    {
      title: 'Smart IoT Solution',
      category: 'IoT & AI',
      description: 'IoT platform with AI-driven automation for smart home and office management systems.',
      tech: ['React', 'MQTT', 'InfluxDB', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64'
    },
    {
      title: 'Social Media Platform',
      category: 'Full Stack',
      description: 'Social networking platform with real-time messaging, content sharing, and community features.',
      tech: ['Next.js', 'GraphQL', 'Prisma', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital transformation goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img  
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                 src={project.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-blue-400 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
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
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;