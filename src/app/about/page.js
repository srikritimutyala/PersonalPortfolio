"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "../data/portfolioData";

export default function About() {
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative min-h-screen bg-[#040407] py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-10 h-[500px] w-[500px] rounded-full bg-[#7209b7]/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-10 h-[500px] w-[500px] rounded-full bg-[#F72585]/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About Me - <span className="bg-gradient-to-r from-[#F72585] to-[#b5179e] bg-clip-text text-transparent">Behind The Code!</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#F72585] to-[#7209b7] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Bio & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden glass-card border border-white/10 pulse-glow-circle">
              <img
                src={`${personalInfo.headshot}?v=1`}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = personalInfo.avatar; // Fallback to bitmoji if headshot fails
                  e.target.className = "w-full h-full object-contain p-8 group-hover:scale-105 transition-all duration-700";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-65 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-xs uppercase tracking-widest text-[#F72585] font-semibold">CS & Stats Dual Major</span>
                <h4 className="text-xl font-bold text-white mt-1">UIUC Sophomore</h4>
              </div>
            </div>
          </motion.div>

          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#F72585]/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-[#F2E1FB] mb-4">
                Working at the intersection of CS & Statistics
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a student at Illinois, I love taking on roles that allow me to manage technology projects, lead developer groups, and tutor others. My coursework and experiences cover areas like machine learning pipelines, full-stack app engineering, computer vision modeling, and accessibility guidelines.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outside of my academic and research endeavors, you can usually find me practicing classical Indian Kuchipudi dancing, crocheting amigurumi, designing henna, or working out at the gym!
              </p>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                <div>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider">Institution</span>
                  <span className="text-sm font-medium text-white">University of Illinois Urbana-Champaign</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider">Location</span>
                  <span className="text-sm font-medium text-white">Urbana-Champaign, IL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Grid */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#F2E1FB]">
              Technical Skills - <span className="bg-gradient-to-r from-[#b5179e] to-[#7209b7] bg-clip-text text-transparent">Core Expertise!</span>
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Languages */}
            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <i className="fa-solid fa-code text-[#F72585] text-xl" />
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Languages</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.languages.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-[#F72585]/35 hover:bg-white/10 transition-all duration-300">
                    <i className={`${skill.icon} text-lg text-gray-400 group-hover:text-white`} />
                    <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks & Libraries */}
            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <i className="fa-solid fa-layer-group text-[#7209b7] text-xl" />
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Frameworks & ML</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.frameworks.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-[#7209b7]/35 hover:bg-white/10 transition-all duration-300">
                    <i className={`${skill.icon} text-lg text-gray-400`} />
                    <span className="text-xs text-gray-300 font-medium line-clamp-1">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & DevOps */}
            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <i className="fa-solid fa-toolbox text-[#b5179e] text-xl" />
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Tools & Cloud</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-[#b5179e]/35 hover:bg-white/10 transition-all duration-300">
                    <i className={`${skill.icon} text-lg text-gray-400`} />
                    <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
