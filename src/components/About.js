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
      value: "200+", 
      label: "Satisfied Clients", 
      color: "text-blue-400" 
    },
    { 
      icon: Globe, 
      value: "50+", 
      label: "Global Partnerships", 
      color: "text-green-400" 
    },
    { 
      icon: Award, 
      value: "15+", 
      label: "Industry Awards", 
      color: "text-purple-400" 
    },
    { 
      icon: Target, 
      value: "8+", 
      label: "Years of Innovation", 
      color: "text-pink-400" 
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
      className="py-20 bg-gradient-to-br from-gray-900 via-neutral-900 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-1000 blur-xl"></div>
            
            <img
              src="/logo.png" 
              alt="ClickAlchemy Digital Marketing"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-auto 
              transform transition-all duration-700 
              group-hover:scale-105 group-hover:rotate-1 
              group-hover:shadow-2xl group-hover:brightness-110"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white animate-fadeInUp">
                About ClickAlchemy
              </h2>
              <p className="text-gray-300 text-lg animate-fadeInUp delay-300">
                We are a dynamic digital marketing agency that transforms complex challenges into 
                breakthrough opportunities. Our holistic approach combines technological expertise, 
                creative innovation, and strategic insights to accelerate your business growth.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition-all"
                >
                  <value.icon 
                    className="w-10 h-10 text-blue-400" 
                    strokeWidth={1.5} 
                  />
                  <div>
                    <h4 className="font-semibold text-white">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {companyStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 p-4 rounded-xl text-center hover:bg-gray-800/70 transition-all"
                >
                  <stat.icon 
                    className={`w-10 h-10 mx-auto mb-2 ${stat.color}`} 
                    strokeWidth={1.5} 
                  />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              className="
                flex items-center justify-center gap-2
                w-full md:w-auto
                bg-white text-black 
                px-8 py-3 rounded-full 
                font-semibold 
                hover:bg-blue-400 
                transition-all duration-300 
                hover:scale-105 
                hover:shadow-xl 
                hover:text-white
                group
              "
            >
              Learn More About Us
              <ArrowRight 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;