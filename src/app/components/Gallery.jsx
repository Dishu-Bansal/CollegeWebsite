import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <section
      className=" border border-red-500 rounded-lg h-full "
      style={{
        background: "linear-gradient(114.99deg, #365577 0%, #03101D 100%)",
      }}
    >
        <div>
            <h1 className="text-white/80  font-semibold text-6xl text-center mt-10">Gallery</h1>
        </div>
      <GalleryCard />
    </section>
  );
};

export default Gallery;
