import React from 'react';
import { Link } from 'react-router-dom'
import './menu.css'
import logo from '../../img/logo to-do rosa.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Menu() {
    return (
        <header>
            <nav className="menu-container">
                <div className='menu-logo'>
                    <Link to="/">
                        <img src={logo} alt="to-do logo" className='logo' />
                    </Link>
                </div>
                <div className='menu-conteudo'>
                    <Link to="/to-dos">
                        <p className='links'>to-dos</p>
                    </Link>
                </div>
                <div className='menu-perfil'>
                    <Link to="/registro">
                        <FontAwesomeIcon icon="fa-solid fa-user" className='usuario' />                    
                    </Link>
                </div>
            </nav>
        </header>
    );
}
