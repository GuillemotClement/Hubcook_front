import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface IRecipe {
  id: number;
  title: string;
  describ: string;
  timePrep: number;
  image: string;
  author: string;
  category: string;
}

export default function RecipeDetail() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    const fetchDetailRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8086/recipe/${recipeId}`);

        if (!response.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await response.json();

        setRecipe(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDetailRecipe();
  }, [recipeId]);

  return (
    <div className=''>
      <h1>{recipe?.title}</h1>
      <img src={recipe?.image} alt='' />
      <p>{recipe?.describ}</p>
      <p>Category :{recipe?.category}</p>
      <p>Temps de preparation : {recipe?.timePrep}</p>
      <p>Author : {recipe?.author}</p>
    </div>
  );
}
