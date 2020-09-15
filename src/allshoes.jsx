import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Allshoes(props) {
  const { AllshoesName, AllImage } = props;
  return (
    <>
      <div className="container">
        <div className="listContainer">
          {AllshoesName.map((ele) => {
            return (
              <div className="infoCard">
                <img width="100px" src={AllImage[ele.id]} />
                <p className="name">{ele.name}</p>
                <p className="color">{ele.color}</p>
                <p className="type">{ele.type}</p>
                <p className="year">{ele.where_to_bought}</p>
                <p className="where">{ele.year_bounght}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
