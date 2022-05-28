const { gql } = require('@apollo/client');

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;

// typeDef translation for models, one for Query, mutations TBD

/*
  type User {
    _id: ID!
    email: String!
    password: String!
    api: String!
  }


  type Portfolio {
    _id: ID!
    portfolioName: String!
    stocks: [String!]
    dataAdded: Date
    purchasePrice: float!
  }

  type Ouery {
    me: [User]
  }

*/