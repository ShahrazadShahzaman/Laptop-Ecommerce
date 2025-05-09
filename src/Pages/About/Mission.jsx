import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, zoomIn } from "../../Animations/Variants";
import { Target , Rocket, Headphones} from "lucide-react";
import missionimg from "../../assets/mission.jpg"

const Mission = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-4 bg-white"
      >
       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          variants={slideLeft}
          className="w-full"
        >
          <img
            src={missionimg}
            alt="Our Mission"
            className="w-full rounded-lg shadow-xl"
          />
        </motion.div>

        <motion.div
          variants={slideRight}
          className="space-y-8 text-[#244D61]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We aim to redefine the laptop shopping experience by delivering premium-quality laptops, exceptional service, and a commitment to your digital success.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <motion.div variants={zoomIn} className="flex flex-col items-center space-y-2">
              <Target size={36} className="text-[#75E2FF]" />
              <h4 className="font-semibold text-lg">Precision</h4>
              <p className="text-sm text-gray-500">Curated laptops tailored to your needs.</p>
            </motion.div>

            <motion.div variants={zoomIn} className="flex flex-col items-center space-y-2">
              <Rocket size={36} className="text-[#5689C0]" />
              <h4 className="font-semibold text-lg">Innovation</h4>
              <p className="text-sm text-gray-500">Latest models with cutting-edge features.</p>
            </motion.div>

            <motion.div variants={zoomIn} className="flex flex-col items-center space-y-2">
              <Headphones size={36} className="text-[#244D61]" />
              <h4 className="font-semibold text-lg">Support</h4>
              <p className="text-sm text-gray-500">Dedicated service with every purchase.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </motion.section>
    </>
  );
};
export default Mission;
