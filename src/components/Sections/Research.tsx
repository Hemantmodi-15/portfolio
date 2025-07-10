import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, TrendingUp, Users } from 'lucide-react';

const Research = () => {
  const researchProjects = [
    {
      title: 'Blood Donor Database System',
      status: 'Published',
      description: 'Real-time intelligent blood donor management using AI and location-based filtering. Scalable and life-saving technology for healthcare systems.',
      journal: 'International Journal of Healthcare Technology',
      year: '2024',
      impact: 'High',
      keywords: ['Healthcare', 'AI', 'Database Management', 'Location-based Services'],
      metrics: {
        citations: 12,
        downloads: 150,
        impact_factor: 2.4
      }
    },
    {
      title: 'Skin Disease Detection using Deep Learning',
      status: 'Under Review',
      description: 'CNN-powered detection model for early-stage skin diseases with over 92% accuracy. Image-based AI diagnosis system for dermatological conditions.',
      journal: 'IEEE Transactions on Medical Imaging',
      year: '2024',
      impact: 'Very High',
      keywords: ['Deep Learning', 'Computer Vision', 'Medical Imaging', 'CNN'],
      metrics: {
        accuracy: '92%',
        dataset_size: '10,000+',
        model_size: '45MB'
      }
    }
  ];

  const researchStats = [
    { label: 'Research Papers', value: '2', icon: FileText },
    { label: 'Citations', value: '12+', icon: Award },
    { label: 'Impact Factor', value: '2.4', icon: TrendingUp },
    { label: 'Collaborators', value: '5', icon: Users }
  ];

  return (
    <section id="research" className="py-20 bg-vintage-dark relative overflow-hidden">
      {/* Animated, playful background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-vintage-gold/30 to-vintage-coral/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-vintage-coral/30 to-vintage-emerald/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <svg className="absolute left-1/2 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="160" stroke="#ffe600" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="200" cy="200" r="100" stroke="#00ffe7" strokeWidth="2" fill="none" opacity="0.06" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vintage-text mb-4">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-vintage-beige to-vintage-tan">Work</span>
          </h2>
          <p className="text-xl text-vintage-subtext max-w-3xl mx-auto">
            Contributing to the advancement of AI and healthcare technology through innovative research
          </p>
        </motion.div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {researchStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-vintage-brown/10 backdrop-blur-sm border border-vintage-beige/20 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-vintage-beige to-vintage-tan rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-vintage-dark" />
              </div>
              <div className="text-2xl font-bold text-vintage-text mb-2">{stat.value}</div>
              <div className="text-vintage-subtext text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Research Projects */}
        <div className="space-y-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-vintage-brown/10 backdrop-blur-sm border border-vintage-beige/20 rounded-2xl p-8 hover:bg-vintage-brown/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-2xl font-bold text-vintage-text">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Published' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-vintage-subtext mb-6">{project.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-vintage-beige font-medium mb-2">Publication Details</h4>
                      <p className="text-vintage-subtext text-sm">{project.journal}</p>
                      <p className="text-vintage-subtext text-sm">{project.year}</p>
                    </div>
                    <div>
                      <h4 className="text-vintage-beige font-medium mb-2">Impact Level</h4>
                      <p className="text-vintage-subtext text-sm">{project.impact}</p>
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="mb-6">
                    <h4 className="text-vintage-beige font-medium mb-2">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-3 py-1 bg-vintage-beige/20 text-vintage-beige rounded-full text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="lg:w-64">
                  <h4 className="text-vintage-beige font-medium mb-4">Metrics</h4>
                  <div className="space-y-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-vintage-subtext capitalize">{key.replace('_', ' ')}</span>
                        <span className="text-vintage-text font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-vintage-brown/10 backdrop-blur-sm border border-vintage-beige/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-vintage-text mb-4">Collaborate with Me</h3>
            <p className="text-vintage-subtext mb-6">
              Interested in collaborating on research projects or discussing innovative ideas? Let's connect!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-vintage-beige text-vintage-dark px-8 py-3 rounded-lg font-semibold hover:bg-vintage-tan transition-colors"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;