import { useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course';
import LoadCategory from './LoadCategory';

const Category = () => {
    // to get fetched data
    const selectedCourses = useLoaderData();
    // console.log(selectedCourses);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-4'>
            <div className='col-span-1 md:ml-8'>
            <LoadCategory></LoadCategory>
            </div>
            {/* handles clicks of the categories */}
            <div className='col-span-1 md:col-span-2 mt-4 gap-y-6 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6  md:mx-auto'>
                {
                    selectedCourses.map(course=><Course key={course.id}
                        course={course}>
                        </Course>)
                }
                </div>
            </div>
        </div>
    );
};

export default Category;