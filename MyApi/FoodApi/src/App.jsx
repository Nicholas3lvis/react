import React, { useState } from "react";
import Nickrecipe from "./components/Nickrecipe";
import FoodCard from "./components/FoodCard";

export default function App() {
  const [food, setFood] = useState([]);

  return (
    <>
      <Nickrecipe food={food} setFood={setFood} />
      <FoodCard food={food} />
    </>
  );
}