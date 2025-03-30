import type React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-langoor-black text-langoor-lightGray pt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium uppercase mb-2">Mail us at</h3>
              <a href="mailto:info@clickalchemyy.com" className="text-langoor-lightGray hover:text-langoor-yellow transition-colors">
                info@clickalchemyy.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium uppercase mb-2">HR Enquiries</h3>
              <a href="tel:+918041514635" className="text-langoor-lightGray hover:text-langoor-yellow transition-colors">
                +91 8041 514 635
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium uppercase mb-2">Sales Enquiries</h3>
              <a href="tel:+918042201328" className="text-langoor-lightGray hover:text-langoor-yellow transition-colors">
                +91 8042 201 328
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium uppercase mb-2">Bangalore</h3>
              <address className="not-italic">
                <strong>#323/183/4/4</strong><br/>
                <strong>Doresanipalya, Arekere</strong><br/>
                <strong>Bannerghatta Main Road,</strong><br/>
                <strong>Bengaluru 560076</strong>
              </address>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-langoor-gray/50 p-2 focus:outline-none focus:border-langoor-yellow"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-langoor-gray/50 p-2 focus:outline-none focus:border-langoor-yellow"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-transparent border-b border-langoor-gray/50 p-2 focus:outline-none focus:border-langoor-yellow"
                />
              </div>
              <div className="space-y-2">
                <textarea
                  placeholder="Write the Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-langoor-gray/50 p-2 focus:outline-none focus:border-langoor-yellow"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-langoor-gray/20 py-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link to="/privacy-policy" className="text-sm text-langoor-lightGray hover:text-langoor-yellow transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <span className="text-sm">All Rights Reserved by Click Alchemyy</span>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/langoormarketingtransformation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-langoor-lightGray hover:text-langoor-yellow"
            >
              <img
                src="https://ext.same-assets.com/2675109532/3206013354.svg"
                alt="Facebook"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://twitter.com/langoormt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-langoor-lightGray hover:text-langoor-yellow"
            >
              <img
                src="https://ext.same-assets.com/2675109532/1069395072.svg"
                alt="Twitter"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/langoormarketingtransformation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-langoor-lightGray hover:text-langoor-yellow"
            >
              <img
                src="https://ext.same-assets.com/2675109532/2328769453.svg"
                alt="LinkedIn"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://uk.langoor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-langoor-lightGray hover:text-langoor-yellow"
            >
              <img
                src="https://ext.same-assets.com/2675109532/1780705398.png"
                alt="Globe"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
