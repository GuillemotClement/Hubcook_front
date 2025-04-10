import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

export interface IRecipe {
  recipeId: number;
  title: string;
  describ: string;
  timePrep: number;
  image: string;
  author: string;
  category: string;
}

export default function RecipeList() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("http://localhost:8086/recipe");

        if (!response.ok) {
          throw new Error("Erreur serveur");
        }

        const { data } = await response.json();

        setRecipeList(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecipe();
  }, []);

  console.log("Recipe list", recipeList);

  recipeList.map((recipe: IRecipe) => console.log(recipe));

  return (
    <div className=''>
      <h1>Recipe Page</h1>
      <div className='grid grid-cols-3 gap-2'>
        {recipeList.map((recipe: IRecipe) => (
          <RecipeCard key={recipe.recipeId} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
