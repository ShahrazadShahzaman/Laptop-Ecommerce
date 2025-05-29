import Orders from "../Pages/Dashboard/Orders";
import Reviews from "../Pages/Dashboard/Reviews";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageProduct from "../Pages/Dashboard/ProductsDashboard/ManageProduct";
import AddProduct from "../Pages/Dashboard/ProductsDashboard/AddProduct";
import Notifications from "../Pages/Dashboard/Notifications";
import ProtectedRoute from "./ProtectedRoute";

const DashboardRoute = [
    {
        path: "/dashboard",
        element:( 
        <ProtectedRoute requiredRole="admin">
        <DashboardLayout/>
        </ProtectedRoute>
        ),
        children: [
            {
                index:true ,
                element:<DashboardHome/>,
            },
            {
                path:"addproduct" ,
                element:<AddProduct/>,
            },
            {
                path:"product" ,
                element:<ManageProduct/>,
            },
            {
                path:"orders" ,
                element:<Orders/>,
            },
            {
                path:"Notifications" ,
                element:<Notifications/>,
            },
            {
                path:"reviews" ,
                element:<Reviews/>,
            },
        ]
    }
]
export default DashboardRoute;