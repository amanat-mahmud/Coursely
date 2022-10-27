import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from "../../../assets/images/google.png"
import { AuthContext } from '../../../context/Auth/AuthProvider';
const Login = () => {
    const {signInWithGoogle,signInWithGitHub,logInWithEmail,setLoading} = useContext(AuthContext)
    // const location = useLocation();
    const navigate = useNavigate();
    // location.state.from.pathname ||
    const from =  "/"
    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);
        // console.log("clicked");
        logInWithEmail(email,password)
        .then(res=>{setLoading(false);
            console.log(res.user);
        navigate(from,{replace:true})
        })
        .catch(error=>console.log(error.message))
    }
    const handleOnClickGoogle = () => {
        signInWithGoogle()
        .then(res=>{
            setLoading(false)
        })
        .catch(error=>console.log(error.message))
    }
    const handleOnClickGitHub = () =>{
        signInWithGitHub()
        .then(res=>{
            setLoading(false)
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div >
            
                <div className='md:mx-auto text-center mt-20 border md:w-2/5 py-5'>
                    <h1 className='text-5xl font-bold mb-5'>Login</h1>
                    <form onSubmit={handleOnSubmit}>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs mb-5 text-black" required /><br></br>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs text-black" required />
                    <div className='flex mx-12 my-3 justify-around'>
                        <div className='flex'>
                            <input type="checkbox" className="checkbox mr-1 dark:checkbox-accent" />
                            <p>Remeber me</p>
                        </div>
                        <Link className="text-[#00b58b] underline hover:underline-offset-4">Forget Password?</Link>
                    </div>
                    <button className="btn bg-[#00b58b] border-none w-80 mt-6" type="submit">Log in</button>
                    <p className='my-3'>Don't have an account?<Link className="text-[#00b58b] underline hover:underline-offset-4" to="/register">Create an account</Link></p>
                    </form>
                </div>
            
            <div className='my-8'>
                <button className='flex justify-between mx-auto border-black dark:border-white rounded-2xl md:w-2/5 p-2 btn bg-white text-black dark:bg-black dark:text-white
                dark:hover:bg-white  dark:hover:text-black hover:text-white'
                onClick={handleOnClickGoogle}>
                    <img src={googleImg} alt="Google icon" style={{ width: '26px' }} />
                    <p className='text-xl font-bold mr-24'>Continue with google</p>
                </button>
                <button className='btn bg-white text-black flex mx-auto border-black dark:border-white  dark:bg-black dark:text-white rounded-2xl md:w-2/5 p-2 mt-5 justify-between dark:hover:bg-white  dark:hover:text-black hover:text-white' onClick={handleOnClickGitHub}>
                    <FaGithub className='text-3xl ' />
                    <p className='text-xl font-bold mr-24'>Continue with github</p>
                </button>
            </div>
        </div>
    );
};

export default Login;