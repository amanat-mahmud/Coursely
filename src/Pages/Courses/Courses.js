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
                <NavLink to='/courses' className={(isActive)=>isActive?'text-[#00b58b]':'text-white'}><p className='bg-black p-5 m-5 text-center text-2xl '>All categories</p></NavLink>
            {
                allCategory.map(cat=><p className='bg-black text-2xl text-white p-5 m-5 text-center'>{cat}</p>)
            }
            </div>
            <div className='col-span-1 md:col-span-2'>
            <h1>Courses</h1>
            </div>
        </div>
    );
};

export default Courses;<h1>In side courses</h1>