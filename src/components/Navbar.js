import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const Navbar = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState("initial");
  const loadingLogoRef = useRef(null);
  const navbarLogoRef = useRef(null);
  const loadingScreenRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomepage = location.pathname === "/";

  useEffect(() => {
    if (!isHomepage) {
      setShowLoading(false);
      return;
    }

    const initialDelay = setTimeout(() => {
      if (loadingLogoRef.current && navbarLogoRef.current) {
        setAnimationPhase("preparation");
        setTimeout(() => {
          handleLogoTransition();
        }, 3000);
      }
    }, 500);
    
    return () => clearTimeout(initialDelay);
  }, [isHomepage]);

  const handleLogoTransition = () => {
    const loadingLogo = loadingLogoRef.current;
    const navbarLogo = navbarLogoRef.current;
    const loadingScreen = loadingScreenRef.current;
    
    if (!loadingLogo || !navbarLogo || !loadingScreen) return;

    const navbarRect = navbarLogo.getBoundingClientRect();
    const loadingRect = loadingLogo.getBoundingClientRect();

    const deltaX = navbarRect.left + (navbarRect.width / 2) - (loadingRect.left + (loadingRect.width / 2));
    const deltaY = navbarRect.top + (navbarRect.height / 2) - (loadingRect.top + (loadingRect.height / 2));
    const scale = navbarRect.width / loadingRect.width;

    setAnimationPhase("transition");
    
    loadingLogo.style.transition = `
      transform 2.5s cubic-bezier(0.19, 1, 0.22, 1), 
      opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1),
      filter 2.5s ease-in-out
    `;
    
    loadingLogo.style.transform = `
      translate(${deltaX}px, ${deltaY}px) 
      scale(${scale}) 
      rotate(360deg) 
      perspective(1000px) 
      rotateY(180deg)
    `;
    
    loadingLogo.style.opacity = "0.2";
    loadingLogo.style.filter = "blur(10px)";
    
    setTimeout(() => {
      loadingScreen.style.transition = 'opacity 2s cubic-bezier(0.77, 0, 0.175, 1)';
      loadingScreen.style.opacity = "0";
    }, 1000);

    setTimeout(() => {
      setShowLoading(false);
    }, 2500);
  };

  const handleHomePageLoad = () => {
    setShowLoading(true);
    setTimeout(() => {
      if (loadingLogoRef.current && navbarLogoRef.current) {
        setAnimationPhase("preparation");
        setTimeout(() => {
          handleLogoTransition();
        }, 2000);
      }
    }, 100);
  };

  return (
    <>
      {isHomepage && showLoading && (
        <div 
          ref={loadingScreenRef} 
          className="w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000"
        >
          <div className="relative">
            <img 
              ref={loadingLogoRef} 
              src="/logo.png" 
              alt="Logo" 
              className="w-40 h-40 rounded-full object-cover shadow-2xl transition-all duration-1000 transform hover:scale-105" 
            />
            <div className="absolute inset-0 rounded-full animate-ping bg-white/10 opacity-75"></div>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50 bg-black/95 transition-all duration-500">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <img 
              ref={navbarLogoRef} 
              src="/logo.png" 
              alt="Logo" 
              className="w-10 h-10 rounded-full object-cover shadow-md transition-transform duration-500 hover:rotate-12" 
            />
            <span className="text-xl text-white font-bold transition-colors duration-300 hover:text-yellow-400">
              ClickAlchemy
            </span>
          </div>
          <nav>
            <ul className="flex space-x-8 text-gray-300">
              <li>
                <Link 
                  to="/" 
                  onClick={handleHomePageLoad}
                  className="relative group text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  <span className="relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="relative group text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  <span className="relative">
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="relative group text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  <span className="relative">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="relative group text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};