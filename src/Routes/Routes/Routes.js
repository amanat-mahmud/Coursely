import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Category from "../../Pages/Courses/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import Login from "../../Pages/Sign In/Login/Login";
import SingleCourse from "../../Pages/SingleCourse/SingleCourse";
import Register from "../../Pages/Sign In/Register/Register"
import FAQ from "../../Pages/FAQ/FAQ"
import Blog from "../../Pages/Blog/Blog"
import Home from "../../Pages/Home/Home";
import Checkout from "../../Pages/Checkout/Checkout";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: ()=>fetch('https://coursely-server.vercel.app/courses')
            },
            {
                path:'/course/:id',
                element:<SingleCourse></SingleCourse>,
                loader: ({params})=>fetch(`https://coursely-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params})=>fetch(`https://coursely-server.vercel.app/category/${params.id}`)
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params})=>fetch(`https://coursely-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
    ],
        errorElement:<Error></Error>
    }
]) 