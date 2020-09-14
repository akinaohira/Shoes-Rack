import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//image
import shoesCOMME from "./img/shoesCOMME.png";
import shoesFire from "./img/shoesFIre.png";
import shoesBlack from "./img/shoesBlack.png";
import shoesFireBlack from "./img/shoesFireBlack.png";

//Components
// import Allshoes from "./components/allshoes";

export default function App() {
  const [allshoes, setshoes] = useState([]);
  const [currentView, setCurrentView] = useState(false);
  const [shoesImage, setshoesImage] = useState([]);

  // function for get data from backend
  async function getdata() {
    const { shoes: allshoes } = await axios.get("api/allshoes");
    // setshoes(shoes.allshoes);
  }

  // useEffect(getdata(), []);

  return (
    <div className="App">
      <h1>SHOES RACK</h1>
      <div className="filterBox">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="yean" />
      </div>
      <img src={shoesCOMME} />
      <img src={shoesFire} />
      <img src={shoesBlack} />
      <img src={shoesFireBlack} />
      {/* <Allshoes 
      allShoes="allShoes"  
      setCurrentView="setCurrentView"/>
      shoesImage="shoesImage" */}
    </div>
  );
}
