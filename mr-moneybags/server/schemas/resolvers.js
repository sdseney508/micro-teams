// const { AuthenticationError } = require('@apollo/client');
const { Users, Portfolios } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await Users.findOne({_id: context.user._id}).populate('portfolios');
        // .select('.__v -password');
        return userData;
      }
    },

    getPortfolios: async (parent, { portfolioName }) => {
      const params = portfolioName ? { portfolioName } : {};
      return Portfolios.find(params).sort({createdAt: -1});
    },

    getPortfolio: async (parent, { portfolioId }) => {
      return Portfolios.findOne({_id: portfolioId});
    }
   
  },

  
  Mutation: {
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

    addPortfolio: async (parent, { portfolio }, context) => {
      if (context.user) {
        // const portfolio = await Portfolios.create({
        //   stocks,
        //   portfolioName: context.user.portfolioName
        // });

        const user = await Users.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: { portfolios: portfolio }},
          // Added this line today
          {new: true}
        );
        return user;
      }
      throw new AuthenticationError('You must be logged in!');
    },

    deletePortfolio: async (parent, { portfolioId }, context) => {
      if (context.user) {
        // const portfolio = await Portfolios.findOneAndDelete({
        //   _id: portfolioId,
        //   portfolioName: context.user.portfolioName
        // });

        const user = await Users.findOneAndUpdate(
          {_id: context.user._id},
          {$pull: { portfolios: {portfolioId: portfolioId} }},
          // Added this line today
          {new: true}
        );
        // return portfolio;
        return user;
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