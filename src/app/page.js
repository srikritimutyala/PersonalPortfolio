"use client";

import { useEffect, useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import Typewriter from "./components/TypeWriter";
import FadeInOut from "./components/FadeIn";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Navbar from "./components/NavBar";
import Image from "next/image";
import About from "./about/page";
import { motion } from "framer-motion";
import Projects from "./projects/page";




const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);


  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
  
  <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
    <Navbar />
    <section className="relative h-screen overflow-hidden">

    
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500 opacity-10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600 opacity-10 blur-[120px]" />
      </div>

   
      <div
        className="pointer-events-none fixed top-0 left-0 h-30 w-30 rounded-full bg-fuchsia-500 opacity-15 blur-3xl"
        style={{
          transform: `translate(${mousePos.x - 128}px, ${mousePos.y - 128}px)`,
        }}
      />


      <div className="flex h-screen justify-center items-center">
        <div className="items-center">
          <h1 className={`${bricolage.variable} text-8xl text-[#F2E1FB] text-center font-semibold type-once tracking-tight`}>
            <Typewriter words={["Hi 👋! I'm Srikriti"]} />
          </h1>

          <div className={`${bricolage.variable} mt-4 text-xl text-[#F2E1FB] text-center text-gray-300`}>
            <FadeInOut show={show} duration={2000} >
              CS Student | Aspiring Software Engineer | Devloper
            </FadeInOut>
          </div>

          <div className="flex gap-6 text-[#F2E1FB] justify-center mt-8">
            <Link
              href="https://github.com/srikritimutyala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8 hover:text-[#F2E1FB] transition cursor-pointer" />
            </Link>

            <Link
              href="https://linkedin.com/in/srikriti-mutyala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8 hover:text-[#F2E1FB] transition" />
            </Link>

            <Link
              href="mailto:mutyalasrikriti2006@gmail.com?subject=Hello%20Srikriti&body=I%20saw%20your%20portfolio!"
              aria-label="Email"
            >
              <Mail className="h-8 w-8 hover:text-[#F2E1FB] transition" />
            </Link>



  



            
          </div>



        </div>
          
    

      </div>




      
    </section>


        
    <section
      id="about"
      className=""
    >
      <About></About>
    </section>
    <section
      id="about"
      className=""
    >
      <Projects></Projects>
    </section>
    <section id="experience" className="min-h-screen">Experience section</section>
    <section id="contact" className="min-h-screen">Contact section</section>
  </div>
);

}
