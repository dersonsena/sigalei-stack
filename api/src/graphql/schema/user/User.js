const { resolver, createConnectionResolver } = module.require(
  'graphql-sequelize'
);
const { User } = module.require('../../../models');

module.exports = {
  Mutation: {
    signUp: (obj, args) => User.signUp(args)
  },
  Query: {
    user: resolver(User),
    users: createConnectionResolver({ target: User }).resolveConnection,
    login: (obj, args) => User.login(args)
  },
  User: {
    tasks: createConnectionResolver({
      target: User.Tasks
    }).resolveConnection
  }
};
