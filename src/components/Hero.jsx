import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Briefcase, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Innovate · Create · Transform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your
            <span className="gradient-text block">Digital Vision</span>
            Into Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We deliver cutting-edge web development, mobile applications, and AI/ML solutions 
            that drive business growth and innovation for forward-thinking companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 pulse-glow"
              onClick={() => scrollToSection('services')}
            >
               Our Services
              <Briefcase className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-6"
              onClick={() => scrollToSection('portfolio')}
            >
               Our Work
              <Eye className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 floating-animation"
            style={{ animationDelay: '0s' }}
          >
            <img  alt="React technology icon" className="w-16 h-16 opacity-20" src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4 floating-animation"
            style={{ animationDelay: '2s' }}
          >
            <img  alt="AI technology icon" className="w-20 h-20 opacity-20" src="https://images.unsplash.com/photo-1677442135131-4d7c123aef1c" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/3 floating-animation"
            style={{ animationDelay: '4s' }}
          >
            <img  alt="Mobile app icon" className="w-14 h-14 opacity-20" src="https://images.unsplash.com/photo-1604478373812-0ef15d185d90" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;