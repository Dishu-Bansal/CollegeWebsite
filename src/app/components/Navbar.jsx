import MenuButton from "./MenuButton.jsx";
import Image from "next/image.js";
export default function Navbar() {
  return (
    <div className="relative lg:mx-40 sm:mx-10">
      {/* Navbar */}
      <nav
        className="
          bg-transparent
          flex items-center justify-between
          px-4 sm:px-6 md:px-5 lg:px-10
          py-8
        "
      >
        {/* Logo + Title */}
        <div className="flex items-center gap-3 flex-1 pr-4">
          {/* Logo */}
          <Image
            src="/logo1.svg"
            alt="College Logo"
            width={100}
            height={100}
            className="
    w-20 h-20
    sm:w-20 sm:h-20
    md:w-28 md:h-28
    lg:w-32 lg:h-32
    object-contain
    shrink-0
  "
            priority
          />

          {/* Title */}
          <h1
            className="
              font-semibold font-montserrat text-[#1E3851]
    text-lg sm:text-2xl md:text-xl lg:text-3xl
    font-sans
    leading-tight
    tracking-tight
    wrap-break-word
            "
          >
            Guru Dronacharya College of Education
          </h1>
        </div>

        {/* Spacer to prevent overlap with fixed button */}
        <div className="w-14 sm:w-16 md:w-20"></div>
      </nav>

      {/* Fixed Sticky MenuButton */}
      <div className="fixed top-6 right-4 lg:right-45 z-50">
        <MenuButton />
      </div>
    </div>
  );
}
