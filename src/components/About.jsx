import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Award, number: '100+', label: 'Projects Completed' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Target, number: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Maarifah Labs</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a team of passionate software developers, designers, and innovators dedicated to 
              transforming businesses through cutting-edge technology solutions.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our expertise spans across web development, mobile applications, and artificial intelligence, 
              enabling us to deliver comprehensive digital solutions that drive growth and efficiency for our clients.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Expert team of certified developers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">Agile development methodology</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-300">24/7 support and maintenance</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8">
              <img  
                alt="Professional software development team working on innovative projects"
                className="w-full h-80 object-cover rounded-xl"
               src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4"
            >
              <Award className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect rounded-xl p-6"
            >
              <stat.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;