import { motion } from "framer-motion";
import CartItem from "../Components/CartItem";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
        <div className="min-h-screen px-4 py-10 md:px-20 bg-[#EAEBED]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#244D61] text-center w-full"
        >
          Your Shopping Cart
        </motion.h1>
        <div>
        {cartItems.length === 0 ? (
          <motion.p
            className="text-lg text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Your cart is empty
          </motion.p>
        ) : (
          <>
            <div className="space-y-5">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <motion.div
              className="mt-10 p-6 bg-white rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-center gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-2xl font-semibold text-[#244D61]">
                Total: {""}
                <span className="text-[#75E2FF]">${total.toFixed(2)}</span>
              </p>
              <Link to="/checkout">
              <button className="px-6 py-3 bg-[#244D61] text-white rounded-lg hover:bg-[#5689C0] transition font-medium text-lg shadow-sm">
                Proceed to Checkout
              </button>
              </Link>
            </motion.div>
          </>
        )}
        </div>
      </div>
    </>
  );
};
export default CartPage;
