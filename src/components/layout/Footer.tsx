import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Set current timestamp in hidden input before sending
    const timeInput = form.current.querySelector('input[name="time"]') as HTMLInputElement;
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    setIsLoading(true);
    setIsSuccess(false);

    emailjs
      .sendForm(
        'service_h7luq2e',
        'template_njzcscb',
        form.current,
        'p7zJUUn8gk4JGYrKS'
      )
      .then(
        () => {
          setIsLoading(false);
          setIsSuccess(true);
          form.current?.reset();
          // Clear success message after 3 seconds
          setTimeout(() => setIsSuccess(false), 3000);
        },
        (error) => {
          console.error('FAILED...', error);
          setIsLoading(false);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <footer className="bg-langoor-black text-langoor-lightGray">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium uppercase mb-2">Mail us at</h3>
              <a
                href="mailto:info@clickalchemyy.com"
                className="text-langoor-lightGray hover:text-langoor-yellow transition-colors"
              >
                info@clickalchemyy.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-2">HR Enquiries</h3>
              <a
                href="tel:+918041514635"
                className="text-langoor-lightGray hover:text-langoor-yellow transition-colors"
              >
                +91 8041 514 635
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-2">Sales Enquiries</h3>
              <a
                href="tel:+918042201328"
                className="text-langoor-lightGray hover:text-langoor-yellow transition-colors"
              >
                +91 8042 201 328
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-2">Bangalore</h3>
              <address className="not-italic leading-relaxed">
                <strong>#323/183/4/4</strong>
                <br />
                <strong>Doresanipalya, Arekere</strong>
                <br />
                <strong>Bannerghatta Main Road,</strong>
                <br />
                <strong>Bengaluru 560076</strong>
              </address>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full bg-langoor-black text-langoor-lightGray border-b border-langoor-gray/50 p-2 focus:outline-none focus:bg-langoor-black focus:border-langoor-yellow"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  className="w-full bg-langoor-black text-langoor-lightGray border-b border-langoor-gray/50 p-2 focus:outline-none focus:bg-langoor-black focus:border-langoor-yellow"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full bg-langoor-black text-langoor-lightGray border-b border-langoor-gray/50 p-2 focus:outline-none focus:bg-langoor-black focus:border-langoor-yellow"
                />
              </div>
              <div className="space-y-2">
                <textarea
                  name="message"
                  placeholder="Write the Message"
                  rows={4}
                  className="w-full bg-langoor-black text-langoor-lightGray border-b border-langoor-gray/50 p-2 focus:outline-none focus:bg-langoor-black focus:border-langoor-yellow"
                  required
                />
              </div>

              {/* Hidden input for timestamp */}
              <input type="hidden" name="time" />

              {/* Submit Button and Success Message */}
              <div className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  Send
                </button>
                {isSuccess && (
                  <div className="text-center p-2 bg-langoor-black/80 border border-langoor-yellow/50 rounded-md text-langoor-yellow text-sm animate-fade-in shadow-md">
                    Message sent successfully!
                  </div>
                )}
              </div>
            </form>

            {/* Loader Overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-langoor-black/50 flex items-center justify-center z-10">
                <div className="relative">
                  <div className="w-12 h-12 border-4 border-langoor-yellow border-t-transparent rounded-full animate-spin"></div>
                  <div className="w-12 h-12 border-4 border-langoor-yellow/30 border-t-transparent rounded-full animate-spin animation-delay-150 absolute inset-0"></div>
                  <div className="w-6 h-6 bg-langoor-yellow rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-langoor-gray/20 py-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link
              to="/privacy-policy"
              className="text-sm text-langoor-lightGray hover:text-langoor-yellow transition-colors"
            >
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
            >
              <img
                src="https://ext.same-assets.com/2675109532/3206013354.svg"
                alt="Facebook"
                className="h-5 w-5 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://twitter.com/langoormt" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/2675109532/1069395072.svg"
                alt="Twitter"
                className="h-5 w-5 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/langoormarketingtransformation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://ext.same-assets.com/2675109532/2328769453.svg"
                alt="LinkedIn"
                className="h-5 w-5 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://uk.langoor.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/2675109532/1780705398.png"
                alt="Globe"
                className="h-5 w-5 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;