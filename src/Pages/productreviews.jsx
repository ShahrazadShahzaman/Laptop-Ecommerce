import { useEffect, useState } from "react";
import { db, auth } from "../firebase/firebaseconfig";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../Animations/Variants";
import { toast } from "react-toastify";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProductReviews = async () => {
    const q = query(collection(db, "reviews"), where("productId", "==", productId));
    const snapshot = await getDocs(q);
    const data = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
    setReviews(data);
  };

  useEffect(() => {
    if (productId) fetchProductReviews();
  }, [productId]);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length
      : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      return toast.error("Please provide a rating and comment.");
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "reviews"), {
        userName: auth.currentUser?.displayName || "Anonymous",
        userId: auth.currentUser?.uid || "guest",
        productId,
        rating,
        comment,
        createdAt: serverTimestamp(),
      });
      setComment("");
      setRating(0);
      toast.success("Review submitted successfully!");
      fetchProductReviews();
    } catch (err) {
      toast.error("Error submitting review.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="w-full max-w-7xl mx-auto px-4 lg:px-6 mt-20"
    >
      {/* Header */}
      <h2 className="text-3xl font-bold text-[#244D61] mb-2">Customer Reviews</h2>
      <div className="flex items-center gap-2 mb-10">
        <span className="text-2xl font-semibold text-yellow-500">
          {averageRating.toFixed(1)}
        </span>
        <Star className="fill-yellow-400 text-yellow-400" />
        <span className="text-sm text-gray-500">
          ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
        </span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-30 items-start">
        {/* Form */}
        <div className="bg-white px-4 py-4 shadow-gray-500 rounded-lg shadow-sm self-start">
          <h3 className="text-xl font-semibold mb-4 text-[#244D61]">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Star Rating */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={26}
                  className={`cursor-pointer transition-transform hover:scale-110 ${
                    hoverRating >= star || rating >= star
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">{rating} Stars</span>
            </div>

            {/* Textarea */}
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#244D61] focus:outline-none text-sm"
              placeholder="Write your honest feedback..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#244D61] hover:bg-[#1a384c] text-white py-2 px-6 rounded-md text-sm transition"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>

        {/* Reviews */}

<div>
  {reviews.length > 0 ? (
    <div className="flex flex-col gap-4">
      {reviews.map((r) => (
       <motion.div
  key={r.id}
  className="bg-white w-full shadow-md rounded-2xl border border-gray-200 px-26 py-6 transition hover:shadow-lg"
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="flex items-center gap-4 mb-2">
    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-700">
      {r.userName?.charAt(0).toUpperCase() || "A"}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{r.userName || "Anonymous"}</h4>
      <p className="text-xs text-gray-500">
        {r.createdAt?.seconds
          ? new Date(r.createdAt.seconds * 1000).toLocaleDateString()
          : ""}
      </p>
    </div>
  </div>

  <div className="flex items-center gap-1 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className={`${
          i < r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>

  <p className="text-sm text-gray-700 break-words whitespace-pre-wrap">
    {r.comment}
  </p>
</motion.div>

      ))}
    </div>
  ) : (
    <p className="text-gray-500 text-sm">No reviews yet.</p>
  )}
</div>

      </div>
    </motion.div>
  );
};

export default ProductReviews;
