import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebaseconfig";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../Context/CartContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import Product1 from "../assets/product1.jpeg";
import Product1c from "../assets/product1c.jpg";
import Product1s from "../assets/product1s.jpg";
import Product2 from "../assets/product2.jpg";
import Product2b from "../assets/product2b.jpg";
import Product2c from "../assets/product2c.jpg";
import Product2s from "../assets/product2s.jpg";
import Product3 from "../assets/product3.jpg";
import Product3a from "../assets/product3a.jpg";
import Product3s from "../assets/product3s.jpg";
import Product3sc from "../assets/product3sc.jpg";
import Product4 from "../assets/product4.jpg";
import Product4a from "../assets/product4a.jpeg";
import Product4b from "../assets/product4b.jpeg";
import Product4f from "../assets/product4f.jpg";
import Product5 from "../assets/product5.jpg";
import Product5s from "../assets/product5s.jpg";
import Product5sb from "../assets/product5sb.jpg";
import Product6 from "../assets/product6.jpg";
import Product6b from "../assets/product6b.jpg";
import Product6s from "../assets/product6s.jpg";
import Product7 from "../assets/product7.jpg";
import Product7f from "../assets/product7f.jpg";
import Product7s from "../assets/product7s.jpg";
import Product8 from "../assets/product8.jpg";
import Product8b from "../assets/product8b.jpeg";
import Product8s from "../assets/product8s.jpg";
import Product9 from "../assets/product9.jpeg";
import Product9b from "../assets/product9b.jpg";
import Product9s from "../assets/product9s.jpg";
import Product10 from "../assets/product10.jpg";
import Product10s from "../assets/product10s.jpg";
import Product10b from "../assets/product10b.jpg";
import Product11 from "../assets/product11.jpg";
import Product11b from "../assets/product11b.jpg";
import Product11s from "../assets/product11s.jpg";
import Product12 from "../assets/product12.jpg";
import Product12c from "../assets/product12c.jpg";
import Product12s from "../assets/product12s.jpg";
import ProductReviews from "./productreviews";
import SubmitReview from "./submitreviews";

// Dummy Data For Products
export const productList = [
  {
    id: 1,
    name: "Acer Nitro 5",
    price: 999,
    images: [Product1, Product1c, Product1s],
    description:
      "Power-packed gaming laptop with high refresh rate display and cooling system.",
    specs: {
      processor: "Intel Core i7-12700H",
      ram: "16GB DDR4",
      storage: "1TB SSD",
    },
  },
  {
    id: 2,
    name: "Dell XPS 13",
    price: 1199,
    images: [Product2, Product2b, Product2c, Product2s],
    description:
      "Ultra-portable laptop perfect for business and productivity with InfinityEdge display.",
    specs: {
      processor: "Intel Core i7-1250U",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
    },
  },
  {
    id: 3,
    name: "HP Pavilion 15",
    price: 749,
    images: [Product3, Product3a, Product3s, Product3sc],
    description:
      "Balanced everyday performance with a sleek design, ideal for students.",
    specs: {
      processor: "AMD Ryzen 5 5625U",
      ram: "8GB DDR4",
      storage: "512GB SSD",
    },
  },
  {
    id: 4,
    name: "Lenovo Legion 5",
    price: 1099,
    images: [Product4, Product4a, Product4b, Product4f],
    description:
      "Performance beast tailored for gamers with fast refresh rate and RTX power.",
    specs: {
      processor: "AMD Ryzen 7 5800H",
      ram: "16GB DDR4",
      storage: "1TB SSD",
    },
  },
  {
    id: 5,
    name: "MacBook Air M2",
    price: 1299,
    images: [Product5, Product5s, Product5sb],
    description:
      "Apple’s sleek and silent powerhouse with M2 chip for ultra efficiency.",
    specs: {
      processor: "Apple M2",
      ram: "8GB Unified",
      storage: "256GB SSD",
    },
  },
  {
    id: 6,
    name: "Asus TUF Gaming A15",
    price: 899,
    images: [Product6, Product6b, Product6s],
    description:
      "Built for endurance and gaming with military-grade durability.",
    specs: {
      processor: "Intel Core i5-11400H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
    },
  },
  {
    id: 7,
    name: "MSI Stealth 15M",
    price: 1399,
    images: [Product7, Product7f, Product7s],
    description:
      "Sleek, portable and powerful — great for creative pros and gamers alike.",
    specs: {
      processor: "Intel Core i7-1260P",
      ram: "16GB DDR5",
      storage: "1TB SSD",
    },
  },
  {
    id: 8,
    name: "Microsoft Surface Laptop 5",
    price: 1299,
    images: [Product8, Product8b, Product8s],
    description: "Minimalist productivity laptop with a vibrant touch screen.",
    specs: {
      processor: "Intel Core i7 Evo",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
    },
  },
  {
    id: 9,
    name: "Razer Blade 15",
    price: 1999,
    images: [Product9, Product9b, Product9s],
    description: "High-end gaming and creative laptop with 240Hz QHD display.",
    specs: {
      processor: "Intel Core i9",
      ram: "32GB DDR5",
      storage: "1TB SSD",
    },
  },
  {
    id: 10,
    name: "LG Gram 16",
    price: 1149,
    images: [Product10, Product10b, Product10s],
    description:
      "Extremely lightweight with long battery life — ideal for travel.",
    specs: {
      processor: "Intel Core i7-1360P",
      ram: "16GB LPDDR5",
      storage: "1TB SSD",
    },
  },
  {
    id: 11,
    name: "Samsung Galaxy Book3 Pro",
    price: 1299,
    images: [Product11, Product11b, Product11s],
    description:
      "Gorgeous AMOLED display with seamless Samsung ecosystem integration.",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
    },
  },
  {
    id: 12,
    name: "Alienware x15 R2",
    price: 2199,
    images: [Product12, Product12c, Product12s],
    description:
      "Ultra-thin high-performance gaming laptop with cutting-edge thermal design.",
    specs: {
      processor: "Intel Core i9-12900H",
      ram: "32GB DDR5",
      storage: "1TB SSD",
    },
  },
];

