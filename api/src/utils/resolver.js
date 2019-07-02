import {
  resolver as sequelizeResolver,
  createConnectionResolver
} from 'graphql-sequelize';

const CONNECTION_INTERFACE = 'Connection';

const resolver = type => {
  return (...args) => {
    const { returnType } = args[3];

    const isConnection = returnType
      .getInterfaces()
      .find(returnInterface => returnInterface.name === CONNECTION_INTERFACE);

    if (isConnection) {
      return createConnectionResolver({ target: type }).resolveConnection(
        ...args
      );
    }

    return sequelizeResolver(type)(...args);
  };
};

export default resolver;
