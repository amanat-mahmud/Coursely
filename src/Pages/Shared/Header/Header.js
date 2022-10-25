import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/coursely.png';
const Header = () => {
    const handleToggleClick = () =>{
        console.log("clicked");
    }
    return (
        <div>
            <div className="navbar bg-base-100 dark:bg-black dark:text-white">
                {/* In mobile device */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label  tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link>FAQ</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>Log in</Link></li>
                            <li><Link className='btn  bg-white'>Register</Link></li>
                        </ul>
                    </div>
                    <img src={logo} alt="Coursely-logo" style={{width:'60px'}}></img>
                    <Link className="btn btn-ghost normal-case text-xl hidden md:flex">Coursely</Link>
                </div>
                {/* In laptop device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='mr-1'><Link to="/courses">Courses</Link></li>
                        <li className='mr-1'><Link>FAQ</Link></li>
                        <li className='mr-1'><Link>Blog</Link></li>
                        <li className='mr-1'><Link>Log in</Link></li>
                        <li className='mr-1'><Link className='btn bg-[#00b58b] border-solid border-white hover:bg-white text-white hover:text-[#00b58b]  hover:border-[#00b58b] hover:border-solid dark:border-none'>Register</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className='mr-2 lg:mr-10'><FontAwesomeIcon icon={faUserGraduate} style={{fontSize:'25px'}}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faSun} style={{fontSize:'20px'}}
                    ></FontAwesomeIcon></span>
                <input type="checkbox" className="toggle toggle-md mx-2" onClick={handleToggleClick}/>
                    <span className='lg:mr-5'><FontAwesomeIcon style={{fontSize:'20px'}} icon={faMoon} /></span>
                </div>
            </div>
        </div>
    );
};

export default Header;  