const { User, Task } = module.require('../../models');

module.exports = {
  Mutation: {
    signUp: (obj, args) => User.signUp(args)
  },
  Query: {
    user: (obj, { id }, { auth }, info) =>
      User.hasPermission(auth, User.findByPk(id)),
    users: (obj, args, { auth }) =>
      User.hasPermission(auth, User.findAll({ include: [Task] })),
    login: (obj, args) => User.login(args)
  }
};
