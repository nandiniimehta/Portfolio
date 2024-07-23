import React, { useState } from 'react';
import './Navbar.css';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';
import { HeaderData } from '../../Data/Data';
import logo from '../../assets/mbg.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <div className='mainMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='mainMenuListItem' >Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='mainMenuListItem' >About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='mainMenuListItem' >Projects</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='mainMenuListItem' >Contact</Link>
            </div>
            <a href={HeaderData.github} target="_blank" rel="noopener noreferrer">
                <button className="mainMenuBtn">Github</button>
            </a>

            <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
                <a href={HeaderData.github} target="_blank" rel="noopener noreferrer">
                    <button className="MenuBtn">Github</button>
                </a>
            </div>

        </nav>
    )
}

export default Navbar
