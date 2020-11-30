import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";

export default function Allshoes(props) {
  const { AllshoesName, AllImage } = props;
  return (
    <>
      <Slide triggerOnce className="slide">
        <div className="container">
          <div className="listContainer">
            {AllshoesName.map((ele) => {
              return (
                <div className="infoCard">
                  <img
                    alt="shoes"
                    className="smalimg"
                    width="100px"
                    height="65px"
                    src={AllImage[ele.id]}
                  />
                  <div className="name">{ele.name}</div>
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
            })}
          </div>
        </div>
      </Slide>
    </>
  );
}
