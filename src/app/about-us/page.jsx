"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HomeStats from "../components/HomeStats";

const About = () => {
  return (
    <main className="min-h-screen max-w-[95%] mx-auto mt-10 px-4 sm:px-6">
      {/* Hero Section */}
      <motion.section
        className="relative w-full lg:max-w-[85%] mx-auto h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/about.jpg"
          alt="Faculty Hero"
          fill
          className="object-cover blur-xs"
          priority
        />
        <div className="absolute inset-0 bg-white/40 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-4 max-w-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-bold leading-tight font-montserrat text-[#1E3851] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">
                Empowering{" "}
                <span className="underline decoration-wavy decoration-yellow-400 underline-offset-5">
                  Educator.
                </span>
              </span>
              <span className="block mt-3 sm:mt-2">Transforming Futures.</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <HomeStats />

      {/* College Section */}
      <motion.section
        className="bg-white rounded-lg mt-2 lg:mt-10 p-4 md:p-10 flex flex-col items-center gap-6 lg:max-w-[90%] mx-auto shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* College Image */}
        <motion.div
          className="w-full relative aspect-square sm:aspect-[4/3] md:aspect-video lg:aspect-[16/7] overflow-hidden rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Image
            src="/college.png"
            alt="College"
            fill
            priority
            className="object-cover relative z-0"
            sizes="(max-width: 640px) 100vw,
                  (max-width: 768px) 100vw,
                  (max-width: 1024px) 100vw,
                  100vw"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center mt-6 px-4 sm:px-6 md:px-10 text-[#1E3851]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our College Legacy and Vision
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-full mx-auto">
            Guru Dronacharya College of Education has a proud history of
            nurturing future educators with a focus on ethical teaching and
            community service. Our mission is to develop competent, innovative,
            and dedicated teachers who make a difference. We are accredited by
            leading educational authorities and continuously strive for
            excellence in teacher training, ensuring our students are equipped
            with the latest pedagogical skills and values.
          </p>
        </motion.div>
      </motion.section>

      {/* Director's Message */}
      <motion.section
        className="mt-5 flex flex-col md:flex-row items-center gap-8 max-w-[90%] mx-auto mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Director Image */}
        <motion.div
          className="relative w-full md:w-1/2 aspect-square flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Radiant Background */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle, rgba(96,165,250,0.35), rgba(236,72,153,0.25), transparent_70%)] blur-3xl scale-110"
          />

          {/* Circular Image */}
          <div className="relative z-10 w-3/4 sm:w-2/3 md:w-4/5 lg:w-3/4 aspect-square rounded-full overflow-hidden shadow-2xl border border-white/40">
            <Image
              src="/hero1.jpg"
              alt="Director"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Director Message */}
        <motion.div
          className="w-full md:w-1/2 bg-white/90 backdrop-blur-md p-5 sm:p-6 md:p-10 lg:p-14 xl:p-16 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl text-center md:text-left flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E3851] mb-4 sm:mb-5 md:mb-6">
            Director's Message
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-3 sm:mb-4">
            Once we understand your needs, we define a clear roadmap. Through
            expert consultation, data-driven insights, and technical analysis,
            we craft a tailored plan that ensures every step adds measurable
            value.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            We combine domain expertise with innovation-driven thinking and
            outline processes for seamless execution.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default About;
