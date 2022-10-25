import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <h1 className='lg:text-9xl mt-56'>404</h1>
            <p className='mt-4'><span className='lg:text-5xl'>O</span><span className='lg:text-4xl'>ops....</span></p>
            <p className='lg:text-3xl lg:mx-48 my-4'>The page requested couldn't be found. This could be a spelling error in the URL or a removed page.</p>
            <Link to='/'><button className="btn bg-[#00b58b] text-white border-none">Back to Home Page</button></Link>
        </div>
    );
};

export default Error;