// Dummy Data For Reviews

const dummyReviews = [
  {
    id: 1,
    name: "Ali Raza",
    rating: 4,
    comment: "Great laptop for the price! Battery life is impressive.",
    date: "2024-12-01",
  },
  {
    id: 2,
    name: "Fatima Khan",
    rating: 5,
    comment: "Absolutely love the display and speed. Highly recommended!",
    date: "2025-01-15",
  },
  {
    id: 3,
    name: "Umar Siddiqui",
    rating: 3,
    comment: "Performance is okay but the fan is a bit noisy.",
    date: "2025-03-10",
  },
];

const ProductDetailedPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const [reviews, setReviews] = useState([]);

  // Cart Handling
  const handleAddToCart = () => {
    addToCart({
      ...product,
      image: product.images[0],
    });
    navigate("/cart");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fetchProductReviews = async (productId) => {
    try {
      const q = query(
        collection(db, "reviews"),
        where("productId", "==", productId)
      );
      const querySnapshot = await getDocs(q);
      const fetchedReviews = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(fetchedReviews);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const q = query(
          collection(db, "products"),
          where("__name__", "==", id)
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const doc = snapshot.docs[0];
          const data = doc.data();
          const fetchedProduct = {
            id: doc.id,
            name: data.name,
            price: data.price,
            discount: data.discount ?? 0,
            description: data.description,
            specs: data.specs || {},
            images: data.images || [data.imageURL || data.image],
          };
          setProduct(fetchedProduct);
          await fetchProductReviews(fetchedProduct.id);
        } else {
          const dummy = productList.find((p) => p.id.toString() === id);
          if (dummy) {
            setProduct(dummy);
            await fetchProductReviews(dummy.id.toString());
          } else {
            navigate("/products");
          }
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        navigate("/products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (loading) {
    return <span class="loader"></span>;
  }

  if (!product) {
    return <div className="text-center mt-20">Product not found.</div>;
  }

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#244D61] text-center w-full"
      >
        Product Details
      </motion.h2>

      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2 text-[#244D61] hover:text-[#5689C0] transition text-sm font-medium"
      >
        <ChevronLeft size={18} />
        Back to Products
      </button>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Product Gallery */}
          <div className="relative w-full h-[400px] flex items-center justify-center bg-white rounded-lg shadow overflow-hidden">
            <motion.img
              key={product.images[currentImageIndex]}
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="object-contain max-h-full w-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute bottom-4 bg-white/80 text-sm px-3 py-1 rounded-full shadow">
              {currentImageIndex + 1} / {product.images.length}
            </div>

            {/* Left Arrow */}
            {currentImageIndex > 0 && (
              <button
                onClick={() => setCurrentImageIndex((prev) => prev - 1)}
                className="absolute left-2 bg-white/80 rounded-full p-2 hover:bg-[#5689C0] transition"
              >
                <ChevronLeft />
              </button>
            )}

            {/* Right Arrow */}
            {currentImageIndex < product.images.length - 1 && (
              <button
                onClick={() => setCurrentImageIndex((prev) => prev + 1)}
                className="absolute right-2 bg-white/80 rounded-full p-2 hover:bg-[#5689C0] transition"
              >
                <ChevronRight />
              </button>
            )}
          </div>

          {/* Product Content */}

          <div>
            <h1 className="text-3xl font-bold text-[#244D61]">
              {product.name}
            </h1>
            <p className="text-xl text-[#5689C0]  mt-2">${product.price}</p>
            {product.discount > 0 && (
              <>
                <p className="text-sm text-green-600 mt-1">
                  Discount: {product.discount}%
                </p>
                <p className="text-md text-red-600 font-bold mt-1">
                  After Discount: $
                  {(product.price * (1 - product.discount / 100)).toFixed(2)}
                </p>
              </>
            )}

            <p className="text-gray-700 mt-4">{product.description}</p>

            <ul className="mt-6 text-sm text-gray-600 space-y-1">
              <li>Processor: {product.specs.processor}</li>
              <li>Ram: {product.specs.ram}</li>
              <li>Storage: {product.specs.storage}</li>
            </ul>
            {/* Add To Cart */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="mt-6 bg-[#5689C0] hover:bg-[#75E2FF] text-white hover:text-[#244D61] font-semibold px-8 py-3 rounded-full shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#75E2FF] active:scale-95"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </motion.button>
          </div>
          <ProductReviews productId={product.id} />
          {/* <SubmitReview productId={product.id}/> */}
        </motion.div>
      </section>
    </>
  );
};
export default ProductDetailedPage;
