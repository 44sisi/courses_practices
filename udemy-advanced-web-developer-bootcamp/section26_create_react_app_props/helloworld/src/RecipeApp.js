import './RecipeApp.css';
import Recipe from './Recipe';

function RecipeApp() {
  return (
    <div className='App'>
      <Recipe 
        title='Pasta' 
        ingredients={['flour', 'water']}
        instructions = "mix ingredients"
        img="spaghetti.jpeg"
        />
    </div>
  );
}

export default RecipeApp;
