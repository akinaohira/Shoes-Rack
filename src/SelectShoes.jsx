import React from "react";

export default function SelectShoes(props) {
  const { AllshoesName, InputName } = props;
  let res = AllshoesName.filter((ele) => {
    return ele.type === InputName;
  });
  console.log(res);
  return (
    <div>
      {res.map((ele) => {
        return (
          <div>
            <p>{ele.name}</p>
            <p>{ele.color}</p>
            <p>{ele.type}</p>
          </div>
        );
      })}
    </div>
  );
}
