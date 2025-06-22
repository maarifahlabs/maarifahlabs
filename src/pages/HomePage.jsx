import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default HomePage;