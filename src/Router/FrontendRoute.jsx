import FrontendLayout from "../Layout";
import AboutPage from "../Pages/About/index.jsx";
import CartPage from "../Pages/CartPage.jsx";
import CategoryPage from "../Pages/CategoryPage.jsx";
import CheckoutPage from "../Pages/CheckoutPage.jsx";
import HomePage from "../Pages/Home";
import ProductDetailedPage from "../Pages/ProductDetailedPage.jsx";
import ProductList from "../Pages/ProductPage.jsx";
import ContactUs from "../Pages/Contact.jsx";
import Register from "../Pages/Auth/Register.jsx";
import Login from "../Pages/Auth/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const FrontendRoute = [
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: (
        <ProtectedRoute>
        <ProductList />
        </ProtectedRoute>
        ),
      },
      {
        path: "product/:id",
        element: (
        <ProtectedRoute>
          <ProductDetailedPage />
        </ProtectedRoute>),
      },
      {
        path: "cart",
        element: (
        <ProtectedRoute>
          <CartPage />
        </ProtectedRoute>),
      },
      {
        path: "checkout",
        element: (
        <ProtectedRoute>
          <CheckoutPage />
        </ProtectedRoute>),
      },
      {
        path: "/products/:categoryName",
        element: (
        <ProtectedRoute>
          <CategoryPage />
        </ProtectedRoute>),
      },
      {
        path: "about",
        element: <AboutPage/>,
      },
      {
        path: "contact",
        element: <ContactUs/>,
      },
      {
        path: "Register",
        element: <Register/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },

    ],
  },
];
export default FrontendRoute;
