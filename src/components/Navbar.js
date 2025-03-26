import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState("initial");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const loadingLogoRef = useRef(null);
  const navbarLogoRef = useRef(null);
  const loadingScreenRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomepage = location.pathname === "/";

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  }, [location]);

  // Loading screen and logo transition logic
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

    const deltaX =
      navbarRect.left +
      navbarRect.width / 2 -
      (loadingRect.left + loadingRect.width / 2);
    const deltaY =
      navbarRect.top +
      navbarRect.height / 2 -
      (loadingRect.top + loadingRect.height / 2);
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
      loadingScreen.style.transition =
        "opacity 2s cubic-bezier(0.77, 0, 0.175, 1)";
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home", onClick: handleHomePageLoad },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

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
              className="w-40 h-40 rounded-full object-cover shadow-2xl transition-all duration-1000 transform hover:scale-110 "
            />
            <div className="absolute inset-0 rounded-full animate-ping bg-blue-200/20 opacity-75"></div>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50 bg-black/95 transition-all duration-500">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <img
              ref={navbarLogoRef}
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md transition-all duration-500 group-hover:scale-110  group-hover:shadow-blue-300/40"
            />
            <span className="text-xl font-bold text-white transition-all duration-300 group-hover:text-[#efa71b] group-hover:scale-105">
              ClickAlchemy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={link.onClick}
                    className="relative group text-white hover:text-[#efa71b] transition-all duration-400 ease-in-out"
                  >
                    <span className="relative inline-block transition-transform duration-400 group-hover:scale-110 ">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#efa71b] transition-all duration-400 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative w-10 h-10 group focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-white transform  group-hover:bg-[#efa71b] group-hover:scale-110 transition-all duration-400"></div>
                  <div className="w-6 h-0.5 bg-white absolute transform  group-hover:bg-[#efa71b] group-hover:scale-110 transition-all duration-400"></div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col justify-center space-y-1.5">
                  <div className="w-6 h-0.5 bg-white group-hover:bg-[#efa71b] group-hover:scale-125 transition-all duration-400"></div>
                  <div className="w-6 h-0.5 bg-white group-hover:bg-[#efa71b] group-hover:scale-125 transition-all duration-400"></div>
                  <div className="w-6 h-0.5 bg-white group-hover:bg-[#efa71b] group-hover:scale-125 transition-all duration-400"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-all duration-500 ease-in-out transform ${
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          {isMobileMenuOpen && (
            <div className="container mx-auto px-6 py-8 h-full flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center mb-16">
                <div
                  className="flex items-center space-x-3 cursor-pointer group"
                  onClick={() => {
                    navigate("/");
                    toggleMobileMenu();
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-12 h-12 rounded-full object-cover shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-blue-300/40"
                  />
                  <span className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-[#efa71b] group-hover:scale-105">
                    ClickAlchemy
                  </span>
                </div>

                <button
                  onClick={toggleMobileMenu}
                  className="relative w-10 h-10 group focus:outline-none"
                  aria-label="Close mobile menu"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-0.5 bg-white transform group-hover:bg-[#efa71b] group-hover:scale-110 transition-all duration-400"></div>
                    <div className="w-6 h-0.5 bg-white absolute transform  group-hover:bg-[#efa71b] group-hover:scale-110 transition-all duration-400"></div>
                  </div>
                </button>
              </div>

              {/* Mobile Menu Links */}
              <nav className="flex flex-col text-center space-y-8 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => {
                      toggleMobileMenu();
                      link.onClick && link.onClick();
                    }}
                    className="text-2xl text-white hover:text-[#efa71b] transition-all duration-400 ease-in-out group flex items-center justify-between"
                  >
                    <span className="transition-transform duration-400 group-hover:scale-110 ">
                      {link.label}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-400 text-[#efa71b]">
                      →
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;