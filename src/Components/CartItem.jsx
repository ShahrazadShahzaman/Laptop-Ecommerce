import { motion } from "framer-motion";
import { useCart } from "../Context/CartContext";
import { Plus, Minus, Trash2 } from "lucide-react";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  //   Each Item Display In cart
  return (
    <>
      <motion.div
        className="bg-white rounded-2xl p-5 shadow-md flex flex-col md:flex-row items-center md:items-start gap-6 transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.9 }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-28 h-28 object-contain rounded-xl border"
        />
        <div className="flex-1 w-full flex flex-col gap-2">
          <div className="flex justify-between items-start w-full">
            <div>
              <h3 className="text-[#244D61] text-lg font-semibold">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">Price: ${item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 transition"
              title="Remove item"
            >
              <Trash2 size={20} />
            </button>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="bg-[#5689C0] hover:bg-[#3c6fa4] text-white rounded-full p-2 transition"
              disabled={item.quantity <= 1}
            >
              <Minus size={18} />
            </button>
            <span className="font-semibold text-[#244D61]">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="bg-[#5689C0] hover:bg-[#3c6fa4] text-white rounded-full p-2 transition"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default CartItem;
