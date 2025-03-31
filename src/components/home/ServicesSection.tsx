import type React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'enterprise-experience',
    title: 'Enterprise Experience',
    description: 'We provide comprehensive digital marketing solutions for enterprise-level businesses, focusing on streamlining processes, improving user experience, and driving growth.',
    path: '/services#enterprise-experience',
  },
  {
    id: 'consumer-experience',
    title: 'Consumer Experience',
    description: 'Our consumer experience services help brands connect with their audiences through engaging digital experiences across multiple touchpoints.',
    path: '/services#consumer-experience',
  },
  {
    id: 'next-web-experience',
    title: 'Next Web Experience',
    description: 'We leverage cutting-edge technologies like AR/VR, metaverse, and Web3 to create immersive digital experiences that push the boundaries of conventional marketing.',
    path: '/services#next-web-experience',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-langoor-black border-t border-langoor-gray/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We merge creative disciplines<br />
            to produce not just marketing solutions,<br />
            but entire systems and services<br />
            that are truly interconnected.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col border border-langoor-gray/20 p-6 hover:border-langoor-yellow transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase">{service.title}</h3>
              <p className="mb-6 flex-grow">{service.description}</p>
              <div className="mt-auto">
                <Link
                  to={service.path}
                  className="inline-flex items-center text-langoor-yellow hover:underline"
                >
                  <span>Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
