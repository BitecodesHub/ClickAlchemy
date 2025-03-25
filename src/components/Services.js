import React from "react";
import { 
  ScrollReveal, 
  Clock, 
  ChartBar, 
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
      link: "/services/seo",
      color: "bg-blue-500"
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
      link: "/services/email-marketing",
      color: "bg-purple-500"
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
      link: "/services/social-media",
      color: "bg-pink-500"
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
      link: "/services/performance-marketing",
      color: "bg-green-500"
    }
  ];

  return (
    <section 
      id="services" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-neutral-900 to-black py-16 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white animate-fadeInUp">
            Innovative Digital Solutions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl animate-fadeInUp delay-300">
            Empowering businesses with cutting-edge digital marketing strategies that drive growth, engagement, and measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                ${service.color} bg-opacity-10 border border-opacity-20 rounded-2xl p-6 
                transform transition-all duration-500 hover:-translate-y-4 
                hover:shadow-2xl hover:scale-105 group relative overflow-hidden
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`
                  w-16 h-16 ${service.color} bg-opacity-20 rounded-xl flex items-center 
                  justify-center mb-6 transition-all group-hover:rotate-12
                `}>
                  <service.icon 
                    className="w-8 h-8 text-white" 
                    strokeWidth={1.5} 
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white transition-colors group-hover:text-white/90">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm">
                  {service.desc}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-center text-gray-200 text-sm"
                    >
                      <ShieldCheck 
                        className="w-5 h-5 mr-2 text-white/70" 
                        strokeWidth={1.5} 
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={service.link} 
                  className={`
                    w-full text-center py-3 rounded-lg text-white font-semibold
                    ${service.color} hover:${service.color} hover:brightness-110
                    transition-all transform hover:scale-105 hover:shadow-xl
                  `}
                >
                  Explore Service
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="mt-20 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Our Impact by the Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ChartBar, value: "500%", label: "ROI Increase" },
              { icon: Clock, value: "24/7", label: "Support" },
              { icon: Users, value: "100K+", label: "Clients Served" },
              { icon: Rocket, value: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all"
              >
                <stat.icon 
                  className="w-12 h-12 mx-auto text-blue-400 mb-4" 
                  strokeWidth={1.5} 
                />
                <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;