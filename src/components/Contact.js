// ContactSection.js
import React from "react";

export const ContactSection= () =>  {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6"></div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-[fadeInUp_1s_ease-out]">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Ready to elevate your digital presence? Contact our team of experts today...
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-400/20">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all hover:border-yellow-400/50"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all hover:border-yellow-400/50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all hover:border-yellow-400/50"
                  placeholder="Your message"
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white px-8 py-3 rounded-lg text-black font-semibold shadow-lg shadow-white/20 hover:bg-yellow-400 hover:shadow-yellow-400/40 transition-all duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-400/20">
              <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    title: "Phone",
                    subtitle: "Sales & Support",
                    value: "+1 (555) 123-4567",
                    href: "tel:+15551234567"
                  },
                  {
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    title: "Email",
                    subtitle: "General Inquiries",
                    value: "info@clickalchemy.com",
                    href: "mailto:info@clickalchemy.com"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 group-hover:text-yellow-400 transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-400 mb-1">{item.subtitle}</p>
                      <a href={item.href} className="text-white hover:text-yellow-400 transition-colors duration-300">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-400/20">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { href: "https://facebook.com/clickalchemy", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                  { href: "https://twitter.com/clickalchemy", icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 group hover:scale-105"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;