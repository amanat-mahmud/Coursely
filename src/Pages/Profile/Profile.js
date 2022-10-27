import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthProvider';

const Profile = () => {
    const {user,updateUser,dispLastName,setdispLastName} = useContext(AuthContext);
    const handleUpdate = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        setdispLastName(form.lastName.value);
        console.log();
        updateUser(name,photo)
        .then()
        .catch()
        console.log(dispLastName);
    }
    return (
        <div className="md:mx-80 dark:border-2 dark:border-white mb-5 ">
            <img src={user?.photoURL} alt="user" style={{borderRadius:"50%"}} className="px-5 pt-5"></img>
            <form onSubmit={handleUpdate}>
            <div className="w-full bg-white p-10  dark:bg-black dark:text-white">
                <h1 tabIndex={0}  aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800 mt-12 dark:text-white">
                    Profile info
                </h1>
                <p role="contentinfo" className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4 dark:text-white">
                    Update you profile <br />
                    You don't need any nid or passort
                </p>
                <h2  aria-label="enter Personal data" className="text-xl font-semibold leading-7 text-gray-800 mt-10 dark:text-white">
                    Personal data
                </h2>
                <p className="text-sm font-light leading-none text-gray-600 mt-0.5 dark:text-white">Your details and place of birth</p>
                <div className="mt-8 md:flex items-center ">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800 dark:text-white">First name</label>
                        <input type="name" tabIndex={0} aria-label="Enter first name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue={user?.displayName} name="name"/>
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800 dark:text-white">Last name</label>
                        <input type="name" tabIndex={0} aria-label="Enter last name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue={dispLastName ? dispLastName: "Unknown"} name="lastName"/>
                    </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800 dark:text-white">Email Address</label>
                        <input type="email" tabIndex={0} aria-label="Enter email Address" name='email' className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue={user?.email} />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800  dark:text-white">Phone number</label>
                        <input type="text" tabIndex={0} aria-label="Enter phone number" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue={user?.phoneNumber?
                            user?.phoneNumber:"Unknown"} />
                    </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800 dark:text-white">Date of birth</label>
                        <input  tabIndex={0} aria-label="Enter date of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue="28.03.1997" />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800 dark:text-white">Photo Url</label>
                        <input type="name" tabIndex={0} aria-label="Enter place of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue={user?.photoURL} name="photo"/>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="py-4 flex items-center">
                        <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" tabIndex={0} aria-label="I agree with the terms of service" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm leading-none ml-2">
                            I agree with the <span className="text-indigo-700 dark:text-[#00b58b]">terms of service</span>
                        </p>
                    </div>
                </div>
                <button  aria-label="Next step" className="flex items-center justify-center py-4 px-7 focus:outline-none dark:bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 bg-[#00b58b]
                dark:hover:bg-gray-200 " type='submit'>
                    <span className="text-sm font-medium text-center text-gray-800 capitalize ">Up date</span>
                    <svg className="mt-1 ml-3" width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                    </svg>
                </button>
            </div>
            </form>
            <style dangerouslySetInnerHTML={{ __html: "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      " }} />
        </div>
    );
};

export default Profile;