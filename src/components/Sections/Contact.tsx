import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hemantmodi152003@gmail.com',
      href: 'mailto:hemantmodi152003@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9460500295',
      href: 'tel:+919460500295'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jaipur, Rajasthan, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-vintage-dark relative overflow-hidden">
      {/* Animated, playful background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-12 w-72 h-72 bg-gradient-to-br from-vintage-gold/30 to-vintage-lavender/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-12 right-12 w-56 h-56 bg-gradient-to-br from-vintage-lavender/30 to-vintage-coral/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <svg className="absolute left-1/2 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="120" stroke="#ffe600" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="200" cy="200" r="60" stroke="#ff00c8" strokeWidth="2" fill="none" opacity="0.06" />
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
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-vintage-beige to-vintage-tan">Connect</span>
          </h2>
          <p className="text-xl text-vintage-subtext max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-strong border-animated animate-glow p-8 rounded-2xl shadow-xl relative"
          >
            {/* Sparkle icon */}
            <span className="absolute -top-4 -left-4 text-3xl animate-sparkle">✨</span>
            <h3 className="text-2xl font-bold text-vintage-text mb-6">Send me a message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-vintage-text mb-2">Message Sent!</h4>
                <p className="text-vintage-subtext">Thank you for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-vintage-beige text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-vintage-brown/20 border border-vintage-beige/30 rounded-lg text-vintage-text placeholder-vintage-subtext focus:outline-none focus:ring-2 focus:ring-vintage-beige focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-vintage-beige text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-vintage-brown/20 border border-vintage-beige/30 rounded-lg text-vintage-text placeholder-vintage-subtext focus:outline-none focus:ring-2 focus:ring-vintage-beige focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-vintage-beige text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-vintage-brown/20 border border-vintage-beige/30 rounded-lg text-vintage-text placeholder-vintage-subtext focus:outline-none focus:ring-2 focus:ring-vintage-beige focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-vintage-beige text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-vintage-brown/20 border border-vintage-beige/30 rounded-lg text-vintage-text placeholder-vintage-subtext focus:outline-none focus:ring-2 focus:ring-vintage-beige focus:border-transparent resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-vintage-beige text-vintage-dark px-8 py-4 rounded-lg font-semibold hover:bg-vintage-tan transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-vintage-dark border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-strong border-animated animate-glow p-8 rounded-2xl shadow-xl relative">
              <span className="absolute -top-4 -right-4 text-3xl animate-sparkle">⭐</span>
              <h3 className="text-2xl font-bold text-vintage-text mb-6">Get in touch</h3>
              <p className="text-vintage-subtext mb-8">
                I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology and innovation.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-vintage-beige to-vintage-tan rounded-xl flex items-center justify-center">
                      <info.icon size={24} className="text-vintage-dark" />
                    </div>
                    <div>
                      <h4 className="text-vintage-beige font-medium">{info.title}</h4>
                      <a
                        href={info.href}
                        className="text-vintage-subtext hover:text-vintage-text transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Response Time */}
            <div className="glass-strong border-animated animate-glow p-6 rounded-2xl shadow-xl relative">
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-2xl animate-sparkle">💫</span>
              <h4 className="text-xl font-bold text-vintage-text mb-4">Quick Response</h4>
              <p className="text-vintage-subtext">
                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;