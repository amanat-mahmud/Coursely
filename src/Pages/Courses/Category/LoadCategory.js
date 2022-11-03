import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

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
        <div>
                {/* all categories is not in the db that's why created separately */}
                <NavLink to='/courses'><p className='dark:bg-black p-5 m-5 text-center text-2xl border-black dark:border-white border dark:text-white font-bold'>All categories</p></NavLink>
                {/* category names are setted to the side nav */}
            {
                allCategory.map((cat,idx)=><NavLink to={`/category/${idx+1}`} key={idx}><p className='dark:bg-black p-5 m-5 text-center text-2xl border-black dark:border-white border dark:text-white font-bold' key={idx} >{cat}</p></NavLink>)
            }
        </div>
    );
};

export default LoadCategory;