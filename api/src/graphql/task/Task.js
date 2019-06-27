module.exports = {
  Mutation: {
    createTask: async (obj, args, { auth: { user } }) => user.createTask(args)
  }
};
