import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Compontents/MainLayouts/MainLayouts";
import Home from "../Compontents/Home/Home";
import About from "../Compontents/About/About";

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
            }
        ]
    }
])

export default routes