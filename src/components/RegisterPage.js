import React, { useState } from 'react';
import login_logo from '../img/login_secure.png';
import * as AiIcons from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdEmail} from 'react-icons/md'

const RegisterPage = () => {
    const [userName,setuserName]=useState("")
    const [email,setEmail]=useState("")
    const [firstPassword,setFirstPassword]=useState("")
    const [lastPassword,setLastPassword]=useState("")
    const [errorMsg,setErrorMsg]=useState("")
    const [hasError,setHasError]=useState(false)

    const verification=()=>{
        // Verifier si les mot de passes correspondent
        if(firstPassword===lastPassword){
            return true
        }else{
            setHasError(true)
            setErrorMsg('Les deux mot de passe ne correspondent pas')
            return false
        }
    }

    const submit=(e)=>{
        e.preventDefault()//Block the form submitting to reload the page

        if(verification()){
            // Add the new User in the database there
            alert('Pas encore configuré')
        }
    }
    return (
        <div>
            <section className='mx-md-5 m-2 p-2 justify-content-center bg-primary'>
                <div className={hasError?'d-flex row m-auto ':'d-none'}>
                    <p className=' bg-warning fs-4 row'>{errorMsg} 
                        <button className='col-1 btn btn-danger ms-auto m-1' onClick={()=>setHasError(false)}>X</button>
                    </p>
                    
                </div>
                <div className='row justify-content-center'>
                    <div className='row mt-2 col-6 col-sm-4 col-md-3 col-lg-2 m-auto'>
                        <img src={login_logo}></img>
                    </div>
                    <h2 className='text-light '>Inscription</h2>
                    <div className='col-12 col-sm-9 col-md-7 col-lg-5'>
                        <form className='col-10 m-auto' onSubmit={e=>submit(e)}>
                            <div className='input-group form-control justify-content-center my3'>
                                <CgProfile className='fs-3 my-2 me-2'/>
                                <input required type="text" className="form-control fs-5" placeholder="Nom d'utilisateur" value={userName} onChange={e=>setuserName(e.target.value)}></input>
                            </div>
                            <div className='input-group form-control justify-content-center my-3'>
                                <MdEmail className='fs-3 my-2 me-2'/>
                                <input required type="email" className="form-control fs-5" placeholder="Adresse email" value={email} onChange={e=>setEmail(e.target.value)}></input>
                            </div>
                            <div className='input-group form-control justify-content-center my-3'>
                                <AiIcons.AiFillLock className='fs-3 my-2 me-2'></AiIcons.AiFillLock>
                                <input required type="password" className="form-control fs-5" placeholder="Mot de passe" value={firstPassword} onChange={e=>setFirstPassword(e.target.value)}></input>
                            </div>
                            <div className='input-group form-control justify-content-center my-3'>
                                <AiIcons.AiFillLock className='fs-3 my-2 me-2'></AiIcons.AiFillLock>
                                <input required type="password" className="form-control fs-5" placeholder="Confirmer le Mot de passe" value={lastPassword} onChange={e=>setLastPassword(e.target.value)}></input>
                            </div>
                            <div className='input-group justify-content-center my-3'>
                                <button type='submit' className='col-12 btn btn-primary border border-light fw-bolder fs-4 text-light'>S'inscrire</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RegisterPage;