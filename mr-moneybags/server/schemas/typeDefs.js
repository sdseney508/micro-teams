// Changes made: Removed some features in the portfolio type as they are present in the Stock type
// For Mutations: Added a remove and addition Portfolio feature
// For queries: Added retrievals for one portfolio and ALL portfolios user has

const { gql } = require('@apollo/client');
const typeDefs = gql`

  type User {
    _id: ID!
    email: String!
    portfolios: [Portfolio]
  }

  type Portfolio {
    portfolioId: ID!
    portfolioName: String!
    stock: Stock!
    shares: Int!
    dailyPerf: Float!
    percChange: Float!
    percofPortfolio: Float!
  }

  type Stock {  
    symbol: String!
    addedDate: String!
    purchasePrice: Float!
    currentPrice: Float!
    dayHigh: Float!
    dayLow: Float!
    YearHigh: Float!
    YearLow: Float!
    stockYTD: Float! 
    sinceCreated: Float!

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    portfolios(portfolioName: String): [Portfolio]
    portfolio (portfolioId: ID!): Portfolio

  }

  type Mutation {
    addUser( email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addPortfolio(portfolioName: String!): User
    deletePortfolio(portfolioId: _id): User
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
