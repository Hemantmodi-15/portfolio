import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Heart, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Faculty Advisor, VGU",
      image: "👩‍🏫",
      text: "Hemant's leadership at CST Club has been transformational. His ability to bridge academic concepts with real-world applications is remarkable. He doesn't just lead; he inspires.",
      rating: 5,
      color: "from-vintage-gold to-vintage-tan"
    },
    {
      id: 2,
      name: "Aman Raj",
      role: "Fellow Developer & Friend",
      image: "👨‍💻",
      text: "Working with Hemant is like having a coding wizard on your team. He delivers beyond expectations with a calm head and blazing code. His problem-solving skills are legendary!",
      rating: 5,
      color: "from-vintage-emerald to-vintage-beige"
    },
    {
      id: 3,
      name: "Vimal Daga",
      role: "Mentor, LinuxWorld",
      image: "👨‍🔬",
      text: "During his internship, Hemant showed exceptional dedication to learning DevOps and Linux systems. His curiosity and technical aptitude make him stand out from his peers.",
      rating: 5,
      color: "from-vintage-coral to-vintage-lavender"
    },
    {
      id: 4,
      name: "Anita Rathi",
      role: "Project Collaborator",
      image: "👩‍💼",
      text: "Hemant's work on Sheher Connect demonstrates his vision for civic technology. He's technically sound, personally humble, and has the rare ability to turn ideas into reality.",
      rating: 5,
      color: "from-vintage-lavender to-vintage-gold"
    },
    {
      id: 5,
      name: "Team CST Club",
      role: "Student Community",
      image: "👥",
      text: "Under Hemant's presidency, our club has grown from strength to strength. He's not just a president; he's a mentor, friend, and the driving force behind our success.",
      rating: 5,
      color: "from-vintage-tan to-vintage-emerald"
    },
    {
      id: 6,
      name: "Football Coach",
      role: "Sports Mentor",
      image: "⚽",
      text: "Hemant brings the same dedication to football as he does to coding. His teamwork, discipline, and leadership on the field reflect his character off it. A true all-rounder!",
      rating: 5,
      color: "from-vintage-beige to-vintage-coral"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-vintage-gold fill-current' : 'text-vintage-subtext'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-vintage-dark relative overflow-hidden">
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="text-vintage-coral animate-pulse" size={24} />
            <h2 className="text-4xl md:text-5xl font-bold text-vintage-text">
              What People <span className="gradient-text">Say</span>
            </h2>
            <Sparkles className="text-vintage-gold animate-sparkle" size={24} />
          </div>
          <p className="text-xl text-vintage-subtext max-w-3xl mx-auto">
            Voices from the community - colleagues, mentors, and friends sharing their experiences
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="testimonial-card glass-strong rounded-2xl p-8 h-full hover-card border border-vintage-beige/20 relative"
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4">
                    <Quote className="text-vintage-beige/30" size={32} />
                  </div>

                  {/* Avatar and info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}>
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="text-vintage-text font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-vintage-subtext text-sm">{testimonial.role}</p>
                      <div className="flex space-x-1 mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-vintage-subtext leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute bottom-4 right-4 opacity-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles size={20} className="text-vintage-gold" />
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl border border-vintage-beige/20 hover-card">
            <h3 className="text-2xl font-bold text-vintage-text mb-4">
              Want to work together?
            </h3>
            <p className="text-vintage-subtext mb-6">
              Join the growing list of people who've experienced the magic of collaboration with Hemant!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="playful-btn px-8 py-3 rounded-lg font-semibold"
            >
              Let's Connect! 🚀
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #d6c1b1;
          opacity: 0.5;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #f4d03f;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;