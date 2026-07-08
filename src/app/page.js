"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Mail, ArrowDown, ArrowUp, Sparkles, MessageSquare, Bot, FileDown } from "lucide-react";
import Link from "next/link";
import Navbar from "./components/NavBar";
import FluidCanvas from "./components/FluidCanvas";
import About from "./about/page";
import Projects from "./projects/page";
import Experience from "./experience/page";
import Leadership from "./leadership/page";
import Awards from "./awards/page";
import Contact from "./contact/page";
import { getChatbotResponse, personalInfo } from "./data/portfolioData";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey! I'm Siki, Srikriti's AI Assistant. Ask me anything about my ML sleep research, boxplot accessibility tools, NOBE platform, or Kuchipudi classical dance!",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const chatContainerRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      if (messages.length === 1 && !isTyping) {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "auto",
        });
      } else {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [messages, isTyping]);

  // Force scroll to top on mount and set scroll restoration to manual
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent browser from restoring scroll position
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // Clear URL hash to prevent browser/Next.js from scrolling to sections on refresh
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }

      // Scroll to top immediately
      window.scrollTo(0, 0);
      
      // Repeatedly force scroll to top during the first 500ms to override any lazy layouts/Next.js scroll behavior
      let count = 0;
      const interval = setInterval(() => {
        window.scrollTo(0, 0);
        count++;
        if (count >= 10) {
          clearInterval(interval);
        }
      }, 50);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  // Show/hide Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSendMessage = (textToSend) => {
    const msgText = textToSend || input;
    if (!msgText.trim()) return;

    // Append user message
    setMessages((prev) => [...prev, { sender: "user", text: msgText }]);
    setInput("");
    setIsTyping(true);

    // AI Response delay simulation
    setTimeout(() => {
      const response = getChatbotResponse(msgText);
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      setIsTyping(false);
    }, 750);
  };

  const handleQuickQuestion = (category) => {
    let query = "";
    switch (category) {
      case "Me":
        query = "Tell me about yourself";
        break;
      case "Research":
        query = "What research do you do?";
        break;
      case "Projects":
        query = "Tell me about your projects";
        break;
      case "Leadership":
        query = "What are your leadership roles?";
        break;
      case "Contact":
        query = "How can I contact you?";
        break;
      default:
        query = "Help";
    }
    handleSendMessage(query);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen text-[#F2E1FB] overflow-x-hidden font-sans">
      {/* Background Interactive Particles Fluid Canvas */}
      <FluidCanvas />

      {/* Floating Header Navigation */}
      <Navbar />

      {/* 1. HERO SECTION (AAABADCODE STYLE) */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-6 z-10"
      >
        <div className="max-w-4xl w-full flex flex-col items-center text-center">

          {/* Subtitle & Title */}
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-[#F2E1FB]/80 tracking-wide mb-2"
          >
            {personalInfo.subTitle}
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8"
          >
            {personalInfo.title}
          </motion.h1>

          {/* Resume and Connect Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <a
              href="/resume.pdf"
              download="Srikriti_Mutyala_Resume.pdf"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F72585] to-[#7209b7] text-white text-xs font-bold tracking-wider uppercase shadow-[0_4px_15px_rgba(247,37,133,0.3)] hover:shadow-[0_8px_25px_rgba(247,37,133,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <FileDown className="h-4.5 w-4.5 text-white" />
              <span>Download Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/srikritimutyala"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-200 text-xs font-bold tracking-wider uppercase hover:border-[#7209b7] hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Linkedin className="h-4.5 w-4.5 text-[#F72585]" />
              <span>{"Let's Connect"}</span>
            </a>
            <a
              href="https://github.com/srikritimutyala"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-200 text-xs font-bold tracking-wider uppercase hover:border-[#b5179e] hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Github className="h-4.5 w-4.5 text-[#F72585]" />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Avatar and Chatbox Area */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-center my-6 max-w-3xl">
            {/* Pulsing Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="md:col-span-4 flex justify-center"
            >
              <div className="relative group w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-white/10 bg-[#040407]/60 backdrop-blur-xl pulse-glow-circle">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Chatbot Interface */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-8 w-full"
            >
              <div className="glass-card rounded-2xl p-5 border border-white/10 h-64 flex flex-col justify-between text-left">
                {/* Message Log */}
                <div
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto space-y-3.5 pr-2 mb-4 scrollbar-thin"
                >
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2.5 ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.sender === "bot" && (
                        <div className="h-6 w-6 rounded-full bg-[#7209b7]/30 border border-[#7209b7]/40 flex items-center justify-center text-xs shrink-0 text-white mt-1">
                          <Bot className="h-3 w-3" />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2 text-xs leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-[#F72585] text-white rounded-tr-none shadow-[0_4px_12px_rgba(247,37,133,0.2)]"
                            : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-none"
                        }`}
                        style={{ whiteSpace: "pre-wrap" }}
                        dangerouslySetInnerHTML={{
                          __html: msg.text
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#F72585] hover:underline font-semibold">$1</a>'),
                        }}
                      />
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-2.5 justify-start">
                      <div className="h-6 w-6 rounded-full bg-[#7209b7]/30 border border-[#7209b7]/40 flex items-center justify-center text-xs shrink-0 text-white mt-1">
                        <Bot className="h-3 w-3 animate-bounce" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F72585] animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F72585] animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F72585] animate-bounce" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="relative flex items-center bg-white/5 rounded-full border border-white/10 p-1.5 hover:border-white/20 focus-within:border-[#F72585] focus-within:shadow-[0_0_15px_rgba(247,37,133,0.15)] transition-all duration-300">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    className="w-full bg-transparent border-none text-xs text-white placeholder-gray-500 focus:outline-none pl-4 pr-10"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    aria-label="Send query"
                    className="absolute right-1.5 p-2 rounded-full bg-gradient-to-r from-[#F72585] to-[#7209b7] text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Choice Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-2xl grid grid-cols-3 sm:grid-cols-5 gap-2.5 mt-4"
          >
            {["Me", "Research", "Projects", "Leadership", "Contact"].map((btn) => (
              <button
                key={btn}
                onClick={() => handleQuickQuestion(btn)}
                className="py-3 px-1.5 rounded-xl border border-white/5 bg-white/5 text-xs font-semibold text-gray-300 hover:text-white hover:border-[#F72585]/35 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(247,37,133,0.1)] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                {btn}
              </button>
            ))}
          </motion.div>

          {/* Scroll Down Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex flex-col items-center gap-1.5 text-xs text-gray-500 font-semibold tracking-widest uppercase cursor-pointer"
          >
            <Link href="#about" className="flex flex-col items-center gap-2">
              <span>Scroll to Explore</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. DETAILED SECTIONS BELOW (AAKARSH ORG) */}
      <About />
      <Experience />
      <Projects />
      <Leadership />
      <Awards />
      <Contact />

      {/* FOOTER */}
      <footer className="relative bg-[#020204]/90 border-t border-white/5 py-12 px-6 z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-xl font-extrabold text-white">
              Srikriti<span className="text-[#F72585]">Mutyala</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1.5">
              Innovation at the Intersection of Data and Code!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#leadership" className="hover:text-white transition-colors">Leadership</Link>
            <Link href="#awards" className="hover:text-white transition-colors">Awards</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex gap-4">
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-[#F72585] text-gray-400 hover:text-white transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-[#7209b7] text-gray-400 hover:text-white transition-all duration-300"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-[#b5179e] text-gray-400 hover:text-white transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2026 Srikriti Mutyala. Designed & Developed with 💖 at UIUC.</p>
          <p>Dual Majoring in Computer Science & Statistics.</p>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-[#F72585] to-[#7209b7] text-white shadow-lg shadow-[#F72585]/30 hover:scale-108 active:scale-95 transition-all z-50 cursor-pointer"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
