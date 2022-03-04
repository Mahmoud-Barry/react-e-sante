import React from "react";
import { Link, Routes, Route, } from "react-router-dom";
import Home from "../home/Home";
import './nav.css';
import LoginPage from "../LoginPage";
import RegisterDocument from "../RegisterDocument";
import RegisterPage from "../RegisterPage";
import ScanQrCode from "../ScanQRCode";
import Sante from "../sante/Sante";
import Documents from "../Documents";
import Contact from "../contact/Contact";

const Nav =()=>{

    
    return(
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid text-primary">

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
                                  

                                <li className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle text-primary"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Rembourssement
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li  className="nav-item">
                                            <p ><Link className="nav-link text-primary px-3" to="/addPret">Faire un pret</Link></p>                    
                                        </li>
                                        <li  className="nav-item">
                                            <p ><Link className="nav-link text-primary px-3" to="/Remboursement">Remboursement</Link></p>    
                                        </li>  
                                    </ul>
                                </li>

                                <li  className="nav-item">
                                    <p ><Link className="nav-link text-primary px-3" to="/Sante">Sante</Link></p>                    
                                </li> 

                                <li className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle text-primary"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Documents
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li  className="nav-item">
                                            <p ><Link className="nav-link text-primary px-3" to="/addDocuments">addDocuments</Link></p>                    
                                        </li>
                                        <li  className="nav-item">
                                            <p ><Link className="nav-link text-primary px-3" to="/Documents">Documents</Link></p>                    
                                        </li>
                                    </ul>
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

            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<LoginPage />} />
            <Route path="/addDocuments" element={ <RegisterDocument /> }/>
            <Route path="/Documents" element={ <Documents /> }/>
            <Route path="/Contact" element={ <Contact /> }/>
            <Route path="/Inscription" element={<RegisterPage />} />
            <Route path="/Sante" element={<Sante />} />
            <Route path="Connexion/scanCode" element={<ScanQrCode />} />
          </Routes>
        </div>
    )
}    
export default Nav;
