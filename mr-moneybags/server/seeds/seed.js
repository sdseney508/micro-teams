const db = require('../config/connection');
const { Users, Portfolios } = require('../models');

const userData = require('./userData.json');
const portData = require('./portData.json');

db.once('open', async () => {
  await Users.deleteMany({});

  const user = await Users.insertMany(userData);
  const port= await Portfolios.insertMany(portData);
  console.log('stuff seeded!');
  process.exit(0);
});
