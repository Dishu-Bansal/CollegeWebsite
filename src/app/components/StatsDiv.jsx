const StatsDiv = ({ number, label }) => {
    return (
        <div className="flex justify-center rounded-xl border-2 border-white">
            <div className="flex flex-col items-center rounded-xl justify-center 
                            bg-white/70 
                            w-[90vw] max-w-93 h-62.5sm:w-[80vw] sm:h-50 md:w-93 md:h-62.5
                            px-6 py-6 transform rotate-4 hover:rotate-0 transition-transform duration-500 ease-in-out hover:shadow-xl">
                <h1 className="text-5xl font-bold text-[#1E3851] md:text-6xl sm:text-4xl">{number}</h1>
                <h2 className="text-xl mt-4 md:text-xl sm:text-lg font-semibold ">{label}</h2>
            </div>
        </div>
    );
};

export default StatsDiv;
