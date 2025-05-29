import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseconfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductForm from "./ProductsForm";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "", price: "", category: "", description: "", rating: "", imageURL: "" , discount:"",
  });

  const handleUpload = (url) => {
    setForm((prev) => ({ ...prev, imageURL: url }));
    toast.success("Image uploaded successfully!");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log("Form before submit:", form);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, category, description, rating, imageURL, discount } = form;
    try {
      await addDoc(collection(db, "products"), {
        name,
        price: Number(price),
        category,
        description,
        rating: Number(rating),
        imageURL,
        discount: discount ? Number(discount) : 0,
        createdAt: new Date(),
      });
      toast.success("Product added!");
      setForm({ name: "", price: "", category: "", description: "", rating: "", imageURL: "" , discount:"", });
    } catch (error) {
      toast.error("Error saving product");
    }
  };

  return (
    <section className="p-6 w-full">
      <ProductForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleUpload={handleUpload}
      />
    </section>
  );
};

export default AddProduct;
