const { getMaxListeners } = require("../models/Portfolios");

const emails = [
  "sdseney@hotmail.com",
  "sdseney508@gmail.com",
  "test_email3@test.com",
  "test_email4@test.com",
  "test_email5@test.com",
  "test_email6@test.com",
  "test_email7@test.com",
  "test_email8@test.com",
  "test_email9@test.com",
  "test_email10@test.com",
];

const portfolios = [
  {
    portfolioName: "Port 1",
    stocks: [
      {
        name: "IBM",
        dateAdded: Date.now(),
        purchasePrice: 10,
        shares: 10,
      },
      {
        name: "F",
        dateAdded: Date.now(),
        purchasePrice: 10,
        shares: 12,
      },
      {
        name: "AAPL",
        dateAdded: Date.now(),
        purchasePrice: 10,
        shares: 1,
      },
    ],
  },
  {
    portfolioName: "Port 2",
    stocks: [
      {
        name: "GOOGL",
        dateAdded: Date.now(),
        purchasePrice: 10,
        shares: 10,
      },
      {
        name: "SONY",
        dateAdded: Date.now(),
        purchasePrice: 10,
        shares: 11,
      },
      {
        name: "TWTR",
        dateAdded: Date.now(),
        purchasePrice: 10,
        shares: 12,
      },
    ],
  },
  {
    portfolioName: "Port 3",
    stocks: [
      {
        name: "TSLA",
        dateAdded: Date.now(),
        purchasePrice: 10,
        shares: 11,
      },
      {
        name: "GM",
        dateAdded: Date.now(),
        purchasePrice: 10,
        shares: 11,
      },
      {
        name: "GE",
        dateAdded: Date.now(),
        purchasePrice: 10,
        shares: 11,
      },
    ],
  },
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getEmail = () => `${getRandomArrItem(emails)}`;

const makeportfolio = () => getRandomArrItem(portfolios);

module.exports = { makeportfolio, getEmail };
