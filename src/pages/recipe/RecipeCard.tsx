import { Link } from "react-router";
import { IRecipe } from "./RecipeList";

interface RecipeCardProp {
  recipe: IRecipe;
}

export default function RecipeCard({ recipe }: RecipeCardProp) {
  return (
    <div className='border rounded'>
      <div className=''>
        <img src={recipe.image} alt='picture of the recipe' />
      </div>
      <h2>{recipe.title}</h2>
      <p>{recipe.describ}</p>
      <Link to={`/recipe/${recipe.recipeId}`}>Detail</Link>
    </div>
  );
}
