import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
// import smallLogo from '../assets/../assets/logotransparent.png';
import transparentLogo from '../assets/logotransparent.png'
import '../styles/Home.css';
import { Link } from 'react-router-dom';



const Recipe = () => {

  const [menu, setMenu] = useState("Recipe");

  return (
    <div>
      <div className="home-header">
        <div className="logo">
        <Link to="/home">
            <img src={transparentLogo} alt="logo" />
            </Link>
        </div>
        <nav className="navBar">
            <div className="navBarButtons">
                <button onClick={() => { setMenu("Nutrition") }}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Nutrition'>Nutrition</Link>
                    {menu === "Nutrition" ? <hr /> : <></>}
                </button>
                <button onClick={() => { setMenu("Recipe") }}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Recipe'>Recipe</Link>
                    {menu === "Recipe" ? <hr /> : <></>}
                </button>
                <button onClick={() => { setMenu("Timer") }}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Timer'>Timer</Link>
                    {menu === "Timer" ? <hr /> : <></>}
                </button>
                <button onClick={() => { setMenu("Account") }}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Account'>Account</Link>
                    {menu === "Account" ? <hr /> : <></>}
                </button>
            </div>
        </nav>
    </div>
  </div>
  );
};

export default Recipe;
