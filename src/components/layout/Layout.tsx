import type React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 2500);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Preloader */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-langoor-black"
        >
          <motion.div
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{ scale: 0.5, x: '-35vw', y: '-43vh' }}
            transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl md:text-6xl font-baskervville tracking-wider">
              <span className="text-langoor-yellow">Click</span> Alchemyy
            </div>
            <div className="text-sm mt-2 text-langoor-lightGray">
              An LS Digital Group Company
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Header/Navbar */}
      <Header isLoading={isLoading} />

      {/* Main Content */}
      <main
        className={`flex-grow pt-24 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
