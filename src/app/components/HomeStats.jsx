'use client';
import StatsDiv from "./StatsDiv";
import { motion } from "framer-motion";

const statsData = [
    { number: "700+", label: "Students" },
    { number: "3000+", label: "Graduates" },
    { number: "20", label: "Years" },
    { number: "1000+", label: "Alumni" },
];

const HomeStats = () => {
    return (
        <section className="relative max-h-full w-full">
            {/* Content */}
            <div className="relative z-10 py-24 flex flex-wrap justify-center gap-16">
                {statsData.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.3, delay: index * 0.2, type: "spring", stiffness: 100 }}
                    >
                        <StatsDiv
                            number={stat.number}
                            label={stat.label}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HomeStats;
