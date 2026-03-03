"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Logo with grow animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1], // premium easing curve
        }}
        className="flex flex-col items-center gap-4"
      >
        <Image
          src="/logo1.svg"
          alt="GD College Logo"
          width={120}
          height={120}
          priority
        />
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3851]"
        >
          GD College of Education
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Loader;
