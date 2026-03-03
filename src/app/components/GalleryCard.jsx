'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const GalleryCard = () => {
  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardSpacing, setCardSpacing] = useState(250);
  const containerRef = useRef(null);

  // Responsive spacing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width < 480) setCardSpacing(140); 
        else if (width < 640) setCardSpacing(180);
        else if (width < 768) setCardSpacing(220);
        else if (width < 1024) setCardSpacing(260);
        else setCardSpacing(300);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const dragX = useMotionValue(0);

  const getCardStyle = (index) => {
    let offset = index - currentIndex;
    if (offset < -Math.floor(images.length / 2)) offset += images.length;
    if (offset > Math.floor(images.length / 2)) offset -= images.length;

    return {
      x: offset * cardSpacing,
      scale: offset === 0 ? 1 : 0.75,
      rotateY: offset * -40,
      z: Math.abs(offset) * -400,
      opacity: Math.abs(offset) > 2 ? 0 : 1,
      zIndex: images.length - Math.abs(offset),
    };
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 flex flex-col items-center px-4 sm:px-6" ref={containerRef}>
      {/* 3D carousel container */}
      <div 
        className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden"
        style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
      >
        <AnimatePresence>
          {images.map((img, i) => {
            const style = getCardStyle(i);
            return (
              <motion.div
                key={i}
                style={{ zIndex: style.zIndex }}
                className="absolute w-40 sm:w-52 md:w-64 lg:w-[400px] h-full cursor-grab"
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  z: style.z,
                  opacity: style.opacity,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -50) next();
                  else if (info.offset.x > 50) prev();
                }}
              >
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-white/10"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-8 sm:mt-12">
        <button onClick={prev} className="nav-btn">← Previous</button>
        <button onClick={next} className="nav-btn">Next →</button>
      </div>

      <style jsx>{`
        .nav-btn {
          @apply px-6 sm:px-10 py-2 sm:py-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full transition-all text-base sm:text-lg font-medium backdrop-blur-md;
        }
      `}</style>
    </div>
  );
};

export default GalleryCard;
