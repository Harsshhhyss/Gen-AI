import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  showContact?: boolean;
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! I am NexBot, your intelligent assistant. How can I help you today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMsg: Message = { id: Date.now().toString(), sender: 'user', text: inputValue };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking and responding
    setTimeout(() => {
      let botReply = "I'm still learning! Right now, I am just a simulated AI interface. You said: " + newUserMsg.text;
      
      if (newUserMsg.text.toLowerCase().includes('seo') || newUserMsg.text.toLowerCase().includes('marketing')) {
        botReply = "Our Search Engine Optimization and marketing strategies are completely data-driven. We'd love to help you scale!";
      } else if (newUserMsg.text.toLowerCase().includes('hello') || newUserMsg.text.toLowerCase().includes('hi')) {
        botReply = "Hi there! Feel free to ask me about our services or projects.";
      } else if (newUserMsg.text.toLowerCase().includes('price') || newUserMsg.text.toLowerCase().includes('cost')) {
        botReply = "Pricing depends on the scope of your project. We offer customized packages for development, SEO, and identity design. Reach out via the contact form!";
      }

      setMessages(prev => [
        ...prev,
        { id: Date.now().toString() + 'bot', sender: 'bot', text: botReply, showContact: true }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3"
          >
            {/* Help Bubble */}
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="bg-[#0C0C0C]/90 backdrop-blur-md text-[#00d8ff] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/10 shadow-[0_0_15px_rgba(0,216,255,0.2)]"
            >
              Help
            </motion.div>
            
            {/* Avatar Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00d8ff]/50 cursor-pointer shadow-[0_0_20px_rgba(118,33,176,0.6)]"
            >
              <img src="/chatbot-avatar.png" alt="NexBot" className="w-full h-full object-cover" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, originX: 1, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] bg-[#0C0C0C]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-[#18011F] to-[#2a0b3d] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#00d8ff]/50 shadow-[0_0_10px_rgba(0,216,255,0.4)]">
                  <img src="/chatbot-avatar.png" alt="NexBot" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-wider text-sm">NexBot</h3>
                  <p className="text-[#00d8ff] text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d8ff] animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed flex flex-col gap-2 ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-br from-[#7621B0] to-[#B600A8] text-white rounded-tr-none' 
                      : 'bg-white/5 text-[#D7E2EA] border border-white/5 rounded-tl-none'
                  }`}>
                    <p>{msg.text}</p>
                    {msg.showContact && (
                      <a 
                        href="#contact" 
                        onClick={() => setIsOpen(false)}
                        className="mt-1 inline-flex items-center gap-1 text-[#00d8ff] font-semibold text-xs hover:underline uppercase tracking-wider"
                      >
                        Contact Us
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d8ff]/60 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d8ff]/60 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d8ff]/60 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length < 3 && !isTyping && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {['What services do you offer?', 'How much does it cost?', 'Do you do SEO?'].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInputValue(q);
                      // Slight delay to simulate user typing before sending
                      setTimeout(() => {
                        const newUserMsg: Message = { id: Date.now().toString(), sender: 'user', text: q };
                        setMessages(prev => [...prev, newUserMsg]);
                        setInputValue('');
                        setIsTyping(true);
                        
                        setTimeout(() => {
                          let botReply = '';
                          if (q.includes('services')) botReply = 'We offer Intelligent Automation, 3D Design, Web Development, and SEO strategies!';
                          else if (q.includes('cost')) botReply = 'Our pricing is project-based. Reach out via the Contact section for a free quote!';
                          else if (q.includes('SEO')) botReply = 'Yes! We provide data-driven SEO optimization to rank your brand higher on Google.';
                          
                          setMessages(prev => [...prev, { id: Date.now().toString() + 'bot', sender: 'bot', text: botReply, showContact: true }]);
                          setIsTyping(false);
                        }, 1200);
                      }, 100);
                    }}
                    className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-[#00d8ff] rounded-full px-3 py-1.5 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-[#0C0C0C] border-t border-white/10">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 focus-within:border-[#7621B0] transition-colors">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/30"
                />
                <button 
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7621B0] to-[#00d8ff] flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  <svg className="w-4 h-4 translate-x-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
