import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiServer, FiCheckCircle, FiLayout, FiSmartphone, FiMousePointer } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiJavascript } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: {
      core: [
        { name: "HTML5", desc: "Semantic Structure", icon: <IoLogoHtml5 />, level: "95%" },
        { name: "CSS3", desc: "Modern Layouts", icon: <IoLogoCss3 />, level: "90%" },
        { name: "JavaScript", desc: "Logic & Async", icon: <SiJavascript />, level: "85%" },
      ],
      frameworks: [
        { name: "React", desc: "Component Architecture", icon: <SiReact />, level: "88%" },
      ],
      uiux: [
        { title: "Modern UI", icon: <FiLayout />, level: "90%" },
        { title: "Responsive", icon: <FiSmartphone />, level: "92%" },
        { title: "Interactions", icon: <FiMousePointer />, level: "85%" },
      ]
    },
    backend: {
      server: [
        { name: "Node.js", desc: "High Perf Runtime", icon: <SiNodedotjs />, level: "82%" },
      ],
      database: [
        { name: "MongoDB", desc: "NoSQL Flexible Schema", icon: <SiMongodb />, level: "80%" },
        { name: "MySQL", desc: "Relational Mapping", icon: <SiMysql />, level: "75%" },
      ]
    }
  };

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">

      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Technical <span className="text-white/60">Mastery</span>
          </motion.h2>
          <p className="text-white/50 text-sm mt-4 max-w-xl">
            Building clean, scalable and elegant digital experiences.
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 w-fit mb-12 mx-auto lg:mx-0">
          {["frontend", "backend"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 rounded-xl text-sm font-medium capitalize transition ${
                activeTab === tab ? "text-black" : "text-white/50 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-xl"
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab === "frontend" ? <FiCode /> : <FiServer />} {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "frontend" ? (
              <div className="grid md:grid-cols-12 gap-6">

                {/* Core */}
                <div className="md:col-span-8 grid sm:grid-cols-3 gap-4">
                  {skillsData.frontend.core.map((s, i) => (
                    <BentoCard key={i} skill={s} />
                  ))}
                </div>

                {/* UI/UX */}
                <div className="md:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
                  <h3 className="text-lg font-semibold mb-6 text-white/70 flex items-center gap-2">
                    <FiLayout /> UI / UX
                  </h3>
                  <div className="space-y-6">
                    {skillsData.frontend.uiux.map((u, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{u.title}</span>
                          <span className="text-white/40">{u.level}</span>
                        </div>
                        <div className="h-[2px] bg-white/10 rounded-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: u.level }}
                            className="h-full bg-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Framework */}
                <div className="md:col-span-12 grid md:grid-cols-2 gap-6">
                  {skillsData.frontend.frameworks.map((s, i) => (
                    <FrameworkCard key={i} skill={s} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">

                {/* Backend */}
                <div className="space-y-6">
                  {skillsData.backend.server.map((s, i) => (
                    <BentoCard key={i} skill={s} fullWidth />
                  ))}
                </div>

                {/* Database */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
                  <h3 className="text-lg font-semibold mb-6 text-white/70">
                    Data Layer
                  </h3>
                  <div className="space-y-4">
                    {skillsData.backend.database.map((db, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{db.icon}</span>
                          <div>
                            <h4 className="text-sm font-medium">{db.name}</h4>
                            <p className="text-xs text-white/40">{db.desc}</p>
                          </div>
                        </div>
                        <FiCheckCircle className="text-white/40" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const BentoCard = ({ skill, fullWidth }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`${fullWidth ? "w-full" : ""} p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl transition`}
  >
    <div className="text-3xl mb-4 text-white/70">
      {skill.icon}
    </div>
    <h4 className="text-sm font-semibold">{skill.name}</h4>
    <p className="text-xs text-white/40 mb-3">{skill.desc}</p>
    <div className="text-lg font-mono text-white/30">{skill.level}</div>
  </motion.div>
);

const FrameworkCard = ({ skill }) => (
  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl flex items-center gap-5">
    <div className="text-4xl text-white/70">
      {skill.icon}
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-semibold">{skill.name}</h4>
      <p className="text-sm text-white/40">{skill.desc}</p>
      <div className="h-[2px] bg-white/10 mt-2">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: skill.level }}
          className="h-full bg-white"
        />
      </div>
    </div>
  </div>
);

export default Skills;