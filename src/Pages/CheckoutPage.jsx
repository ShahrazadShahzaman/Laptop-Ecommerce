import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { toast } from "react-toastify";
import { zoomIn } from "../Animations/Variants";
import { db } from "../firebase/firebaseconfig";
import { collection,addDoc, Timestamp } from "firebase/firestore";


const CheckoutPage = () => {

  const {cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   Form Submission Handler
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (cartItems.length === 0) {
    toast.error("Your cart is empty!");
    return;
  }

  try {
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // 1. Add Order to Firestore and store its reference
    const orderRef = await addDoc(collection(db, "orders"), {
      userName: formData.name,
      userEmail: formData.email,
      address: formData.address,
      items: cartItems.map((item) => ({
        productName: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount,
      status: "pending",
      createdAt: Timestamp.now(),
    });

    // 2. Send a notification with the orderId
    await addDoc(collection(db, "notifications"), {
      title: "🛒 New Order Received",
      message: `New order from ${formData.name} (${formData.email})`,
      type: "order",
      orderId: orderRef.id, // this is now available
      timestamp: Timestamp.now(),
    });

    // 3. Show success, clear cart and navigate
    toast.success("Order placed successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });

    setSubmitted(true);
    clearCart();
    setTimeout(() => navigate("/"), 3000);
  } catch (error) {
    console.error("Order submission failed:", error);
    toast.error("Failed to place order. Try again.");
  }
};


  return (
    <>
      <div className="min-h-[90vh] flex items-center justify-center bg-[#EAEBED] px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
          {submitted ? (
            <motion.div
              variants={zoomIn}
              className="flex flex-col items-center justify-center text-center"
            >
              <CheckCircle className="text-green-500 w-14 h-14 mb-4" />
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Order Confirmed
              </h2>
              <p className="text-gray-600">Thankyou For Shopping With Us</p>
            </motion.div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[#244D61] mb-6 text-center">
                Checkout
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5689C0] text-sm"
                    required
                  />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                <input
                  name="email"
                  type="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5689C0] text-sm"
                  required
                />
                  </div>

                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shipping Address
                </label>
                <textarea
                  name="address"
                  placeholder=" "
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5689C0] text-sm resize-none"
                  required
                />
                 </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="mx-auto block px-6 py-2 bg-[#5689C0] hover:bg-[#75E2FF] hover:text-black transition-all hover:scale-125 text-white font-semibold rounded-xl shadow"
                >
                  Place Order
                </motion.button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default CheckoutPage;
