import React from 'react';

import pc from '../../imgs/pc.png';
import logo from '../../imgs/LogoCompasso-branca.png';
import Valida from '../../validation_pass';
import cadastroUser from '../../cadastroUser';
import { Link } from 'react-router-dom';

function Register(){
    return (
        <div className='container'>
            <div className='div-input'>
                <div className='text-input'>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, faça o cadastro na rede.</p>
                    <h4 className='title-register'>Cadastre-se</h4>
                </div>
                <form id='form' onChange={Valida} onSubmit={cadastroUser}>
                    <input type={'text'} id="email"  className='input-login input-email' placeholder='Usuario'></input>   
                    <input type={'password'} id="senha"  className='input-login input-email' placeholder='Senha'></input>
                    <label id='pass-lenght' className='label-senha '>A senha deve conter pelo menos 6 caracteres!</label><br />
                    <label id='pass-upper' className='label-senha '>A senha deve conter pelo menos uma letra maiúscula</label> <br />
                    <label id='pass-low' className='label-senha '>A senha deve conter pelo menos uma letra minúscula</label><br />
                    <label id='pass-number' className='label-senha '>A senha deve conter pelo menos um numero</label><br />
                    <input type='submit' className='logar' id='logar' value='Cadastrar'></input>
                    <p  className='sem-conta'>Já possui conta ? Acesse<Link to="/"> clicando aqui</Link></p>
                </form>
            </div>

            <div className='div-img'>
                <img className='img-logo' src={logo} alt='Logo compasso'></img>
                <img className='img-login' src={pc} alt='Logo compasso'></img>
            </div>
        </div>
    );
}
export default Register;
