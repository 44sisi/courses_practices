import './Recipe.css'

const Recipe = (props) => {
  const { title, img, instructions } = props;
  const ingredients = props.ingredients.map((element, index) => (
    <li key={index}>{element}</li>
  ));
  return (
    <div className="recipe-card">
      <div className="recipe-card-image">
        <img src={img} alt={title} />
      </div>
      <div className="recipe-card-content">
        <h3 className="recipe-title">{title}</h3>
        <h4>Ingredients:</h4>
        <ul>{ingredients}</ul>
        <h4>Instructions:</h4>
        <p>{instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
