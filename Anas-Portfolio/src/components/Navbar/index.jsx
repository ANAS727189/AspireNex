import React, { useState } from "react";
import logo from "../../assets/logo.png";
import githubIcon from "../../assets/github.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-[#FE3A4A] text-white p-4 shadow-md sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="logo" width={40} />
                    <a href="/" className="flex items-center ml-3 text-white">
                        <span className="text-2xl font-extrabold">
                            <span className="text-red-800">{"<A"}</span>
                            nas
                            <span className="text-red-800">{" />"}</span>
                        </span>
                    </a>
                </div>
                <div className="hidden sm:flex items-center space-x-4">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#education" className="nav-link">Education</a>
                </div>
                {/* <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hidden sm:block px-4 py-2 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-red-700 transition duration-300">
                    Github Profile
                </a> */}
                <a href="https://github.com/ANAS727189" target="_blank" rel="noopener noreferrer"><img src={githubIcon} className="cursor-pointer" alt="My Github Profile" width={40} /></a>
                <div className="sm:hidden flex items-center">
                    <button onClick={handleMenuToggle} className="focus:outline-none">
                        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="sm:hidden flex flex-col items-center mt-4 space-y-4">
                    <a href="#about" className="nav-link-mobile" onClick={handleMenuToggle}>About</a>
                    <a href="#skills" className="nav-link-mobile" onClick={handleMenuToggle}>Skills</a>
                    <a href="#experience" className="nav-link-mobile" onClick={handleMenuToggle}>Experience</a>
                    <a href="#projects" className="nav-link-mobile" onClick={handleMenuToggle}>Projects</a>
                    <a href="#education" className="nav-link-mobile" onClick={handleMenuToggle}>Education</a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-red-700 transition duration-300">
                        Github Profile
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
