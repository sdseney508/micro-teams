const { gql } = require('@apollo/client');

const typeDefs = gql`

type User {
  _id: ID
  email: String!
  portfolios: [Portfolio]
}


type Portfolio {
  _id: ID
  stock: String!
  shares: Int!
  addedDate: String!
  purchasePrice: Float!
  currentPrice: Float!
  dailyPerf: Float!
  YTD: Float!
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
  users: [User]
  }

  type Mutation {
    addUser( email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
