import React from 'react';
import { FaStar, FaUserAlt } from 'react-icons/fa';
const Course = ({course}) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={course.img} alt="Shoes" style={{width:'380px',height:'220px'}}/></figure>
                <div className="card-body dark:bg-slate-500" style={{height:'252px'}}>
                    <h2 className="card-title">{course.title}'</h2>
                    <p className='flex justify-between'>Author: {course.created_by}<span className='text-xl'>Price: {course.price}</span></p>
                    <p className='text-xl'>{(course.description).slice(0,20)+'...'}</p>
                    <p className='flex justify-between'><span>Duration: {course.duration}H</span><span className='flex justify-items-center items-center'><FaStar className='mr-1'/>{course.rating}</span><span className='flex justify-items-center items-center'><FaUserAlt className='mr-1'/>{course.students}</span></p>
                    
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#00b58b] border-none">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;