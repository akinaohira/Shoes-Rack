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
import shoesBlue from "./img/shoesBlues.png";
import shoesCons from "./img/shoesCons.png";
import shoesRed from "./img/shoesRed.png";

//Components
import Allshoes from "./allshoes";
import SelectedShoes from "./SelectShoes";

export default function App() {
  const [inputName, setInputName] = useState();
  const [allshoesName, setallShoesName] = useState([]);
  const [currentView, setCurrentView] = useState(false);
  const allImage = {
    1: shoesCOMME,
    2: shoesFire,
    3: shoesBlack,
    4: shoesFireBlack,
    5: shoesCamo,
    6: shoesGreen,
  };

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
      <header className="header">
        <h1>SHOES RACK</h1>
        <div className="filterBox">
          <input
            type="text"
            placeholder="type"
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
      </header>
      <div className="main_container">
        <div className="img_container">
          <img className="img" src={shoesCOMME} />
          <img className="img" src={shoesFire} />
          <img className="img" src={shoesBlack} />
          <img className="img" src={shoesFireBlack} />
          <img className="img" src={shoesCamo} />
          <img className="img" src={shoesGreen} />
          <img className="img" src={shoesBlue} />
          <img className="img" src={shoesCons} />
          <img className="img" src={shoesRed} />
        </div>
      </div>
      {inputName ? (
        <SelectedShoes InputName={inputName} AllshoesName={allshoesName} />
      ) : (
        <Allshoes
          SetCurrentView="setCurrentView"
          AllshoesName={allshoesName}
          InputName={inputName}
          AllImage={allImage}
        />
      )}
    </div>
  );
}
