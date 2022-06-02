const { AuthenticationError } = require('@apollo/client');
const { Users, Portfolios } = require('../models');
const { signToken } = require('../utils/auth');

//TODO: this is all new code. the goal here is to fill in the needed gaps for the Auth to work. please look it over. 
// Changes made: Added resolvers for all queries and mutations
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await Users.findOne({_id: context.user._id})
        .select('.__v -password');
        return userData;
      }
    },

    portfolios: async (parent, { portfolioName }) => {
      const params = portfolioName ? { portfolioName } : {};
      return Portfolios.find(params).sort({createdAt: -1});
    },

    portfolio: async (parent, { portfolioId }) => {
      return Portfolios.findOne({_id: portfolioId});
    }
   
  },

  
  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await Users.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await Users.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect email or password.');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password.');
      }

      const token = signToken(user);
      return { token, user };
    },

    addPortfolio: async (parent, { stocks }, context) => {
      if (context.user) {
        const portfolio = await Portfolios.create({
          stocks,
          portfolioName: context.user.portfolioName
        });

        await Users.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: { portfolios: portfolio._id }}
        );

        return portfolio;
      }
      throw new AuthenticationError('You must be logged in!');
    },

    deletePortfolio: async (parent, { portfolioId }, context) => {
      if (context.user) {
        const portfolio = await Portfolios.findOneAndDelete({
          _id: portfolioId,
          portfolioName: context.user.portfolioName
        });

        await Users.findOneAndUpdate(
          {_id: portfolioId},
          {$pull: { portfolios: portfolio._id }}
        );

        return portfolio;
      }
      throw new AuthenticationError('You must be logged in!')
    }
  }
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