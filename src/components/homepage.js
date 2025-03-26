import React, { useRef, useState, useEffect, useCallback } from "react";

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
    const newStyles = [...letterStyles];
    newStyles[index] = isHover 
      ? {
          transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.2)`,
          color: '#FFFFFF',
          opacity: 1
        }
      : {
          transform: 'rotate(0deg) scale(1)',
          color: '#FFD700',
          opacity: 1
        };
    setLetterStyles(newStyles);
  }, [letterStyles]);

  useEffect(() => {
    // Improved scroll effect with unique jiggle per letter
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const time = Date.now() * 0.002; // Faster time-based animation
      const newStyles = letterStyles.map((_, index) => {
        // Unique animation parameters per letter
        const frequency = 0.2 + index * 0.05; // Different speed for each letter
        const amplitudeX = 5 + Math.sin(index) * 2; // Varying horizontal jiggle
        const amplitudeY = 3 + Math.cos(index) * 2; // Varying vertical jiggle
        const rotationOffset = Math.sin(index) * 5; // Unique rotation base

        const jiggleX = Math.sin(time * frequency + index) * amplitudeX;
        const jiggleY = Math.cos(time * frequency + index * 0.7) * amplitudeY;
        const rotation = Math.sin(time * frequency * 0.5 + index) * rotationOffset;

        return {
          transform: `translate(${jiggleX + scrollPosition * 0.02}px, ${jiggleY + scrollPosition * 0.03}px) 
                      rotate(${rotation}deg)`,
          color: '#FFD700',
          opacity: 0.85 + Math.sin(time * frequency + index) * 0.15 // Subtle opacity pulse
        };
      });
      setLetterStyles(newStyles);
    };

    // Run animation continuously with requestAnimationFrame
    let animationFrame;
    const animate = () => {
      handleScroll();
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame); // Cleanup
  }, [letterStyles]);

  return (
    <div
      ref={logoRef}
      className="relative flex flex-col items-center justify-center w-full h-full text-center font-['Optima']"
      style={{
        fontSize: 'clamp(4.5rem, 12vw, 7rem)',
        fontWeight: '900',
        fontStyle: 'italic', // Changed to italic
        cursor: 'pointer',
        background: 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)',
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: '0 0 30px rgba(241, 229, 159, 0.5)',
      }}
    >
      <div className="relative flex justify-center items-center">
        <div className="absolute inset-0 bg-[#FFD700] opacity-10 blur-xl rounded-full" />
        {["C", "l", "i", "c", "k"].map((letter, index) => (
          <span 
            key={index}
            className="inline-block mx-1 transition-all duration-300 ease-in-out relative"
            style={{
              transform: letterStyles[index]?.transform || 'none',
              color: letterStyles[index]?.color || '#FFD700',
              opacity: letterStyles[index]?.opacity || 1,
              textShadow: '0 0 20px rgba(247, 236, 176, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
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
        {["A", "l", "c", "h", "e", "m", "y","y"].map((letter, index) => (
          <span 
            key={index}
            className="inline-block mx-1 transition-all duration-300 ease-in-out relative"
            style={{
              transform: letterStyles[index + 5]?.transform || 'none',
              color: letterStyles[index + 5]?.color || '#FFD700',
              opacity: letterStyles[index + 5]?.opacity || 1,
              textShadow: '0 0 20px rgba(240, 231, 183, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
              zIndex: 10,
            }}
            onMouseEnter={() => handleLetterInteraction(index + 5, true)}
            onMouseLeave={() => handleLetterInteraction(index + 5, false)}
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
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

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
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,215,0,0.05), rgba(0,0,0,0.9) 70%)'
        }}
      >
        <div className="container mx-auto px-6 py-20 z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight" style={{
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
              <div className="flex flex-col  sm:flex-row gap-6">
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="bg-[#FFD700] text-black px-10 py-4 rounded-full font-semibold text-lg 
                             hover:bg-[#FFC700] hover:scale-110 transition-all duration-300 
                             shadow-lg shadow-yellow-500/40"
                >
                  Dive Into Solutions
                </button>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="px-10 py-4 rounded-full border-2 border-[#FFD700] text-[#FFD700] 
                             font-semibold hover:bg-[#FFD700]/20 hover:text-white 
                             hover:scale-110 transition-all duration-300"
                >
                  Meet the Fun
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <ClickAlchemyLogo />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Our Clients
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
    </div>
  );
};

export default Homepage;