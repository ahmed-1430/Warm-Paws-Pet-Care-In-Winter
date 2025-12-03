import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Loading from '../Pages/Loading'
import ServicesLayout from "../Layouts/ServicesLayout";
import Services from "../Pages/Services";
import LoginLayout from "../Layouts/LoginLayout";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Profile from "../Pages/Profile";
import ServiceDetails from "../Pages/ServiceDetails";
import ServiceDetailsLayout from "../Layouts/ServiceDetailsLayout";
import EditProfile from "../Pages/EditProfile";
import PrivateRoute from "../Provider/PrivateRoute";
import ResetPassword from "../Pages/ResetPassword";
import Booking from "../Pages/Booking";
import AdminLayout from "../Layouts/AdminLayout";
import AdminServices from "../Pages/Admin/AdminServices";
import AdminBookings from "../Pages/Admin/AdminBookings";
import AdminReviews from "../Pages/Admin/AdminReviews";
import AdminAddService from "../Pages/Admin/AdminAddService";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/api/services'),
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: "/about",
                element: <About/>
            }
        ]

    },
    {
        path: "/services",
        element: <ServicesLayout></ServicesLayout>,
        children: [
            {
                path: "",
                element: <Services></Services>,
                loader: () => fetch('http://localhost:3000/api/services'),
                hydrateFallbackElement: <Loading></Loading>

            }
        ]
    },
    {
        path: "/user",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/user/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/user/register",
                element: <RegisterPage></RegisterPage>
            },
            {
                path: "/user/reset-password",
                element: <ResetPassword></ResetPassword>
            },
            {
                path: "/user/profile",
                element: <PrivateRoute> <Profile></Profile> </PrivateRoute>,
            },
            {
                path: "/user/profile/edit-profile",
                element: <PrivateRoute> <EditProfile></EditProfile> </PrivateRoute>
            }
        ]
    },
    {
        path: "services/category/:id",
        element: <ServiceDetailsLayout></ServiceDetailsLayout>,
        children: [
            {
                path: "",
                element: <PrivateRoute> <ServiceDetails></ServiceDetails> </PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`http://localhost:3000/api/services/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>,
            }
        ]
    },
    {
        path: "/booking/:serviceId",
        element: (
            <PrivateRoute>
                <Booking />
            </PrivateRoute>
        )
    },
    {
        path: "/admin",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: "/admin/dashboard",
                element: <AdminDashboard/>
            },
            {
                path: "/admin/services",
                element: <AdminServices/>
            },
            {
                path: "/admin/bookings",
                element: <AdminBookings/>
            },
            {
                path: "/admin/reviews",
                element: <AdminReviews/>
            },
            {
                path: "/admin/add-service",
                element: <AdminAddService/>
            },
            {
                path: "/admin/providers",
                element: <h1 className="w-full h-full flex justify-center items-center text-3xl font-semibold">Coming Soon...</h1>
            },
            {
                path: "/admin/users",
                element: <h1 className="w-full h-full flex justify-center items-center text-3xl font-semibold">Coming Soon...</h1>
            }
        ]
    },
    {
        path: "/*",
        element: <h1 >404</h1>
    }
])
export default router;