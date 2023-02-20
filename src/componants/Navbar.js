import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css";

import { Link } from 'react-router-dom';
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className='header'>
            <Link to="/">
                <img src="./images/logo.png" width="150" alt='' className='logo' />
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-links'>
                    <Link to="/">Home</Link>
                </li>
                <button className='btn'>
                <li>
                    <a href="https://www.codeinbound.com/course/aws-devops">Course Details</a>
                </li></button>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: '#000' }} />) : (
                    <FaBars size={20} style={{ color: '#000' }} />)}
            </div>
        </div>
    )
}

export default Navbar