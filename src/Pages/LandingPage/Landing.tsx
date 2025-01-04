import React from 'react';
import { Navigation } from '../../Navigation/Navigation';
import { Hero } from '../../Components/Hero/Hero';
import { Features } from '../../Components/Features/Features';
import { FAQ } from '../../Components/FAQ/FAQ';
import { Footer } from '../../Components/Footer/Footer';
import { Testimonials } from '../../Components/Testimonials/Testimonials';

export default function Landing() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Navigation />
      <Hero />
      <Features />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}
