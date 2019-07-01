const { Task, User } = module.require('../../../models');

module.exports = {
  Query: {
    task: async (obj, { id }, { auth }, info) =>
      User.hasPermission(auth, Task.findById(id))
  },
  Mutation: {
    createTask: (obj, { content }, { auth }, info) =>
      User.hasPermission(
        auth,
        Task.create(
          { content, UserId: auth.user.id },
          { include: [{ model: User }] }
        )
      )
  }
};
