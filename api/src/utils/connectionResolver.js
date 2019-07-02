import { createConnectionResolver } from 'graphql-sequelize';

const connectionResolver = type => {
  return (...args) => {
    return createConnectionResolver({ target: type }).resolveConnection(
      ...args
    );
  };
};

export default connectionResolver;
