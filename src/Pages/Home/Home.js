import React from 'react';
import { useLoaderData } from 'react-router-dom';
import hero from "../../assets/images/hero.png"
import LearnFromUs from './LearnFromUs';
import NewsLetter from './NewsLetter';
import ReviewSection from './ReviewSection';
import Upcoming from './Upcoming';
const Home = () => {
    const upcomingCourses = useLoaderData();
    // console.log(upcomingCourses);
    return (
        <div>
            <div className='sm:block lg:flex justify-items-center items-center mb-5 md:mb:0'>
            <div className='md:w-1/2'>
            <img src={hero} alt="hero"/>
            </div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Learn from home with Experts.</h1>
                <p className='md:mx-40'>Choose from 204 online video courses with new additions published every month.</p>
                <a className="btn bg-[#00b58b] border-none mt-4 dark:hover:bg-white dark:hover:text-[#00b58b]" href='#news-letter'>Discover More</a>
            </div>
            </div>
            <LearnFromUs></LearnFromUs>
            <Upcoming upcomingCourses={upcomingCourses}></Upcoming>
            <div className='ml-10 mb-10'>
            <h1 className='text-5xl font-bold mb-10'>From Community</h1>
            <ReviewSection></ReviewSection>
            <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;