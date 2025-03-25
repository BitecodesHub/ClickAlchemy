// AboutSection.js
import React, { useRef } from "react";

export const AboutSection = () => {
  return (
    <section  id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative hover:float">
            <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-white/10 to-gray-300/10 blur-3xl absolute -z-10 animate-[pulse_3s_ease-in-out_infinite]"></div>
            <img
              src="/logo.png"
              alt="About ClickAlchemy"
              className="rounded-2xl shadow-2xl shadow-white/10 w-full h-auto transform transition-all duration-700 hover:brightness-110 hover:rotate-2"
            />
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold mb-4 animate-[fadeInUp_1s_ease-out]">
              About ClickAlchemy
            </h2>
            <p className="text-gray-300 animate-[fadeInUp_1s_ease-out_0.3s_both]">
              At ClickAlchemy, we transform ordinary digital marketing strategies into
              extraordinary results. Our team of specialists combines creativity with data-driven
              insights to craft unique solutions for your business.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { value: "200+", label: "Satisfied Clients" },
                { value: "50+", label: "Team Members" },
                { value: "15+", label: "Industry Awards" },
                { value: "8+", label: "Years of Experience" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col group">
                  <span className="text-4xl font-bold text-white group-hover:text-yellow-400 transition-all duration-300">
                    {stat.value}
                  </span>
                  <span className="text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">{stat.label}</span>
                </div>
              ))}
            </div>

            <button 
              className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg shadow-white/20 hover:bg-yellow-400 hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105 hover:float"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;