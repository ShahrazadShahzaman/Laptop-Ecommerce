import CategoryCard from "../../Components/CategoryCard";
import GamingLaptop from "../../assets/gaming-laptop.jpg";
import BusinessLaptop from "../../assets/business-laptop.jpeg";
import StudentLaptop from "../../assets/student-laptop.jpg";
import { motion } from "framer-motion";
// Dummy Data
const Categories = [
  {
    title: "Gaming Laptops",
    image: GamingLaptop,
    link: "/products/gaming",
  },
  {
    title: "Business Laptops",
    image: BusinessLaptop,
    link: "/products/business",
  },
  {
    title: "Student Laptops",
    image: StudentLaptop,
    link: "/products/student",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1.9, ease: "easeOut" } },
};

const CategorySection = () => {
  // CategorySection Start
  return (
    <section className="py-12 bg-[#EAEBED]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#244D61] text-center mb-8"
        >
          Featured Categories
        </motion.h2>
        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Categories.map((cat, i) => (
            <motion.div key={i} variants={item}>
              <CategoryCard {...cat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default CategorySection;
