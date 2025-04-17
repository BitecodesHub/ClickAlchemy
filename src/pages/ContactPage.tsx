import type React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="py-36 bg-langoor-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Let's create something amazing together. Reach out to us to start a conversation about your digital marketing needs.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;
