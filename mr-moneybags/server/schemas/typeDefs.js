// Changes made: Removed some features in the portfolio type as they are present in the Stock type
// For Mutations: Added a remove and addition Portfolio feature
// For queries: Added retrievals for one portfolio and ALL portfolios user has

const { gql } = require('@apollo/client');
const typeDefs = gql`

  type User {
    _id: ID!
    email: String!
    password: String!
    apiKey: String!
    portfolios: [Portfolio]
  }

  type Portfolio {
    portfolioName: String!
    createdDate: String!
    stocks: [Stock]
  }

  type Stock {  
    name: String!
    dateAdded: String!
    purchasePrice: Float!
    shares: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getPortfolios(): [Portfolio]
    getPortfolio (portfolioName: String!): Portfolio
  }

  type Mutation {
    addUser( email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addPortfolio(portfolioName: String!): User
    deletePortfolio(portfolioId: String!): User

  }
`;

module.exports = typeDefs;
