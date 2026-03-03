"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgramCard from "./ProgramCard";

const programsData = [
  {
    id: 1,
    titleBtn: "B.Ed.",
    title: "B.Ed. (200 Seats) – Bachelor of Education",
    description:
      "Our Bachelor of Education (B.Ed.) program focuses on active learning through interactive discussions and hands-on teaching practice.",
    image: "/hero1.jpg",
    link: "/programs",
  },
  {
    id: 2,
    titleBtn: "B.Tech",
    title: "B.Tech (120 Seats) – Bachelor of Technology",
    description:
      "Our Bachelor of Technology (B.Tech) program emphasizes innovation, practical engineering skills, and industry readiness.",
    image: "/hero2.jpg",
    link: "/programs",
  },
  {
    id: 3,
    titleBtn: "M.Tech",
    title: "M.Tech (60 Seats) – Master of Technology",
    description:
      "The M.Tech program provides advanced technical knowledge and research opportunities for engineering graduates.",
    image: "/hero3.jpg",
    link: "/programs",
  },
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(programsData[0]);

  return (
    <section className="px-4 sm:px-6 lg:px-0">
      <div className="py-8 sm:py-10 max-w-7xl mx-auto">

        {/* TITLE + BUTTONS ROW */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Title */}
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1E3851] text-center lg:text-left">
            Our{" "}
            <span className="underline decoration-wavy decoration-yellow-400 underline-offset-5 ml-2">
              Program
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-end bg-[#0A1621] p-2 rounded-2xl">
            {programsData.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className={`px-5 sm:px-6 lg:px-10 py-2 text-sm sm:text-base rounded-lg border-2 transition-all
                  ${
                    selectedProgram.id === program.id
                      ? "border-[#1E3851] text-[#FFCE48]"
                      : "bg-white border-[#1E3851] text-[#1E3851]"
                  }
                `}
              >
                {program.titleBtn}
              </button>
            ))}
          </div>
        </div>

        {/* Card Wrapper */}
        <div className="mt-6 lg:mt-8 p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProgram.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProgramCard
                title={selectedProgram.title}
                description={selectedProgram.description}
                image={selectedProgram.image}
                link={selectedProgram.link}
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Programs;
