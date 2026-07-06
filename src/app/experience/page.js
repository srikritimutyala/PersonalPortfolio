"use client";

import { motion } from "framer-motion";
import Timeline from "./timeline";

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen bg-[#040407] py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-10 h-[500px] w-[500px] rounded-full bg-[#7209b7]/10 blur-[150px]" />
        <div className="absolute bottom-1/3 left-10 h-[500px] w-[500px] rounded-full bg-[#F72585]/10 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Work Experience - <span className="bg-gradient-to-r from-[#F72585] to-[#7209b7] bg-clip-text text-transparent">Professional Journey!</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#F72585] to-[#7209b7] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline Component */}
        <Timeline />
      </div>
    </section>
  );
}
