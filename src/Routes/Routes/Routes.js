import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddBooks from "../../Pages/Dashboard/AddBooks/AddBooks";
import AddedBooks from "../../Pages/Dashboard/AddedBooks/AddedBooks";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import DashboardLayout from "../../Pages/Dashboard/DashboardLayout/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement:<ErrorPage></ErrorPage> ,
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
            // {
            //     path: '/appointment',
            //     element: <Appointment></Appointment>
            // }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement:<ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/dashboard',
                
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
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({params}) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
            // },
        ]
    }
    
])

export default router;