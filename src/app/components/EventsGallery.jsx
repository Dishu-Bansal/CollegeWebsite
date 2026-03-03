"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const imageData = [
  {
    Name: "Blood Donation",
    info: "Organized to encourage voluntary blood donation and save lives.",
    image: "/hero1.jpg",
  },
  {
    Name: "Yoga Day Celebration",
    info: "Celebrating International Yoga Day with group sessions and awareness about healthy living.",
    image: "/hero2.jpg",
  },
  {
    Name: "Mahashivratri Celebration",
    info: "Cultural and spiritual event with prayers, bhajans, and community gathering.",
    image: "/hero3.jpg",
  },
  {
    Name: "World Green Day",
    info: "Activities promoting environmental awareness, tree plantation, and sustainability practices.",
    image: "/hero4.jpg",
  },
  {
    Name: "Old Age Home Visit",
    info: "Spending time with elderly residents, offering support, and sharing joy.",
    image: "/hero1.jpg",
  },
  {
    Name: "Orphanage Visit",
    info: "Engaging with children, distributing essentials, and organizing fun activities.",
    image: "/hero2.jpg",
  },
  {
    Name: "Awareness Programs",
    info: "Campaigns to spread knowledge on health, hygiene, education, and social issues.",
    image: "/hero3.jpg",
  },
];

const EventsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full mx-auto mt-10">
      {/* Buttons */}
      <div className="mb-6 px-2 sm:px-0 flex items-center justify-center mx-auto">
  <div
    className="
      flex gap-2 overflow-x-auto sm:flex-nowrap sm:whitespace-nowrap
      
      lg:flex lg:flex-nowrap lg:overflow-x-auto lg:gap-4
    "
  >
    {imageData.map((item, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`px-4 py-2 rounded-lg border-2 text-center flex-shrink-0 transition whitespace-nowrap ${
          activeIndex === index
            ? "bg-[#1E3851] text-white border-[#1E3851]"
            : "bg-white text-[#1E3851] border-[#1E3851] hover:bg-[#1E3851] hover:text-white"
        }`}
      >
        {item.Name}
      </button>
    ))}
  </div>
</div>


      {/* Image and Text */}
      <div className="w-full flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col md:flex-row lg:flex-col items-center gap-4 px-2 sm:px-6"
          >
            {/* Image */}
            <div className="relative w-full sm:w-64 md:w-64  lg:w-full h-64 sm:h-64 md:h-64 lg:h-96 flex-shrink-0  overflow-hidden">
              <Image
                src={imageData[activeIndex].image}
                alt={imageData[activeIndex].Name}
                fill
                className="object-contain rounded-3xl"
                priority
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left lg:text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3851] mb-2">
                {imageData[activeIndex].Name}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 px-0 lg:px-4 mt-2">
                {imageData[activeIndex].info}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventsGallery;
