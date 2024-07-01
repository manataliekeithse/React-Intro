import { RecipeItems } from "./RecipeList/RecipeItems";
import recipes from "../components/data/recipes.json";
import { RecipeListItem } from "RecipeListItem/RecipeListItem";

export const App = () => {
  return <RecipeItems recipes={recipes} />;
};
