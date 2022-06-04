// File for model restructuring, query and mutation defining

const { gql } = require('apollo-server-express');
const typeDefs = gql`

  type User {
    _id: ID
    email: String!
    portfolios: [Portfolio]
  }

  type Portfolio {
    portfolioName: String!
    stocks: [Stock]
  }

  type Stock {  
    name: String!
    purchasePrice: Float!
    shares: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getPortfolios: [Portfolio]
    getPortfolio (portfolioName: String!): Portfolio
  }

  type Mutation {
    addUser( email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addPortfolio(portfolioName: String!): User
    updatePortfolio(portfolioName: String!): User
    deleteStock(name: String!): User
  }
`;

module.exports = typeDefs;
