import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { FaStar, FaUserAlt, FaAngleRight,FaStop } from 'react-icons/fa';

const SingleCourse = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
            <div className='grid-cols-1 ml-10'>
                <div>
                    <img src={course.img} alt="" />
                    <div className='flex justify-items-center items-center mt-3'>
                        <img src={course.author_img} alt="" style={{width:'100px',
                    borderRadius:'50%'}}/>
                    <div className='ml-2'>
                    <p className='text-2xl text-center mt-2'>{course.created_by}</p>
                    <p className='flex justify-items-center items-center mt-3'><FaStop/>Last updated: {course.updated}</p>
                    </div>
                    </div>
                    <p className='my-5'>{course.description}</p>
                    <div>
                        <p className='flex justify-between text-2xl'><span>Duration: {course.duration}H</span><span className='flex justify-items-center items-center'><FaStar className='mr-1' />{course.rating}</span><span className='flex justify-items-center items-center'><FaUserAlt className='mr-1' />{course.students}</span></p>
                        <p className='text-4xl text-center my-4 font-bold'>Price: ${course.price}</p>
                    </div>
                    <div className='border-2 p-2 my-5'>
                        <p className='text-3xl mb-2'>What you will learn?</p>
                        {
                            course.learning.map((learn,idx)=>
                            <p key={idx} className="flex"><FaAngleRight className='mt-1'/>{learn}</p>)
                        }
                    </div>
                    <div className='mb-3'>
                    <p className='text-3xl'>Requirements</p>
                        {
                            course.requirements.map((req,idx)=><p key={idx} className="flex"><FaAngleRight className='mt-1'/>{req}</p>)
                        }
                    </div>
                </div>
            </div>
            <div className='grid-cols-1 text-center'>
                <h1 className='text-4xl font-bold'>Checkout</h1>
                <p>Item: 1</p>
                <p>Total: {course.price}</p>
                <p>Tax: {(course.price * 0.10).toFixed(2)}</p>
                <p>Grand Total: {parseFloat(course.price) + parseFloat((course.price * 0.10).toFixed(2))}</p>
                {
                    // jod user thake tahole modal wala button ta ui te dekhabo
                    // user na thakle navigate kore felbe sherkm button dekhabo
                    //chill
                }
                <label htmlFor="my-modal" className="btn modal-button bg-[#00b58b] border-none">Buy Now</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg dark:text-black">Congratulations!!!</h3>
                        <p className="py-4 dark:text-black">You've successfully enrolled. Please check your email.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Okay</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;