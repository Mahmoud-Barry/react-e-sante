import React from "react";
import Header from "../header/header";
import Nav from "../navigation/Nav";
import Services from "../services/Services";
import Team from "../team/Team";
import Temoignage from "../temoignages/Temoignages";

const Home =()=>{

    return(
        <div>
            <Nav />
            <Header />
            <Services />
            <Team />
            <Temoignage />
        </div>
    )
}

export default Home;