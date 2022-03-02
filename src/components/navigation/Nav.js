import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Nav =()=>{


    return(
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid text-primary">

                    <p><Link className="navbar-brand text-primary mx-3" to="/">E-Sante</Link></p> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse display-navbar" id="navbarText">    
                        <div></div>    
                        <div >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li  className="nav-item ">
                                    <p ><Link className="nav-link text-primary px-3" to="/">Accueil</Link></p>                    
                                </li>
                                <li  className="nav-item">
                                    <p ><Link className="nav-link text-primary px-3" to="/Remboursement">Remboursement</Link></p>    
                                </li>                        
                                <li  className="nav-item">
                                    <p ><Link className="nav-link text-primary px-3" to="/Sante">Sante</Link></p>                    
                                </li> 
                                <li  className="nav-item">
                                    <p ><Link className="nav-link text-primary px-3" to="/Documents">Documents</Link></p>                    
                                </li>

                                <li  className="nav-item">
                                    <p ><Link className="nav-link text-primary px-3" to="/Ma Cartes">Ma Cartes</Link></p>    
                                </li>                
                        
                                <li  className="nav-item">
                                    <p ><Link className="nav-link text-primary px-3" to="/Contact">Contact</Link></p>                    
                                </li> 
                            </ul>
                        </div>

                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li  className="nav-item">
                                    <p className="mx-3"><Link className="nav-link text-primary " to="/Inscription">Inscription</Link></p>    
                                </li>                
                                <li  className="nav-item">
                                    <p className="mx-3"><Link className=" btn btn-danger text-white " to="/Connexion">Connexion</Link></p>                    
                                </li> 
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}    
export default Nav;
