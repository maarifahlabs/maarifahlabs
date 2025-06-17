import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Brain, Code, Database, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Modern Frameworks']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and business value.',
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence to automate processes and drive data-driven decisions.',
      features: ['Machine Learning', 'Data Analytics', 'Automation', 'Predictive Models']
    }
  ];

  const additionalServices = [
    { icon: Code, title: 'Custom Software', description: 'Tailored software solutions for unique business needs' },
    { icon: Database, title: 'Database Design', description: 'Scalable and efficient database architecture' },
    { icon: Rocket, title: 'Digital Transformation', description: 'Complete digital transformation strategies' }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive software development services to help your business thrive in the digital age
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="glass-effect rounded-2xl p-8 service-card-hover"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <service.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;