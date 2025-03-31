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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-6">
                Feel free to reach out to us using any of the contact methods below. Our team is ready to assist you with any inquiries.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium uppercase mb-2">Mail us at</h3>
              <a href="mailto:info@langoor.com" className="text-langoor-lightGray hover:text-langoor-yellow transition-colors">
                info@langoor.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-medium uppercase mb-2">HR Enquiries</h3>
              <a href="tel:+918041514635" className="text-langoor-lightGray hover:text-langoor-yellow transition-colors">
                +91 8041 514 635
              </a>
            </div>

            <div>
              <h3 className="text-xl font-medium uppercase mb-2">Sales Enquiries</h3>
              <a href="tel:+918042201328" className="text-langoor-lightGray hover:text-langoor-yellow transition-colors">
                +91 8042 201 328
              </a>
            </div>

            <div>
              <h3 className="text-xl font-medium uppercase mb-2">Office Location</h3>
              <address className="not-italic">
                <p><strong>#323/183/4/4</strong></p>
                <p><strong>Doresanipalya, Arekere</strong></p>
                <p><strong>Bannerghatta Main Road,</strong></p>
                <p><strong>Bengaluru 560076</strong></p>
              </address>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-langoor-lightGray">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-transparent border-b border-langoor-gray/50 p-2 focus:outline-none focus:border-langoor-yellow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-langoor-lightGray">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-transparent border-b border-langoor-gray/50 p-2 focus:outline-none focus:border-langoor-yellow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-langoor-lightGray">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full bg-transparent border-b border-langoor-gray/50 p-2 focus:outline-none focus:border-langoor-yellow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-langoor-lightGray">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-langoor-gray/50 p-2 focus:outline-none focus:border-langoor-yellow"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
