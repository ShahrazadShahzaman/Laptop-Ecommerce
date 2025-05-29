import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";
import { motion } from "framer-motion";
import Product1 from "../assets/product1.jpeg";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.jpg";
import Product4 from "../assets/product4.jpg";
import Product5 from "../assets/product5.jpg";
import Product6 from "../assets/product6.jpg";
import Product7 from "../assets/product7.jpg";
import Product8 from "../assets/product8.jpg";
import Product9 from "../assets/product9.jpeg";
import Product10 from "../assets/product10.jpg";
import Product11 from "../assets/product11.jpg";
import Product12 from "../assets/product12.jpg";
import ProductCard from "../Components/ProductCard";
import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";

// Dummy Data
export const dummyProducts = [
  {
    id: 1,
    name: "Acer Nitro 5",
    image: Product1,
    price: 999,
    rating: 4.5,
    specs: "Intel i7, 16GB RAM, RTX 3060, 512GB SSD",
    category: "gaming",
  },
  {
    id: 2,
    name: "Dell XPS 13 Plus",
    image: Product2,
    price: 1199,
    rating: 4.8,
    specs: "Intel i7 13th Gen, 16GB RAM, Intel Iris Xe, 1TB SSD",
    category: "business",
  },
  {
    id: 3,
    name: "HP Pavilion x360",
    image: Product3,
    price: 749,
    rating: 4.2,
    specs: "Intel i5, 8GB RAM, Intel UHD, 256GB SSD, Touchscreen",
    category: "student",
  },
  {
    id: 4,
    name: "Lenovo Legion 5 Pro",
    image: Product4,
    price: 1099,
    rating: 4.7,
    specs: "Ryzen 7 5800H, 16GB RAM, RTX 3070, 1TB SSD",
    category: "gaming",
  },
  {
    id: 5,
    name: "MacBook Air M2 (2023)",
    image: Product5,
    price: 1299,
    rating: 4.9,
    specs: "Apple M2, 8GB RAM, 256GB SSD, Retina Display",
    category: "business",
  },
  {
    id: 6,
    name: "Asus TUF F15",
    image: Product6,
    price: 899,
    rating: 4.4,
    specs: "Intel i5 11th Gen, 16GB RAM, GTX 1650, 512GB SSD",
    category: "gaming",
  },
  {
    id: 7,
    name: "MSI Stealth 15M",
    image: Product7,
    price: 1499,
    rating: 4.6,
    specs: "Intel i7 12th Gen, 16GB RAM, RTX 3060, 1TB SSD",
    category: "gaming",
  },
  {
    id: 8,
    name: "HP Envy 13",
    image: Product8,
    price: 999,
    rating: 4.3,
    specs: "Intel i5, 16GB RAM, Intel Iris Xe, 512GB SSD",
    category: "student",
  },
  {
    id: 9,
    name: "Asus ZenBook 14",
    image: Product9,
    price: 849,
    rating: 4.5,
    specs: "AMD Ryzen 5, 16GB RAM, Radeon Graphics, 512GB SSD",
    category: "student",
  },
  {
    id: 10,
    name: "Lenovo Yoga Slim 7",
    image: Product10,
    price: 1149,
    rating: 4.6,
    specs: "Ryzen 7, 16GB RAM, Integrated Graphics, 1TB SSD",
    category: "business",
  },
  {
    id: 11,
    name: "MacBook Pro M3",
    image: Product11,
    price: 1699,
    rating: 5.0,
    specs: "Apple M3, 16GB RAM, 512GB SSD, Liquid Retina XDR",
    category: "business",
  },
  {
    id: 12,
    name: "Gigabyte G5 Gaming",
    image: Product12,
    price: 1099,
    rating: 4.4,
    specs: "Intel i7 12th Gen, 16GB RAM, RTX 3060, 512GB SSD",
    category: "gaming",
  },
];

const ProductList = () => {
  const [sort, setSort] = useState("default");
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const firebaseProducts = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            image: data.imageURL || data.image || "",
          };
        });

        const merged = [...dummyProducts, ...firebaseProducts];
        setProducts(merged);
      } catch (err) {
        console.error("Failed to fetch Firebase products:", err);
        setProducts(dummyProducts);
      }
    };
    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "priceLow") return a.price - b.price;
    if (sort === "priceHigh") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <>
      <PageBanner
        title="Available Products"
        subtitle="Have a look at our products"
      />
      <section className="py-16 px-4 bg-[#EAEBED] min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#244D61] text-center w-full"
            >
              Our Laptops
            </motion.h2>
            <select
              className="px-4 py-2 rounded bg-white border border-gray-300 text-sm self-center md:self-auto"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="priceHigh">Price:High to Low</option>
              <option value="priceLow">Price:Low to High</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sortedProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductList;
