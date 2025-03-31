import { motion } from 'framer-motion';
import type React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-langoor-black">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-baskervville mb-6 leading-tight">
            As a 'born in the digital era' marketing agency,<br />
            we have been challenging brands to innovate at <span className="font-bold">the intersection of data, creative & technology.</span>
          </h1>

          <div className="mt-8">
            <a
              href="#about"
              className="btn btn-outline"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Logo Animation or Background Video */}

    </section>
  );
};

export default HeroSection;
