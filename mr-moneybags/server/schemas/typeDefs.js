const { gql } = require('@apollo/client');

const typeDefs = gql`

type User {
  _id: ID
  email: String!
  portfolios: [Porfolio]
}

// TODO: aren't portfolio and stock super duplicitious here? Took a stab at this with the powerpoint info. 

type Portfolio {
  _id: ID
  stock: String!
  shares: Int!
  addedDate: Date()
  purchasePrice: Float!
  currentPrice: Float!
  dailyPerf: Float!
  YTD: Float!
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
  users: [User]
  }

  type Mutation {
    addUser( email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
