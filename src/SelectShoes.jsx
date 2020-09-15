import React from "react";
import "./App.css";

export default function SelectShoes(props) {
  const { AllshoesName, InputName } = props;
  let res = AllshoesName.filter((ele) => {
    return ele.type === InputName;
  });
  console.log(res);
  return (
    <div className="listContainer">
      {res.map((ele) => {
        return (
          <div className="infoCard">
            <p className="name">{ele.name}</p>
            <p className="color">{ele.color}</p>
            <p className="type">{ele.type}</p>
            <p className="year">{ele.where_to_bought}</p>
            <p className="where">{ele.year_bounght}</p>
          </div>
        );
      })}
    </div>
  );
}
