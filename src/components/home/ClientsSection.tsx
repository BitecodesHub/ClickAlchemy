import type React from 'react';

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
        {/* Clients Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center w-full max-w-[150px]">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
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
    </section>
  );
};

export default ClientsSection;
