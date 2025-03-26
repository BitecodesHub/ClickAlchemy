import React, { useRef, useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export const Homepage = () => {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const isMobile = useIsMobile();
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  const clientLogos = [
    { logo: "/rivala.png", name: "Tech Innovators", link: "https://techinnovators.com" },
    { logo: "/rivala.png", name: "Global Brands", link: "https://globalbrands.com" },
    { logo: "/rivala.png", name: "Digital Pioneers", link: "https://digitalpioneers.com" },
    { logo: "/rivala.png", name: "Growth Accelerators", link: "https://growthaccelerators.com" },
    { logo: "/rivala.png", name: "Innovative Solutions", link: "https://innovativesolutions.com" }
  ];

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentClientIndex((prev) => (prev + 1) % clientLogos.length);
      }, 2500); // Faster transitions for more energy
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id="webcrumbs" className="font-sans bg-black text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.1),transparent_70%)] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="container mx-auto px-6 py-20 z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight animate-[bounceInDown_1.2s_ease-out]">
                <span className="block">Shape Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                  Digital Adventure
                </span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed animate-[fadeInUp_1s_ease-out_0.5s_both]">
                Ignite your growth with playful yet powerful digital strategies. 
                We blend analytics, creativity, and tech to spark amazing results!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-[zoomIn_1s_ease-out_0.7s_both]">
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="bg-black text-blue-300 px-8 py-3 rounded-full font-semibold border-2 border-blue-300 hover:bg-blue-300 hover:text-black hover:scale-110 transition-all duration-400 ease-in-out shadow-lg hover:shadow-blue-300/40"
                >
                  Dive Into Solutions
                </button>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="px-8 py-3 rounded-full border-2 border-blue-200 text-blue-200 font-semibold hover:bg-blue-200/20 hover:text-blue-100 hover:scale-110 transition-all duration-400 ease-in-out"
                >
                  Meet the Fun
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full blur-3xl animate-[spin_10s_linear_infinite]"></div>
              <img
                src="/logo.png"
                alt="Digital Fun Zone"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-black/50 hover:scale-110 transition-all duration-600 animate-[tada_3s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section - Moved Up for Flow */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-[flipInX_1s_ease-out]">
            Our Playmates
          </h2>
          {isMobile ? (
            <div className="flex overflow-x-auto space-x-8 pb-4 snap-x snap-mandatory">
              {clientLogos.map((client) => (
                <div key={client.name} className="flex-shrink-0 w-48 snap-center">
                  <a href={client.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 hover:rotate-6 hover:scale-115 transition-all duration-500 ease-in-out"
                    />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-12 items-center">
              {clientLogos.map((client, index) => (
                <a
                  key={client.name}
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-[fadeIn_1.2s_ease-out] animate-delay-[0.${index + 1}s]"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:rotate-12 hover:scale-125 transition-all duration-600 ease-in-out"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-[rollIn_1s_ease-out]">
            Our Fun Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "SEO Magic",
                desc: "Boost your visibility with a sprinkle of SEO wizardry.",
                icon: "✨"
              },
              {
                title: "Social Sparks",
                desc: "Light up your brand with dazzling social strategies.",
                icon: "🎉"
              },
              {
                title: "Story Spinners",
                desc: "Weave tales that captivate and convert!",
                icon: "📖"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-blue-200/20 hover:bg-blue-200/10 hover:border-blue-300 hover:scale-105 hover:rotate-2 transition-all duration-500 ease-in-out animate-[bounceIn_0.8s_ease-out] animate-delay-[0.${index + 2}s]"
              >
                <div className="text-4xl mb-4 text-blue-300 animate-[wobble_2s_ease-in-out_infinite]">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center bg-gray-900/50 py-16 rounded-2xl border border-blue-200/20 shadow-lg shadow-black/50">
            {[
              { value: "200+", label: "Happy Players" },
              { value: "50+", label: "Creative Minds" },
              { value: "15+", label: "Shiny Trophies" },
              { value: "$8M+", label: "Treasure Earned" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col group animate-[jackInTheBox_1s_ease-out] animate-delay-[0.${index + 1}s]">
                <span className="text-4xl md:text-5xl font-extrabold text-blue-300 group-hover:text-blue-200 group-hover:scale-125 group-hover:rotate-6 transition-all duration-400 ease-in-out">
                  {stat.value}
                </span>
                <span className="text-gray-300 text-base md:text-lg mt-3 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-[swing_1.5s_ease-out]">
            Jump Into the Fun!
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.5s_both]">
            Team up with us to blast your business to new heights. Grab your free consultation today!
          </p>
          <button className="bg-blue-300 text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-200 hover:scale-115 hover:rotate-3 transition-all duration-500 ease-in-out shadow-lg shadow-blue-300/40">
            Let’s Play!
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;