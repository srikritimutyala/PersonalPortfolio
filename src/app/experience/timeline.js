"use client";

import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";

export default function Timeline() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0 mt-12">
      {/* Central Timeline Spine */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F72585] via-[#7209b7] to-[#251b37]" />

      <div className="flex flex-col gap-16">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? "md:justify-start" : "md:justify-end"
              } w-full`}
            >
              {/* Central Spine Dot */}
              <div className="absolute left-[18px] md:left-1/2 md:-ml-2.5 top-6 h-5 w-5 rounded-full border-4 border-[#040407] bg-[#F72585] shadow-[0_0_10px_#F72585] z-20" />

              {/* Date Column (Opposite of the card on Desktop) */}
              <div
                className={`hidden md:block absolute top-6 ${
                  isEven ? "left-1/2 ml-8 text-left" : "right-1/2 mr-8 text-right"
                } w-[calc(50%-2rem)] text-xs font-semibold tracking-widest text-[#F72585] uppercase`}
              >
                {exp.date}
              </div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                  isEven ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 relative hover:border-[#F72585]/40 hover:shadow-[0_0_30px_rgba(247,37,133,0.15)] transition-all duration-300">
                  {/* Floating index number */}
                  <div className="absolute top-4 right-4 text-3xl font-extrabold text-white/5 font-mono select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Organization tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#F72585] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F72585] animate-pulse" />
                    {exp.org}
                  </div>

                  {/* Date for Mobile */}
                  <span className="block md:hidden text-xs font-semibold tracking-wider text-gray-500 mb-2 uppercase">
                    {exp.date}
                  </span>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {exp.role}
                  </h3>

                  {/* Bullets */}
                  <ul className="mt-4 flex flex-col gap-3">
                    {exp.bullets.map((bullet, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="flex gap-2.5 text-sm text-gray-300 leading-relaxed text-left align-top"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7209b7]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
