import React from "react";
import { 
  Award, 
  Users, 
  Globe, 
  Target, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

export const AboutSection = () => {
  const companyStats = [
    { 
      icon: Users, 
      value: "5+", 
      label: "Satisfied Clients", 
      color: "text-yellow-400",
      bg: "bg-yellow-400/10"
    },
    { 
      icon: Globe, 
      value: "5+", 
      label: "Global Partnerships", 
      color: "text-yellow-400",
      bg: "bg-yellow-400/10"
    },
    { 
      icon: Award, 
      value: "10+", 
      label: "Industry Awards", 
      color: "text-yellow-400",
      bg: "bg-yellow-400/10"
    },
    { 
      icon: Target, 
      value: "1+", 
      label: "Years of Innovation", 
      color: "text-yellow-400",
      bg: "bg-yellow-400/10"
    }
  ];

  const coreValues = [
    {
      title: "Data-Driven Strategies",
      desc: "Leveraging advanced analytics to craft precise, result-oriented marketing solutions.",
      icon: CheckCircle
    },
    {
      title: "Creative Innovation",
      desc: "Pushing boundaries with cutting-edge creative approaches that captivate and convert.",
      icon: CheckCircle
    },
    {
      title: "Client-Centric Focus",
      desc: "Tailoring our services to meet your unique business goals and challenges.",
      icon: CheckCircle
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-12 sm:py-16 md:py-24 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative group lg:order-last">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-gray-800 max-w-xl mx-auto lg:mx-0">
              <img
                src="/logo.png"
                alt="ClickAlchemy Digital Marketing"
                className="w-full h-auto transform transition-all duration-500 
                group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/30 transition-colors duration-300" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Redefining Digital Excellence
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                At ClickAlchemy, we transform digital challenges into growth opportunities through 
                technological mastery, creative innovation, and strategic precision.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto lg:mx-0">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 md:p-6 bg-gray-900 rounded-xl
                  hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
                >
                  <div className={`p-2 md:p-3 rounded-lg ${companyStats[0].bg} transition-colors`}>
                    <value.icon 
                      className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {companyStats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl ${stat.bg} transition-colors
                  hover:bg-yellow-400/20 border border-transparent hover:border-yellow-400/30`}
                >
                  <stat.icon 
                    className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} 
                    strokeWidth={1.5} 
                  />
                  <p className="text-lg font-bold text-white text-center">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button 
                className="
                  w-full max-w-xs
                  bg-white text-black 
                  px-6 py-3 md:px-8 md:py-4 rounded-full 
                  font-semibold
                  hover:bg-yellow-400 
                  transition-all duration-300 
                  hover:scale-[1.02] 
                  hover:shadow-lg
                  flex items-center justify-center gap-2
                  group
                "
              >
                Explore Our Journey
                <ArrowRight 
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;