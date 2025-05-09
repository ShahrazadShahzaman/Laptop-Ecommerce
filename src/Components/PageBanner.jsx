import { motion } from "framer-motion";
import pagebanner from "../assets/bannerpage.jpg";
import { fadeUp, zoomIn } from "../Animations/Variants";

const PageBanner = ({ title, subtitle }) => {
  return (
    <>
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* BG Image */}
      <img
        src= {pagebanner}
        alt="Page Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
      <motion.div className="relative z-20 text-white text-center px-4"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">{title}</h1>
        {subtitle && <p className="mt-3 text-lg md:text-xl opacity-90 drop-shadow-sm max-w-2xl mx-auto">{subtitle}</p>}
      </motion.div>
    </div>
    </>
  );
};
export default PageBanner;
