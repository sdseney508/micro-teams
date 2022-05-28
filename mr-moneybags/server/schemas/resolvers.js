const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;


/*
  const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userDate = await User.findOne({_id: context.user_id})
          .select('.__v -password');
          console.log(userData);
          return userData;
        }
        throw new AuthernticationError("You must be logged in to create a portfolio!")
      }

      Mutations: {

        addPortfolio: async (parent, args) => {}
        login: async (parent, {email, password}) => {
          const user = await User.findOne({email});
          if (!user)
        }
      }
    }
  }

*/