import React from 'react';
import Footer from '../Footer';
import Services from '../services/Services';
import Team from '../team/Team';
import Temoignage from '../temoignages/Temoignages';

const Sante = ()=>{

    return(
        <div>
             <header className='text-start p-5 mb-5 bg-primary text-light'>
                <h1>Sante</h1>
                <h3>Accueil / Sante</h3>
            </header>
            <Services />
            <Team />
            <Temoignage />
            <Footer />
        </div>
    )
}

export default Sante;