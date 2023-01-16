import React from 'react';
import UpcomingCard from './UpcomingCard';

const Upcoming = ({upcomingCourses}) => {
    return (
        <div className='mb-10 mx-10'>
            <h1 className='text-5xl font-bold mb-10'>Upcoming Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <UpcomingCard upcomingCourses={upcomingCourses}></UpcomingCard>                
            <UpcomingCard upcomingCourses={upcomingCourses}></UpcomingCard>                
            <UpcomingCard upcomingCourses={upcomingCourses}></UpcomingCard>                
            </div>
        </div>
    );
};

export default Upcoming;