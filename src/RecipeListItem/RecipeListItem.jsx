import PropTypes from "prop-types";

export const RecipeListItem = ({
  name,
  steps,
  timers,
  imageURL,
  originalURL,
}) => {
  const isLoggedIn = true;

  return (
    <li>
      {isLoggedIn ? <p>User is logged in</p> : <p>User is logged out</p>}

      <img src={imageURL} alt="" width="240" />
      <h2>{name}</h2>

      <div>
        <div>
          <span>Icon</span>
          <p>{name}</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{timers} minutes</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{steps}</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{originalURL}</p>
        </div>
      </div>
    </li>
  );
};

RecipeListItem.propTypes = {
  name: PropTypes.string.isRequired,
  timers: PropTypes.number.isRequired,
  steps: PropTypes.string.isRequired,
  originalURL: PropTypes.string.isRequired,
};
