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

