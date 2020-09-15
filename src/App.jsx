import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//image
import shoesCOMME from "./img/shoesCOMME.png";
import shoesFire from "./img/shoesFIre.png";
import shoesBlack from "./img/shoesBlack.png";
import shoesFireBlack from "./img/shoesFireBlack.png";
import shoesCamo from "./img/shoesCamo.png";
import shoesGreen from "./img/shoesGreen.png";

//Components
import Allshoes from "./allshoes";
import SelectedShoes from "./SelectShoes";

export default function App() {
  const [inputName, setInputName] = useState();
  const [allshoesName, setallShoesName] = useState([]);
  const [currentView, setCurrentView] = useState(false);

  useEffect(async () => {
    let res = await axios.get("api/allshoes");
    // const result = [...allshoesName, ...res.data];
    console.log("getting data!");
    // console.log(res.data);
    let result = [...allshoesName, ...res.data];
    console.log(result);
    setallShoesName(result);
  }, []);

  return (
    <div className="App">
      <h1>SHOES RACK</h1>
      <div className="filterBox">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>
      <div className="main_container">
        <div className="img_container">
          <img className="img" src={shoesCOMME} />
          <img className="img" src={shoesFire} />
          <img className="img" src={shoesBlack} />
          <img className="img" src={shoesFireBlack} />
          <img className="img" src={shoesCamo} />
          <img className="img" src={shoesGreen} />
        </div>
      </div>
      {inputName ? (
        <SelectedShoes InputName={inputName} AllshoesName={allshoesName} />
      ) : (
        <Allshoes
          SetCurrentView="setCurrentView"
          AllshoesName={allshoesName}
          InputName={inputName}
        />
      )}
    </div>
  );
}
