import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ProgramCard = ({ title, description, image, link }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center bg-[#1E3851] p-10 rounded-2xl">
        
        {/* Left side text */}
        <div className="order-2 md:order-2 lg:order-1 p-6 sm:p-8 lg:p-10">
          <h2 className="text-xl  sm:text-2xl lg:text-3xl font-semibold text-white mb-4">
            {title}
          </h2>

          <p className="text-white/99 text-sm sm:text-base font-montserrat lg:text-lg mb-6 leading-relaxed">
            {description}
          </p>

          <Link
            href={link}
            className="text-[#1E3851] font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base"
          >
            <div
              className="group border-2 bg-[#1E3851] p-2 rounded-2xl 
              text-white font-semibold flex items-center justify-center gap-2
              cursor-pointer transition-all duration-300 ease-in-out
              hover:bg-linear-to-r hover:from-[#1E3851] hover:to-[#3A5A78]
              hover:scale-105 hover:shadow-xl hover:border-[#3A5A78]"
            >
              Read More
              <FiArrowRight className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </div>
          </Link>
        </div>

        {/* Right side image */}
        <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-120 order-1 md:order-1 lg:order-2">
          <Image
            src={image}
            alt="program image"
            fill
            className="object-cover rounded-lg shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
