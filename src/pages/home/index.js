import React from 'react';
import './home.css';
import PegaHora from '../../hora'
import PegaData from '../../data';
import Timer from '../../timer';
import bola from '../../imgs/bola.png';
import logo from '../../imgs/LogoCompasso.png';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div>
            <img className='bola' src={bola} alt='Logo compasso'></img>  
            <img className='logo' src={logo} alt='Logo compasso'></img>
            <div className='data'>
                <h1 className='hora'><PegaHora /></h1>  
                <p className='descricao-hora'><PegaData /></p>  
            </div>

            <div>
                <footer className='footer'>
                    <div className='div-sobre'>
                        <p className='sobre'>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
                        <div className='div-timer'>
                            <p>Application refresh in</p>
                        </div>
                        <div className='cronometro'>
                            <p className='timer'><Timer /></p><br></br>
                            <p className='seconds'>Seconds</p>
                        </div>
                        <div className='lista-botoes'>
                            <ul>
                                <li className='open'>Continuar Navegando</li>
                               <li className='closed'><Link to="/"> Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default Home;
