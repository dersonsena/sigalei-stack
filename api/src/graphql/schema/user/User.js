import { User } from '../../../models';
import { resolver, connectionResolver } from '../../../utils';

module.exports = {
  Mutation: {
    signUp: (obj, args) => User.signUp(args)
  },
  Query: {
    user: resolver(User),
    users: connectionResolver(User),
    login: (obj, args) => User.login(args)
  },
  User: {
    tasks: connectionResolver(User.Tasks)
  }
};
