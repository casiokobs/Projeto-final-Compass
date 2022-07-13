import React from 'react';
import './login.css';
import pc from '../../imgs/pc.png';
import logo from '../../imgs/LogoCompasso-branca.png';

function Login(){
    return (
        <div className='container'>
            <div className='div-input'>
                <div className='text-input'>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
                    <h4>Login</h4>
                </div>
                    <input type={'text'}  className='input-login' placeholder='Usuario'></input>   
                    <input type={'password'}  className='input-login' placeholder='Senha'></input>
                    <input type={'button'} className='logar' value='Continuar'></input>
            </div>

            <div className='div-img'>
                <img className='img-logo' src={logo} alt='Logo compasso'></img>
                <img className='img-login' src={pc} alt='Logo compasso'></img>
            </div>
        </div>
    );
}
export default Login;
