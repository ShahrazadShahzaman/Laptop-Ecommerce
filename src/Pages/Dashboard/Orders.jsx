import { collection , onSnapshot, updateDoc, doc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseconfig";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { fadeUpStaggered } from "../../Animations/Variants";

const Orders = () =>{
 
    const [orders, setOrders] = useState([]);
    const [prevOrdersCount, setPrevOrdersCount]= useState(0);

    const fetchOrders = async () =>{
        try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const fetched = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOrders(fetched);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

   useEffect(() => {
    const enableAudio = () => {
      const audio = new Audio(notification);
      audio.play().catch(() => {});
      window.removeEventListener("click", enableAudio);
    };
    window.addEventListener("click", enableAudio);
  }, []);


useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "orders"), (snapshot) => {
    const fetched = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
   if (prevOrdersCount && fetched.length > prevOrdersCount) {
      toast.info("🛒 New order received!", {
        position: "top-right",
        autoClose: 3000,
      });

      // 🔊 Optional Sound
      const audio = new Audio ("/sounds/Notification.mp3");
      audio.volume = 1;
        audio.currentTime = 0;
        audio.play();

      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setOrders(fetched);
    setPrevOrdersCount(fetched.length); 
  });

  return () => unsubscribe();
}, [prevOrdersCount]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, "orders", id), { status: newStatus });
      toast.success("Order status updated");
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

    return(
        <>
        <section className="p-6 w-full">
            <h2 className="text-2xl font-bold text-[#244D61] mb-4">
                Order Management
            </h2>

            <div className="mb-6 text-[#5689C0] font-semibold">
                Total Orders: {orders.length}
            </div>

            <div className="grid grid-cols-1 gap-6">
                {
                    orders.map((order, index) => (
          <motion.div
            key={order.id}
            variants={fadeUpStaggered}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-md p-5 border border-[#EAEBED]"
          >
            <div className="mb-2">
              <strong className="text-[#244D61]">Customer:</strong> {order.userName} ({order.userEmail})
            </div>
            <div className="mb-2">
              <strong className="text-[#244D61]">Items:</strong>
              <ul className="list-disc list-inside ml-4">
                {order.items?.map((item, i) => (
                  <li key={i}>
                    {item.productName} x{item.quantity} — ${item.price}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2 text-[#5689C0] font-medium">
              Total: ${order.totalAmount}
            </div>
            <div className="mb-2">
              <strong className="text-[#244D61]">Status:</strong>
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                className="ml-2 border rounded px-2 py-1 text-sm text-[#244D61]"
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
            <div className="text-sm text-gray-500">
              Placed on: {order.createdAt?.toDate().toLocaleString() || "N/A"}
            </div>
          </motion.div>
        ))}
            </div>
        </section>
        
        </>
    )
}
export default Orders