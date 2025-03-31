import type React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'enterprise-experience',
    title: 'Enterprise Experience',
    subtitle: 'DATA & INSIGHTS - CUSTOMER INSIGHTS - DIGITAL TRANSFORMATION',
    description: [
      'Over 10 years of partnering with some of the biggest B2B brands has brought us the credentials of being one of APAC\'s leading B2B Digital Agencies.',
      'We have helped accelerate pipelines, automate workflows, and amplify brand experience for large enterprises in the target markets of USA, EMEA, APAC and ANZ.',
      'We have helped brands like Lenovo (ISG), Microsoft, IBM, TCS, and Infosys optimise user journey and push the envelope with demand generation and sales enablement. All of this has been done through bespoke digital transformation efforts that include Data Governance & Analytics, Large Platform Website Development & Management, Marketing Automation, Account Based Marketing, Research & Insight, Gamification, and Metaverse Manifestation.'
    ],
    capabilities: [
      'CREATIVE STRATEGY',
      'DEMAND GENERATION',
      'BRAND STRATEGY SOCIAL',
      'SOCIAL MEDIA MARKETING',
      'MARKETING AUTOMATION'
    ]
  },
  {
    id: 'consumer-experience',
    title: 'Consumer Experience',
    subtitle: 'DATA & INSIGHTS - CUSTOMER INSIGHTS - DIGITAL TRANSFORMATION',
    description: [
      'We have crafted data-backed creative solutions for clients like Unilever, Zeiss, 7-Eleven, Lowe\'s and Epson. We have significantly improved consumer experiences and influenced buying behaviour. And we have done this by empowering brands to go beyond social, search, stories with services that include Digital Branding, UI/UX, SEO, Creative Automation, CRM and AEM Implementation, and Metaverse Manifestation.',
      'By obsessing over consumer journeys and where the audience is spending time and attention, we have been able to craft marketing efforts that have increased brand salience and business performance.',
      'We believe that the true test of a top-notch user experience is ensuring customers keep coming back to carefully architected brand destinations. With a high focus on data-driven personalisation and conversion rate optimisation, we have helped B2C brands get a 360-degree view of customers, enable real-time marketing across all channels that they frequent, uncover what\'s working and what\'s not, and build consumer experiences that are tailored for an omnichannel reality.'
    ],
    capabilities: [
      'DIGITAL BRANDING',
      'UX/UI',
      'WEB/APP',
      'SOCIAL STRATEGY',
      'SEARCH ENGINE OPTIMISATION',
      'CONTENT STRATEGY',
      'CREATIVE STRATEGY',
      'MARKETING AUTOMATION'
    ]
  },
  {
    id: 'next-web-experience',
    title: 'Next Web Experience',
    subtitle: 'DATA & INSIGHTS - CUSTOMER INSIGHTS - DIGITAL TRANSFORMATION',
    description: [
      'Embracing new technology and delivering next-gen solutions has been in our DNA from our early days. This challenger mindset has allowed us to challenge brands to innovate at the intersection of marketing and technology.',
      'With in-house AR/VR Capabilities, Metaverse Development, Game Development, 3D Modelling & Animation, we can build a decentralised business ecosystem for your business to function at lightning speed.',
      'By providing strategic support based on deeper brand understanding, and leveraging across-the-table technology support for Gaming 3D engines, Web3 Environments, Blockchains, Cryptocurrencies and Avatar Generation — we help the brands of today architect and navigate the immersive web experiences of tomorrow.'
    ],
    capabilities: [
      'WEB 3.0 CONSULTING',
      'METAVERSE DESIGN & IMPLEMENTATION',
      'AR/VR/MR',
      '3D COMMERCE',
      'VIRTUAL ECONOMY',
      'IMMERSIVE CONTENT/DIGITAL TWINS',
      'XR & GAME APPS'
    ]
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="py-36 bg-langoor-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We Love Blank Spaces.</h1>
          <p className="max-w-3xl mx-auto text-lg">
            It's the art of the in-between: Finding the journeys and insights that bridge ideas
            and discovery. The platforms and technologies to define content and community.
            The data and behaviours to trigger interventions and experiences. What happens
            before the idea is as exciting as what happens after it. That's why we challenge
            not from one perspective, but many.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service) => (
            <motion.section
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-langoor-gray/20 pt-16"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-sm text-langoor-blue-light mb-8">{service.subtitle}</p>
              </div>

              <div className="space-y-4">
                {service.description.map((paragraph, i) => (
                  <p key={`${service.id}-desc-${i}`}>{paragraph}</p>
                ))}

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Capabilities:</h3>
                  <ul className="space-y-2">
                    {service.capabilities.map((capability) => (
                      <li key={`${service.id}-cap-${capability}`} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button className="btn btn-primary">Experience More</button>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
