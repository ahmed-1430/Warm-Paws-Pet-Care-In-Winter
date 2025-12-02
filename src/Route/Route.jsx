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
        path: "/*",
        element: <h1>404</h1>
    }
])
export default router;