"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name} (Portfolio Inquiry)`);
    const body = encodeURIComponent(
      `From: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:mutyalasrikriti2006@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[#040407] flex items-center justify-center py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#7209b7]/10 blur-[150px]" />
        <div className="absolute -bottom-40 right-10 h-[400px] w-[400px] rounded-full bg-[#F72585]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-xl relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get In Touch - <span className="bg-gradient-to-r from-[#F72585] to-[#7209b7] bg-clip-text text-transparent">Ask Me Anything!</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            Ready to collaborate or have a project in mind? I'm always open to new opportunities and interesting conversations.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#F72585] to-[#7209b7] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden"
        >
          {sent ? (
            <div className="flex flex-col items-center gap-5 py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F72585]/20 flex items-center justify-center text-3xl text-[#F72585] shadow-[0_0_20px_rgba(247,37,133,0.3)]">
                ✉️
              </div>
              <h3 className="text-[#F2E1FB] text-xl font-bold">Your message is ready!</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Your local mail client should have opened with the pre-filled template. Hit send in your email application to complete the delivery!
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 px-6 py-2.5 rounded-full border border-white/10 text-xs font-semibold text-gray-300 hover:border-[#F72585] hover:text-[#F2E1FB] transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-[#F72585]" />
                  <span>Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-[#F2E1FB] placeholder-gray-500 focus:outline-none focus:border-[#F72585] focus:shadow-[0_0_15px_rgba(247,37,133,0.25)] transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#7209b7]" />
                  <span>Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-[#F2E1FB] placeholder-gray-500 focus:outline-none focus:border-[#7209b7] focus:shadow-[0_0_15px_rgba(114,9,183,0.25)] transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 text-[#b5179e]" />
                  <span>Message</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your research, project ideas, or just say hello..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-[#F2E1FB] placeholder-gray-500 resize-none focus:outline-none focus:border-[#F72585] focus:shadow-[0_0_15px_rgba(247,37,133,0.25)] transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-full py-3.5 px-8 bg-gradient-to-r from-[#F72585] to-[#7209b7] text-white text-sm font-bold tracking-wider uppercase shadow-[0_4px_20px_rgba(247,37,133,0.3)] hover:shadow-[0_8px_30px_rgba(247,37,133,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
