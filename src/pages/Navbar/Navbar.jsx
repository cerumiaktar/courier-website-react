import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/pricing'>Pricing</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </>
    return (
        <div className="bg-base-100 shadow-lg">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-xl bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className="w-16" src="https://i.ibb.co.com/9TBpjC8/courier-logo-1.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#068DBE] text-white transition-all duration-200 group"> 
                        <span className="group-hover:block hidden transition-all duration-200">Sign in</span>
                        <FaUser />
                    </button>
                </div>
            </div>
        </div> 
    );
};

export default Navbar;