import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <h1 className='text-5xl md:text-9xl lg:mt-56 mt-40'>404</h1>
            <p className='mt-4'><span className='lg:text-5xl md:text-4xl text-3xl'>O</span><span className='lg:text-4xl md:text-3xl text-2xl'>ops....</span></p>
            <p className='lg:text-3xl text-xl md:text-2xl lg:mx-48 mx-20 my-4'>The page requested couldn't be found. This could be a spelling error in the URL or a removed page.</p>
            <Link to='/'><button className="btn bg-[#00b58b] text-white border-none ">Back to Home Page</button></Link>
        </div>
    );
};

export default Error;