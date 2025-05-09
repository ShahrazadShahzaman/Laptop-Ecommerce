import { motion } from 'framer-motion';
import { fadeIn, fadeUp, slideLeft, slideRight } from "../../Animations/Variants";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <motion.section
      className="bg-[#EAEBED] py-12 px-4 md:px-16 text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={fadeIn} className="text-3xl font-bold text-[#244D61] text-center mb-8">
        Ready to Experience the Best?
      </motion.h2>
      <motion.p variants={slideLeft} className="text-[#244D61] mb-6">
        Explore our latest laptops and find the one that suits your needs.
      </motion.p>

      <Link to="/products"
      >
      <motion.button variants={slideRight} className="bg-[#244D61] hover:bg-[#5689C0] text-white font-medium py-2 px-6 rounded-2xl hover:scale-125 transition duration-300 shadow-md hover:shadow-[0_0_20px_#75E2FF]">
        Browse Products
      </motion.button>
      </Link>
    </motion.section>
  );
};

export default CallToAction;
