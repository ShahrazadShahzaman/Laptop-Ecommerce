import { motion, AnimatePresence } from "framer-motion";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy Data
const Banners = [
  {
    title: "Unleash True Power",
    subtitle: "Explore the world of gaming laptops built for victory.",
    img: Banner1,
  },
  {
    title: "Boost Your Productivity",
    subtitle: "Modern business laptops tailored for your success.",
    img: Banner2,
  },
  {
    title: "Learn Without Limits",
    subtitle: "Find student laptops that empower every learner.",
    img: Banner3,
  },
];

const HeroBanner = () => {
  const [index, setIndex] = useState(0);

  // AutoSlide Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % Banners.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? Banners.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % Banners.length);
  };

  // Banner Section Start
  return (
    <>
      <section className="relative w-full h-[70vh] overflow-hidden">
        
          <motion.div
            key={index}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration:6 , ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <img
              src={Banners[index].img}
              alt={Banners[index].title}
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"/>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center pb-16 px-4">
            <motion.div
              key={index + "-text"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#EAEBED] text-center drop-shadow-lg">
                {Banners[index].title}
              </h2>
              <p className="text-lg mt-4 text-[#EAEBED] text-center">
                {Banners[index].subtitle}
              </p>
            </motion.div>
          </div>

          {/* Arrow Buttons */}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#5689C0]/30 hover:bg-[#5689C0]/50 text-white p-2 rounded-full z-20"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#5689C0]/30 hover:bg-[#5689C0]/50 text-white p-2 rounded-full z-20"
          >
            <ChevronRight />
          </button>

          {/* Dots For Slides */}
          <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
            {Banners.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                  i === index ? "bg-[#75E2FF]" : "bg-white/50"
                }`}
              />
            ))}
          </div>
      </section>
    </>
  );
};
export default HeroBanner;
