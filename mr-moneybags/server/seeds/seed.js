const db = require('../config/connection');
const { Users, Portfolios } = require('../models');

const userData = require('./UserData.json');
const portData = require('./portData.json');

db.once('open', async () => {
  await Users.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
