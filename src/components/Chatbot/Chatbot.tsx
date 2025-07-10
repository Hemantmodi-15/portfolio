import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Gamepad2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "🎮 SYSTEM ONLINE! I'm Hemant's AI companion. Ready to explore his digital universe? Ask me about his projects, skills, achievements, or anything else you'd like to know!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses: { [key: string]: string } = {
    'who is hemant': "🎯 PLAYER PROFILE LOADED!\n\nHemant Modi is a Level 21 Full-Stack Developer and AI researcher. He's the President of CST Club, a Shark Tank finalist, co-founder of Sheher Connect, and a national footballer. Think of him as a real-life RPG character who maxed out both coding and sports skills!",
    'sheher connect': "🏛️ EPIC QUEST COMPLETED!\n\nSheher Connect is Hemant's civic-tech masterpiece - a platform connecting citizens with local government services. It's like a bridge between people and bureaucracy, featured in Shark Tank 3.0 & 4.0 with 1000+ active users. A real game-changer for urban governance!",
    'skills': "⚡ SKILL TREE ANALYSIS:\n\n🔧 Tech Stack: Python, Java, React, Node.js, Docker, MySQL\n🤖 AI/ML: TensorFlow, OpenCV, Deep Learning\n👑 Leadership: Team management, event planning\n🎮 Bonus Skills: National-level football, problem-solving\n\nOverall Power Level: 9000+ 💪",
    'projects': "🚀 PROJECT PORTFOLIO:\n\n• WhatsApp Auto Bot (Automation Master)\n• Skin Disease Detection (92% accuracy AI)\n• Blood Donor DBMS (Life-saving tech)\n• Life Span Predictor (ML-powered)\n• Docker Menu Interface (DevOps magic)\n\nTotal: 15+ completed quests and counting!",
    'research': "🔬 RESEARCH ACHIEVEMENTS:\n\n📄 Published: Blood Donor Database Systems\n🧠 In Review: Skin Disease Detection using Deep Learning (92% accuracy)\n🎯 Focus: AI applications in healthcare\n🏆 Impact: Real-world solutions for medical challenges",
    'experience': "💼 CAREER JOURNEY:\n\n👑 President - CST Club (Current)\n💻 Linux DevOps Intern - LinuxWorld\n🚀 Co-founder - Sheher Connect\n🔬 Research Lead - Quokka Minds\n⚽ National Footballer - Bonus Achievement!",
    'contact': "📞 CONTACT PROTOCOLS:\n\n📧 Email: hemantmodi152003@gmail.com\n💼 LinkedIn: /in/hemant-modi-3789a6209\n🐙 GitHub: /Hemantmodi-15\n📸 Instagram: @hemantmodi_15\n🐳 DockerHub: /hemant015\n\nLocation: Jaipur, Rajasthan, India 🇮🇳",
    'education': "🎓 ACADEMIC STATS:\n\nInstitution: Vivekananda Global University\nDegree: B.Tech CSE (AI & Data Science)\nYear: 3rd Year (Final Boss Level)\nStatus: Excellent Performance\nSpecial Abilities: Balancing academics with real-world projects!",
    'achievements': "🏆 ACHIEVEMENT UNLOCKED:\n\n🦈 Shark Tank Finalist (3.0 & 4.0)\n⚽ National Footballer\n📚 Published Researcher\n🎖️ Multiple Certifications (Coursera AI, Exin Cloud, BCS AI)\n👑 CST Club President\n🚀 Startup Co-founder"
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Gaming-themed default responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "🎮 GREETINGS, PLAYER!\n\nWelcome to Hemant's digital realm! I'm your AI guide through his epic journey. Ready to explore? Ask me about his projects, skills, achievements, or anything else that sparks your curiosity!";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "🎯 MISSION ACCOMPLISHED!\n\nGlad I could help you navigate Hemant's universe! Got any other questions about our coding champion? I'm here 24/7!";
    }
    
    return "🤖 PROCESSING REQUEST...\n\nI'm ready to share intel about Hemant's epic journey! Try asking about:\n• His projects and coding adventures\n• Skills and tech mastery\n• Research and innovations\n• Contact information\n• Achievements and milestones\n\nWhat would you like to explore first?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay with gaming feel
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Gaming Chat Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(255, 215, 0, 0.5)' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 gaming-btn rounded-full flex items-center justify-center shadow-lg z-50 border-2 border-gaming-gold"
      >
        <Gamepad2 size={28} className="text-gaming-gold" />
        <div className="absolute -inset-1 bg-gradient-to-r from-gaming-gold to-gaming-neon-blue rounded-full blur opacity-30 animate-pulse"></div>
      </motion.button>

      {/* Gaming Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-96 h-96 glass-dark rounded-2xl shadow-2xl z-50 flex flex-col border-2 border-gaming-gold/50"
          >
            {/* Gaming Header */}
            <div className="flex items-center justify-between p-4 border-b border-gaming-gold/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 gaming-btn rounded-full flex items-center justify-center border border-gaming-gold">
                  <Bot size={20} className="text-gaming-gold" />
                </div>
                <div>
                  <h3 className="text-gaming-text font-semibold font-gaming">HEMANT.AI</h3>
                  <p className="text-gaming-gold text-xs font-gaming">&gt; SYSTEM ONLINE</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gaming-subtext hover:text-gaming-gold transition-colors gaming-btn p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-gaming-gold text-gaming-dark border border-gaming-gold/50'
                        : 'glass border border-gaming-neon-blue/30 text-gaming-text'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && (
                        <Bot size={16} className="text-gaming-neon-blue mt-1 flex-shrink-0" />
                      )}
                      {message.sender === 'user' && (
                        <User size={16} className="text-gaming-dark mt-1 flex-shrink-0" />
                      )}
                      <p className="text-sm whitespace-pre-line font-gaming">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass rounded-2xl px-4 py-3 border border-gaming-neon-blue/30">
                    <div className="flex items-center space-x-2">
                      <Bot size={16} className="text-gaming-neon-blue" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gaming-gold rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="w-2 h-2 bg-gaming-neon-blue rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-gaming-neon-green rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      <span className="text-gaming-subtext text-xs font-gaming">Processing...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Gaming Input */}
            <div className="p-4 border-t border-gaming-gold/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 glass border border-gaming-gold/30 rounded-lg text-gaming-text placeholder-gaming-subtext focus:outline-none focus:ring-2 focus:ring-gaming-gold focus:border-transparent text-sm font-gaming"
                />
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="gaming-btn px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed border border-gaming-gold"
                >
                  <Send size={16} className="text-gaming-gold" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;