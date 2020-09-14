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
          year_bought: "2017",
          where_to_bought: "KOREA",
        },
        {
          id: 2,
          name: " CHUCK TAYLOR 1970S OX FLAMES WHITE, ENAMEL RED & MANDARIN",
          color: "WHITE, ENAMEL RED & MANDARIN",
          type: "sneaker",
          size: "US_7",
          year_bought: "",
          where_to_bought: "",
        },
        {
          id: 1,
          name: "",
          color: "",
          type: "",
          size: "",
          year_bought: "",
          where_to_bought: "",
        },
        {
          id: 1,
          name: "",
          color: "",
          type: "",
          size: "",
          year_bought: "",
          where_to_bought: "",
        },
      ]);
    });
};
