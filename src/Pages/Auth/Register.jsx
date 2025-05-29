import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../Animations/Variants";

const Register = () => {
  const { register, role, user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    role: "admin",
  });
  const [registering, setRegistering] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmpassword) {
      return toast.error("Passwords do not match!");
    }

    try {
      setRegistering(true);
      await register(form.email, form.password, form.role);
      toast.success("Registration successful!");
    } catch (err) {
      toast.error(err.message || "Registration failed");
      setRegistering(false);
    }
  };

  // 🔁 Redirect after registration only when role is ready
  useEffect(() => {
    if (!registering || !user || !role) return;

    if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
    setRegistering(false);
  }, [role, user, registering, navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#E4F1F6] to-[#C9E6F3] text-white">
      <motion.form
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded-md w-80 shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Register</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          value={form.confirmpassword}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="bg-[#244D61] text-white w-full py-2 rounded shadow-md hover:bg-[#1b3a4d] hover:scale-[1.12] transition-all duration-300"
        >
          {registering ? "Registering..." : "Register"}
        </button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#244D61] font-medium hover:underline transition"
          >
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
