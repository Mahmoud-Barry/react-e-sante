import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login_logo from '../img/login_secure.png';
// import Footer from './Footer';
import * as AiIcons from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'


const LoginPage = () => {
    
    const navigate = useNavigate()

    const submit=(e)=>{
        e.preventDefault()//Block the form submitting to reload the page

        
        // After Authenitifing the current user redirect him to the home page
        navigate("/registerDoc")
    }
    return (
        <div>
            <section>
                {/* <h3 className='text-primary fw-bolder fs-2'>Connexion</h3> */}
                <div className='mx-md-5 m-2 p-2 row justify-content-center bg-primary'>
                    <div className='row col-6 col-sm-4 col-md-3 col-lg-2 m-auto'>
                        <img src={login_logo}></img>
                    </div>
                    <h2 className='text-light '>Connexion</h2>
                    <div className='col-12 col-sm-9 col-md-7 col-lg-5'>
                        <form onSubmit={e=>submit(e)} className='col-10 m-auto'>
                            <div className='input-group form-control justify-content-center my3'>
                                <CgProfile className='fs-3 my-2 me-2'/>
                                <input required type="number" className="form-control fs-5" placeholder="N° d'identification"></input>
                            </div>
                            <div className='input-group form-control justify-content-center my-3'>
                                <AiIcons.AiFillLock className='fs-3 my-2 me-2'></AiIcons.AiFillLock>
                                <input required type="password" className="form-control fs-5" placeholder="Mot de passe"></input>
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