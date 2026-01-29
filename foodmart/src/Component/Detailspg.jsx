import React from "react";
import "./Detailspg.css";

const Detailspg = () => {
    return (
        <div className="container my-5">
            <div className="d-flex flex-lg-row flex-column justify-content-around text-center g-4">


                <div className="details-card">
                    <i className="fa-solid fa-cart-shopping details-icon"></i>
                    <h4>Free delivery</h4>
                    <p>Fast delivery at no extra cost</p>
                </div>



                <div className="details-card">
                    <i className="fa-solid fa-shield-halved details-icon"></i>
                    <h4>100% secure payment</h4>
                    <p>Safe and encrypted transactions</p>
                </div>



                <div className="details-card">
                    <i className="fa-solid fa-star details-icon"></i>
                    <h4>Quality guarantee</h4>
                    <p>Only fresh, verified quality products</p>
                </div>



                <div className="details-card">
                    <i className="fa-solid fa-piggy-bank details-icon"></i>
                    <h4>Guaranteed savings</h4>
                    <p>Best prices with extra savings</p>
                </div>



                <div className="details-card">
                    <i className="fa-solid fa-money-bill-trend-up details-icon"></i>
                    <h4>Daily offers</h4>
                    <p>New deals available every day</p>
                </div>


            </div>
        </div>
    );
};

export default Detailspg;
