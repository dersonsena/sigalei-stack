const { User } = module.require('../../models');

module.exports = {
  Mutation: {
    signUp: async (obj, args) => User.signUp(args),
  },
  Query: {
    user: async (obj, { id }, { auth }, info) => {
      User.hasPermission(auth, User.findById(id));
    },
    login: async (obj, args) => User.login(args),
  },
};
