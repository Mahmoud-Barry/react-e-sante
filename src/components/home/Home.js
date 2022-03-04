import React from "react";
import Header from "../header/header";
import Services from "../services/Services";
import Team from "../team/Team";
import Temoignage from "../temoignages/Temoignages";
import Footer from '../Footer'

const Home =()=>{

 


    return(
        <div>
            <Header />
            <Services />
            <Team />
            <Temoignage />
            <Footer />
        </div>
    )
}

export default Home;