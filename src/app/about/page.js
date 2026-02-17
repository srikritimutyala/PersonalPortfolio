import { motion } from "framer-motion";


export default function About() {

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 }
  };

  const skills = [
    { name: "Python", level: 85 },
    { name: "JavaScript/React", level: 90 },
    { name: "Java", level: 90 },
    { name: "C++", level: 75 },
  ];


  const SkillBar = ({ name, level }) => {
    return (
      <div className="w-full">
        {/* Label */}
        <div className="flex justify-between mb-1">
          <span className="text-sm text-[#F2E1FB]">{name}</span>
          <span className="text-sm text-gray-400">{level}%</span>
        </div>

        {/* Bar Background */}
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          {/* Animated Fill */}
          <motion.div
            className="h-full bg-[#F72585]"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    );
  };



  return (


    <motion.section
      id="about"
      className=" bg-[#0a0a0f] "
      initial="initial"
      whileInView="whileInView"
      transition={fadeInUp.transition}
      viewport={{ once: true, amount: 0.7 }}
      variants={fadeInUp}
    >

      <section
        id="about"
        className="relative min-h-screen flex bg-[#0a0a0f] overflow-hidden"
        >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F72585] opacity-10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#F72585] opacity-10 blur-[120px]" />
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <div className="h-80 w-80 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center pr-40">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold text-[#F2E1FB] drop-shadow-[0_0_8px_#F72585]">About Me</h2>
            <p className="text-gray-300 max-w-md">
                Hi! I'm Srikriti, a freshman pursuing a dual interest in Computer Science and Statistics at 
                the University of Illinois at Urbana-Champaign. I'm passionate about Artificial Intelligence and Machine Learning, 
                especially their applications in computer vision and developing human-centered, impactful solutions.
            
            </p>
            <div className="flex flex-col gap-6 max-w-md">
              <h2 className="text-4xl font-semibold text-[#F2E1FB] glow-pink mt-8">
                Skills
              </h2>

              {skills.map((skill, i) => (
                <SkillBar key={i} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </section>









    </motion.section>

  );
}
