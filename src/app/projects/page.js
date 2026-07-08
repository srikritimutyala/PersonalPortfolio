"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolioData";
import { Github, Code, Brain, Eye } from "lucide-react";

const categories = ["All", "Computer Vision", "Machine Learning", "Full-Stack & Web"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Helper to map project tag to filter categories
  const getProjectCategory = (tag) => {
    const t = tag.toLowerCase();
    if (t.includes("vision") || t.includes("gesture") || t.includes("tracker")) return "Computer Vision";
    if (t.includes("machine") || t.includes("learning") || t.includes("forecasting")) return "Machine Learning";
    if (t.includes("full-stack") || t.includes("devops") || t.includes("startup") || t.includes("serverless") || t.includes("cloud")) return "Full-Stack & Web";
    return "All";
  };

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return getProjectCategory(project.tag) === activeCategory;
  });

  // Get color themes based on project category for glowing hover effects
  const getGlowColor = (tag) => {
    const category = getProjectCategory(tag);
    if (category === "Computer Vision") return "hover:shadow-[0_0_30px_rgba(76,201,240,0.25)] hover:border-[#4cc9f0]/40";
    if (category === "Machine Learning") return "hover:shadow-[0_0_30px_rgba(114,9,183,0.25)] hover:border-[#7209b7]/40";
    return "hover:shadow-[0_0_30px_rgba(247,37,133,0.25)] hover:border-[#F72585]/40";
  };

  const getTagColorClass = (tag) => {
    const category = getProjectCategory(tag);
    if (category === "Computer Vision") return "bg-[#4cc9f0]/15 border-[#4cc9f0]/30 text-[#4cc9f0]";
    if (category === "Machine Learning") return "bg-[#7209b7]/15 border-[#7209b7]/30 text-[#b5179e]";
    return "bg-[#F72585]/15 border-[#F72585]/30 text-[#F72585]";
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Computer Vision":
        return <Eye className="h-3.5 w-3.5 mr-1.5" />;
      case "Machine Learning":
        return <Brain className="h-3.5 w-3.5 mr-1.5" />;
      default:
        return <Code className="h-3.5 w-3.5 mr-1.5" />;
    }
  };

  return (
    <section id="projects" className="relative min-h-screen bg-[#040407] py-24 px-6 md:px-12 z-10 overflow-hidden">
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
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Projects Showcase - <span className="bg-gradient-to-r from-[#F72585] to-[#7209b7] bg-clip-text text-transparent">{"What I've Built!"}</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#F72585] to-[#7209b7] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer overflow-hidden border ${
                activeCategory === category
                  ? "border-transparent text-white bg-gradient-to-r from-[#F72585] to-[#7209b7] shadow-lg shadow-[#F72585]/20"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-white/20 bg-white/5"
              }`}
            >
              <span className="relative z-10 flex items-center">
                {category !== "All" && getCategoryIcon(category)}
                {category}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid Container with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                key={project.title}
                className={`group relative flex flex-col rounded-2xl overflow-hidden glass-card border border-white/10 ${getGlowColor(
                  project.tag
                )} transition-all duration-500`}
              >
                {/* Floating ambient glow backing */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.01] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project Image Header */}
                <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-black/40">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.src = "/CodeADA.png"; // Fallback project image
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Date & Tag Badges */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-black/70 border border-white/10 text-[9px] font-bold text-gray-300 uppercase tracking-widest">
                      {project.date}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-md border text-[9px] font-bold uppercase tracking-widest ${getTagColorClass(
                        project.tag
                      )}`}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#F2E1FB] tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4 min-h-[40px]">
                      {project.desc}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.bullets.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex gap-2.5 text-xs text-gray-300 leading-relaxed align-top text-left"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#F72585] to-[#7209b7]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-[#F72585] to-[#7209b7] text-xs font-bold text-white shadow-lg shadow-[#F72585]/20 hover:shadow-[#F72585]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
