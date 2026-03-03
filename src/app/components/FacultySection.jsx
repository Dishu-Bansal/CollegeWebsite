import { FiDownload } from "react-icons/fi";
import FacultyCard from "./FacultyCard";

const FacultySection = ({ title, facultyData, downloadLink }) => {
  return (
    <section aria-labelledby={`${title}-section-title`} className="mt-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2 sm:px-0 py-4  lg:mx-8">
        <h2
          id={`${title}-section-title`}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1E3851]"
        >
          {title}
        </h2>

        {downloadLink && (
          <a
            // href={/faculty} commented since no data rightnow 
            className="self-start sm:self-auto border bg-[#1E3851] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl lg:text-2xl flex items-center gap-2 sm:gap-3 transition hover:opacity-90"
          >
            <FiDownload className="text-xl sm:text-2xl" />
            <span>Download details</span>
          </a>
        )}
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 justify-items-center">
        {facultyData.map((faculty, index) => (
          <FacultyCard
            key={index}
            name={faculty.name}
            designation={faculty.designation}
            imageUrl={faculty.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default FacultySection;
