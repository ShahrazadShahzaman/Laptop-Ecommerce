import { motion } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  slideLeft,
  slideRight,
} from "../../Animations/Variants";
import storyimg from "../../assets/story.jpg";

const OurStory = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-4 bg-white"
      >
        <motion.div className="text-center mb-12">
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-[#244D61]"
          >
            Our Story
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={slideRight} className="space-y-4">
            <p className="text-gray-600">
              What began as a passion project evolved into a full-scale
              e-commerce platform serving hundreds of happy customers. Our
              mission is to combine value, performance, and trust in every
              laptop we offer.
            </p>
            <p className="text-gray-600">
              From sourcing premium devices to offering expert support, we’re
              committed to making your laptop shopping experience seamless.
            </p>
          </motion.div>
          <motion.img
            variants={slideLeft}
            src={storyimg}
            alt="Our Story"
            className="w-full h-80 rounded-lg shadow-lg object-cover"
          />
        </div>
      </motion.section>
    </>
  );
};
export default OurStory;
