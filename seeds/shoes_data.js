exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("shoesInfo")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("shoesInfo").insert([
        {
          id: 1,
          name:
            "Converse Chuck Taylor All-Star 70s Hi Fear Of God Black Natural",
          color: "BLACK/EGRET-NATURAL",
          type: "sneaker",
          size: "US_8",
          year_bounght: "2017",
          where_to_bought: "KOREA Soul",
        },
        {
          id: 2,
          name: " CHUCK TAYLOR 1970S OX FLAMES WHITE, ENAMEL RED & MANDARIN",
          color: "WHITE, ENAMEL RED & MANDARIN",
          type: "sneaker",
          size: "US_7",
          year_bounght: "2010",
          where_to_bought: "USA LA",
        },
        {
          id: 3,
          name: " CHUCK TAYLOR 1970S ",
          color: "Red",
          type: "sneaker",
          size: "US_7",
          year_bounght: "2009",
          where_to_bought: "USA Sanfrancisco",
        },
        {
          id: 4,
          name: " CHUCK TAYLOR 1970S",
          color: "Green",
          type: "sneaker",
          size: "US_7",
          year_bounght: "2011",
          where_to_bought: "USA Hawaii",
        },
      ]);
    });
};
