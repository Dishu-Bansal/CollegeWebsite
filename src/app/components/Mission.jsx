"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="relative w-full py-10 space-y-20">
      {/* Div 1: Our Vision (Image Left, Text Right) */}
      <motion.div
        className="relative max-w-[90%] lg:max-w-[80%] flex flex-col lg:flex-row items-center mx-auto gap-10 bg-white/80 p-6 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side: Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-150 h-62.5 sm:h-75 lg:h-100">
            <Image
              src="/mission.jpg"
              alt="Vision Image"
              fill
              className="object-cover rounded-lg z-10"
            />
            <div className="absolute inset-0 border-4 border-white -rotate-3 rounded-lg z-20 pointer-events-none shadow-md"></div>
          </div>
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          className="w-full lg:w-1/2 relative text-center lg:text-left bg-white/90 shadow-xl p-6 lg:p-10 rounded-2xl overflow-hidden z-30"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* SM & MD Corner Background Text */}
          <span
            className="hidden sm:block md:block lg:hidden
    absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6
    text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-extrabold text-gray-500 uppercase tracking-tight select-none
    z-0 opacity-20 pointer-events-none"
          >
            vision
          </span>

          <h2 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3851] mb-4">
            Our Vision
          </h2>
          <p className="relative z-10 text-gray-700 text-sm sm:text-base lg:text-lg">
            To inspire and prepare future educators through a strong commitment
            to academic excellence, ethical values, and innovative learning
            experiences, enabling them to grow as confident professionals who
            contribute meaningfully to society.
          </p>
        </motion.div>

        {/* LG Background Text */}
        <span className="hidden lg:block absolute right-0 top-1/2 transform -translate-x-35 -translate-y-65 text-[5rem] sm:text-[6rem] lg:text-[7rem] font-extrabold text-gray-400 uppercase tracking-tight select-none z-0 opacity-30 pointer-events-none">
          vision
        </span>
      </motion.div>

      {/* Div 2: Our Mission (Image Right, Text Left) */}
      <motion.div
        className="relative max-w-[90%] lg:max-w-[80%] flex flex-col lg:flex-row-reverse items-center mx-auto gap-10 bg-white/80 p-6 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Right Side: Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[600px] h-[250px] sm:h-[300px] lg:h-[400px]">
            <Image
              src="/hero2.jpg"
              alt="Mission Image"
              fill
              className="object-cover rounded-lg z-10"
            />
            <div className="absolute inset-0 border-4 border-white rotate-3 rounded-lg z-20 pointer-events-none shadow-md"></div>
          </div>
        </motion.div>

        {/* Left Side: Text */}
        <motion.div
          className="w-full lg:w-1/2 relative text-center lg:text-left bg-white shadow-lg p-6 lg:p-10 rounded-2xl overflow-hidden z-30"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* SM & MD Corner Background Text */}
          <span
            className="hidden sm:block md:block lg:hidden
    absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6
    text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-extrabold text-gray-500 uppercase tracking-tight select-none
    z-0 opacity-20 pointer-events-none"
          >
            mission
          </span>

          <h2 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3851] mb-4">
            Our Mission
          </h2>
          <p className="relative z-10 text-gray-700 text-sm sm:text-base lg:text-lg">
            Our mission is to cultivate knowledgeable, ethical, and innovative
            educators who will shape the future of learning. We provide hands-on
            experiences, mentorship, and opportunities that empower students to
            thrive and make a positive impact in their communities.
          </p>
        </motion.div>

        {/* LG Background Text */}
        <span className="hidden lg:block absolute left-0 top-1/2 transform translate-x-35 -translate-y-65 text-[5rem] sm:text-[6rem] lg:text-[7rem] font-extrabold text-gray-400 uppercase tracking-tight select-none z-0 opacity-30 pointer-events-none">
          mission
        </span>
      </motion.div>
    </section>
  );
};

export default Mission;
