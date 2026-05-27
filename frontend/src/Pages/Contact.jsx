import React, { useState } from "react";
import image from "../assets/WhatsApp Image 2026-05-20 at 10.53.58 PM-Photoroom.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";

function Contact() {
  const [inputData, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    setInput({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        inputData
      );

      console.log(response.data);
      alert("Message Sent 🚀");

      setInput({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("ERROR:", error);
      alert("Failed to send message ❌");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white pt-20 sm:pt-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">

      <div className="w-full max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Contact <span className="text-white/60">Me</span>
          </h2>
          <p className="text-white/50 mt-2 sm:mt-3 text-xs sm:text-sm">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-5 sm:space-y-6 text-center md:text-left">

            <h3 className="text-base sm:text-lg font-medium text-white/70">
              Get in Touch
            </h3>

            {/* Image */}
            <img
              src={image}
              alt="contact"
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto md:mx-0 opacity-90"
            />

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4 sm:mt-6">

              <a
                href="https://www.linkedin.com/in/satyajeet-patil-5631b3284"
                target="_blank"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 border border-white/10 rounded-xl hover:bg-white hover:text-black transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="mailto:satyajeet2004patil@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 border border-white/10 rounded-xl hover:bg-white hover:text-black transition"
              >
                <MdEmail size={20} />
              </a>

              <a
                href="https://github.com/satyajeet-js"
                target="_blank"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 border border-white/10 rounded-xl hover:bg-white hover:text-black transition"
              >
                <FaGithub size={18} />
              </a>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_10px_40px_rgba(255,255,255,0.05)]">

            <form onSubmit={handleForm} className="space-y-4 sm:space-y-5">

              {/* Name */}
              <div>
                <label className="text-[10px] sm:text-xs text-white/40">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={inputData.name}
                  required
                  onChange={handleInput}
                  className="w-full mt-1.5 sm:mt-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/30 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[10px] sm:text-xs text-white/40">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={inputData.email}
                  required
                  onChange={handleInput}
                  className="w-full mt-1.5 sm:mt-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/30 text-sm"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-[10px] sm:text-xs text-white/40">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={inputData.subject}
                  onChange={handleInput}
                  className="w-full mt-1.5 sm:mt-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/30 text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-[10px] sm:text-xs text-white/40">
                  Message
                </label>
                <textarea
                  name="message"
                  value={inputData.message}
                  required
                  rows="4"
                  onChange={handleInput}
                  className="w-full mt-1.5 sm:mt-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/30 resize-none text-sm"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;