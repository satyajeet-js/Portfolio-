import React from "react";
import photo from "../assets/satyajeet3.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Project";

function Home() {
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 sm:pt-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-black text-white overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="w-full max-w-[1400px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-16 relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left space-y-5 sm:space-y-6 px-1 sm:px-3 lg:px-6"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/60 text-[10px] sm:text-xs">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Available for new projects
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Crafting digital <br />
              <span className="text-white/60">
                experiences that inspire.
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/50 max-w-md sm:max-w-lg text-xs sm:text-sm md:text-base leading-relaxed mx-auto lg:mx-0">
              I design and build modern, high-performance web applications with
              clean UI and smooth user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-3 sm:pt-4 justify-center lg:justify-start">

              <NavLink to="/project" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-white/90 transition">
                  Explore Work →
                </button>
              </NavLink>

              <a 
                href="https://drive.google.com/file/d/1K2QrniJNy9Z9BpPpIcMVSSsNXL1CRblM/view?usp=drivesdk"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/10 transition text-xs sm:text-sm">
                  Resume
                </button>
              </a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative group">

              {/* Glow */}
              <div className="absolute inset-0 bg-white/10 blur-2xl rounded-3xl opacity-20 group-hover:opacity-30 transition"></div>

              {/* Image */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-2 sm:p-3 rounded-3xl shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
                <img
                  src={photo}
                  alt="Profile"
                  className="w-48 sm:w-56 md:w-72 lg:w-80 aspect-[4/5] object-cover rounded-2xl group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Sections */}
      <section>
        <About />
      </section>

      <section >
        <Skills />
      </section>

      <section >
        <Projects />
      </section>

      <section >
        <Contact />
      </section>
    </>
  );
}

export default Home;