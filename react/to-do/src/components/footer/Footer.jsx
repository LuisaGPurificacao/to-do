import React from 'react';
import './footer.css'
import logo from '../../img/logo to-do azul.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="logo to-do" className='logo' />
                <p>- Feito por Luisa Purificação</p>
                <FontAwesomeIcon icon="fa-solid fa-star" className='star'/>
            </div>
        </footer>
    );
}