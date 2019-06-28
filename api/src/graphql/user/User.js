const { resolver } = module.require('graphql-sequelize');
const { User } = module.require('../../models');

module.exports = {
  Mutation: {
    signUp: (obj, args) => User.signUp(args)
  },
  Query: {
    user: (...args) => resolver(User)(...args),
    users: (...args) => resolver(User)(...args),
    login: (obj, args) => User.login(args)
  },
  User: {
    tasks: (...args) => resolver(User.Tasks)(...args)
  }
};
