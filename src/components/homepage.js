import React, { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; 

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

const ClickAlchemyLogo = () => {
  const [letterStyles, setLetterStyles] = useState(
    Array(14).fill().map(() => ({
      transform: 'rotate(0deg) scale(1)',
      color: '#FFD700',
      opacity: 1
    }))
  );
  const particlesContainerRef = useRef(null);
  const particlesRef = useRef([]);
  const logoRef = useRef(null);
 

  const createAdvancedParticles = useCallback((x, y) => {
    if (!particlesContainerRef.current) {
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '9999';
      document.body.appendChild(container);
      particlesContainerRef.current = container;
    }

    const particleColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFFFFF'];

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${Math.random() * 8 + 3}px`;
      particle.style.height = particle.style.width;
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = particleColors[Math.floor(Math.random() * particleColors.length)];
      particle.style.opacity = '0.7';
      
      particlesContainerRef.current.appendChild(particle);
      particlesRef.current.push(particle);

      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 10 + 5;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      const rotationSpeed = (Math.random() - 0.5) * 20;

      let opacity = 0.7;
      let scale = 1;

      const animate = () => {
        const currentX = parseFloat(particle.style.left);
        const currentY = parseFloat(particle.style.top);

        particle.style.left = `${currentX + vx}px`;
        particle.style.top = `${currentY + vy}px`;
        opacity -= 0.02;
        scale -= 0.02;
        particle.style.opacity = `${opacity}`;
        particle.style.transform = `scale(${scale}) rotate(${rotationSpeed}deg)`;

        vx *= 0.98;
        vy *= 0.98;
        vy += 0.2;

        if (opacity <= 0 || scale <= 0) {
          particle.remove();
          particlesRef.current = particlesRef.current.filter(p => p !== particle);
        } else {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, []);

  const handleLetterInteraction = useCallback((index, isHover) => {
    setLetterStyles((prevStyles) => {
      const newStyles = [...prevStyles];
      newStyles[index] = isHover
        ? {
            transform: `rotate(${(Math.random() - 0.5) * 5}deg) scale(1.1)`,
            color: '#FFFFFF',
            opacity: 1
          }
        : {
            transform: 'rotate(0deg) scale(1)',
            color: '#FFD700',
            opacity: 1
          };
      return newStyles;
    });
  }, []);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      const scrollPosition = window.scrollY;
      const time = Date.now() * 0.002;
      setLetterStyles((prevStyles) =>
        prevStyles.map((_, index) => {
          const frequency = 0.2 + index * 0.05;
          const amplitudeX = 5 + Math.sin(index) * 2;
          const amplitudeY = 3 + Math.cos(index) * 2;
          const rotationOffset = Math.sin(index) * 5;

          const jiggleX = Math.sin(time * frequency + index) * amplitudeX;
          const jiggleY = Math.cos(time * frequency + index * 0.7) * amplitudeY;
          const rotation = Math.sin(time * frequency * 0.5 + index) * rotationOffset;

          return {
            transform: `translate(${jiggleX + scrollPosition * 0.02}px, ${jiggleY + scrollPosition * 0.03}px) rotate(${rotation}deg)`,
            color: '#FFD700',
            opacity: 0.85 + Math.sin(time * frequency + index) * 0.15
          };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={logoRef}
      className="relative flex flex-col items-center justify-center w-full h-full text-center font-['Optima']"
      style={{
        fontSize: 'clamp(4.5rem, 12vw, 7rem)',
        fontWeight: '900',
        fontStyle: 'italic',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
        padding: '2rem',
        borderRadius: '15px',
        border: '1px solid rgba(255, 215, 0, 0.3)',
        boxShadow: '0 0 10px rgba(241, 229, 159, 0.2)',
      }}
    >
      <div className="relative flex justify-center items-center">
        <div className="absolute inset-0 bg-[#FFD700] opacity-5 blur-md rounded-full" />
        {["C", "l", "i", "c", "k"].map((letter, index) => (
          <span
            key={index}
            className="inline-block mx-1 transition-all duration-300 ease-in-out relative"
            style={{
              transform: letterStyles[index]?.transform || 'none',
              background: 'linear-gradient(120deg, #FFD700 30%, #FFFFFF 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: letterStyles[index]?.opacity || 1,
              textShadow: '0 0 5px rgba(247, 236, 176, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)',
              zIndex: 10,
            }}
            onMouseEnter={() => handleLetterInteraction(index, true)}
            onMouseLeave={() => handleLetterInteraction(index, false)}
            onClick={(e) => createAdvancedParticles(e.clientX, e.clientY)}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="relative flex justify-center items-center mt-2">
        {["A", "l", "c", "h", "e", "m", "y", "y"].map((letter, index) => (
          <span
            key={index}
            className="inline-block mx-1 transition-all duration-300 ease-in-out relative"
            style={{
              transform: letterStyles[index + 6]?.transform || 'none',
              background: 'linear-gradient(120deg, #FFD700 30%, #FFFFFF 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: letterStyles[index + 6]?.opacity || 1,
              textShadow: '0 0 5px rgba(240, 231, 183, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)',
              zIndex: 10,
            }}
            onMouseEnter={() => handleLetterInteraction(index + 6, true)}
            onMouseLeave={() => handleLetterInteraction(index + 6, false)}
            onClick={(e) => createAdvancedParticles(e.clientX, e.clientY)}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Homepage = () => {
  const isMobile = useIsMobile();
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const navigate = useNavigate(); 

  const clientLogos = [
    { logo: "/rivala.png", name: "Tech Innovators", link: "https://techinnovators.com" },
    { logo: "/rivala.png", name: "Global Brands", link: "https://globalbrands.com" },
    { logo: "/rivala.png", name: "Digital Pioneers", link: "https://digitalpioneers.com" },
    { logo: "/rivala.png", name: "Growth Accelerators", link: "https://growthaccelerators.com" },
    { logo: "/rivala.png", name: "Innovative Solutions", link: "https://innovativesolutions.com" }
  ];

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div 
      id="webcrumbs" 
      className="font-['Orbitron'] bg-black text-white"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
      }}
    >
      <section
        id="home"
        className="px-9 min-h-screen flex items-center relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,215,0,0.05), rgba(0,0,0,0.9) 70%)'
        }}
      >
        <div className="font-sans container flex justify-center mx-auto px-6 py-20 z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-10 py-2">
              <h1 className="text-3xl sm:text-6xl md:text-5xl font-extrabold leading-tight" style={{
                background: 'linear-gradient(to right, #FFFFFF, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <span className="block">Shape Your</span>
                <span className="block">Digital Adventure</span>
              </h1>
              <p className="text-white text-xl sm:text-2xl leading-relaxed">
                Ignite your growth with playful yet powerful digital strategies. 
                We blend analytics, creativity, and tech to spark amazing results!
              </p>
              <div className="flex flex-col flex justify-center sm:flex-row gap-6">
                <button
                   onClick={() => navigate('/services')}
                  className="bg-[#FFD700] flex justify-center text-black px-10 py-4 rounded-full font-semibold text-lg 
                             hover:bg-[#FFC700] hover:scale-110 transition-all duration-300 
                             shadow-lg shadow-yellow-500/40"
                >
                  Dive Into Solutions
                </button>
                <button
                   onClick={() => navigate('/contact')}
                  className="px-10 py-4 rounded-full flex justify-center border-2 border-[#FFD700] text-[#FFD700] 
                             font-semibold hover:bg-[#FFD700]/20 hover:text-white 
                             hover:scale-110 transition-all duration-300"
                >
                  Contact Now
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <ClickAlchemyLogo />
            </div>
          </div>
        </div>
      </section>

      <section
      className="py-24 bg-black px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(30,30,30,1) 100%)',
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#FFD700] tracking-tight animate-fade-in-down">
            Our Journey of Digital Transformation
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up">
            Since our inception, we’ve been at the forefront of digital innovation, crafting strategies that redefine boundaries. 
            Our seasoned team delivers cutting-edge solutions across industries, empowering businesses to thrive in the ever-evolving digital landscape with bold creativity and unwavering confidence.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          <div className="group bg-black p-8 rounded-xl border border-white-800 hover:border-[#FFD700]/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-4xl font-bold text-[#FFD700] mb-4 tracking-wide group-hover:scale-105 transition-transform duration-300">
              1+
            </h3>
            <p className="text-white/80 text-lg font-medium">Years of Digital Excellence</p>
          </div>
          <div className="group bg-black p-8 rounded-xl border border-white-800 hover:border-[#FFD700]/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-4xl font-bold text-[#FFD700] mb-4 tracking-wide group-hover:scale-105 transition-transform duration-300">
              5+
            </h3>
            <p className="text-white/80 text-lg font-medium">Successful Client Transformations</p>
          </div>
          <div className="group bg-black p-8 rounded-xl border border-white-800 hover:border-[#FFD700]/30 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-4xl font-bold text-[#FFD700] mb-4 tracking-wide group-hover:scale-105 transition-transform duration-300">
              100%
            </h3>
            <p className="text-white/80 text-lg font-medium">Client Satisfaction Rate</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Trusted By Industry Leaders
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-rotate-clients">
              {[...clientLogos, ...clientLogos].map((client, index) => ( // Duplicate for seamless loop
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

      <section 
        className="py-24 bg-black px-6"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.95) 100%)'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#FFD700]">
            Digital Mastery Redefined
          </h2>
          <div className="space-y-6 text-xl leading-relaxed text-white/90">
            <p>
              We're digital alchemists transforming complex marketing challenges into breakthrough strategies. 
              Our approach goes beyond traditional boundaries, blending cutting-edge technology, data intelligence, 
              and creative storytelling to unlock unprecedented digital potential.
            </p>
            <p>
              In a world of digital noise, we craft precision-engineered experiences that don't just communicate, 
              but deeply connect. We leverage advanced analytics, AI-driven insights, and innovative design thinking 
              to create marketing solutions that are adaptive, predictive, and measurably impactful.
            </p>
            <div className="flex justify-center space-x-6 pt-8">
              <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 p-6 rounded-xl hover:bg-[#FFD700]/20 transition-all">
                <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">
                  Data-Driven Strategies
                </h3>
                <p className="text-base">
                  Transforming raw data into actionable marketing intelligence that drives real business growth.
                </p>
              </div>
              <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 p-6 rounded-xl hover:bg-[#FFD700]/20 transition-all">
                <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">
                  Creative Innovation
                </h3>
                <p className="text-base">
                  Designing immersive digital experiences that captivate, engage, and convert across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Homepage;