import { RecipeListItem } from "RecipeListItem/RecipeListItem";
import PropTypes from "prop-types";

export const RecipeItems = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(({ id, name, steps, timers, imageURL, originalURL }) => (
        <RecipeListItem
          key={id}
          name={name}
          steps={steps}
          timers={timers}
          imageURL={imageURL}
          originalURL={originalURL}
        />
      ))}
    </ul>
  );
};

RecipeListItem.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
