import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Header.css'
import logo from '../assets/icons/Logo Light.PNG'

function Header() {
    console.log('Header')
    return (
        <nav className={'Header'}>
            <div className={'author-wrapper'}>
                <div className="author-container">
                    <img src={logo} alt=""/>
                    <h1>Chao Wang</h1>
                </div>
            </div>


            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li className={'circle'}></li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li className={'circle'}></li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>

            <hr/>

        </nav>
    );
}

export default Header;