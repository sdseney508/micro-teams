const db = require("../config/connection");
const { Users, Portfolios } = require("../models");
const { makeportfolio, getEmail } = require("./data");
const password = "password1234";
const apiKey = "4X2274SBZP3SPX2A";
db.on("error", (err) => err);

db.once("open", async () => {
  await Users.deleteMany({});

  const users = [];

  for (let i = 0; i < 2; i++) {
    let email = getEmail();
    let portfolios = makeportfolio();

    console.log(portfolios);

    users.push({
      email,
      password,
      apiKey,
      portfolios,
    });
  }
  console.log(users);
  await Users.insertMany(users);

  console.table(users);
  console.log("stuff seeded! 🌱");
  process.exit(0);
});
