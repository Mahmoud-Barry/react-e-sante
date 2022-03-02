import React from "react";
import alex from '../../img/alex.png';
import evian from '../../img/evian.png'
import './temoignages.css';
const Temoignage = ()=>{
    return(
        <div className="text-center mt-5">

            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={alex} class="img mb-3 w-img" alt="..." />
                        <h4>Alex</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                    </div>
                    <div class="carousel-item " data-bs-interval="10000">
                        <img src={evian} class="img mb-3 w-img" alt="..." />
                        <h4>Evian</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    );
}

export default Temoignage;