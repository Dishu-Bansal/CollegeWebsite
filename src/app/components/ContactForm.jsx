"use client";
import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ContactForm = () => {
  return (
    <motion.form
      className="w-full max-w-lg mx-auto bg-white/90 opacity-20 p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={formVariants}
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Full Name */}
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold text-gray-600 mb-1">Full Name</h1>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCE48] transition"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold text-gray-600 mb-1">Email</h1>
        <input
          type="email"
          placeholder="your.email@company.com"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCE48] transition"
          required
        />
      </div>

      {/* Mobile Number */}
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold text-gray-600 mb-1">Mobile Number</h1>
        <input
          type="tel"
          placeholder="Your Mobile Number"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCE48] transition"
          required
        />
      </div>

      {/* How can we help */}
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold text-gray-600 mb-1">How can we help?</h1>
        <textarea
          placeholder="Tell us about your project requirements, challenges, or goals..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCE48] transition resize-none h-32"
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full sm:w-1/2 mx-auto mt-4 flex justify-center cursor-pointer">
  <div className="relative w-full">
    {/* Border Layer */}
    <div className="absolute inset-0 border bg-white/10 border-white z-1 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-300"></div>
    
    {/* Button Content */}
    <div className="relative bg-[#1E3851]  text-white font-semibold py-3 rounded-2xl text-center">
      Submit
    </div>
  </div>
</button>


    </motion.form>
  );
};

export default ContactForm;
