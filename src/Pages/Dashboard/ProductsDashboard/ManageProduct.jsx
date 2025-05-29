import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/firebaseconfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductList from "./ProductList";
import ProductForm from "./ProductsForm";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    discount:"",
    category: "",
    description: "",
    specs:"",
    rating: "",
    imageURL: "",
  });

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "products"), orderBy("createdAt"));
      const querySnapshot = await getDocs(q);
      const fetched = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(fetched);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpload = (url) => {
    setForm((prev) => ({ ...prev, imageURL: url }));
    toast.success("Image uploaded successfully!");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price,discount, category, description, rating, imageURL } = form;
    if (!editId) return toast.error("No product selected for editing.");

    try {
      await updateDoc(doc(db, "products", editId), {
        name,
        price: Number(price),
        discount: Number(discount),
        category,
        description,
        rating: Number(rating),
        imageURL,
      });
      toast.success("Product updated!");
      setForm({
        name: "",
        price: "",
        discount:"",
        category: "",
        description: "",
        rating: "",
        imageURL: "",
      });
      setEditId(null);
      fetchProducts();
    } catch (error) {
      toast.error("Error updating product");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      toast.success("Product deleted");
      fetchProducts();
    } catch (error) {
      toast.error("Error deleting product");
    }
  };

  return (
    <section className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-[#244D61]">Manage Products</h2>
      {editId && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2 text-[#244D61]">Edit Product</h3>
          <ProductForm
            form={form}
            editId={editId}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleUpload={handleUpload}
          />
        </div>
      )}

      <ProductList
        products={products}
        handleDelete={handleDelete}
        setEditId={(id) => {
          const product = products.find((p) => p.id === id);
          if (product) {
            setForm({
              name: product.name,
              price: product.price,
              discount: product.discount,
              category: product.category,
              description: product.description,
              rating: product.rating,
              imageURL: product.imageURL,
            });
            setEditId(id);
          }
        }}
        setForm={setForm}
      />
    </section>
  );
};

export default ManageProduct;
