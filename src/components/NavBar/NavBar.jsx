import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

export default function NavBar() {

    const [display, setDisplay] = useState('none');

    const clickBtn = () => {
        setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
    }

    return (
        <>
            <nav className='navbar'>
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
                        <button>Sign In</button>
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
                    <button>Sign In</button>
                </li>
            </ul>
        </>
    )
}
