import { createBrowserRouter } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Header></Header>
    }
]) 