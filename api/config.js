/**
 * @type Object
 */
const config = {
  API_SECRET: process.env.API_SECRET,
  GL_SERVER_PORT: process.env.GL_SERVER_PORT,
  GL_SERVER_ENDPOINT: process.env.GL_SERVER_ENDPOINT,
  DOCKER_APP_PORT: process.env.DOCKER_APP_PORT,
  PG_HOST: process.env.PG_HOST,
  PG_PORT: process.env.PG_PORT,
  PG_USERNAME: process.env.PG_USERNAME,
  PG_PASSWORD: process.env.PG_PASSWORD,
  PG_DATABASE: process.env.PG_DATABASE,
  REACT_SCHEMA_PATH: process.env.REACT_SCHEMA_PATH
};

export default config;