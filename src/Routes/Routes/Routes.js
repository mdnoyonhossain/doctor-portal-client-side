import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout"
import Main from "../../Layouts/Main/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor"
import AllUser from "../../Pages/Dashboard/AllUser/AllUser"
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors"
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment"
import Payment from "../../Pages/Dashboard/Payment/Payment"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import SignUp from "../../Pages/Login/SignUp/SignUp"
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage"
import AdminRoutes from "../AdminRoutes/AdminRoutes"
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes"

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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>               
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes><Payment></Payment></AdminRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            
        ]
    }
])

export default router