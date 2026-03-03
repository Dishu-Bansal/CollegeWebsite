"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import CollegeMap from "../components/CollegeMap";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <main className="min-h-screen max-w-[95%] mx-auto mt-10 px-4 sm:px-6 mb-10">
      {/* Hero Section */}
      <motion.section
        className="relative w-full lg:max-w-[85%] mx-auto h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/contact.jpg"
          alt="Contact Hero"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-white/20 flex items-center justify-center px-4">
          <motion.div
            className="text-center text-white max-w-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-bold leading-tight text-2xl text-[#1E3851] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block">Your Journey Starts From <span className="underline decoration-wavy  decoration-yellow-400 underline-offset-5 ">Here.</span></span>
              <span className="block mt-2">We&apos;re Here For You</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section: Side by Side */}
      <motion.div
        className="flex flex-col md:flex-row items-start gap-8 mt-12 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        {/* Get in Touch Card */}
        <motion.div
          className="bg-[#FFCE48] border rounded-2xl p-6 sm:p-10 w-full md:w-1/2 shadow-lg flex flex-col items-center sm:items-start gap-4"
          variants={itemVariants}
        >
          <Image
            src="/Component 3.svg"
            alt="Get in Touch Icon"
            width={77}
            height={77}
            className="mx-auto sm:mx-0"
          />

          <h1 className="pt-4 sm:pt-6 font-bold text-[#1E3851] leading-relaxed text-3xl sm:text-4xl text-center sm:text-left">
            Get In Touch
          </h1>
        

          <p className="mt-2 text-gray-800 text-base sm:text-lg text-center sm:text-left">
            Have any questions or want to work with us? Reach out and we'll get
            back to you promptly.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="w-full md:w-4/5" variants={itemVariants}>
          <ContactForm />
        </motion.div>
      </motion.div>
      {/* map */}
      <motion.div
        className="mt-16 max-w-8xl border-2 border-[#1E3851] mx-auto rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CollegeMap />
      </motion.div>
    </main>
  );
};

export default Contact;
