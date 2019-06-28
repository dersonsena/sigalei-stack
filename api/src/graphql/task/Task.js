import { resolver } from 'graphql-sequelize';
import { Task } from '../../models';

export default {
  Mutation: {
    createTask: async (obj, args, { auth: { user } }) => user.createTask(args)
  },
  Query: {
    task: (...args) => resolver(Task)(...args),
    tasks: (...args) => resolver(Task)(...args)
  },
  Task: {
    user: (...args) => resolver(Task.User)(...args)
  }
};
