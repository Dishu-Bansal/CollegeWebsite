"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import {
  FaCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Programs", link: "/programs" },
  { name: "Faculty", link: "/faculty" },
  { name: "About Us", link: "/about-us" },
  { name: "Contact Us", link: "/contact-us" },
  { name: "Initiatives & Schemes", link: "/schemes" },
];

const contactDetails = [
  {
    label: "Visit Us:",
    value:
      "Guru Dronacharya College of Education Fatehabad Road, Bhuna, near Radha Swami Satsang Bhawan, Fatehabad, Haryana 125111, India",
    icon: <FaMapMarkerAlt />,
  },
  {
    label: "Phone No:",
    value: "+91 9416059000, +91 9991017666",
    icon: <FaPhoneAlt />,
  },
  {
    label: "Email:",
    value: "gdcollegebhuna@gmail.com",
    icon: <FaEnvelope />,
  },
];

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "tween", duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      x: "100%",
      transition: { type: "tween", duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* Menu Button */}
      <div className="sticky top-4 z-50 flex justify-center px-4">
        <button
          className="cursor-pointer border-2 border-[#BD9526] w-full max-w-4xl bg-[#FFEBB3] rounded-2xl focus:outline-none focus:ring-0"
          onClick={() => setIsOpen(true)}
        >
          <div className="border border-[#F1CF70] rounded-2xl mt-1 bg-[#FFCE48] flex justify-center items-center group overflow-hidden relative p-6 sm:p-8 lg:p-8">
            <img
              src="/menuDots.svg"
              alt="Menu"
              className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-all duration-300 ease-in-out translate-x-0 opacity-100 group-hover:-translate-x-20 group-hover:opacity-0"
            />
            <img
              src="/menuDots.svg"
              alt="Menu Hover"
              className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-all duration-300 ease-in-out translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>
        </button>
      </div>

      {/* Full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center text-white"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Background */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10 bg-white"
              style={{ backgroundImage: "url('/bg.png')" }}
            />

            {/* Close Button */}
            <button
              className="cursor-pointer absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-2xl sm:text-3xl md:text-2xl font-semibold text-[#1E3851] border border-[#1E3851] rounded-4xl bg-[#EBF5FF] lg:rounded-4xl z-10 p-2 sm:p-3 md:p-2 flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <MdClose className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <span className="hidden sm:inline">Close</span>
            </button>

            {/* Menu Content */}
            <div className=" w-full md:max-w-6xl max-w-5xl mx-auto my-4 p-4 flex flex-col md:flex-row gap-6 md:gap-20 min-h-[60vh] md:h-[60vh]">
              {/* Left Div - Contact */}
              <div className=" order-2 md:order-2 lg:order-1 bg-white/70 w-full md:w-1/2 h-auto md:h-full rounded-2xl flex justify-center items-center rotate-3">
                <div className="bg-white/50 h-full w-full rounded-2xl -rotate-3 flex flex-col justify-center items-center p-4 sm:p-1 gap-4 sm:gap-6">
                  <h1 className="text-[#1E3851] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-center">
                    Contact Us
                  </h1>

                  {contactDetails.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-1 max-w-full text-center wrap-break-word"
                    >
                      <div className="flex items-center gap-3 text-[#1E3851]  text-lg sm:text-lg md:text-xl">
                        <div className="text-[#1E3851]  mt-1">{item.icon}</div>
                        <span className="text-lg sm:text-xl md:text-2xl ">
                          {item.label}
                        </span>
                      </div>

                      <div className="text-[#1E3851] font-semibold text-sm sm:text-base md:text-lg lg:text-xl wrap-break-word font-montserrat p-1">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Div - Menu */}
              <div className="border order-1 md:order-1 lg:order-2 border-white/80 bg-white/70 w-full md:w-1/2 h-auto md:h-full rounded-2xl flex justify-center items-center rotate-3">
                <div className="bg-white/80 h-full w-full rounded-2xl -rotate-3 flex flex-col justify-center items-center p-4 sm:p-6 gap-4">
                  <ul className="flex flex-col justify-center items-start gap-2 sm:gap-3 text-[#1E3851] font-semibold font-montserrat text-lg sm:text-lg md:text-2xl lg:text-3xl">
                    {navItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 group cursor-pointer"
                      >
                        <FaCircle className="text-[#1E3851] w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <a
                          href={item.link}
                          className="transition-transform duration-300 group-hover:scale-105 group-hover:underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
