import { motion } from "framer-motion";
import { staggerContainer, fadeUp, zoomIn, fadeUpStaggered } from "../../Animations/Variants";
import { ShieldCheck, Star, Truck } from "lucide-react";

const ChooseUs = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-4 bg-[#F9FAFB]"
      >
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <motion.h2
            variants={zoomIn}
            className="text-3xl md:text-4xl font-bold text-[#244D61]"
          >
            Why Choose Us
          </motion.h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At LapShop, we go beyond just selling laptops. We ensure quality,
            trust, and satisfaction from start to finish.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-6"
          >
            <motion.div
              variants={fadeUpStaggered}
              className="bg-white rounded-xl shadow-md p-6 space-y-4"
            >
              <ShieldCheck size={40} className="mx-auto text-[#5689C0]" />
              <h4 className="font-semibold text-lg">Trusted Warranty</h4>
              <p className="text-sm text-gray-500">
                Every laptop comes with a warranty & verified condition checks.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpStaggered}
              className="bg-white rounded-xl shadow-md p-6 space-y-4"
            >
              <Star size={40} className="mx-auto text-[#75E2FF]" />
              <h4 className="font-semibold text-lg">Top Rated Products</h4>
              <p className="text-sm text-gray-500">
                We list only the most reliable and high-performance laptops.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpStaggered}
              className="bg-white rounded-xl shadow-md p-6 space-y-4"
            >
              <Truck size={40} className="mx-auto text-[#244D61]" />
              <h4 className="font-semibold text-lg">Fast & Safe Delivery</h4>
              <p className="text-sm text-gray-500">
                Quick, tracked, and secure shipping across all major cities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
export default ChooseUs;
