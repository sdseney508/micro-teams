// File for model restructuring, query and mutation defining

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
    getPortfolios: [Portfolio]
    getPortfolio (portfolioName: String!): Portfolio
  }

  type Mutation {
    // Login and Signup mutations
    addUser( email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth

    // Portfolio mutations
    addPortfolio(portfolioName: String!): User
    updatePortfolio(portfolioName: String!): User

    // Stock mutation
    deleteStock(name: String!): User

  }
`;

module.exports = typeDefs;
