import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    // Change navbar background color on scroll
    window.onscroll = function () {
        var navbar = document.getElementById("nav"); // Replace "navbar" with the ID of your navbar element
        if (window.pageYOffset > 0) { // Check if user has scrolled
            navbar.style.backgroundColor = "black"; // Replace "your-color" with your desired background color
        } else {
            navbar.style.backgroundColor = "transparent"; // Reset background color if user has scrolled back to the top of the page
        }
    }

    const [display, setDisplay] = useState('none');

    const clickBtn = () => {
        setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
    }

    return (
        <>
            <nav className='navbar' id='nav'>
                <div className="nav-container">
                    <div className="logo">
                        dolla
                    </div>
                    <div className="menu-items">
                        <ul className='ul'>
                            <li>About</li>
                            <li>Discover</li>
                            <li>Services</li>
                            <li>SignUp</li>
                        </ul>
                    </div>
                    <div className="btn">
                        <button><Link style={{textDecoration: 'none', color: 'black'}} to="/signin">Sign In</Link></button>
                    </div>
                    <div className="humburg" onClick={clickBtn}>
                        <MenuIcon fontSize='medium' style={{ display: display === 'none' ? 'block' : 'none' }} />
                        <CloseIcon fontSize='medium' style={{ display: display === 'none' ? 'none' : 'block' }} />
                    </div>
                </div>
            </nav>
            <ul className="menulist" style={{ display }}>
                <li>About</li>
                <li>Discover</li>
                <li>Services</li>
                <li>SignUp</li>
                <li>
                <button><Link style={{textDecoration: 'none', color: 'black'}} to="/signin">Sign In</Link></button>
                </li>
            </ul>
        </>
    )
}
