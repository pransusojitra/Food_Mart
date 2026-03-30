import React from 'react';
import "./Ourproduct.css"

const buttons = [
    "Blue diamond almonds",
    "Angie’s Boomchickapop Corn",
    "Salty kettle Corn",
    "Chobani Greek Yogurt",
    "Sweet Vanilla Yogurt",
    "Foster Farms Takeout Crispy wings",
    "Warrior Blend Organic",
    "Chao Cheese Creamy",
    "Chicken meatballs",
    "Blue diamond almonds",
    "Angie’s Boomchickapop Corn",
    "Salty kettle Corn",
    "Chobani Greek Yogurt",
    "Sweet Vanilla Yogurt",
    "Foster Farms Takeout Crispy wings",
    "Warrior Blend Organic",
    "Chao Cheese Creamy",
    "Chicken meatballs",
];

const Ourproduct = () => {
    return (
        <div className='tag-btnn'>
            {buttons.map((text, index) =>(
                <button key={index} className="tag-btn">
                    {text}
                </button>
            ))}
        </div>
    );
}

export default Ourproduct;
