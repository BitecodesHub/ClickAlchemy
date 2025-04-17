import React, { memo } from 'react';

const clients = [
  {
    name: 'Rivala',
    logo: '/rivala.png',
  },
  {
    name: 'Rivala',
    logo: '/rivala.png',
  },
  {
    name: 'Rivala',
    logo: '/rivala.png',
  },
  {
    name: 'Rivala',
    logo: '/rivala.png',
  },
  {
    name: 'Rivala',
    logo: '/rivala.png',
  },
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-langoor-black">
      <div className="container-custom">
        {/* Clients Logos Carousel */}
        <div className="overflow-hidden">
          <div className="flex animate-slide" style={{ width: `${clients.length * 200}px` }}>
            {clients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-[400px] mx-4 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-auto max-w-[300px] opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate clients for seamless looping */}
            {clients.map((client, index) => (
              <div
                key={`${client.name}-duplicate-${index}`}
                className="flex-shrink-0 w-[200px] mx-4 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-auto max-w-[200px] opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Years of Experience */}
        <div className="mt-20 text-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4">
            10+ years of delivering<br />
            integrated, immersive and impactful<br />
            digital marketing transformation stories.
          </h3>
        </div>
      </div>

      {/* Inline CSS for sliding animation */}
      <style>{`
        .animate-slide {
          display: flex;
          animation: slide 20s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${clients.length * 200}px);
          }
        }
      `}</style>
    </section>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(ClientsSection);