import { Task } from '../../../models';
import { resolver, connectionResolver } from '../../../utils';

export default {
  Mutation: {
    createTask: async (obj, args, { auth: { user } }) => user.createTask(args)
  },
  Query: {
    task: resolver(Task),
    tasks: connectionResolver(Task)
  },
  Task: {
    user: resolver(Task.User)
  }
};
