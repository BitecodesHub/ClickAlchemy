import type React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ClientsSection from '../components/home/ClientsSection';
import ServicesSection from '../components/home/ServicesSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <ServicesSection />
    </>
  );
};

export default HomePage;
