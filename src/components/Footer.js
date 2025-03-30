import React from 'react';
import { Link } from 'react-router-dom';

export const ClickAlchemyFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.281-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z', 
      link: 'https://instagram.com/clickalchemy'
    },
    { 
      name: 'Facebook', 
      icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z', 
      link: 'https://facebook.com/clickalchemy'
    },
    { 
      name: 'WhatsApp', 
      icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.886 9.886 0 01-1.536-5.26c0-5.468 4.436-9.904 9.904-9.904 2.65 0 5.141 1.03 7.013 2.898a9.887 9.887 0 012.908 7.013c-.003 5.467-4.44 9.903-9.907 9.903zm8.684-20.616A11.884 11.884 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.941 11.941 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z', 
      link: 'https://wa.me/+1234567890'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' }
  ];

  return (
    <footer 
    className="bg-black text-white py-5 shadow-lg"


      style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(30,30,30,1) 100%)'
      }}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Click Alchemy</h3>
          <p className="text-white/80 mb-6">
            Digital transformation through innovative marketing strategies and cutting-edge technology.
          </p>
          <div className="flex space-x-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FFD700] transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-[#FFD700] mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-white/80 hover:text-[#FFD700] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-xl font-semibold text-[#FFD700] mb-6">Legal</h4>
          <ul className="space-y-3">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-white/80 hover:text-[#FFD700] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-xl font-semibold text-[#FFD700] mb-6">Stay Updated</h4>
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#FFD700] text-white"
            />
            <button 
              type="submit" 
              className="w-full bg-[#FFD700] text-black py-3 rounded-lg font-semibold 
                         hover:bg-[#FFC700] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-white/60">
          © {currentYear} Click Alchemy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default ClickAlchemyFooter;