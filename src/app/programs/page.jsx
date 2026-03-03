'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Contact from "../components/Contact";

const programData = [
  {
    Name: "B.Ed. (200 seats)",
    Name2: "Bachelor of Education",
    description:
      "Our B.Ed. program emphasizes active learning through discussions and practical teaching exercises, preparing you for a dynamic classroom environment.",
    fees: "44,000 + Univ. Charges + Counselling Fee",
    eligibility: "Bachelor's in any Discipline",
  },
  {
    Name: "D.P.Ed. (50 seats)",
    Name2: "Diploma in Physical Education",
    description:
      "The D.P.Ed. program offers extensive research opportunities, allowing you to delve into educational theory and contribute to the field's advancement.",
    fees: "44,000 + Univ. Charges + Counselling Fee",
    eligibility: "Bachelor's in any Discipline",
  },
  {
    Name: "B.Ed. (200 seats)",
    Name2: "Bachelor of Education",
    description:
      "Our B.Ed. program emphasizes active learning through discussions and practical teaching exercises, preparing you for a dynamic classroom environment.",
    fees: "44,000 + Univ. Charges + Counselling Fee",
    eligibility: "Bachelor's in any Discipline",
  },
];

const programImage = [
  { src: "/hero1.jpg" },
  { src: "/hero2.jpg" },
  { src: "/hero3.jpg" },
];

const Programs = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const programVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen max-w-[95%] mx-auto mt-10 px-4 sm:px-6 mb-10">
      {/* Hero Section */}
      <motion.section
        className="relative w-full lg:max-w-[85%] mx-auto h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <Image
          src="/program.jpg"
          alt="Programs Hero"
          fill
          className="object-cover blur-xs"
          priority
        />
        <div className="absolute inset-0 bg-white/30 flex items-center justify-center px-4">
          <motion.div
            className="text-center text-white max-w-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-bold leading-tight text-[#1E3851] text-2xl sm:text-4xl md:text-4xl font-montserrat lg:text-5xl xl:text-6xl">
              <span className="block">Learn With <span className="underline decoration-wavy  decoration-yellow-400 underline-offset-5  ml-2">Purpose</span></span>
              <span className="block mt-2">Teach With Confidence</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Program Sections */}
      {programData.map((program, index) => {
        const isEven = index % 2 === 0;
        const number = String(index + 1).padStart(2, "0");

        return (
          <motion.div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 my-12 max-w-[75%] mx-auto
              ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
            `}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={programVariants}
          >
            {/* TEXT CARD */}
            <div className="relative w-full md:w-1/2 bg-white rounded-2xl p-6 sm:p-9 lg:p-14 shadow-lg overflow-hidden">
              {/* Background Number */}
              <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-7xl sm:text-8xl lg:text-9xl font-bold text-gray-200 select-none">
                {number}
              </span>

              <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-montserrat  font-bold text-gray-800">
                {program.Name}
              </h2>

              <h3 className="relative mt-1 text-lg sm:text-xl lg:text-2xl font-semibold font-montserrat  text-gray-500 mb-4">
                {program.Name2}
              </h3>

              <p className="relative text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                {program.description}
              </p>

              <div className="relative space-y-2 text-sm sm:text-base lg:text-lg text-gray-500">
                <p>
                  <span className="font-semibold text-gray-600">Eligibility:</span>{" "}
                  {program.eligibility}
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Fees:</span>{" "}
                  {program.fees}
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative w-full md:w-1/2 h-60 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={programImage[index]?.src}
                alt={program.Name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        );
      })}

      {/* Contact Section */}
      <Contact />
    </main>
  );
};

export default Programs;
