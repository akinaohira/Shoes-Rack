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
import shoesRed01 from "./img/shoesRed01.png";
import shoesPink01 from "./img/shoesPink01.png";
import shoes01 from "./img/shoes01.png";
import shoesBas from "./img/shoesbas.png";
import shoesGaru from "./img/shoesGaru.png";
import shoes03 from "./img/shoes03.png";

//Components
import Allshoes from "./allshoes";
import White from "./White";

export default function App() {
  const [allshoesName, setallShoesName] = useState([]);
  const [yearView, setYearView] = useState(false);
  const allImage = {
    1: shoesBlack,
    2: shoesFire,
    3: shoesRed01,
    4: shoesGreen,
    5: shoes01,
    6: shoesBlue,
    7: shoesCOMME,
    8: shoesFireBlack,
    9: shoesGaru,
    10: shoesBas,
    11: shoesCamo,
    12: shoesBlue,
    13: shoesBlack,
    14: shoesPink01,
    15: shoesFireBlack,
    16: shoes03,
  };

  useEffect(() => {
    async function getData() {
      let res = await axios.get("api/allshoes");
      // const result = [...allshoesName, ...res.data];
      console.log("getting data!");
      // console.log(res.data);
      // let result = [...allshoesName, ...res.data];
      // setState can take fucntion, parameter is provious value return next value
      setallShoesName((prevAllShoesname) => [...prevAllShoesname, ...res.data]);
    }
    getData();
  }, []);

  return (
    <div>
      <header className="header">
        <h1>SHOES RACK</h1>
        <div className="menu">
          <div
            onClick={() => {
              setYearView(false);
            }}
            className="btn"
          >
            HOME
          </div>
          <div
            onClick={() => {
              setYearView(true);
            }}
            className="btn"
          >
            COLOR
          </div>
          <div className="btn">PLACE</div>
        </div>
      </header>
      <div className="App">
        <div className="main_container">
          <div className="img_container">
            <img alt="shoes" className="img" src={shoesCOMME} />
            <img alt="shoes" className="img" src={shoesFire} />
            <img alt="shoes" className="img" src={shoesBlack} />
            <img alt="shoes" className="img" src={shoesFireBlack} />
            <img alt="shoes" className="img" src={shoesCamo} />
            <img alt="shoes" className="img" src={shoesGreen} />
            <img alt="shoes" className="img" src={shoesBlue} />
            <img alt="shoes" className="img" src={shoesCons} />
            <img alt="shoes" className="img" src={shoesRed} />
            <img alt="shoes" className="img" src={shoesRed01} />
            <img alt="shoes" className="img" src={shoesPink01} />
            <img alt="shoes" className="img" src={shoesBas} />
            <img alt="shoes" className="img" src={shoes01} />
            <img alt="shoes" className="img" src={shoesGaru} />
            <img alt="shoes" className="img" src={shoes03} />
          </div>
        </div>
        {yearView ? (
          <White AllshoesName={allshoesName} AllImage={allImage} />
        ) : (
          <Allshoes
            SetCurrentView="setCurrentView"
            AllshoesName={allshoesName}
            AllImage={allImage}
          />
        )}
      </div>
    </div>
  );
}
