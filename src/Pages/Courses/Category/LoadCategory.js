import React, { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';

const LoadCategory = () => {
    const [courses, setCourses]= useState([]);
    // this section is done to generate all categories for side nav
    useEffect(()=>{
        fetch('https://coursely-server.vercel.app/courses')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
    // console.log(courses);
    // generated categories
    let allCategory = [];
    courses.forEach(courses => {
        if(!allCategory.includes(courses.category_name)){
            allCategory.push(courses.category_name);
        }
    });
    return (
        <div className='mt-5'>
                {/* all categories is not in the db that's why created separately */}
                <NavLink to='/courses' className={({ isActive }) => isActive ?
                'p-5 m-5 text-center text-2xl font-bold text-white bg-[#00b58b]  hover:text-black block':'block dark:bg-black p-5 m-5 text-center text-2xl border-black dark:border-white border dark:text-white font-bold hover:bg-[#00b58b] hover:border-[#00b58b] hover:text-white dark:hover:bg-[#00b58b] dark:hover:border-[#00b58b]'}>All categories</NavLink>
                {/* category names are set to the side navamwzma'c;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;c;;c;mmbm,m,mmx/'/'/;b  bv;n z/ b ../...vb/c..b..v/bl;;;';;bv., ,,cvc v b/;v/b/'/bb// nbn BNb??N/bnN?mnnMNmmn/m?/nMNNNnMNMN N/MN?/.n...m. m//// */}
                <div>
                    {
                        allCategory.map((cat,idx)=><NavLink to={`/category/${idx+1}`} key={idx} className={({ isActive }) => isActive ?
                        'p-5 m-5 text-center text-2xl font-bold text-white bg-[#00b58b]  hover:text-black block':'dark:bg-black p-5 m-5 text-center text-2xl border-black dark:border-white border dark:text-white font-bold hover:bg-[#00b58b] hover:border-[#00b58b] hover:text-white block dark:hover:bg-[#00b58b] dark:hover:border-[#00b58b]'}>{cat}</NavLink>)
                    }
                </div>
        </div>
    );
};

export default LoadCategory;