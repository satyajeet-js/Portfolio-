import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/Screenshot 2026-05-22 232000.png";
import img2 from "../assets/Screenshot 2026-05-22 231548.png";
import img3 from "../assets/Screenshot 2026-05-22 231644.png"

function Project() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "A fully responsive shopping platform with cart, authentication, and payment integration.",
      img: img1,
    },
    {
      title: "Portfolio Website",
      desc: "Modern personal portfolio with animations, dark mode, and responsive design.",
      img: img2,
      view:"https://plug-go.onrender.com/",
    },
    {
      title: "Cafe Finder App",
      desc: "Find nearby cafes with map integration, filters, and contact details.",
      img:img3,
      view:"https://cms-frontend-us6k.onrender.com/",
    },
    // {
    //   title:"",
    // }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
          My <span className="text-white/70">Projects</span>
        </h3>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm">
          A collection of my recent work showcasing modern UI, performance, and clean development practices.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition-all duration-300"
          >
            
            {/* Image */}
            <div className="overflow-hidden h-52">
  <img
    src={project.img}
    alt={project.title}
    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
  />
</div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-lg font-semibold text-white">
                {project.title}
              </h4>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                {project.desc}
              </p>

              {/* Button */}
              <a href={project.view}>
                <button className="mt-5 px-5 py-2 text-sm rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black transition-all duration-300">
                View Project
              </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;