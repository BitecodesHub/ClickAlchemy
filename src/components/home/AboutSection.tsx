import type React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-langoor-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-baskervville mb-4">
              Imagineers of
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-12">
              Digital Behaviour +<br />
              Immersive Experiences
            </h3>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p>
              We are obsessed with building and executing strategies that go beyond stories, social, search, and advertising. We challenge the way marketers interpret digital disruption and navigate their way to impact business, marketing and brand performance.
            </p>
            <p>
              As design thinkers powered by tech, data and creativity, we go beyond the traditional ways of research and marketing. Our goal is to deliver great experiences, content, and communication that pertain to the current as well as the future trends. The time for marketers to challenge conventional thinking and take action is now.
            </p>
            <p>
              Our design thinking is aimed at reimagining, reconfiguring and solving marketing needs for the digital world. As award-winning experience partner, we enable marketers to create an impact and deliver performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
