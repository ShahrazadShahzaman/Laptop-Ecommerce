import { motion } from "framer-motion";
import { NavLink,useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Bell,
  ShoppingBag,
  Star,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { slideLeft, slideRight } from "../../Animations/Variants";
import { useAuth } from "../../Context/AuthContext";

// Dummy Links
const links = [
  { name: "Dashboard", to: "/dashboard", icon: <LayoutDashboard size={18} /> },
  { name: "Manage Products", to: "/dashboard/product", icon: <Package size={18} /> },
  { name: "Add Products", to: "/dashboard/addproduct", icon: <Package size={18} /> },
  { name: "Orders", to: "/dashboard/orders", icon: <ShoppingBag size={18} /> },
  {
    name: "Notifications",
    to: "/dashboard/notifications",
    icon: <Bell size={18} />,
  },
  { name: "Reviews", to: "/dashboard/reviews", icon: <Star size={18} /> },
];

// SideBar Code
const Sidebar = ({ isOpen, toggleSidebar }) => {

   const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <motion.aside
        variants={isOpen ? slideRight : slideLeft}
        initial="hidden"
        animate="visible"
        className={`h-screen sticky top-0 bg-[#244D61] text-white p-4 shadow-md duration-300 flex flex-col ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          {isOpen && <h2 className="text-xl font-bold">Admin</h2>}
          <button onClick={toggleSidebar} className="text-white">
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {links.map(({ name, to, icon }) => (
            <NavLink
              key={name}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-[#75E2FF] text-black font-semibold"
                    : "hover:bg-[#2f6a8a]"
                }`
              }
            >
              {icon}
              {isOpen && <span>{name}</span>}
            </NavLink>
          ))}
        </nav>

        <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-3 py-2 rounded-md mt-auto bg-red-600 hover:bg-red-700 transition text-white"
      >
        <LogOut size={18} />
        {isOpen && <span>Logout</span>}
      </button>
      </motion.aside>
    </>
  );
};
export default Sidebar;
