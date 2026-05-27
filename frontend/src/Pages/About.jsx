import React from "react";
import photo from "../assets/satyajeet3.jpg"; 
import { FiArrowRight, FiUser, FiMail, FiMapPin, FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";

function About() {
  const infoItems = [
    { icon: FiUser, label: "Name", value: "Satyajeet A. Patil" },
    { icon: FiMail, label: "Email", value: "satyajeet2004patil@gmail.com", isLink: true },
    { icon: FiMapPin, label: "Location", value: "Pune, India" },
    { icon: FiBriefcase, label: "Role", value: "Full Stack Developer" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 pt-28 pb-16 bg-black text-white overflow-hidden">

      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Soft Glow */}
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-3xl opacity-20 group-hover:opacity-30 transition"></div>

            {/* Glass Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-3xl shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
              <img
                src={photo}
                alt="Satyajeet Patil"
                className="w-64 md:w-80 aspect-[4/5] object-cover rounded-2xl group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-left"
        >
          {/* Heading */}
          <div>
            <h5 className="text-xs font-semibold text-white/40 uppercase tracking-widest">
              Introduction
            </h5>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mt-2">
              About <span className="text-white/60">Me</span>
            </h2>

            <div className="w-12 h-[2px] bg-white/20 mt-3 rounded-full"></div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-white/50 text-sm md:text-base leading-relaxed max-w-lg">
            <p className="text-white font-medium">
              Crafting digital experiences with purpose.
            </p>
            <p>
              I'm a Full Stack Developer specializing in the MERN stack. I build
              scalable web applications with clean architecture and modern UI.
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="grid sm:grid-cols-2 gap-4">
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70">
                  <item.icon size={18} />
                </div>

                <div className="min-w-0">
                  <span className="text-[10px] uppercase text-white/30">
                    {item.label}
                  </span>

                  {item.isLink ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="block text-sm font-medium text-white hover:text-white/70 truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white truncate">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
            >
              Let’s Collaborate <FiArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;