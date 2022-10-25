import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";


export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<div>Home</div>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: ()=>fetch('https://coursely-server.vercel.app/courses')
            },
            {
                path:'/faq',
                element:<div>This is faq</div>
            },
            {
                path:'/blog',
                element:<div>This is blog</div>
            },
            {
                path:'/login',
                element:<div>This is log in</div>
            },
            {
                path:'/register',
                element:<div>This is register</div>
            },
    ],
        errorElement:<Error></Error>
    }
]) 