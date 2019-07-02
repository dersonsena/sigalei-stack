import { resolver as sequelizeResolver } from 'graphql-sequelize';

const resolver = type => {
  return (...args) => {
    return sequelizeResolver(type)(...args);
  };
};

export default resolver;
