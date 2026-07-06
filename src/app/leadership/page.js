"use client";

import { motion } from "framer-motion";
import { leadershipAndVolunteering } from "../data/portfolioData";
import { Award, Calendar, Landmark } from "lucide-react";

export default function Leadership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="leadership" className="relative min-h-screen bg-[#040407] py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-10 h-[500px] w-[500px] rounded-full bg-[#F72585]/10 blur-[150px]" />
        <div className="absolute bottom-1/3 right-10 h-[500px] w-[500px] rounded-full bg-[#7209b7]/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Leadership & Volunteering - <span className="bg-gradient-to-r from-[#F72585] to-[#7209b7] bg-clip-text text-transparent">Impact & Engagement!</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#F72585] to-[#7209b7] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {leadershipAndVolunteering.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#7209b7]/40 hover:shadow-[0_0_25px_rgba(114,9,183,0.15)] flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F72585]">
                    <Award className="h-5 w-5" />
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                </div>

                {/* Org & Title */}
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-1.5 mb-1.5">
                  <Landmark className="h-3.5 w-3.5" />
                  {item.org}
                </span>
                <h3 className="text-lg font-bold text-[#F2E1FB] tracking-tight mb-3">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed text-left">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
