import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import googleImg from "../../../assets/images/google.png"
const register = () => {
    return (
        <div className=''>
            <div className='mx-auto text-center mt-20 border w-2/5 py-5'>
                <h1 className='text-5xl font-bold mb-5'>Create an account</h1>
                <input type="text" name='name' placeholder="Full name" className="input input-bordered w-full max-w-xs mb-5" required /><br></br>
                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full max-w-xs mb-5" required /><br></br>
                <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs mb-5" required /><br></br>
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" required />
                <div className='flex mx-12 my-3 justify-around'>
                </div>
                <Link><button class="btn bg-[#00b58b] border-none w-80 mt-6">Create an account</button></Link>
                <p className='my-3'>Already have an account?<Link className="text-[#00b58b] underline hover:underline-offset-4" to="/login">Log in</Link></p>
            </div>

            <div className='my-8'>
                <div className='flex justify-start mx-auto border rounded-2xl w-2/5 p-2'>
                    <img src={googleImg} alt="Google icon" style={{ width: '26px' }}
                        className="ml-2" />
                    <p className='text-xl font-bold ml-28'>Continue with google</p>
                </div>
                <div className='flex mx-auto border rounded-2xl w-2/5 p-2 mt-5'>
                    <FaGithub className='text-3xl ml-2' />
                    <p className='text-xl font-bold ml-28'>Continue with github</p>
                </div>
            </div>
        </div>
    );
};

export default register;