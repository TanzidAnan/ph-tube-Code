import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Compontents/MainLayouts/MainLayouts";
import Home from "../Compontents/Home/Home";
import About from "../Compontents/About/About";
import SignUp from "../Compontents/SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/signIn',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default routes