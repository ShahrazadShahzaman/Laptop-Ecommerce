import { useParams } from "react-router-dom";
import { product } from "./ProductPage";
import ProductCard from "../Components/ProductCard";
import { motion } from "framer-motion";
import { fadeUp } from "../Animations/Variants";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const filteredProducts = product.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <>
      <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
      <motion.h2  initial="hidden"
          whileInView="visible"
         variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#244D61] text-center w-full">
             {categoryName} Available Laptops
            </motion.h2>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default CategoryPage;
