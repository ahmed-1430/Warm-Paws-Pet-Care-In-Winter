import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ServicesLayout from "../Layouts/ServicesLayout";
import Services from "../Pages/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            }
        ]
        
    },
    {
        path: "/services",
        element: <ServicesLayout></ServicesLayout>,
        children:[
            {
                path: "",
                element: <Services></Services>
            }
        ]
    }
])
export default router;