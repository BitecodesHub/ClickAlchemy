import React, { useState } from 'react';
import { motion } from 'framer-motion';

const jobOpenings = [
  {
    id: 'senior-frontend-developer',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'We are looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern frontend frameworks to join our growing team. The ideal candidate will have a strong portfolio of projects and the ability to create responsive, accessible, and high-performance web applications.',
    responsibilities: [
      'Develop and maintain responsive web applications using React, TypeScript, and other modern frontend technologies',
      'Collaborate with designers, backend developers, and other stakeholders to deliver high-quality products',
      'Optimize application performance and ensure cross-browser compatibility',
      'Write clean, maintainable code and perform code reviews',
      'Mentor junior developers and contribute to the teams'
    ],
    requirements: [
      'Minimum 5 years of experience in frontend development with 3+ years of React experience',
      'Strong knowledge of HTML, CSS, JavaScript, and TypeScript',
      'Experience with state management solutions (Redux, Context API, etc.)',
      'Understanding of responsive design and cross-browser compatibility',
      'Knowledge of modern frontend build tools and workflows',
      'Excellent problem-solving and communication skills'
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'We are seeking a talented UI/UX Designer to create amazing user experiences for our clients. The ideal candidate should have a strong portfolio demonstrating their ability to create intuitive and visually appealing designs that solve real user problems.',
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs for web and mobile applications',
      'Conduct user research and usability testing to inform design decisions',
      'Collaborate with product managers and developers to implement designs',
      'Create and maintain design systems and component libraries',
      'Stay up-to-date with the latest design trends and technologies'
    ],
    requirements: [
      'Minimum 3 years of experience in UI/UX design',
      'Proficiency in design tools such as Figma, Adobe XD, or Sketch',
      'Strong portfolio demonstrating user-centered design solutions',
      'Understanding of design principles, typography, and color theory',
      'Knowledge of frontend development concepts (HTML, CSS)',
      'Excellent communication and presentation skills'
    ]
  },
  {
    id: 'digital-marketing-specialist',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'We are looking for a Digital Marketing Specialist to join our team and help drive our clients\' digital marketing strategies. The ideal candidate should have experience in various digital marketing channels and a data-driven approach to marketing.',
    responsibilities: [
      'Develop and implement digital marketing strategies across multiple channels',
      'Manage and optimize paid advertising campaigns (Google Ads, Meta Ads, etc.)',
      'Create and manage content calendars for social media and other platforms',
      'Analyze campaign performance and provide insights for optimization',
      'Stay up-to-date with the latest digital marketing trends and best practices'
    ],
    requirements: [
      'Minimum 3 years of experience in digital marketing',
      'Experience with paid advertising platforms (Google Ads, Meta Ads, etc.)',
      'Knowledge of SEO principles and best practices',
      'Experience with email marketing and marketing automation tools',
      'Analytical mindset and experience with marketing analytics tools',
      'Excellent written and verbal communication skills'
    ]
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    department: 'Operations',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'We are seeking an experienced Project Manager to lead our digital projects from inception to completion. The ideal candidate will have a track record of successfully delivering complex digital projects on time and within budget.',
    responsibilities: [
      'Plan, execute, and close digital projects for our clients',
      'Manage project scope, timeline, budget, and resources',
      'Facilitate communication between clients, designers, developers, and other stakeholders',
      'Identify and mitigate project risks and issues',
      'Ensure deliverables meet quality standards and client expectations'
    ],
    requirements: [
      'Minimum 5 years of experience in project management, preferably in a digital agency',
      'PMP certification or equivalent is a plus',
      'Experience with project management methodologies (Agile, Scrum, etc.)',
      'Strong leadership and stakeholder management skills',
      'Excellent organizational and time management skills',
      'Experience with project management tools and software'
    ]
  }
];

const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const toggleJobDetails = (jobId: string) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  return (
    <div className="py-36 bg-langoor-black">
      <div className="container-custom">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="max-w-3xl mx-auto text-lg">
            At Click Alchemyy, we're always looking for talented individuals who are passionate about digital marketing and technology.
            Join us and be part of a team that's shaping the future of digital experiences.
          </p>
        </motion.div>

        {/* Why Join Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why Join Click Alchemyy?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-langoor-gray/10 p-8 rounded-lg">
              <div className="text-langoor-yellow text-4xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Innovative Work</h3>
              <p>
                Work on cutting-edge projects for leading brands, pushing the boundaries of what's possible in digital marketing and technology.
              </p>
            </div>

            <div className="bg-langoor-gray/10 p-8 rounded-lg">
              <div className="text-langoor-yellow text-4xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Continuous Growth</h3>
              <p>
                We invest in your professional development with learning opportunities, mentorship, and a culture that encourages experimentation.
              </p>
            </div>

            <div className="bg-langoor-gray/10 p-8 rounded-lg">
              <div className="text-langoor-yellow text-4xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Collaborative Culture</h3>
              <p>
                Join a diverse team of passionate professionals who collaborate across disciplines to create amazing digital experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Open Positions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-langoor-gray/10 rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex flex-col md:flex-row md:items-center justify-between"
                  onClick={() => toggleJobDetails(job.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-langoor-gray/20 px-3 py-1 rounded-full">{job.department}</span>
                      <span className="bg-langoor-gray/20 px-3 py-1 rounded-full">{job.location}</span>
                      <span className="bg-langoor-gray/20 px-3 py-1 rounded-full">{job.type}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-langoor-yellow flex items-center">
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ml-2 transition-transform ${selectedJob === job.id ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </button>

                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-langoor-gray/20 pt-6">
                      <p className="mb-6">{job.description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3">Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.responsibilities.map((item, index) => (
                            <li key={`resp-${index}`}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.requirements.map((item, index) => (
                            <li key={`req-${index}`}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <button className="btn btn-primary">Apply Now</button>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-langoor-gray/10 p-10 rounded-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Don't see the right fit?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We're always interested in meeting talented individuals. Send us your resume and tell us why you'd like to join the Click Alchemyy team.
          </p>
          <button className="btn btn-primary">
            Send Open Application
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;
