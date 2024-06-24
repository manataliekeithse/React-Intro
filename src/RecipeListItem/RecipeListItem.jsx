export const RecipeListItem = ({
  id,
  name,
  steps,
  timers,
  imageURL,
  originalURL,
}) => {
  return (
    <li>
      <img src={imageURL} alt="" width="240" />
      <h2>{name}</h2>

      <div>
        <div>
          <span>Icon</span>
          <p>{id}</p>
        </div>
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
