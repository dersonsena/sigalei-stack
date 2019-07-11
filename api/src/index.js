import { resolver } from 'graphql-sequelize';
import { createContext, EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';
import dotenv from 'dotenv';
import path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import middleware from './graphql/middleware/auth';
import { sequelize } from './models';
import buildSchema from './graphql/schemaBuilder';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const schema = buildSchema();
schema.context = req => {
  const dataloaderContext = createContext(sequelize);

  resolver.contextToOptions = {
    dataloaderContext: [EXPECTED_OPTIONS_KEY]
  };
  return {
    ...req,
    dataloaderContext
  };
};
schema.middlewares = middleware;
const server = new GraphQLServer(schema);
const options = {
  port: process.env.GL_SERVER_PORT || 5000,
  endpoint: process.env.GL_SERVER_ENDPOINT || '/graphql',
  playground: '/test'
};

server.start(options, () => {
  console.log(
    `Server listening on port ${process.env.DOCKER_APP_PORT} at endpoint ${options.endpoint}`
  );
  if (options.playground) {
    console.log(`Playground is active at endpoint ${options.playground}`);
  }
});
