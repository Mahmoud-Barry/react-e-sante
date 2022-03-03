import React from "react";
import routine from '../../img/routine.png';
import './header.css';
const Header =()=>{

    return(
        <div >
            <header className="header bg-primary">
                <div className="row align-items-center">

                    <div className="col-6 ">
                        <div class="text-white header-content ">
                            <h2 class=" t-header">Votre carte votre consultation</h2>
                            <a class="esp" href="#!" >En savoir plus</a>
                        </div>
                    </div>

                    <div className="col-6 ">
                        <img className="w-100" src={routine} alt="" />
                    </div>
                    
                </div>
            </header>
                    
        </div>
    )
}

export default Header;