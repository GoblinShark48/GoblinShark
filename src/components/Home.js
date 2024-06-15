import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
import smallLogo from '../assets/lunchboxlogosmall.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    //   const [query, setQuery] = useState('');
    //   const [recipes, setRecipes] = useState(null);
    //   const [error, setError] = useState(null);
  // // fetches the recipe from the API
  //     useEffect(() => {
  //     const getRecipes = async (event) => {
  //         try {
  //             const result = await fetchRecipes(query);
  //             setRecipes(result.hits.slice(0,3));

  //         } catch (error){
  //             setError(er ror.message)
  //         }
  //     }
  //     getRecipes();
  // }, [query] );

  // use this when a query is input and that will trigger the state change the useEffect hook will then trigger
  // const handleSearch = (event) => {
  //     event.preventDefault();
  //     console.log('event:', event)
  //     setQuery(event.target.elements.query.value);
  // }

  return (
    // <>
      <div className="home-header">
        <div className="logo">
          <img src={smallLogo} alt="logo" />
        </div>
        <nav className="navBar">
            {/* nav bar buttons */}
          <div className="navBarButtons">
             <button onClick = 'nutritionRouter()' > Nutrition </button>
            <button onClick = 'recipeRouter()'> Recipes </button>
            <button onClick = 'TBDRouter()'> TBD </button>
            <button onClick = 'accountRouter()'> Account </button>
          </div>
        </nav>
      </div>
    //   {/* <div className="recipeSearch">
    //     <form onSubmit={handleSearch}>
    //       <input
    //         type="text"
    //         name="query"
    //         value={query}
    //         onChange = {(e) => setQuery(e.target.value)} 
    //         placeholder="Search for a recipe"
    //         required
    //       />
    //       <button type="submit">Search</button>
    //     </form>
    //     {recipes.length > 0 && (
    //       <div className='recipeResults'>
    //         {recipes.map((recipe, index) => (
    //           <div key={index} className='recipeCard'>
    //             <h2>{recipe.recipe.label}</h2>
    //             <p>recipe.recipe.source</p>
    //             <img src={recipe.recipe.image} alt={recipe.recipe.label} />
    //           </div>
    //         ))}
    //       </div>
    //     )}
    // //   </div>
    // </> */}
  );
};

export default Home;
