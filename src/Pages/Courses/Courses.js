import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LoadCategory from './Category/LoadCategory';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-4'>
            <LoadCategory></LoadCategory>
            {/* All courses section of the courses page */}
            <div className='col-span-1 md:col-span-2 mt-4'>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-y-6'>
            {
                courses.map(course=><Course key={course.id}
                course={course}>
                </Course>)
            }
            </div>
            </div>
        </div>
    );
};

export default Courses;