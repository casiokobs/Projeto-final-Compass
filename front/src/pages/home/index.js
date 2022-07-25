import React from 'react';
import './home.css';
import PegaHora from '../../hora'
import Previsao from '../../previsao';
import PegaData from '../../data';
import Timer from '../../timer';
import bola from '../../imgs/bola.png';
import logo from '../../imgs/LogoCompasso.png';
import { Link } from 'react-router-dom';
import checkToken from '../../checkToken';
import removeToken from '../../removeToken';

function Home(){
    checkToken()
    return (
        <div>
            <img className='bola' src={bola} alt='Logo compasso'></img>  
            <img className='logo' src={logo} alt='Logo compasso'></img>
            <div className='data'>
                <h1 className='hora'><PegaHora /></h1>  
                <p className='descricao-hora'><PegaData /></p>  
            </div>
            <div className='content'>
                <h3>Our mission is</h3>
                <p>Nossa missão é</p>
                <h1>to transform the world</h1>
                <p>transformar o mundo</p>
                <h1>building digital experiences</h1>
                <p>construindo experiências digitais</p>
                <h1>that enable our client’s growth</h1>
                <p>que permitam o crescimento dos nossos clientes</p>
            </div>
            <div className='previsao'>
                <p className='city'><Previsao /></p>
                <h1 className='temp'><Previsao /></h1>
                
            </div>

            <div>
                <footer className='footer'>
                    <div className='div-sobre'>
                        <p className='sobre'>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
                        <div className='div-timer'>
                            <p>Application refresh in</p>
                            <div className='cronometro'>
                                <p className='timer'><Timer /></p><br></br>
                                <p className='seconds'>Seconds</p>
                            </div>
                        </div>
                        <div className='lista-botoes'>
                            <ul>
                                <li className='open'>Continuar Navegando</li>
                               <li  onClick={removeToken} className='closed'><Link to="/" onClick={removeToken}> Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default Home;
