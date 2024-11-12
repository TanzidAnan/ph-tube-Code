import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Compontents/MainLayouts/MainLayouts";
import Home from "../Compontents/Home/Home";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default routes