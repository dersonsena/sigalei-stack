import { Task } from '../../../models';
import resolver from '../../../utils/resolver';

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
