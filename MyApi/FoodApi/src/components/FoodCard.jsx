import React from "react";
import design from '../Css/Nickrecipe.module.css';

export default function FoodCard({ food }) {
  return (
    <div>
      {food.map((eat) => (
        <div className={design.foodcard}>
          <center>
            <img className={design.foodimg} src={eat.image} alt="" />
            <h1>{eat.title}</h1>
          </center>
        </div>
      ))}
    </div>
  );
}
