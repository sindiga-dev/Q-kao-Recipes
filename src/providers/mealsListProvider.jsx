import { createContext, useState, useEffect } from "react";
import mealAPI from "../api/meal-api";

export const MealsListContext = createContext();

export default function MealsListProvider({ children }) {
    const [meals, setMeals] = useState([]);
    const [recipe, setRecipe] = useState([null]);
    const [favorites, setFavorites] = useState(() => {
        const lsFavorites = localStorage.getItem('favorites');
    
        return lsFavorites !== null ? JSON.parse(lsFavorites) : [];
      });
    
      function showRecipeInfo(id) {
        fetch(mealAPI.DETAILS_API + id)
          .then((response) => response.json())
          .then((data) => {
            const mealData = { ...data.meals[0] };
            const ingredients = [];
    
            for (let i = 1; i <= 20; i++) {
              if (mealData['strIngredient' + i]) {
                ingredients.push(
                  `${mealData['strIngredient' + i]} - ${mealData['strMeasure' + i]}`
                );
              } else {
                break;
              }
            }
            setRecipe({ ...mealData, ingredients });
          })
          .catch((error) => console.error(error));
      }
    