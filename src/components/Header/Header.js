import './Header.css';
import bg from '../../assets/myBg.jpg';
import { HeaderData } from '../../Data/Data';
import React from 'react';



const Header = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>{HeaderData.name}</span><br />{HeaderData.roles[0]} & {HeaderData.roles[1]}</span>
                <p className='introPar'>{HeaderData.description}</p>
                <a href={`${process.env.PUBLIC_URL}/Nandini-Mehta CV.pdf`} download="Nandini-Mehta CV.pdf" >
                <button className="btn">Resume</button>
                </a>
            </div>
            <img src={bg} alt='' className='bg' />
        </section>
    )
}

export default Header
