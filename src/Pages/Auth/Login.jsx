import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { fadeUp } from "../../Animations/Variants";

const Login = () => {
  const { login, role, user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loggingIn, setLoggingIn] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoggingIn(true);
      await login(form.email, form.password);
      toast.success("Login successful!");
    } catch (err) {
      toast.error(err.message || "Login failed");
      setLoggingIn(false);
    }
  };

  
  useEffect(() => {
    if (!loggingIn || !user || !role) return;

    if (role === "admin") {
      navigate("/dashboard");
    } else if (role === "customer") {
      navigate("/");
    }
    setLoggingIn(false);
  }, [role, user, loggingIn, navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#E4F1F6] to-[#C9E6F3] text-white">
      <motion.form
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded-md w-80 shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>
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
        <button
          type="submit"
          className="bg-[#244D61] text-white w-full py-2 rounded shadow-md hover:bg-[#1b3a4d] hover:scale-[1.02] transition-all duration-300"
        >
          {loggingIn ? "Logging in..." : "Login"}
        </button>
        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#244D61] font-medium hover:underline transition">
            Register
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
