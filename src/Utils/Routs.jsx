import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Compontents/MainLayouts/MainLayouts";
import Home from "../Compontents/Home/Home";
import About from "../Compontents/About/About";
import SignUp from "../Compontents/SignUp/SignUp";
import Login from "../Compontents/Login/Login";
import Profile from "../Compontents/Profile/Profile";

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
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/porfile',
                element:<Profile></Profile>
            }
        ]
    }
])

export default routes