import React from 'react';
import { Link } from 'react-router-dom'
import './login.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Login() {
    return (
        <section>
            <div class="background-login">
            </div>
            <div class="container-form-login">
                <form class="form-login">
                    <div class="div-input">
                        <label htmlFor="email"><FontAwesomeIcon icon="fa-solid fa-envelope" class="icones-form azul" /></label>
                        <input type="email" name="email" placeholder='E-mail' id="email" required />
                    </div>
                    <div class="div-input">
                        <label htmlFor="senha"><FontAwesomeIcon icon="fa-solid fa-lock" class="icones-form rosa" /></label>
                        <input type="password" name="senha" placeholder='Senha' id="senha" required />
                    </div>
                    <div class="div-botao">
                        <button id="enviar-login">Login</button>
                    </div>
                    <p>Não possui login? Clique <Link to="/registro"><span className='destaque'>aqui</span></Link> para fazer seu cadastro</p>
                </form>
            </div>
        </section>
    );
}