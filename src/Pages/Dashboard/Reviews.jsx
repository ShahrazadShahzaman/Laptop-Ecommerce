import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseconfig";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "firebase/firestore";
import { motion } from "framer-motion";
import { zoomIn } from "../../Animations/Variants";
import { Star,Trash2 } from "lucide-react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const fetched = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReviews(fetched);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "reviews", id));
      setReviews(reviews.filter((r) => r.id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        className="p-6 md:p-10 bg-white rounded-xl shadow-xl max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#244D61] text-center">
          Reviews & Ratings
        </h2>
      </motion.div>

      <div className="grid gap-6 max-w-4xl mx-auto mt-6">
        {reviews.length === 0 ? (
          <p className="text-gray-500 text-center">No reviews yet.</p>
        ) : (
          reviews.map((r) => (
            <motion.div
              key={r.id}
              variants={zoomIn}
              initial="hidden"
              animate="visible"
              className="shadow-gray-500 p-6 rounded-xl shadow bg-[#F8F9FA] hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-[#244D61]">
                  {r.userName || "Anonymous"}
                </h3>
                <button
                  onClick={() => handleDelete(r.id)}
                  className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>

              <div className="flex items-center text-yellow-500 mb-1">
                {Array.from({ length: r.rating || 0 }, (_, i) => (
                  <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
                ))}
                <span className="ml-2 text-gray-600 text-sm">
                  {r.rating} Stars
                </span>
              </div>

              <p className="text-gray-800 mb-2">{r.comment}</p>

              <div className="text-sm text-gray-600">
                <span className="font-medium">Product ID:</span>{" "}
                {r.productId || "N/A"}
              </div>

              {r.createdAt?.seconds && (
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(r.createdAt.seconds * 1000).toLocaleString()}
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </>
  );
};

export default Reviews;
