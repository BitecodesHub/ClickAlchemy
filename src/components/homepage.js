import React, { useRef, useState, useEffect } from "react";

export const Homepage = () => {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  const clientLogos = [
    { 
      logo: "/rivala.png", 
      name: "Tech Innovators", 
      link: "https://techinnovators.com" 
    },
    { 
      logo: "/rivala.png", 
      name: "Global Brands", 
      link: "https://globalbrands.com" 
    },
    { 
      logo: "/rivala.png", 
      name: "Digital Pioneers", 
      link: "https://digitalpioneers.com" 
    },
    { 
      logo: "/rivala.png", 
      name: "Growth Accelerators", 
      link: "https://growthaccelerators.com" 
    },
    { 
      logo: "/rivala.png", 
      name: "Innovative Solutions", 
      link: "https://innovativesolutions.com" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex((prevIndex) => 
        (prevIndex + 1) % clientLogos.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  return (
    <div id="webcrumbs">
      <section
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/90 opacity-10"></div>
        <div className="container mx-auto px-6 py-20 z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-[fadeInUp_1s_ease-out]">
                <span className="block text-white">Digital Marketing</span>
                <span className="block text-yellow-400">Redefined</span>
              </h1>
              <p className="text-gray-300 text-lg animate-[fadeInUp_1s_ease-out_0.3s_both]">
                Leverage cutting-edge digital strategies that transform your online presence into a powerful business growth engine. 
                We blend data-driven insights, creative excellence, and technological innovation to deliver measurable results.
              </p>
              <div className="flex flex-col justify-center sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection()}
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg shadow-white/20 hover:bg-yellow-400 hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </button>
                <button className="px-8 py-3 rounded-full border border-white text-white font-semibold transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10 hover:scale-105">
                  Our Approach
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative hover:float">
              <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-white/10 to-gray-300/10 blur-3xl absolute -z-10 animate-[pulse_3s_ease-in-out_infinite]"></div>
              <img
                src="/logo.png"
                alt="Digital Marketing"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-white/10 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Achievements Section */}
      <section className="bg-black/95 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
                <span className="text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Full Width Banner */}
      {/* Clients Section - Full Width Banner */}
<section className="bg-black py-20 w-full">
  <div className="container mx-auto px-6 text-center">
    <div className="max-w-5xl mx-auto mb-16">
      <h2 className="text-5xl font-bold text-white mb-6">
        Digital Services: Immersive Experiences
      </h2>
      <p className="text-gray-400 text-xl max-w-4xl mx-auto">
        Our design thinking is aimed at reimagining, redesigning and solving marketing needs for the digital world. As an award-winning experience partner, we enable marketers to create an impact and deliver performance.
      </p>
    </div>
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-center space-x-16 md:space-x-24 lg:space-x-32">
        {clientLogos.map((client, index) => (
          <div 
            key={client.name} 
            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            style={{
              transform: `translate3d(${index * -666.238}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: 'preserve-3d',
              willChange: 'transform'
            }}
          >
            <img 
              src={client.logo} 
              alt={client.name} 
              className="h-64 md:h-80 w-auto grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="mt-8 text-gray-500 text-base">
      10+ years of delivering integrated, immersive and impactful
    </div>
  </div>
</section>

      {/* Digital Marketing Approach Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Transforming Digital Landscapes
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                At ClickAlchemy, we transform ordinary digital marketing strategies into
                extraordinary results. Our team of specialists combines creativity with data-driven
                insights to craft unique solutions for your business.
              </p>
              <p>
                We don't just follow digital trends; we anticipate and create them. By integrating cutting-edge technologies 
                with human-centric design, we help brands navigate the digital transformation journey, turning potential 
                into performance and audiences into advocates.
              </p>
              <p>
                Our holistic digital marketing strategy encompasses everything from SEO and content marketing to 
                sophisticated social media campaigns and data-driven performance optimization. We turn your digital 
                presence into a powerful, adaptive engine of growth and connection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;