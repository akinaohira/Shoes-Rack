import React, { useState } from "react";

export default function Allshoes(props) {
  const { allShoes } = props;
  return allShoes.map((shoes) => {
    // display all shoes in database
    <div>
      <h1>{shoes.name}</h1>
      <p>{shoes.Bought_year}</p>
      <p>{shoes.Release_year}</p>
    </div>;
  });
}
