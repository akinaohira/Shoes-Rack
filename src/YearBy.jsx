import React from "react";

export default function YearBy(props) {
  const { AllshoesName, AllImage } = props;

  return (
    <>
      <div className="container">
        <div className="listContainer">
          {AllshoesName.map((ele) => {
            if (ele.color === "WHITE") {
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
            }
            // if (ele.year_bounght === "RED") {
            //   return (
            //     <div className="infoCard">
            //       <img width="100px" src={AllImage[ele.id]} />
            //       <p className="name">{ele.name}</p>
            //       <p className="color">{ele.color}</p>
            //       <p className="type">{ele.type}</p>
            //       <p className="year">{ele.where_to_bought}</p>
            //       <p className="where">{ele.year_bounght}</p>
            //     </div>
            //   );
            // }
            // if (ele.year_bounght === "BLACK") {
            //   return (
            //     <div className="infoCard">
            //       <img width="100px" src={AllImage[ele.id]} />
            //       <p className="name">{ele.name}</p>
            //       <p className="color">{ele.color}</p>
            //       <p className="type">{ele.type}</p>
            //       <p className="year">{ele.where_to_bought}</p>
            //       <p className="where">{ele.year_bounght}</p>
            //     </div>
            //   );
            // } else {
            //   return (
            //     <div className="infoCard">
            //       <img width="100px" src={AllImage[ele.id]} />
            //       <p className="name">{ele.name}</p>
            //       <p className="color">{ele.color}</p>
            //       <p className="type">{ele.type}</p>
            //       <p className="year">{ele.where_to_bought}</p>
            //       <p className="where">{ele.year_bounght}</p>
            //     </div>
            //   );
            // }
          })}
        </div>
      </div>
    </>
  );
}
