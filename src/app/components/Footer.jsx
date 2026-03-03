'use client';
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const importantLinks = [
    { label: "Programs", href: "/programs" },
    { label: "Faculty", href: "/faculty" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Initiatives & Schemes", href: "/schemes" },
  ];

  const otherLinks = [
    { label: "Terms and Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
  ];

  const linkVariant = {
    rest: { scale: 1, color: "#FFCE48", textDecoration: "none" },
    hover: { scale: 1.1, color: "#ffffff", textDecoration: "underline", transition: { type: "spring", stiffness: 300, damping: 20 } },
  };

  const boxVariant = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.05, rotate: 2, transition: { type: "spring", stiffness: 200, damping: 15 } },
  };

  const iconVariant = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300, damping: 12 } },
  };

  return (
    <footer
      className="w-full min-h-full py-2 "
      style={{ background: "linear-gradient(298.15deg, #0C2238 0%, #252E3C 100%)" }}
    >
      <div className="bg-[#0A1621] m-5 sm:m-8 py-10 sm:py-10 px-5 sm:px-10 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">

        {/* GD College Box */}
        <motion.div
          className="text-[#FFCE48] p-4 sm:p-6 md:my-10 bg-[#1E3851] rounded-2xl font-bold text-3xl sm:text-4xl w-fit md:-rotate-90 flex justify-center"
          variants={boxVariant}
          initial="rest"
          whileHover="hover"
        >
          GD College
        </motion.div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center md:justify-start flex-wrap max-w-full">
          
          {/* Important Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-lg sm:text-xl font-semibold text-center md:text-left">Important Links</h2>
            <ul className="flex flex-col gap-2 items-center md:items-start">
              {importantLinks.map((link, idx) => (
                <motion.li key={idx} initial="rest" whileHover="hover" animate="rest" variants={linkVariant}>
                  <a href={link.href}>{link.label}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Other Links just incase for future reference */}
          {/* <div className="flex flex-col gap-4">
            <h2 className="text-white text-lg sm:text-xl font-semibold text-center md:text-left">Other Links</h2>
            <ul className="flex flex-col gap-2 items-center md:items-start">
              {otherLinks.map((link, idx) => (
                <motion.li key={idx} initial="rest" whileHover="hover" animate="rest" variants={linkVariant}>
                  <a href={link.href}>{link.label}</a>
                </motion.li>
              ))}
            </ul>
          </div> */}

        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-white/70 text-sm sm:text-base p-2 mx-10">
        <span className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Copyright © 2025 Guru Dronacharya College of Education. All rights reserved. Empowering Educators for Tomorrow.
        </span>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2 sm:mt-0">
          <motion.a href="https://www.facebook.com" aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer" variants={iconVariant} initial="rest" whileHover="hover">
            <FaFacebookF className="w-5 h-5 text-[#FFCE48] transition-colors" />
          </motion.a>
          <motion.a href="https://www.instagram.com" aria-label="Visit our Instagram page" target="_blank" rel="noopener noreferrer" variants={iconVariant} initial="rest" whileHover="hover">
            <FaInstagram className="w-5 h-5 text-[#FFCE48] transition-colors" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
