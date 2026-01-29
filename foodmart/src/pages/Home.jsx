import React from "react";
import Navslider from "../Component/Navslider";
import Photoslid from "../Component/Photoslid";
import Categoryslider from "../Component/Categoryslider";
import Newlyslid from "../Component/Newlyslid";
import Product from "../Component/Product";
import Bestproduct from "../Component/Bestproduct";
import Blog from "../Component/Blog";
import Discount from "../Component/Discount";
import Phonepg from "../Component/Phonepg";
import Ourproduct from "../Component/Ourproduct";
import Detailspg from "../Component/Detailspg";


const Home = () => {
    return (
        <div>
            <div className='d-lg-none d-md-block d-block mt-3'>

                <Navslider />
            </div>
            <div className='mt-2 d-lg-block d-md-none d-none'>
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-4 gap-4">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Women</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Men</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Kids</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-disabled="true">Accessories</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Brand</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sale</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <Photoslid />
            <Categoryslider />
            <Newlyslid />
            <Product />
            <Bestproduct />
            <Blog />
            <Discount />
            <Phonepg />
            <Ourproduct />
            <Detailspg />
            
        </div>
    );
}

export default Home;
