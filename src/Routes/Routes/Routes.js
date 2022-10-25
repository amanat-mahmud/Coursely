import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Error from "../../Pages/Error/Error";


export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[{
            path:'/courses',
            element:<div>This is courses</div>
        }],
        errorElement:<Error></Error>
    }
]) 