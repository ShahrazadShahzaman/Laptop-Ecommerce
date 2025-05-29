import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";
import NotificationCard from "../../Components/NotificationCard";
import { motion } from "framer-motion";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const q = query(
        collection(db, "notifications"),
        orderBy("timestamp", "desc")
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(data);
    };
    fetchNotifications();
  }, []);
  return (
    <>
      <motion.div
        className="p-6 md:p-10 bg-white rounded-md shadow-sm min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-bold text-primary mb-4 text-2xl">Notifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notifications.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
                <NotificationCard {...note}/>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};
export default Notifications;
