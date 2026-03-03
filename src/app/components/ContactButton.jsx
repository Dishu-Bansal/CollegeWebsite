import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
export default function ContactButton() {
  return (
    <div className="p-2 mt-2 flex justify-center">
      <div className="relative inline-block group">
        {/* Main Button */}
        {/* Main Button wrapped in Link */}
        <Link
          href="/contact-us"
          passHref
          className="
            relative z-10
            flex items-center justify-center gap-2
            px-5 py-2.5
            sm:px-6 sm:py-3
            md:px-8 md:py-2
            rounded-full
            border-2 border-[#BD9526]
            bg-[#FFCE48]
            font-medium
            text-base sm:text-lg md:text-xl lg:text-2xl
            -rotate-2 sm:-rotate-3 md:-rotate-5
            transition-all duration-300 ease-out
            group-hover:rotate-0
            focus:outline-none cursor-pointer
          "
        >
          Contact Us
          {/* Animated Arrow */}
          <motion.span
            animate={{ x: [0, 5, 0] }} // move right then back
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaArrowRight />
          </motion.span>
        </Link>

        {/* Background Layer */}
        <div
          className="
            absolute inset-0
            rounded-full
            bg-[#FFEBB3]
            transition-all duration-300 ease-out
            group-hover:rotate-0
          "
        />
      </div>
    </div>
  );
}
