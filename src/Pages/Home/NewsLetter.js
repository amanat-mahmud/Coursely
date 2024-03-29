import React from 'react';
import { toast } from 'react-toastify';
import newsImage from '../../assets/images/news2.png';

const NewsLetter = () => {
    return (
        
<div id='news-letter' className="bg-white dark:bg-gray-800 mt-20">
    <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
        <h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
            We&#x27;ve got more coming...
        </h2>
        <p className="mt-2 max-w-xl text-base text-gray-400">
            Want to hear from us when we add new courses? Sign up for our newsletter and we&#x27;ll email you every time we release a new course.
        </p>
        <div>
            <div className="mt-6 sm:flex justify-start">
                <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0" onSubmit={(e)=>{
                e.preventDefault() 
                toast("Subscribed Successfully")
                e.target.email.value = '';
            }}>
                    <div className=" relative ">
                        <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#00b58b] focus:border-transparent" placeholder="Email" required name='email'/>
                        </div>
                        <button className="btn font-semibold text-white bg-[#00b58b] rounded-lg shadow-md border-0  dark:hover:bg-white dark:hover:text-[#00b58b]" type="submit" >
                            Subscribe
                        </button>
                        
                    </form>
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
                <picture>
                    <source srcSet={newsImage} type="image/jpeg"/>
                        <source srcSet={newsImage}/>
                            <img className="object-cover w-2/3 mx-auto" src="/images/object/5.png" alt="shopping item"/>
                        </picture>
                    </div>
                </div>
            </div>

    );
};

export default NewsLetter;