import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaUserAlt } from 'react-icons/fa';

const SingleCourse = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
            <div className='grid-cols-1 ml-10'>
                <div>
                    <img src={course.img} alt="" />
                    <p className='text-2xl text-center mt-2'>Author: {course.created_by}</p>
                    <p className='my-5'>{course.description}</p>
                    <div>
                        <p className='flex justify-between text-2xl'><span>Duration: {course.duration}H</span><span className='flex justify-items-center items-center'><FaStar className='mr-1' />{course.rating}</span><span className='flex justify-items-center items-center'><FaUserAlt className='mr-1' />{course.students}</span></p>
                        <p className='text-4xl text-center my-4 font-bold'>Price: ${course.price}</p>
                    </div>
                </div>
            </div>
            <div className='grid-cols-1 text-center'>
                <h1 className='text-4xl font-bold'>Checkout</h1>
                <p>Item: 1</p>
                <p>Total: {course.price}</p>
                <p>Tax: {(course.price * 0.10).toFixed(2)}</p>
                <p>Grand Total: {parseFloat(course.price) + parseFloat((course.price * 0.10).toFixed(2))}</p>
                <label htmlFor="my-modal" className="btn modal-button bg-[#00b58b] border-none">Buy Now</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations!!!</h3>
                        <p className="py-4">You've successfully enrolled. Please check your email.</p>
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