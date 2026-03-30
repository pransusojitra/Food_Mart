import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import "./Categoryslider.css";
import img from "../assets/icon-vegetables-broccoli.png"
import img1 from "../assets/icon-bread-baguette.png"
import img2 from "../assets/icon-soft-drinks-bottle.png"
import img3 from "../assets/icon-wine-glass-bottle.png"
import img4 from "../assets/icon-animal-products-drumsticks.png"
import img5 from "../assets/icon-bread-herb-flour.png"
import img6 from "../assets/icon-vegetables-broccoli.png"
import img7 from "../assets/icon-bread-baguette.png"
import img8 from "../assets/icon-soft-drinks-bottle.png"
import img9 from "../assets/icon-wine-glass-bottle.png"
import img10 from "../assets/icon-animal-products-drumsticks.png"
import img11 from "../assets/icon-bread-herb-flour.png"

const category = [
    { img: img, title: "Fruits & Veggies" },
    { img: img1, title: "Bakery" },
    { img: img2, title: "Soft Drinks" },
    { img: img3, title: "Wine" },
    { img: img4, title: "Meat" },
    { img: img5, title: "Flour" },
    { img: img6, title: "Fruits & Veggies" },
    { img: img7, title: "Bakery" },
    { img: img8, title: "Soft Drinks" },
    { img: img9, title: "Wine" },
    { img: img10, title: "Meat" },
    { img: img11, title: "Flour" },
]

const Navslider = () => {
    return (
        <div className='mt-2'>
            <div className='p-3'><h3>Category</h3></div>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 25,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper px-3 pt-3"
                style={{ height: "230px" }}
            >
                {category.map((item, index) => (
                    <SwiperSlide key={index} className='si rounded-4'>
                        <div className='category-card h-100 d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src={item.img} alt={item.title}></img>
                            <h6>{item.title}</h6>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}

export default Navslider;
