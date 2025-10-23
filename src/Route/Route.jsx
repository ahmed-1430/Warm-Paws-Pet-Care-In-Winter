import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Loading from '../Pages/Loading'
import ServicesLayout from "../Layouts/ServicesLayout";
import Services from "../Pages/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
                loader: ()=> fetch('/Services.json'),
                hydrateFallbackElement: <Loading></Loading>
                
            }
        ]
        
    },
    {
        path: "/services",
        element: <ServicesLayout></ServicesLayout>,
        children:[
            {
                path: "",
                element: <Services></Services>,
                loader: ()=> fetch('/Services.json'),
                hydrateFallbackElement: <Loading></Loading>
                
            }
        ]
    }
])
export default router;