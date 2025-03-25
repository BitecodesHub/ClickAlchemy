import React, { useState } from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-950 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 to-pink-600
            animate-gradient-x">
            Connect With Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg 
            animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Ready to transform your digital strategy? Reach out and let's create something extraordinary together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl 
            border border-gray-700/50 
            hover:border-purple-500/50 
            transition-all duration-500 
            hover:shadow-2xl hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 text-purple-300">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 
                      bg-gray-900/60 
                      border border-gray-700 
                      rounded-xl 
                      focus:ring-2 focus:ring-purple-500 
                      focus:border-transparent 
                      transition-all 
                      hover:border-purple-500/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 
                      bg-gray-900/60 
                      border border-gray-700 
                      rounded-xl 
                      focus:ring-2 focus:ring-purple-500 
                      focus:border-transparent 
                      transition-all 
                      hover:border-purple-500/50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message*
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 
                    bg-gray-900/60 
                    border border-gray-700 
                    rounded-xl 
                    focus:ring-2 focus:ring-purple-500 
                    focus:border-transparent 
                    transition-all 
                    hover:border-purple-500/50"
                  placeholder="Tell us about your project"
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full 
                  bg-gradient-to-r from-purple-600 to-pink-500 
                  text-white 
                  px-8 py-3 
                  rounded-xl 
                  font-bold 
                  hover:scale-105 
                  transition-all 
                  duration-300 
                  hover:shadow-xl 
                  hover:shadow-purple-500/40"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl 
              border border-gray-700/50 
              hover:border-purple-500/50 
              transition-all duration-500 
              hover:shadow-2xl hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">
                Contact Details
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    subtitle: "Sales & Support",
                    value: "+1 (555) 123-4567",
                    href: "tel:+15551234567"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    subtitle: "General Inquiries",
                    value: "hello@digitalalchemy.com",
                    href: "mailto:hello@digitalalchemy.com"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-center group">
                    <div className="w-14 h-14 
                      bg-purple-500/20 
                      rounded-xl 
                      flex items-center 
                      justify-center 
                      group-hover:bg-purple-500/40 
                      transition-all duration-300">
                      <item.icon 
                        className="text-purple-400 
                        group-hover:text-purple-200 
                        transition-colors"
                        size={28} 
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 
                        group-hover:text-purple-300 
                        transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 mb-1">{item.subtitle}</p>
                      <a 
                        href={item.href} 
                        className="text-white 
                        hover:text-purple-300 
                        transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl 
              border border-gray-700/50 
              hover:border-purple-500/50 
              transition-all duration-500 
              hover:shadow-2xl hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">
                Follow Our Journey
              </h3>
              <div className="flex gap-4 justify-center">
                {[
                  { Icon: Facebook, href: "https://facebook.com/digitalalchemy" },
                  { Icon: Twitter, href: "https://twitter.com/digitalalchemy" },
                  { Icon: Linkedin, href: "https://linkedin.com/company/digitalalchemy" },
                  { Icon: Instagram, href: "https://instagram.com/digitalalchemy" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 
                      bg-gray-900/50 
                      rounded-full 
                      flex items-center 
                      justify-center 
                      hover:bg-purple-500/30 
                      transition-all 
                      duration-300 
                      group 
                      hover:scale-110"
                  >
                    <social.Icon 
                      className="text-white 
                      group-hover:text-purple-300 
                      transition-colors" 
                      size={24} 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;