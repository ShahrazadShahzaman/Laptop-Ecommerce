import { motion } from "framer-motion";
import { staggerContainer, fadeUpStaggered, fadeIn, fadeUp } from "../../Animations/Variants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { dummyProducts } from "../ProductPage";
import { useRef } from "react";
import { Link } from "react-router-dom";

const TopSelling = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-4 md:px-10 bg-[#EAEBED]"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold text-[#244D61] text-center mb-8"
        >
          Top Selling Laptops
        </motion.h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#244D61] hover:bg-[#5689C0] text-white p-2 rounded-full shadow-md hidden md:flex"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#244D61] hover:bg-[#5689C0] text-white p-2 rounded-full shadow-md hidden md:flex"
          >
            <ChevronRight />
          </button>

          {/* Scrollable Product Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 px-4 scroll-smooth snap-x snap-mandatory no-scrollbar overflow-visible"
          >
            {dummyProducts.slice(0, 6).map((item) => (
              <motion.div
              key={item.id}
              variants={fadeUpStaggered}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[280px] md:min-w-[300px] lg:min-w-[320px] bg-white rounded-2xl shadow-md hover:shadow-2xl p-4 flex-shrink-0 snap-start text-center transition-all duration-300 ease-in-out"
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  whileHover={{
                    scale: 1.30,
                    zIndex: 10,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="w-full h-40 object-contain mb-4 mx-auto transition-transform duration-300"
                />
                <h3 className="text-lg font-bold text-[#244D61] mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Specs: {item.specs}
                </p>
                <p className="text-[#5689C0] font-semibold text-md mb-3">
                  ${item.price.toLocaleString()}
                </p>
                <Link
                  to={`/product/${item.id}`}
                  className="text-sm text-white bg-[#244D61] px-5 py-2 rounded-lg hover:bg-[#5689C0] hover:scale-115 hover:shadow-[0_0_10px_2px_rgba(117,226,255,0.6)] transition-all duration-300 ease-in-out inline-block"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default TopSelling;
