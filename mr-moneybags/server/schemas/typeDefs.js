// Changes made: Removed some features in the portfolio type as they are present in the Stock type
// For Mutations: Added a remove and addition Portfolio feature
// For queries: Added retrievals for one portfolio and ALL portfolios user has

const { gql } = require('@apollo/client');
const typeDefs = gql`

  type User {
    _id: ID
    email: String!
    portfolios: [Porfolio]
  }

  type Portfolio {
    _id: ID
    portfolioName: String!
    stock: Stock!
    shares: Int!
    dailyPerf: Float!
    %Change: Float!
    %ofPortfolio: Float!
  }

  // this is the data we get from the API:

  type Stock {  
    symbol: String!
    addedDate: Date()
    purchasePrice: Float!
    currentPrice: Float!
    dayHigh: Float!
    dayLow: Float!
    52WeekHigh: Float!
    52WeekLow: Float!
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
    addPortfolio(portfolioData: Portfolio): User
    deletePortfolio(portfolioId: _id): User
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
