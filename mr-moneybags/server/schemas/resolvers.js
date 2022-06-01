const { AuthenticationError } = require('@apollo/client');
const { Users } = require('../models');
const { signToken } = require('../utils/auth');

//TODO: this is all new code. the goal here is to fill in the needed gaps for the Auth to work. please look it over. 

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('portfolios');
      }
      throw new AuthenticationError('You must be logged in!');
    },
    users: async (parent, args) => {
      return await User.find();
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
    }
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