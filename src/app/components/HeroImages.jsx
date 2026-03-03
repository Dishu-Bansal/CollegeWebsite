import Image from "next/image";

export default function HeroImages({ src, alt }) {
  return (
    <div className="z-10 rounded-full overflow-hidden  w-12 h-12 sm:w-20 sm:h-20">
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        priority
        className="w-full h-full object-cover"
      />
    </div>
  );
}
