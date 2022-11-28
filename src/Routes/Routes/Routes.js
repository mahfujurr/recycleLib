import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryBooks from "../../Pages/CategoryBooks/CategoryBooks";
import AddBooks from "../../Pages/Dashboard/AddBooks/AddBooks";
import AddedBooks from "../../Pages/Dashboard/AddedBooks/AddedBooks";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import DashboardIntro from "../../Pages/Dashboard/DashboadIntro/DashboardIntro";
import DashboardLayout from "../../Pages/Dashboard/DashboardLayout/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/categories/:id',
                element: <PrivateRoute><CategoryBooks></CategoryBooks></PrivateRoute>,
                loader: ({params}) => fetch(`https://recyclelib-server.vercel.app/allbooks/category/${params.id}`) 
            }
            // {
            //     path: '/appointment',
            //     element: <Appointment></Appointment>
            // }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element:<DashboardIntro></DashboardIntro>

            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems></ReportedItems>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addbooks',
                element: <AddBooks></AddBooks>
            },
            {
                path: '/dashboard/addedbooks',
                element: <AddedBooks></AddedBooks>
            },
            {
                path: '/dashboard/blog',
                element: <Blog></Blog>
            },

            
        ]
    },
    

])

export default router;