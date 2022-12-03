import React from 'react';
import hero from "../../assets/images/hero.png"
import LearnFromUs from './LearnFromUs';
import Upcoming from './Upcoming';
const Home = () => {
    return (
        <div>
            <div className='sm:block lg:flex justify-items-center items-center mb-5 md:mb:0'>
            <div className='md:w-1/2'>
            <img src={hero} alt="hero"/>
            </div>
            <div className='text-center'>
                <h1 className='text-3xl'>Learn from home with Experts.</h1>
                <p className='md:mx-40'>Choose from 204 online video courses with new additions published every month.</p>
                <button className="btn bg-[#00b58b] border-none mt-4 dark:hover:bg-white dark:hover:text-[#00b58b]">Discover More</button>
            </div>
            </div>
            <LearnFromUs></LearnFromUs>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;