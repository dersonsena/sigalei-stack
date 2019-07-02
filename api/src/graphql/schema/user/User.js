import { User } from '../../../models';
import resolver from '../../../utils/resolver';

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
