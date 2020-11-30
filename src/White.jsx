import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function White(props) {
  const { AllshoesName, AllImage } = props;

  return (
    <>
      <div className="container">
        <div className="listContainer">
          {AllshoesName.map((ele) => {
            if (ele.color === "WHITE") {
              return (
                <div className="infoCard">
                  <img alt="shoes" width="100px" src={AllImage[ele.id]} />
                  <p className="name">{ele.name}</p>
                  <p className="color">
                    {ele.color}{" "}
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="lg"
                      color={ele.color}
                    />
                  </p>
                  <p className="type">{ele.type}</p>
                  <p className="year">{ele.where_to_bought}</p>
                  <p className="where">{ele.year_bounght}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="container">
        <div className="listContainer">
          {AllshoesName.map((ele) => {
            if (ele.color === "RED") {
              return (
                <div className="infoCard">
                  <img alt="shoes" width="100px" src={AllImage[ele.id]} />
                  <p className="name">{ele.name}</p>
                  <p className="color">{ele.color}</p>
                  <p className="type">{ele.type}</p>
                  <p className="year">{ele.where_to_bought}</p>
                  <p className="where">{ele.year_bounght}</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="lg"
                      color={ele.color}
                    />
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="container">
        <div className="listContainer">
          {AllshoesName.map((ele) => {
            if (ele.color === "BLACK") {
              return (
                <div className="infoCard">
                  <img alt="shoes" width="100px" src={AllImage[ele.id]} />
                  <p className="name">{ele.name}</p>
                  <p className="color">{ele.color}</p>
                  <p className="type">{ele.type}</p>
                  <p className="year">{ele.where_to_bought}</p>
                  <p className="where">{ele.year_bounght}</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="lg"
                      color={ele.color}
                    />
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="container">
        <div className="listContainer">
          {AllshoesName.map((ele) => {
            if (ele.color === "BLUE") {
              return (
                <div className="infoCard">
                  <img alt="shoes" width="100px" src={AllImage[ele.id]} />
                  <p className="name">{ele.name}</p>
                  <p className="color">{ele.color}</p>
                  <p className="type">{ele.type}</p>
                  <p className="year">{ele.where_to_bought}</p>
                  <p className="where">{ele.year_bounght}</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="lg"
                      color={ele.color}
                    />
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="container">
        <div className="listContainer">
          {AllshoesName.map((ele) => {
            if (ele.color === "GRENN") {
              return (
                <div className="infoCard">
                  <img alt="shoes" width="100px" src={AllImage[ele.id]} />
                  <p className="name">{ele.name}</p>
                  <p className="color">{ele.color}</p>
                  <p className="type">{ele.type}</p>
                  <p className="year">{ele.where_to_bought}</p>
                  <p className="where">{ele.year_bounght}</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="lg"
                      color={ele.color}
                    />
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="container">
        <div className="listContainer">
          {AllshoesName.map((ele) => {
            if (ele.color === "PINK") {
              return (
                <div className="infoCard">
                  <img alt="shoes" width="100px" src={AllImage[ele.id]} />
                  <p className="name">{ele.name}</p>
                  <p className="color">{ele.color}</p>
                  <p className="type">{ele.type}</p>
                  <p className="year">{ele.where_to_bought}</p>
                  <p className="where">{ele.year_bounght}</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="lg"
                      color={ele.color}
                    />
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}
