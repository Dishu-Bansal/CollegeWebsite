"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HomeStats from "../components/HomeStats";
import EventsGallery from "../components/EventsGallery";
import Contact from "../components/Contact";
import ContactButton from "../components/ContactButton";


const Schemes = () => {
  return (
    <main className="min-h-screen max-w-[95%] mx-auto mt-10 px-4 sm:px-6 mb-10">
      <motion.section
        className="relative w-full lg:max-w-[85%] mx-auto h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/scheme.jpg"
          alt="Contact Hero"
          fill
          className="object-cover blur-xs"
          priority
        />
        <div className="absolute inset-0 bg-white/40 flex items-center justify-center px-4">
          <motion.div
            className="text-center text-white max-w-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-bold leading-tight text-2xl text-[#1E3851] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block">Together we <span className="underline decoration-wavy  decoration-yellow-400 underline-offset-5 ">Learn.</span></span>
              <span className="block mt-4">Together we make a difference</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>
      {/* stats div */}
      <HomeStats />
        {/* image carousal with info  */}
        <div className="bg-white shadow-2xl rounded-2xl border-[#1E3851] p-10 ">
        <EventsGallery/>
        {/* contact div */}
        </div>
        <div>
        <Contact />
        
        </div>
    </main>
  );
};

export default Schemes;
