import { motion } from "framer-motion";
import { fadeUpStaggered } from "../../../Animations/Variants";
import { Pencil , Trash2} from "lucide-react";

const ProductList = ({ products, handleDelete, setForm, setEditId }) => {
    return(
        <>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={fadeUpStaggered}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-4 flex flex-col relative"
        >
          <div className="relative w-full h-40 overflow-hidden rounded-xl mb-4">
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay buttons */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => {
                  setForm(product);
                  setEditId(product.id);
                }}
                className="bg-[#244D61] text-white text-xs px-2 py-1 rounded hover:bg-[#5689C0] transition"
              >
                <Pencil size={14} className="inline-block mr-1" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition"
              >
               <Trash2 size={14} className="inline-block mr-1" /> 
                Delete
              </button>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-[#244D61] mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 flex-1">{product.description}</p>
          <div className="mt-3 font-bold text-[#5689C0]">$ {product.price}</div>
        </motion.div>
      ))}
    </div>
  </>
);
}
export default ProductList;