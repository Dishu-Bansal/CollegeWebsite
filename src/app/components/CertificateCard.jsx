'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const CertificateCard = ({ frontSrc, backSrc }) => {
  const [frontFlipped, setFrontFlipped] = useState(false);

  const backImage = backSrc || frontSrc;

  return (
    <motion.div
      className="
        relative
        w-full
        max-w-[260px]
        sm:max-w-[300px]
        md:max-w-[360px]
        lg:max-w-[440px]
        xl:max-w-[500px]
        aspect-[3/4] 
      "
      style={{ perspective: 1200 }}
      whileHover="hover"
    >
      {/* BACK STACKED CARD */}
      <motion.img
        src={backImage}
        alt="Certificate back"
        className="absolute inset-0 w-full h-full object-contain rounded-lg "
        initial={{ rotate: 20, y: 8, opacity: 0 }}
        animate={frontFlipped ? { rotate: 20, y: 0, opacity: 0.25 } : {}}
        variants={{
          hover: { rotate: 0, y: 0, opacity: 0.35 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* FRONT FLIP CARD */}
      <motion.img
        src={frontSrc}
        alt="Certificate front"
        className="relative z-10 w-full h-full object-contain rounded-lg"
        style={{ backfaceVisibility: "hidden" }}
        initial={{ rotateY: 180 }}
        whileInView={{ rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={() => setFrontFlipped(true)}
      />
    </motion.div>
  );
};

export default CertificateCard;



// 'use client'
// import { useState } from "react";
// import { motion } from "framer-motion";

// const CertificateCard = () => {
//   const [frontFlipped, setFrontFlipped] = useState(false);

//   return (
//     <section className="min-h-full mt-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 border-2 border-blue-500">
//       <motion.div
//         className="
//           relative
//           w-[80vw] max-w-[220px] h-[120vw] max-h-[300px]
//           sm:w-[65vw] sm:max-w-[260px] sm:h-[95vw] sm:max-h-[360px]
//           md:w-[50vw] md:max-w-[300px] md:h-[120vw] md:max-h-[420px]
//           lg:w-[45vw] lg:max-w-[340px] lg:h-[145vw] lg:max-h-[460px]
//         "
//         style={{ perspective: 1200 }}
//         whileHover="hover"
//       >
//         {/* BACK STACKED CARD */}
//         <motion.img
//           src="/certificate2.svg"
//           alt="Certificate back"
//           className="absolute inset-0 w-full h-full object-contain rounded-lg"
//           initial={{ rotate: 20, y: 8, opacity: 0 }}
//           animate={frontFlipped ? { rotate: 20, y: 0, opacity: 0.25 } : {}}
//           variants={{
//             hover: { rotate: 0, y: 0, opacity: 0.35 } // straighten slightly on hover
//           }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         />

//         {/* FRONT FLIP CARD */}
//         <motion.img
//           src="/certificate2.svg"
//           alt="Certificate front"
//           className="relative z-10 w-full h-full object-contain border-2 border-red-600 rounded-lg"
//           style={{ backfaceVisibility: "hidden" }}
//           initial={{ rotateY: 180 }}
//           whileInView={{ rotateY: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           onAnimationComplete={() => setFrontFlipped(true)} // trigger back card animation
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default CertificateCard;
