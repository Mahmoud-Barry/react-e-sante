import React from 'react';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs'

const Footer = () => {
    return (
        
        <footer className='row mt-5 bg-primary p-5'>
            <div className='col text-start mx-5'>
                <div>
                    <p className='fs-1 fw-bold text-uppercase text-light'>Karengue</p>
                </div>
                <p className='fs-5 text-light'>Lorem ipsum dolor tenetur et quia quam ut odit quis eum aliquam nihil est labore quibusdam ut enim quae.</p>
                <form className='row'>
                    <div className='col-10'>
                        <input type="text" className='form-control' placeholder='Entrez voter email...'></input>
                    </div>
                    <div className='col-2'>
                        <button type='submit' className='text-light fs-5 rounded' style={{background:'#f50',width:'80px',height:'40px'}}> <HiOutlineArrowNarrowRight/> </button>
                    </div>
                </form>
            </div>
            <div className='col-12 col-md-6 text-light text-start row p-3'>
                <div className='col-6'>
                    <ul className='ms-5 ps-5'>
                        <li className='d-inline fs-5'>Solutions</li><br/>
                        <li className='d-inline fs-5'>Odontologie</li><br/>
                        <li className='d-inline fs-5'>Ambulance</li><br/>
                        <li className='d-inline fs-5'>Madecine</li><br/>
                        <li className='d-inline fs-5'>Neurologie</li><br/>
                        <li className='d-inline fs-5'>Diagnostics</li><br/>
                    </ul>
                </div>
                <div className='col-6'>
                    <ul className='ms-5 ps-5'>
                        <li className='d-inline fs-5'>Plan</li><br/>
                        <li className='d-inline fs-5'>Accueil</li><br/>
                        <li className='d-inline fs-5'>Remboursement</li><br/>
                        <li className='d-inline fs-5'>Santé</li><br/>
                        <li className='d-inline fs-5'>Documents</li><br/>
                        <li className='d-inline fs-5'>Ma carte</li><br/>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <p className='col-6 text-end text-light'>Copyright @Karengue 2022</p>
                <p className='col-6 text-start text-light'>
                    <span className='mx-3'><BsIcons.BsFacebook/></span>
                    <span className='mx-3'><BsIcons.BsTwitter/></span>
                    <span className='mx-3'><BsIcons.BsLinkedin/></span>
                    <span className='mx-3'><BsIcons.BsInstagram/></span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;