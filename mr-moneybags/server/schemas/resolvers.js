// const { AuthenticationError } = require('@apollo/client');
const { Users, Portfolios } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await Users.findOne({_id: context.user._id}).populate('portfolios');
        return userData;
      }
    },

    getPortfolios: async (parent, args, context) => {
      if (context.user) {
        return Portfolios.find().sort({createdAt: -1});
      }
    },

    getPortfolio: async (parent, { portfolioName }, context) => {
      if (context.user) {
        return Portfolios.findOne({portfolioName: portfolioName});
      }
    }
   
  },

  Mutation: {

    // Mutations to handle user account info
    addUser: async (parent, { email, password }) => {
      const user = await Users.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
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

    // Mutations to handle portfolio actions
    addPortfolio: async (parent, args, context) => {
      if (context.user) {
        const portfolio = await Portfolios.create({
          portfolioName: context.user.portfolioName
        });

        const user = await Users.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: { portfolios: portfolio }},
          {new: true}
        );
        return user;
      }
      throw new AuthenticationError('You must be logged in!');
    },

    // Mutation for updating portfolios with the stock information
    updatePortfolio: async (parent, { portfolioName, stocks }, context) => {
      if (context.user) {
        const updatePort = await Portfolios.findOneAndUpdate(
          portfolioName, 
          {$push: {stocks: stocks}},
          {new: true}
        );
        const user = await Users.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: {portfolios: updatePort}},
          {new: true}
        );
        return user;
      }
      throw new AuthenticationError('You must be logged in!')
    },

    // Mutation for deleting stocks from an existing portfolio
    deleteStock: async (parent, { portfolioName, stocks }, context) => {
      if (context.user) {
        const updatedPort = await Portfolios.findOneAndUpdate(
          portfolioName,
          {$pull: {stocks: stocks}},
          {new: true}
        );

        const user = await Users.findByIdAndUpdate(
          {_id: context.user._id},
          {$addToSet: {portfolios: updatedPort}},
          {new: true}
        );
        return user;
      }
      throw new AuthenticationError('You must be logged in!')
    }
  }
};

module.exports = resolvers;