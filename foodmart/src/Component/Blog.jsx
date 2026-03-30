import React from 'react';
import photo1 from "../assets/post-thumb-1.jpg"
import photo2 from "../assets/post-thumb-2.jpg"
import photo3 from "../assets/post-thumb-3.jpg"

const Blog = () => {
    return (
        <div className='d-flex justify-content-around flex-wrap mt-5 p-1 gap-3 gap-lg-0'>
            <div className="card border shadow-sm" style={{ width: "30rem" }}>
                <img
                    className='card-img-top p-3'
                    style={{ height: "380px", objectFit: "cover" }}
                    src={photo1}
                />
                <div className="card-body">
                    <div className='d-flex align-items-center gap-3 text-muted small'>
                        <p className='mb-0'><i className="fa-regular fa-calendar me-1"></i>22 Aug 2021</p>
                        <p className='mb-0'><i className="fa-regular fa-folder me-1"></i>tips & tricks</p>
                    </div>
                    <h3 className="card-text">Fresh Citrus Fruit Combo</h3>
                    <p>A vibrant mix of fresh citrus fruits including oranges, lemons, limes, and grapefruit.</p>
                </div>
            </div>

            <div className="card border shadow-sm" style={{ width: "30rem" }}>
                <img
                    className='card-img-top p-3'
                    style={{ height: "380px", objectFit: "cover" }}
                    src={photo2}
                />
                <div className="card-body">
                    <div className='d-flex align-items-center gap-3 text-muted small'>
                        <p className='mb-0'><i className="fa-regular fa-calendar me-1"></i>25 Aug 2021</p>
                        <p className='mb-0'><i className="fa-regular fa-folder me-1"></i>trending</p>
                    </div>
                    <h3 className="card-text">Premium Cashew Butter</h3>
                    <p>This premium cashew butter delivers a smooth, creamy texture made from high-quality cashews.</p>
                </div>
            </div>

           <div className="card border shadow-sm" style={{ width: "30rem" }}>
                <img
                    className='card-img-top p-3'
                    style={{ height: "380px", objectFit: "cover" }}
                    src={photo3}
                />
                <div className="card-body">
                    <div className='d-flex align-items-center gap-3 text-muted small'>
                        <p className='mb-0'><i className="fa-regular fa-calendar me-1"></i>28 Aug 2021</p>
                        <p className='mb-0'><i className="fa-regular fa-folder me-1"></i>inspiration</p>
                    </div>
                    <h3 className="card-text">Fresh Organic Broccoli</h3>
                    <p>Broccoli is one of the most nutrient-dense vegetables, widely known for its health-boosting properties.</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
