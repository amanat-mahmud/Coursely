import { Link, useLoaderData } from 'react-router-dom';
const Checkout = () => {
    const course = useLoaderData();
    const price = course.price;
    // console.log(course);
    return (
        <div>
            <div>
                
        <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
            <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                <div className="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
                    {/* heading */}
                    <div>
                        <h1 className="text-2xl  dark:text-white  font-semibold leading-6 text-gray-800">Order Summary</h1>
                    </div>
                    {/* checkout details section */}
                    <div className="flex mt-7 flex-col items-end w-full space-y-6">
                        {/* course title */}
                        <div className="flex justify-between w-full items-center">
                            <p className="text-lg dark:text-gray-300 leading-4 text-gray-600 font-bold">Course</p>
                            <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">{course.title}</p>
                        </div>
                        {/* total items */}
                        <div className="flex justify-between w-full items-center">
                            <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">Total items</p>
                            <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">1</p>
                        </div>
                        {/* total charge */}
                        <div className="flex justify-between w-full items-center">
                            <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">Total Charges</p>
                            <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">${price}</p>
                        </div>
                        {/* tax */}
                        <div className="flex justify-between w-full items-center">
                            <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">Tax</p>
                            <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">${(price * 0.10).toFixed(2)}</p>
                        </div>
                        {/* grand total */}
                        <div className="flex justify-between w-full items-center">
                            <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">Grand total</p>
                            <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">${parseFloat(price) + parseFloat((price * 0.10).toFixed(2))}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* Checkout button */}
        <div className='text-center mb-3'>
        <Link to="/"><button className='btn bg-[#00b58b] border-none dark:text-[#00b58b] dark:bg-white dark:hover:text-black'>Complete Checkout</button></Link>
        </div>
            </div>
        </div>
    );
};

export default Checkout;