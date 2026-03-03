'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImages from "./HeroImages";
import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <section className="relative w-full h-full flex justify-center ">
      {/* Main content container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="min-w-[80%] mx-auto bg-white/90 opacity-100 rounded-2xl text-[#1E3851] p-4 sm:p-6 md:p-8 lg:p-10 mt-2 lg:mt-10"
      >
        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center font-semibold flex justify-center items-center"
        >
          Empowering <span className="underline decoration-wavy  decoration-yellow-400 underline-offset-5 ml-2">Educators.</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center font-semibold mt-4 flex justify-center items-center "
        >
          Transforming Futures.
        </motion.h1>

        {/* Paragraph with HeroImages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className=" max-w-3/4 mx-auto  mt-4 sm:mt-6 md:mt-8 p-2 sm:p-4 md:p-6 flex flex-col lg:flex-row items-center justify-center gap-4"
        >
          {/* Two images at the start */}
          <div className="flex gap-2 mb-2 lg:mb-0">
            <HeroImages src="/hero1.jpg" alt="Image 1" />
            <HeroImages src="/hero2.jpg" alt="Image 2" />
          </div>

          {/* Paragraph */}
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold flex-1 leading-snug">
            Welcome to <span className="font-bold lg:text-2xl">Guru Dronacharya College of Education,</span>
            <span className="block">empowering passionate learners to become impactful teachers of tomorrow.</span>
          </p>

          {/* Two images at the end */}
          <div className="flex gap-2 mt-2 lg:mt-0">
            <HeroImages src="/hero3.jpg" alt="Image 3" />
            <HeroImages src="/hero4.jpg" alt="Image 4" />
          </div>
        </motion.div>

        {/* Contact us button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-1 flex justify-center"
        >
          <ContactButton />
        </motion.div>

        {/* Hero Section image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 mx-auto h-auto relative"
        >
          <Image
            src="/heroImage.jpg"
            alt="Hero"
            width={1028} // rectangular dimensions
            height={604}
            priority
            quality={70}
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
