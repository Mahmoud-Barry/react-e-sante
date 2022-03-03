import React from 'react';
import "./team.css";
import alex from '../../img/alex.png';
import myriam from '../../img/myriam.png';
import evian from '../../img/evian.png';
import luis from '../../img/luis.png'

const Team = ()=>{
    return(
        <div className="container-fluid text-center ">
            <h4 className='team-h4'>Notre Team</h4>
            <div class="row justify-content-center team-row ">
                <div class="member col-md-3 col-sm-5">
                    <img className='profil my-3' src={alex} alt="profil" />
                    <h3 className='mt-3'>Alex</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>
                <div class="member col-md-3 col-sm-5">
                    <img className='profil my-3' src={myriam} alt="profil" />
                    <h3 className='mt-3'>Myriam</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>
                <div class="member col-md-3 col-sm-5">
                    <img className='profil my-3' src={luis} alt="profil" />
                    <h3 className='mt-3'>Luis</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>
                <div class="member col-md-3 col-sm-5">
                    <img className='profil my-3' src={evian} alt="profil" />
                    <h3 className='mt-3'>Evian
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>
            </div>
            <div className="row pt-3 team-row">
                

            </div>
        </div>
    );
}

export default Team;