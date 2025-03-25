// AboutSection.js
import React, { useRef } from "react";

export const Services = () => {
  return (
    <section 

        id="services" 
        className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-neutral-900 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-[fadeInUp_1s_ease-out]">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_both]">
              We provide a comprehensive range of digital marketing services to help your business
              grow and thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Search Engine Optimization",
                icon: "M7 11l5-5m0 0l5 5m-5-5v12",
                desc: "Boost your website's visibility on search engines and drive organic traffic...",
                items: ["Keyword research & optimization", "Technical SEO audits", "Content optimization"],
                link: "/services/seo"
              },
              {
                title: "Email Marketing",
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                desc: "Connect with your audience through personalized email campaigns...",
                items: ["Campaign strategy & design", "List segmentation & growth", "Performance analytics"],
                link: "/services/email-marketing"
              },
              {
                title: "Social Media Marketing",
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                desc: "Engage with your customers and build your brand presence...",
                items: ["Content creation & planning", "Community management", "Paid social advertising"],
                link: "/services/social-media"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-400/20 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group -hover:bg-yellow-400 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.desc}</p>
                <ul className="text-gray-400 mb-6 space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-white mr-2 mt-0.5 group-hover:text-yellow-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium text-black bg-white hover:bg-yellow-400 hover:shadow-yellow-400/40 w-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-10 animate-[fadeInUp_1s_ease-out]">
              Plans & Pricing
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="p-4 text-left border-b border-gray-700 text-gray-400 font-semibold">Features</th>
                    <th className="p-4 text-center border-b border-gray-700 text-white font-semibold">Starter</th>
                    <th className="p-4 text-center border-b border-gray-700 text-white font-semibold bg-gray-800">Professional</th>
                    <th className="p-4 text-center border-b border-gray-700 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="group hover:bg-gray-800/50 transition-all duration-300">
                    <td className="p-4 border-b border-gray-700 text-gray-400">Monthly Price</td>
                    <td className="p-4 border-b border-gray-700 text-center text-gray-300 group-hover:text-yellow-400">$499</td>
                    <td className="p-4 border-b border-gray-700 text-center text-white font-semibold bg-gray-800 group-hover:text-yellow-400">$999</td>
                    <td className="p-4 border-b border-gray-700 text-center text-gray-300 group-hover:text-yellow-400">Custom</td>
                  </tr>
                  <tr className="group hover:bg-gray-800/50 transition-all duration-300">
                    <td className="p-4 border-b border-gray-700 text-gray-400">SEO Services</td>
                    <td className="p-4 border-b border-gray-700 text-center">
                      <svg className="h-5 w-5 text-white mx-auto group-hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="p-4 border-b border-gray-700 text-center bg-gray-800">
                      <svg className="h-5 w-5 text-white mx-auto group-hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="p-4 border-b border-gray-700 text-center">
                      <svg className="h- 5 w-5 text-white mx-auto group-hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md text-base font-medium text-black bg-white hover:bg-yellow-400 hover:shadow-yellow-400/40 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Get a Custom Quote
                <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
  );}

export default Services;