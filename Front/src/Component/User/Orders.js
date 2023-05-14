import { useEffect, useState } from "react";
import Footer from "../Footer";
import UserNavBar from "./UserNavBar";

function Orders() {

    return (
        <div>
            <UserNavBar />
            <div className="container">
                <div className="row">
                        <h1>Contact</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Orders;