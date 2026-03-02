"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "bot"; text: string };

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I am the portfolio AI. Ask me about the developer's skills, projects, or education." }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    // The AI's "Brain" - Simulated logic
    setTimeout(() => {
      let botReply = "I'm still learning about that! You can ask me about their skills, projects, or education.";
      const lowerInput = userMsg.toLowerCase();

      if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
        botReply = "They specialize in Python, SQL, Deep Learning, NLP, and are currently expanding their cloud infrastructure knowledge with AWS.";
      } else if (lowerInput.includes("project") || lowerInput.includes("work")) {
        botReply = "They've built several impressive projects, including an NLP Spam Classifier, an Intelligent Registration System, and a Personal Finance Manager.";
      } else if (lowerInput.includes("education") || lowerInput.includes("school") || lowerInput.includes("graduate")) {
        botReply = "They are a final-year Computer Science Engineering undergraduate specializing in Artificial Intelligence.";
      } else if (lowerInput.includes("contact") || lowerInput.includes("hire") || lowerInput.includes("email")) {
        botReply = "You can reach out to them via LinkedIn or the contact links on their resume to discuss opportunities in Data Science or Generative AI!";
      }

      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 h-96 bg-surface-light border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 bg-surface flex justify-between items-center">
              <span className="font-medium text-sm text-accent flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                AI Agent
              </span>
              <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">✕</button>
            </div>
            
            <div className="flex-grow p-4 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === "user" 
                      ? "bg-accent text-black rounded-tr-none" 
                      : "bg-surface border border-white/5 text-neutral-300 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-surface flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..." 
                className="flex-grow bg-surface-light border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent/50 text-white placeholder:text-neutral-500"
              />
              <button type="submit" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-colors">
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:bg-accent transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
        </svg>
      </motion.button>
    </div>
  );
}