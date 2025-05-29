import { useState } from "react";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const { cartItems } = useCart();
  const { user, logout: authLogout } = useAuth();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navigate = useNavigate();

  const logout = () => {
    authLogout();
     setIsOpen(false);
    navigate("/");
  };

  return (
    <>
      <header className="bg-[#244D61] text-white shadow-md sticky top-0 z-50">
        <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo (left) */}
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <Link to="/" className="hover:text-[#75E2FF]">
              LapShop
            </Link>
          </motion.h1>

          {/* Centered Nav with small gaps */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-18">
            <Link to="/" className="hover:text-[#75E2FF] transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#75E2FF] transition">
              About
            </Link>
            <Link to="/products" className="hover:text-[#75E2FF] transition">
              Products
            </Link>
            <Link to="/contact" className="hover:text-[#75E2FF] transition">
              Contact
            </Link>

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center hover:text-[#75E2FF] transition">
                Categories <ChevronDown className="ml-1" size={18} />
              </button>
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#2c5a78] text-white shadow-lg rounded-md w-56 overflow-hidden z-50"
                  >
                    {["Business", "Gaming", "Student"].map((cat) => (
                      <Link
                        key={cat}
                        to={`/products/${cat.toLowerCase()}`}
                        className="block px-5 py-3 hover:bg-[#75E2FF] hover:text-black transition"
                      >
                        {cat} Laptops
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Cart + Mobile Toggle (right) */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative hidden md:flex items-center gap-1 hover:text-[#75E2FF] transition"
            >
              <ShoppingCart size={20} />
              Cart
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="hidden md:inline border border-[#75E2FF] text-[#75E2FF] px-4 py-1.5 rounded-md hover:bg-blue-500 hover:text-gray-50 hover:scale-110 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hidden md:inline bg-[#75E2FF] text-[#244D61] px-4 py-1.5 rounded-md hover:bg-blue-500 hover:text-gray-50 hover:scale-110 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={logout}
                  className="hidden md:inline text-red-400 hover:text-red-500 transition"
                >
                  Logout
                </button>
              </>
            )}

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#244D61] w-full px-6 py-6 text-white"
            >
              <div className="flex flex-col items-center space-y-6 text-center">
                {["Home", "About", "Contact"].map((page) => (
                  <Link
                    key={page}
                    to={page.toLowerCase()}
                    className="text-lg hover:text-[#75E2FF]"
                  >
                    {page}
                  </Link>
                ))}

                {/* Categories Dropdown */}
                <div className="w-full">
                  <button
                    onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                    className="flex justify-center items-center gap-1 text-lg text-white w-full"
                  >
                    Categories
                    <ChevronDown
                      size={18}
                      className={`ml-1 transition-transform ${
                        showMobileDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {showMobileDropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 flex flex-col items-center space-y-2"
                      >
                        {["Business", "Gaming", "Student"].map((cat) => (
                          <Link
                            key={cat}
                            to={`/products/${cat.toLowerCase()}`}
                            className="block hover:underline"
                          >
                            {cat} Laptops
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  to="/cart"
                  className="relative flex items-center justify-center gap-2 text-lg hover:text-[#75E2FF] pt-4 border-t border-white/20 w-full"
                >
                  <ShoppingCart size={22} />
                  Cart
                  {totalQuantity > 0 && (
                    <span className="absolute top-1 right-20 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                      {totalQuantity}
                    </span>
                  )}
                </Link>
                {!user ? (
                  <div className="flex flex-col items-center space-y-4 pt-4 border-t border-white/20 w-full">
                    <Link
                      to="/login"
                      className="text-center border border-[#75E2FF] text-[#75E2FF] px-4 py-2 rounded-md hover:bg-[#75E2FF] hover:text-[#244D61] transition w-[80%] max-w-[250px]"
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="text-center bg-[#75E2FF] text-[#244D61] px-4 py-2 rounded-md hover:bg-[#5cd6f5] transition w-[80%] max-w-[250px]"
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-4 pt-4 border-t border-white/20 w-full">
                    <button
                      onClick={logout}
                      className="w-full text-center text-red-400 hover:text-red-500 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
export default Header;
