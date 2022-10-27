import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/coursely.png';
import { AuthContext } from '../../../context/Auth/AuthProvider';
const Header = () => {
    const { isDark, setDark, user, logOut } = useContext(AuthContext);
    const handleToggleClick = () => {
        setDark(!isDark);
        // console.log(isDark)
    }
    const handleLogout = () => {
        // console.log("clicked");
        logOut()
        .then()
        .catch()
    }
    return (
        <div>
            <div className="navbar bg-base-100 dark:bg-black dark:text-white">
                {/* In mobile device */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-black">
                            <li><NavLink className={({ isActive }) =>
                                isActive ? "bg-[#00b58b]" : undefined}
                                to="/courses">Courses</NavLink></li>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/login">Log in</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "btn border-solid bg-white  text-[#00b58b]  border-[#00b58b] hover:border-solid hover:text-white hover:bg-[#00b58b] hover:border-[#00b58b] dark:border-none" : "btn bg-[#00b58b] border-solid border-white hover:bg-white text-white hover:text-[#00b58b]  hover:border-[#00b58b] hover:border-solid dark:border-none"}>Register</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to='/'><img src={logo} alt="Coursely-logo" style={{ width: '60px' }}></img></NavLink>
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl hidden md:flex">Coursely</NavLink>
                </div>
                {/* In laptop device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='mr-1'><NavLink to="/courses" className={({ isActive }) =>
                            isActive ? "bg-black text-white dark:bg-white dark:text-black " : undefined}>Courses</NavLink></li>
                        <li className='mr-1'><NavLink to="/faq" className={({ isActive }) =>
                            isActive ? "bg-black text-white dark:bg-white dark:text-black " : undefined}>FAQ</NavLink></li>
                        <li className='mr-1'><NavLink to="/blog" className={({ isActive }) =>
                            isActive ? "bg-black text-white dark:bg-white dark:text-black " : undefined}>Blog</NavLink></li>
                        {
                            user?.photoURL ? <><li className='mr-1'><NavLink className="btn border-solid bg-white  text-[#00b58b]  border-[#00b58b] hover:border-solid hover:text-white hover:bg-[#00b58b] hover:border-[#00b58b] dark:border-none" onClick={handleLogout}>Log out</NavLink></li></> : <> <li className='mr-1'><NavLink to="/login" className={({ isActive }) =>
                                    isActive ? "bg-black text-white dark:bg-white dark:text-black " : undefined}>Log in</NavLink></li>
                                <li className='mr-1'><NavLink to='/register' className={({ isActive }) => isActive ? "btn border-solid bg-white  text-[#00b58b]  border-[#00b58b] hover:border-solid hover:text-white hover:bg-[#00b58b] hover:border-[#00b58b] dark:border-none" : "btn bg-[#00b58b] border-solid border-white hover:bg-white text-white hover:text-[#00b58b]  hover:border-[#00b58b] hover:border-solid dark:border-none"}>Register</NavLink></li></>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className='mr-2 lg:mr-10 tooltip tooltip-bottom' data-tip="user"><FontAwesomeIcon icon={faUserGraduate} style={{ fontSize: '25px' }}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faSun} style={{ fontSize: '20px' }}
                    ></FontAwesomeIcon></span>
                    <input type="checkbox" className="toggle toggle-md mx-2" onClick={handleToggleClick} />
                    <span className='lg:mr-5'><FontAwesomeIcon style={{ fontSize: '20px' }} icon={faMoon} /></span>
                </div>
            </div>
        </div>
    );
};

export default Header;  