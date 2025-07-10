import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'President',
      company: 'CST Club - Vivekananda Global University',
      period: '2023 - Present',
      type: 'Leadership',
      icon: Users,
      description: 'Leading technical initiatives and organizing events for 500+ students. Spearheaded innovation projects and mentored junior developers.',
      achievements: [
        'Organized 10+ technical workshops and hackathons',
        'Increased club membership by 150%',
        'Launched coding bootcamp for beginners',
        'Established industry partnerships'
      ]
    },
    {
      title: 'Linux DevOps Intern',
      company: 'LinuxWorld under Vimal Daga',
      period: 'June 2024 - August 2024',
      type: 'Internship',
      icon: Briefcase,
      description: 'Explored Linux systems, DevOps practices, Docker containerization, and CI/CD pipelines. Gained hands-on experience with cloud technologies.',
      achievements: [
        'Deployed 15+ containerized applications',
        'Automated deployment pipelines',
        'Optimized system performance by 40%',
        'Mentored 5 junior interns'
      ]
    },
    {
      title: 'Co-founder',
      company: 'Sheher Connect',
      period: '2023 - Present',
      type: 'Startup',
      icon: Trophy,
      description: 'Built a civic-tech platform connecting citizens with local government services. Shark Tank finalist with innovative solution for urban governance.',
      achievements: [
        'Developed MVP with 1000+ users',
        'Secured seed funding',
        'Shark Tank 3.0 & 4.0 finalist',
        'Featured in local media'
      ]
    },
    {
      title: 'Research Lead',
      company: 'Quokka Minds',
      period: '2024 - Present',
      type: 'Research',
      icon: GraduationCap,
      description: 'Leading research initiatives in AI and healthcare technology. Published papers on blood donor management and skin disease detection.',
      achievements: [
        'Published 2 research papers',
        'Achieved 92% accuracy in ML models',
        'Collaborated with 5+ researchers',
        'Presented at 3 conferences'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership': return 'from-vintage-beige to-vintage-tan';
      case 'Internship': return 'from-vintage-tan to-vintage-brown';
      case 'Startup': return 'from-vintage-brown to-vintage-coral';
      case 'Research': return 'from-vintage-coral to-vintage-beige';
      default: return 'from-vintage-beige to-vintage-tan';
    }
  };

  return (
    <section id="experience" className="py-20 bg-vintage-dark relative overflow-hidden">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-vintage-beige to-vintage-tan">Journey</span>
          </h2>
          <p className="text-xl text-vintage-subtext max-w-3xl mx-auto">
            From student leader to tech entrepreneur - a timeline of growth and achievement
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-vintage-beige to-vintage-tan opacity-20"></div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-vintage-brown/10 backdrop-blur-sm border border-vintage-beige/20 rounded-2xl p-6 hover:bg-vintage-brown/20 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getTypeColor(exp.type)} rounded-xl flex items-center justify-center`}>
                        <exp.icon size={24} className="text-vintage-dark" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-vintage-text">{exp.title}</h3>
                        <p className="text-vintage-beige">{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-vintage-subtext mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-vintage-beige rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-vintage-subtext text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <div className="relative">
                    <div className="w-6 h-6 bg-vintage-beige rounded-full border-4 border-vintage-dark"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-vintage-subtext text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-vintage-brown/10 backdrop-blur-sm border border-vintage-beige/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-vintage-text mb-4">What's Next?</h3>
            <p className="text-vintage-subtext mb-6">
              Currently pursuing my B.Tech in CSE (AI & DS) while building innovative solutions and contributing to research. 
              Always open to new opportunities and collaborations!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-vintage-beige/20 px-4 py-2 rounded-lg">
                <span className="text-vintage-beige text-sm font-medium">🎓 Final Year Student</span>
              </div>
              <div className="bg-vintage-tan/20 px-4 py-2 rounded-lg">
                <span className="text-vintage-tan text-sm font-medium">🚀 Startup Founder</span>
              </div>
              <div className="bg-vintage-coral/20 px-4 py-2 rounded-lg">
                <span className="text-vintage-coral text-sm font-medium">🔬 Active Researcher</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;