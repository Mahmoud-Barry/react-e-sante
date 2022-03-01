import React from 'react';
import { Link } from 'react-router-dom';
import login_logo from '../img/login_secure.png';
// import Footer from './Footer';
import * as AiIcons from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'

const LoginPage = () => {
    return (
        <div>
            {/* <header className='text-start p-5 mb-5 bg-primary text-light'>
                <h1>Connexion</h1>
                <h3>Accueil / Connexion</h3>
            </header> */}

            {/* Connexion Form */}
            <section>
                {/* <h3 className='text-primary fw-bolder fs-2'>Connexion</h3> */}
                <div className='mx-md-5 m-2 p-2 row justify-content-center bg-primary'>
                    <div className='row col-6 col-sm-4 col-md-3 col-lg-2 m-auto'>
                        <img src={login_logo}></img>
                    </div>
                    <h2 className='text-light '>Connexion</h2>
                    <div className='col-12 col-sm-9 col-md-7 col-lg-5'>
                        <form className='col-10 m-auto'>
                            <div className='input-group form-control justify-content-center my3'>
                                <CgProfile className='fs-3 my-2 me-2'/>
                                <input type="text" className="form-control fs-5" placeholder="N° d'identification"></input>
                            </div>
                            <div className='input-group form-control justify-content-center my-3'>
                                <AiIcons.AiFillLock className='fs-3 my-2 me-2'></AiIcons.AiFillLock>
                                <input type="password" className="form-control fs-5" placeholder="Mot de passe"></input>
                            </div>
                            <div className='input-group justify-content-center my-3'>
                                <button type='submit' className='form-control fw-bolder fs-4 text-primary'> Connexion</button>
                            </div>
                            <div className='input-group justify-content-center'>
                                <Link to="scanCode" className='form-control input-group justify-content-center text-decoration-none'>
                                    <AiIcons.AiOutlineQrcode className='fs-3 my-2 me-2'/>
                                    <button type='button' className='form-control fw-bolder fs-4 text-primary'>Scanner le code</button>
                                </Link>
                            </div>
                        </form>
                        
                        <p className='text-light fs-5'>Mot de passe oublié? cliquez ici</p>
                        <Link to="register" className='input-group justify-content-center my-3'>
                            <button type='button' className='col-10 fw-bolder fs-4 border border-light btn btn-primary text-light'>Créer un nouveau compte</button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default LoginPage;