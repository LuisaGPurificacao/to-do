import React from 'react';
import { Link } from 'react-router-dom'
import './registro.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Registro() {
    return (
        <section>
            <div class="background">
            </div>
            <div class="container-form">
                <form class="form-registro">
                    <div class="div-input">
                        <label htmlFor="nome"><FontAwesomeIcon icon="fa-solid fa-heart" class="icones-form rosa" /></label>
                        <input type="text" name="nome" placeholder='Nome *' id="nome" required />
                    </div>
                    <div class="div-input">
                        <label htmlFor="email"><FontAwesomeIcon icon="fa-solid fa-envelope" class="icones-form azul" /></label>
                        <input type="email" name="email" placeholder='E-mail *' id="email" required />
                    </div>
                    <div class="div-input">
                        <label htmlFor="senha"><FontAwesomeIcon icon="fa-solid fa-lock" class="icones-form amarelo" /></label>
                        <input type="password" name="senha" placeholder='Senha *' id="senha" required />
                    </div>
                    <div class="div-botao">
                        <button id="enviar">Registrar</button>
                    </div>
                    <p>Já possui cadastro? Clique <Link to="/login"><span className='destaque'>aqui</span></Link> para fazer seu login</p>
                </form>
            </div>
        </section>
    );
}