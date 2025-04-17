import type React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="py-36 bg-langoor-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="max-w-3xl mx-auto text-lg">
            A 'born in the digital era' marketing agency that has been challenging brands to innovate at the intersection of data, creative & technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Langoor was founded with a clear vision - to help businesses navigate the digital landscape in innovative ways. Our journey began over a decade ago, and since then, we've been at the forefront of digital marketing transformation.
            </p>
            <p>
              We've grown from a small team of passionate digital enthusiasts to a full-service digital agency with a global footprint, serving clients across multiple industries and markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
            <p className="mb-4">
              At Langoor, we believe in challenging the status quo. We don't just follow trends; we set them. Our approach is rooted in deep strategic thinking, creative excellence, and technological innovation.
            </p>
            <p>
              We're driven by a desire to create meaningful digital experiences that deliver real business impact. Our success is measured by our clients' success, and we're proud to have helped numerous brands achieve their digital marketing goals.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-langoor-gray/20 pt-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">
            Langoor is home to a diverse team of creative thinkers, strategic problem-solvers, and technical experts. We're united by a shared passion for digital innovation and a commitment to delivering exceptional results for our clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-langoor-gray/10 p-6 rounded">
                <div className="w-24 h-24 bg-langoor-blue rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center mb-2">Team Member</h3>
                <p className="text-center text-langoor-blue-light mb-4">Position</p>
                <p className="text-center">
                  Brief description about the team member and their expertise in the field of digital marketing.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;