import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-6 overflow-hidden">

      {/* Subtle Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* CTA Section */}
  

        {/* Glass Footer Box */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide">
              Satyajeet<span className="text-white/50">.dev</span>
            </h3>
            <p className="text-white/40 text-sm mt-1">
              Building clean & modern web experiences.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition">Home</a>
             <a href="/about" className="hover:text-white transition">About</a>
            <a href="/project" className="hover:text-white transition">Projects</a>
            <a href="/skills" className="hover:text-white transition">Skills</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://github.com/satyajeet-js" className="p-3 rounded-full bg-white/10 hover:bg-white hover:text-black transition">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/satyajeet-patil-5631b3284?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="p-3 rounded-full bg-white/10 hover:bg-white hover:text-black transition">
              <FiLinkedin />
            </a>
            <a href="mailto:satyajeet2004patil@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-white hover:text-black transition">
              <FiMail />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm gap-4">
          <p>© {new Date().getFullYear()} Satyajeet Patil. All rights reserved.</p>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:text-white transition"
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;