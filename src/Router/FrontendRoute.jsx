import { Contact } from "lucide-react";
import FrontendLayout from "../Layout";
import AboutPage from "../Pages/About/index.jsx";
import CartPage from "../Pages/CartPage.jsx";
import CategoryPage from "../Pages/CategoryPage.jsx";
import CheckoutPage from "../Pages/CheckoutPage.jsx";
import HomePage from "../Pages/Home";
import ProductDetailedPage from "../Pages/ProductDetailedPage.jsx";
import ProductList from "../Pages/ProductPage.jsx";
import ContactUs from "../Pages/Contact.jsx";

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
        element: <ProductList />,
      },
      {
        path: "product/:id",
        element: <ProductDetailedPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/products/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "about",
        element: <AboutPage/>,
      },
      {
        path: "contact",
        element: <ContactUs/>,
      },

    ],
  },
];
export default FrontendRoute;
