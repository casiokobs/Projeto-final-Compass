import React from 'react';
import './login.css';
import pc from '../../imgs/pc.png';
import logo from '../../imgs/LogoCompasso-branca.png';
import { Link } from 'react-router-dom';
import getUser from '../../getUser';

function Login(){
    return (
        <div className='container'>
            <div className='div-input'>
                <div className='text-input'>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
                    <h4 className='title-register'>Login</h4>
                </div>
                <form id="form" onSubmit={getUser}>
                    <input type={'text'} id="email"  className='input-login' placeholder='Usuario'></input>   
                    <input type={'password'} id="senha"  className='input-login' placeholder='Senha'></input>
                    <label id='lable-alert' className='label-senha hiden'>Ops, usuário ou senha inválidos. Tente novamente!!</label><br />
                    <input type={'submit'} className='logar' value='Continuar'></input>
                    <p  className='sem-conta'>Não possui conta ? Cadastre-se<Link to="/cadastro"> clicando aqui</Link></p>
                </form>
            </div>

            <div className='div-img'>
                <img className='img-logo' src={logo} alt='Logo compasso'></img>
                <img className='img-login' src={pc} alt='Logo compasso'></img>
            </div>
        </div>
    );
}
export default Login;
