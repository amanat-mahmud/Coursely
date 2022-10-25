import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Category from "../../Pages/Courses/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import SingleCourse from "../../Pages/SingleCourse/SingleCourse";


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