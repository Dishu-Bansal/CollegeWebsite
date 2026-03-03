'use client'
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import FacultyCard from "../components/FacultyCard";
import FacultySection from "../components/FacultySection";
import { bedFaculty, dpedFaculty, medFaculty } from "../data/facultyData";
import { motion } from "framer-motion";

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Faculty = () => {
  return (
    <main className="min-h-screen max-w-[95%] mx-auto mt-10 px-4 sm:px-6  lg:py-10 pb-10 lg:mb-10 ">
      
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/faculty.jpg"
          alt="Faculty Image"
          fill
          className="object-cover blur-xs"
          priority
        />
        <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-4 max-w-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-bold leading-tight text-[#1E3851] text-3xl font-montserrat  sm:text-3xl md:text-5xl lg:text-6xl">
              <span className="block">Our Journey of <span className="underline decoration-wavy  decoration-yellow-400 underline-offset-5  ml-2">Excellence,</span></span>
              <span className="block mt-4">Your Journey of Growth.</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Faculty Sections */}
      <motion.div
        className="mt-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp}>
          <FacultySection
            title="B.Ed. Faculty"
            facultyData={bedFaculty}
            downloadLink="/bed-details.pdf"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FacultySection
            title="D.P.Ed. Faculty"
            facultyData={dpedFaculty}
            downloadLink="/dped-details.pdf"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FacultySection
            title="M.Ed. Faculty"
            facultyData={medFaculty}
            downloadLink="/med-details.pdf"
          />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Faculty;
