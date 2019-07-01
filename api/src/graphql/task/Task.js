import { resolver } from 'graphql-sequelize';
import { Task } from '../../models';

export default {
  Mutation: {
    createTask: async (obj, args, { auth: { user } }) => user.createTask(args)
  },
  Query: {
    task: resolver(Task),
    tasks: resolver(Task)
  },
  Task: {
    user: resolver(Task.User)
  }
};
