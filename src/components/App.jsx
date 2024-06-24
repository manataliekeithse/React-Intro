import { RecipeItems } from "./RecipeList/RecipeItems";
import recipes from "../components/data/recipes.json";

export const App = () => {
  return <RecipeItems recipes={recipes} />;
};
