const { resolver } = module.require('graphql-sequelize');
const { User } = module.require('../../models');

module.exports = {
  Mutation: {
    signUp: (obj, args) => User.signUp(args)
  },
  Query: {
    user: resolver(User),
    users: resolver(User),
    login: (obj, args) => User.login(args)
  },
  User: {
    tasks: resolver(User.Tasks)
  }
};
