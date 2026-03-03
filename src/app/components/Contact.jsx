"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full flex justify-center py-16 px-4 sm:px-6 ">
      <motion.div
        className="flex flex-col md:flex-col lg:flex-row gap-8 md:gap-10 lg:gap-20 max-w-7xl w-full items-center "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Get In Touch */}
        <motion.div
          className="border bg-[#FFCE48] p-6 sm:p-8 md:p-12 rounded-2xl w-full max-w-md text-center md:text-center lg:text-start"
          variants={itemVariants}
        >
          <Image
            src="/Component 3.svg"
            alt="get in touch"
            width={77}
            height={77}
            className="mx-auto lg:mx-0 mb-4 "
          />
          <h1 className="font-bold text-[#1E3851] text-3xl sm:text-4xl md:text-4xl lg:text-4xl  font-montserrat ">
            Get In Touch
          </h1>
        </motion.div>

        {/* Info */}
        <motion.div
          className="bg-white/80 rounded-2xl p-6  sm:p-8 md:p-4 w-full flex flex-col gap-6 "
          variants={itemVariants}
        >
          {/* Email */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-4"
            variants={itemVariants}
          >
            {/* Icon */}
            <div className="rounded p-2 shrink-0 flex items-center justify-center">
              <Image src="/email.svg" alt="Email" width={40} height={40} />
            </div>

            {/* Text */}
            <span className="text-lg sm:text-xl break-all font-montserrat  font-semibold text-center sm:text-left">
              gdcollegebhuna@gmail.com
            </span>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-4"
            variants={itemVariants}
          >
            <div className="rounded p-2 shrink-0 flex items-center justify-center">
              <Image src="/phone.svg" alt="Phone" width={40} height={40} />
            </div>
            <span className="text-lg sm:text-xl lg:pt-3 break-all font-montserrat  font-semibold text-center sm:text-left">
              +91 9416059000, +91 9991017666
            </span>
          </motion.div>

          {/* Address */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4"
            variants={itemVariants}
          >
            <div className="rounded p-2 shrink-0  flex items-center justify-center">
              <Image
                src="/Container.svg"
                alt="Location"
                width={40}
                height={40}
              />
            </div>
            <span className="text-lg sm:text-xl lg:pt-3 break-all font-montserrat  font-semibold text-center sm:text-left">
              Guru Dronacharya College of Education, Fatehabad Road, Bhuna, near
              Radha Swami Satsang Bhawan, Fatehabad, Haryana 125111, India.
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
