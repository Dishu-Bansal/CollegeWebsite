"use client";

import { useState } from "react";
import Image from "next/image";

const FacultyCard = ({ name, designation, imageUrl }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <article
        className="w-full sm:max-w-xs md:max-w-sm lg:max-w-[18rem] rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer relative"
        onClick={handleClick}
      >
        {/* Image */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 shrink-0">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>

        {/* Text & Arrow */}
        <div className="bg-[#DDDDDD] w-full p-4 flex justify-between items-center flex-1">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              {name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              {designation}
            </p>
          </div>

          {/* Arrow */}
          <span className="text-xl sm:text-2xl md:text-3xl transition-transform duration-300 transform group-hover:scale-150">
            →
          </span>
        </div>
      </article>

      {/* Fullscreen Overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
          onClick={handleClose}
        >
          <div
            className="
        bg-black/50 rounded-2xl overflow-hidden shadow-xl
        w-full max-w-7xl h-[50vh] lg:h-[75vh]
        flex flex-col lg:flex-row
      "
          >
            {/* Image */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:w-1/2 lg:h-auto">
              <Image src={imageUrl} alt={name} fill className="object-cover" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl text-white">
                {designation}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FacultyCard;
