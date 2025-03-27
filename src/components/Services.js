import React from "react";
import { 
  Target, 
  Rocket, 
  Users, 
  ShieldCheck, 
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Strategic SEO Optimization",
      icon: Target,
      desc: "Elevate your online visibility with our comprehensive SEO strategies that drive organic growth and boost search engine rankings.",
      items: [
        "Advanced keyword research & mapping",
        "Technical SEO deep audits",
        "Content optimization & link building",
        "Local and international SEO strategies"
      ],
      link: "/contact",
      color: "bg-slate-700",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-blue-900/20"
    },
    {
      title: "Precision Email Marketing",
      icon: Rocket,
      desc: "Create personalized, high-converting email campaigns that engage your audience and nurture lasting customer relationships.",
      items: [
        "Segmented audience targeting",
        "Automated email sequences",
        "Advanced performance analytics",
        "A/B testing & optimization"
      ],
      link: "/contact",
      color: "bg-slate-800",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-purple-900/20"
    },
    {
      title: "Social Media Mastery",
      icon: Users,
      desc: "Transform your social media presence with data-driven strategies that build brand awareness and drive meaningful engagement.",
      items: [
        "Creative content creation",
        "Community management",
        "Influencer collaboration",
        "Targeted social advertising"
      ],
      link: "/contact",
      color: "bg-slate-900",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-green-900/20"
    },
    {
      title: "Performance Marketing",
      icon: Rocket,
      desc: "Maximize your ROI with intelligent, cross-channel marketing campaigns designed to convert and scale your business.",
      items: [
        "PPC campaign management",
        "Conversion rate optimization",
        "Retargeting strategies",
        "Comprehensive marketing analytics"
      ],
      link: "/contact",
      color: "bg-neutral-900",
      gradientFrom: "from-red-500/20",
      gradientTo: "to-red-900/20"
    }
  ];

  const clientLogos = [
    { logo: "/rivala.png", name: "Tech Innovators", link: "https://techinnovators.com" },
    { logo: "/rivala.png", name: "Global Brands", link: "https://globalbrands.com" },
    { logo: "/rivala.png", name: "Digital Pioneers", link: "https://digitalpioneers.com" },
    { logo: "/rivala.png", name: "Growth Accelerators", link: "https://growthaccelerators.com" },
    { logo: "/rivala.png", name: "Innovative Solutions", link: "https://innovativesolutions.com" }
  ];

  return (
    <>
      <section 
        id="services" 
        className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black py-16 px-4 relative overflow-hidden"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-blob top-20 -left-10"></div>
          <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 top-1/2 -right-10"></div>
          <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-20 left-1/2"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 animate-fadeInUp">
              Innovative Digital Solutions
            </h2>
            <p className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl animate-fadeInUp delay-300">
              Empowering businesses with cutting-edge digital marketing strategies that drive growth, engagement, and measurable results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`
                  ${service.color} bg-opacity-30 border border-neutral-800 rounded-2xl p-6 
                  transform transition-all duration-500 hover:-translate-y-4 
                  hover:shadow-2xl hover:scale-105 group relative overflow-hidden
                  bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`
                    w-16 h-16 ${service.color} bg-opacity-20 rounded-xl flex items-center 
                    justify-center mb-6 transition-all group-hover:rotate-12
                  `}>
                    <service.icon 
                      className="w-8 h-8 text-neutral-300" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-neutral-200 transition-colors group-hover:text-neutral-100">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-400 mb-6 text-sm">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="flex items-center text-neutral-300 text-sm"
                      >
                        <ShieldCheck 
                          className="w-5 h-5 mr-2 text-neutral-500" 
                          strokeWidth={1.5} 
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={service.link} 
                    className={`
                      w-full block text-center py-3 rounded-lg 
                      bg-yellow-400 text-black font-semibold
                      hover:bg-yellow-500 
                      transition-all transform hover:scale-105 hover:shadow-xl
                      focus:outline-none focus:ring-2 focus:ring-yellow-300
                    `}
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black opacity-90"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Trusted By Industry Leaders
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-rotate-clients">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <a
                  key={`${client.name}-${index}`}
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mx-6"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 md:h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 
                               hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for Logo Animation */}
      <style jsx>{`
        @keyframes rotate-clients {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-rotate-clients {
          display: flex;
          animation: rotate-clients 20s linear infinite;
          width: ${clientLogos.length * 2 * 120}px; /* Adjust based on logo size and spacing */
        }
        .animate-rotate-clients:hover {
          animation-play-state: paused; /* Pause on hover */
        }
      `}</style>
    </> 
  );
};

export default Services;