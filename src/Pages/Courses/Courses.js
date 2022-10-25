import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    let allCategory = [];
    courses.forEach(courses => {
        if(!allCategory.includes(courses.category_name)){
            allCategory.push(courses.category_name);
        }
    });
    console.log(allCategory);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
            <div className='col-span-1 ml-8'>
                <NavLink to='/courses'><p className='bg-black p-5 m-5 text-center text-2xl dark:bg-white text-white dark:text-black'>All categories</p></NavLink>
            {
                allCategory.map((cat,idx)=><NavLink to={`/category/${idx+1}`}><p className='bg-black p-5 m-5 text-center text-white text-2xl dark:text-black dark:bg-white'>{cat}</p></NavLink>)
            }
            </div>
            <div className='col-span-1 md:col-span-2'>
            <h1>Courses</h1>
            </div>
        </div>
    );
};

export default Courses;<h1>In side courses</h1>