import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { fadeIn } from "../../Animations/Variants";

const Topbar = ({ onSidebarToggle, onMobileSidebarToggle }) => {
  return (
    <>
      <motion.div variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="w-full p-4 bg-white shadow-md flex items-center justify-between">

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={onMobileSidebarToggle}>
            <Menu className="text-[#244D61]" />
          </button>
        </div>

        <h1 className="text-xl font-semibold text-[#244D61]">
            Laptop Admin
        </h1>

        {/* Desktop */}

        <div className="hidden md:block">
            <button onClick={onSidebarToggle} className="text-[#244D61]">
                <Menu/>
            </button>

        </div>
      </motion.div>
    </>
  );
};
export default Topbar;
