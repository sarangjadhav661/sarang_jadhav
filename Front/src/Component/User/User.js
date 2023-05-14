import { useEffect, useState } from "react";

import car from '../../imagess/car.jpg'
import UserNavBar from "./UserNavBar";
import Footer from "../Footer";

function User() {

    return (

        <div>
            <UserNavBar />



            <div className="container mt-5">
                <h1 className="text-center text-primary">Car Selling Ecommers website</h1>
                <div className="row">
                    <div className="col-md-3 col-6 col-xl-3 pt-5">
                        <div class="card"   style={{ alignItems: 'center' }} >
                        <img src={car} alt="logo" className="img-fluid"/>
                            <div class="card-body">
                                <h5 class="card-title">Fiat Car</h5>
                                <p class="card-text">Price 30,00,000</p>
                                <a href="#" class="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-xl-3 pt-5">
                        <div class="card"   style={{ alignItems: 'center' }} >
                        <img src={car} alt="logo" className="img-fluid"/>
                            <div class="card-body">
                                <h5 class="card-title">Fiat Car</h5>
                                <p class="card-text">Price 30,00,000</p>
                                <a href="#" class="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-xl-3 pt-5">
                        <div class="card"   style={{ alignItems: 'center' }} >
                        <img src={car} alt="logo" className="img-fluid"/>
                            <div class="card-body">
                                <h5 class="card-title">Fiat Car</h5>
                                <p class="card-text">Price 30,00,000</p>
                                <a href="#" class="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-xl-3 pt-5">
                        <div class="card"   style={{ alignItems: 'center' }} >
                        <img src={car} alt="logo" className="img-fluid"/>
                            <div class="card-body">
                                <h5 class="card-title">Fiat Car</h5>
                                <p class="card-text">Price 30,00,000</p>
                                <a href="#" class="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                  
                </div>
        

            </div>
            <Footer />
        </div>

    );

}

export default User;