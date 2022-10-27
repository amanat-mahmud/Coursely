import React, { useContext, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import googleImg from "../../../assets/images/google.png"
import { AuthContext } from '../../../context/Auth/AuthProvider';
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error,setError] = useState(null)
    const handleOnSubmit = (event) =>{
        event.preventDefault();
        setError(null);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password,name,photo);
        createUser(email,password)
        .then(res=>console.log(res.user))
        .catch(error=>setError(error.message))
        // console.log("clicked");
    }
    return (
        <div >
            <form onSubmit={handleOnSubmit}>
            <div className='md:mx-auto text-center mt-20 border md:w-2/5 py-5'>
                <h1 className='text-5xl font-bold mb-5'>Create an account</h1>
                <input type="text" name='name' placeholder="Full name" className="input input-bordered w-full max-w-xs mb-5" required /><br></br>
                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full max-w-xs mb-5" required /><br></br>
                <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs mb-5" required /><br></br>
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" required />
                <div className='flex mx-12 my-3 justify-around'>
                </div><p className='text-red-500'>{error}</p>
                <button className="btn bg-[#00b58b] border-none w-80 mt-6" type='submit'>Create an account</button>
                <p className='my-3'>Already have an account?<Link className="text-[#00b58b] underline hover:underline-offset-4" to="/login">Log in</Link></p>
            </div>
            </form>

            <div className='my-8'>
                <button className='flex justify-between mx-auto border-black dark:border-white rounded-2xl md:w-2/5 p-2 btn bg-white text-black dark:bg-black dark:text-white
                dark:hover:bg-white  dark:hover:text-black hover:text-white'>
                    <img src={googleImg} alt="Google icon" style={{width:'26px'}}/>
                    <p className='text-xl font-bold mr-24'>Continue with google</p>
                </button>
                <button className='btn bg-white text-black flex mx-auto border-black dark:border-white  dark:bg-black dark:text-white rounded-2xl md:w-2/5 p-2 mt-5 justify-between dark:hover:bg-white  dark:hover:text-black hover:text-white' onClick={()=>{console.log("clicked")}}>
                    <FaGithub className='text-3xl '/>
                    <p className='text-xl font-bold mr-24'>Continue with github</p>
                </button>
            </div>
        </div>
    );
};

export default Register;