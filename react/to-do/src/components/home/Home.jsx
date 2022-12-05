import React from 'react';
import { Link } from 'react-router-dom'
import './home.css'
import gatinho from '../../img/gatinho.png'
import cachorro from '../../img/dog.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Home() {
    return (
        <section>
            <div className='informacoes'>
                <div className='conteudo'>
                    <h1>Título titulo!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et delectus laborum error blanditiis maiores illum sint magnam ullam a ex assumenda quia sunt eligendi doloremque, dolore sit voluptas iste tempora.</p>
                </div>
                <div className='imagem'>
                    <img src={gatinho} alt="Astronauta em cima de um lápis" />
                </div>
            </div>
            <div className='informacoes2'>
                <h1>Como funciona?</h1>
                <h2>tanananananana</h2>
                <div className='explicacao e1'>
                    <div>
                        <Link to="/registro">
                            <FontAwesomeIcon icon="fa-solid fa-circle-user" className="icones azul" />
                        </Link>
                    </div>
                    <div className='conteudo text-left'>
                        <h2>Registro ou login</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et delectus laborum error blanditiis maiores illum sint magnam ullam a ex assumenda quia sunt eligendi doloremque, dolore sit voluptas iste tempora.</p>
                    </div>
                </div>
                <div className='explicacao'>
                    <div className='conteudo text-right'>
                        <h2>Adicionar tarefas</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et delectus laborum error blanditiis maiores illum sint magnam ullam a ex assumenda quia sunt eligendi doloremque, dolore sit voluptas iste tempora.</p>
                    </div>
                    <div>
                        <Link to="/to-dos">
                            <FontAwesomeIcon icon="fa-solid fa-circle-plus" className="icones amarelo" />
                        </Link>
                    </div>
                </div>
                <div className='explicacao'>
                    <div>
                        <Link to="/to-dos">
                            <FontAwesomeIcon icon="fa-solid fa-table" className="icones rosa" />
                        </Link>
                    </div>
                    <div className='conteudo text-left'>
                        <h2>Visualizar seus to-dos</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et delectus laborum error blanditiis maiores illum sint magnam ullam a ex assumenda quia sunt eligendi doloremque, dolore sit voluptas iste tempora.</p>
                    </div>
                </div>
            </div>
            <div className='informacoes'>
                <div className='conteudo'>
                    <h1>Título titulo!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et delectus laborum error blanditiis maiores illum sint magnam ullam a ex assumenda quia sunt eligendi doloremque, dolore sit voluptas iste tempora.</p>
                </div>
                <div className='imagem'>
                    <img src={cachorro} alt="Astronauta em cima de um lápis" />
                </div>
            </div>
        </section>
    );
}