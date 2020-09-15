import React from "react";
import "./App.css";

export default function Allshoes(props) {
  const { AllshoesName } = props;
  console.log(Array.isArray(AllshoesName[0]));
  console.log(AllshoesName[0]);
  return (
    <>
      <div className="listContainer">
        {AllshoesName.map((ele) => {
          return (
            <div className="infoCard">
              <p className="name">{ele.name}</p>
              <p className="color">{ele.color}</p>
              <p className="bougth">{ele.type}</p>
              <p className="year">{ele.where_to_bought}</p>
              <p className="where">{ele.year_bounght}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
