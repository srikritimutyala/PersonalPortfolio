"use client";

import { motion } from "framer-motion";
import { awardsAndActivities } from "../data/portfolioData";
import { Trophy, Award, Activity, CheckCircle2 } from "lucide-react";

export default function Awards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const columnVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  // Icon selector based on category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Leadership Roles":
        return <Award className="h-6 w-6 text-[#F72585] drop-shadow-[0_0_8px_#F72585]" />;
      case "Major Honors":
        return <Trophy className="h-6 w-6 text-[#7209b7] drop-shadow-[0_0_8px_#7209b7]" />;
      default:
        return <Activity className="h-6 w-6 text-[#b5179e] drop-shadow-[0_0_8px_#b5179e]" />;
    }
  };

  return (
    <section id="awards" className="relative min-h-screen bg-[#040407] py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-10 h-[500px] w-[500px] rounded-full bg-[#7209b7]/10 blur-[150px]" />
        <div className="absolute bottom-1/4 left-10 h-[500px] w-[500px] rounded-full bg-[#F72585]/10 blur-[150px]" />
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
            Awards & Activities - <span className="bg-gradient-to-r from-[#F72585] to-[#7209b7] bg-clip-text text-transparent">Milestones & Extracurriculars!</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#F72585] to-[#7209b7] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Awards Columns Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {awardsAndActivities.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={columnVariants}
              className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden flex flex-col h-full hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full translate-x-12 -translate-y-12 rotate-45 pointer-events-none" />

              {/* Title Section */}
              <div className="flex items-center gap-3.5 mb-6 border-b border-white/5 pb-4">
                <span className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  {getCategoryIcon(cat.category)}
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  {cat.category}
                </h3>
              </div>

              {/* Items List */}
              <ul className="flex flex-col gap-4 flex-1">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#F72585] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-300 leading-relaxed text-left font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
