import React from "react";
import Vector from '../../img/Vector.png';
import './services.css';
const Services =()=>{

    return(
        <div className="container">
            <div className="row justify-content-center text-center ">
                <h2 className="service text-uppercase"> Nos Services</h2>
                <div className="col-md-3 col-sm-5 frame ">
                    <img src={Vector} alt="Vector" />
                    <h4 className="service-h4">Cardiologie</h4>
                    <p className="service-p">Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>

                <div className="col-md-3 col-sm-5 frame ">
                    <img src={Vector} alt="Vector" />
                    <h4 className="service-h4">Cardiologie</h4>
                    <p className="service-p">Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>

                <div className="col-md-3 col-sm-5 frame ">
                    <img src={Vector} alt="Vector" />
                    <h4 className="service-h4">Cardiologie</h4>
                    <p className="service-p">Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>
            </div>

            <div className="row justify-content-center text-center ">
                <div className="col-md-3 col-sm-5 frame ">
                    <img src={Vector} alt="Vector" />
                    <h4 className="service-h4">Cardiologie</h4>
                    <p className="service-p">Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>

                <div className="col-md-3 col-sm-5 frame ">
                    <img src={Vector} alt="Vector" />
                    <h4 className="service-h4">Cardiologie</h4>
                    <p className="service-p">Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>

                <div className="col-md-3 col-sm-5 frame ">
                    <img src={Vector} alt="Vector" />
                    <h4 className="service-h4">Cardiologie</h4>
                    <p className="service-p">Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;