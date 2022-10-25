import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/coursely.png';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
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
                        </ul>
                    </div>
                    <img src={logo} alt="Coursely-logo" style={{width:'60px'}}></img>
                    <Link className="btn btn-ghost normal-case text-xl">Coursely</Link>
                </div>
                {/* In laptop device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span><FontAwesomeIcon icon={faSun}></FontAwesomeIcon></span>
                <input type="checkbox" className="toggle toggle-md" />
                    <span><FontAwesomeIcon icon={faMoon} /></span>
                </div>
            </div>
        </div>
    );
};

export default Header;  