import React, { useEffect, useState } from "react";
import design from '../Css/Nickrecipe.module.css';

const ENDPOINT = 'https://api.spoonacular.com/recipes/complexSearch';
const KEY = '45ef36b2372f49ba841b9195f5adff4a';

export default function Nickrecipe({ food, setFood }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function nickRecipe() {
      const fetching = await fetch(`${ENDPOINT}?query=${search}&apiKey=${KEY}`);
      const data = await fetching.json();
      console.log(data.results);
      setFood(data.results);
    }
    nickRecipe();
  }, [search, setFood]);

  return (
    <nav>
      <div>
        <h1 className={design.header}>Search for a food recipe here</h1>
        <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder="search" type="text" />
        <center><h2 className={design.header}>AVAILABLE RECIPES</h2></center>
      </div>
    </nav>
  );
}
