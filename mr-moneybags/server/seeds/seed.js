const db = require('../config/connection');
const { Users, Portfolios } = require('../models');

const userData = require('./userData.json');
const portData = require('./portData.json');

db.once('open', async () => {
  await Users.deleteMany({});

  const users =[];

    for (let i = 0; i <5; i++){

      let email = getEmail();
      let portfolios = makeportfolio();


      users.push({
        email,
        password,
        portfolios,
      })
    }

  const user = await Users.insertMany(Users);

  console.log('stuff seeded! 🌱');
  process.exit(0);
});
