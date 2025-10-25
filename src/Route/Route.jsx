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

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
                loader: () => fetch('/Services.json'),
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
                loader: () => fetch('/Services.json'),
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
                element: <PrivateRoute> <Profile></Profile> </PrivateRoute>, /* i think and should have to private profile and edit profile page.....  */
            },
            {
                path: "/user/profile/edit-profile",
                element: <PrivateRoute> <EditProfile></EditProfile> </PrivateRoute>
            }
        ]
    },
    {
        path: "services/category/:id",
        element: <PrivateRoute> <ServiceDetailsLayout></ServiceDetailsLayout> </PrivateRoute>,
        children: [
            {
                path: "",
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('/Services.json'),
                hydrateFallbackElement: <Loading></Loading>,
            }
        ]

    },
    {
        path: "/*",
        element: <h1>404</h1>
    }
])
export default router;