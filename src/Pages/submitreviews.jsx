import { useState } from "react";
import { db, auth } from "../firebase/firebaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Star } from "lucide-react";
import { toast } from "react-toastify";

const SubmitReview = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

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
    } catch (err) {
      toast.error("Error submitting review.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="bg-white p-6 rounded-xl shadow-md mt-10 max-w-4xl mx-auto">
  <h3 className="text-xl font-semibold text-[#244D61] mb-4">
    Leave a Review
  </h3>

  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Star Rating */}
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={28}
          className="cursor-pointer transition-transform hover:scale-110"
          fill={hoverRating >= star || rating >= star ? "#facc15" : "none"}
          stroke="#facc15"
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => setRating(star)}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating} Stars</span>
    </div>

    {/* Comment */}
    <textarea
      className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#244D61]"
      placeholder="Write your honest feedback..."
      rows="4"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-[#244D61] hover:bg-[#183545] text-white py-2 px-5 rounded transition"
      disabled={loading}
    >
      {loading ? "Submitting..." : "Submit Review"}
    </button>
  </form>
</div>

  );
};

export default SubmitReview;