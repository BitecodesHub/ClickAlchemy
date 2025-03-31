import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const workItems = [
  {
    id: 'lenovo',
    title: 'LENOVO',
    subtitle: 'Challenge Enterprise Marketing Transformation for',
    description: 'We partnered with Lenovo Infrastructure Solutions Group to succeed in the highly competitive data center and infrastructure business through carefully crafted digital transformation strategies and marketing automation tactics that reside at the intersection of technology, creativity, data and insights.',
    image: 'https://ext.same-assets.com/2675109532/1614152618.png',
    categories: ['Enterprise', 'Digital Transformation', 'Marketing Automation']
  },
  {
    id: 'unilever',
    title: 'UNILEVER',
    subtitle: 'Challenge Platform Experience Through Unification of Web Experiences for',
    description: 'We partnered with Unilever to create engaging, unified and interactive experiences for their portfolio of 400+ brands (across channels, devices and applications) that reside at the intersection of technology, creativity, data and insights.',
    image: 'https://ext.same-assets.com/2675109532/270998794.png',
    categories: ['Consumer', 'Web Experiences', 'Platform Unification']
  },
  {
    id: 'epson',
    title: 'EPSON',
    subtitle: 'Challenge Category Creation & Go-To-Market Strategy for',
    description: 'We partnered with Epson to build the category of economical and eco-friendly printers, attain go-to-market fit, and accelerate towards market dominance, through an all-inclusive digital transformation strategy that resided at the intersection of technology, creativity, data and insights.',
    image: 'https://ext.same-assets.com/2675109532/905753415.png',
    categories: ['Enterprise', 'Go-To-Market Strategy', 'Category Creation']
  },
  {
    id: 'adobe',
    title: 'ADOBE',
    subtitle: 'Reinventing Digital Experience Platform for',
    description: 'We collaborated with Adobe to reimagine their digital experience platform, creating intuitive interfaces and powerful tools that help businesses create, manage, and optimize digital content across multiple channels.',
    image: 'https://ext.same-assets.com/2675109532/4200091594.svg',
    categories: ['Enterprise', 'Digital Experience', 'Platform Design']
  },
  {
    id: 'jbl',
    title: 'JBL',
    subtitle: 'Creating Immersive Brand Experience for',
    description: 'We developed an immersive digital brand experience for JBL that highlighted their product range and brand values, creating engaging content that resonated with their target audience and drove conversion rates.',
    image: 'https://ext.same-assets.com/2675109532/451176464.svg',
    categories: ['Consumer', 'Brand Experience', 'E-commerce']
  },
  {
    id: 'dabur',
    title: 'DABUR',
    subtitle: 'Digital Transformation Strategy for',
    description: 'We helped Dabur reimagine their digital presence, creating an integrated ecosystem that connected their diverse product range and engaged consumers through personalized experiences and content.',
    image: 'https://ext.same-assets.com/2675109532/1940089357.svg',
    categories: ['Consumer', 'Digital Transformation', 'Content Strategy']
  }
];

const WorkPage: React.FC = () => {
  const [filter, setFilter] = React.useState('All');

  const filteredWork = filter === 'All'
    ? workItems
    : workItems.filter(item => item.categories.includes(filter));

  return (
    <div className="py-36 bg-langoor-black">
      <div className="container-custom">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="max-w-3xl mx-auto text-lg">
            10+ years of delivering integrated, immersive and impactful
            digital marketing transformation stories.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Enterprise', 'Consumer', 'Digital Transformation', 'Marketing Automation', 'Brand Experience'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === category
                  ? 'bg-langoor-yellow text-langoor-black'
                  : 'bg-langoor-gray/20 text-langoor-lightGray hover:bg-langoor-gray/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWork.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-langoor-gray/10 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-langoor-gray/20 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-langoor-blue-light text-sm mb-2">{item.subtitle}</p>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.categories.map(cat => (
                    <span key={cat} className="text-xs bg-langoor-gray/20 px-2 py-1 rounded">
                      {cat}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/work/${item.id}`}
                  className="inline-flex items-center text-langoor-yellow hover:underline"
                >
                  <span>View Case Study</span>
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your digital presence?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let's create something amazing together. Our team of experts is ready to help you achieve your digital marketing goals.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkPage;
