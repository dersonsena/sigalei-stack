const path = module.require('path');
const config = require('../../config');
const { writeFileSync, copyFile } = module.require('fs');
const { fileLoader, mergeTypes, mergeResolvers } = module.require(
  'merge-graphql-schemas'
);

const getPaths = () => {
  return {
    typePath: path.join(__dirname, './schema/**/types/*.graphql'),
    // enumPath: path.join(__dirname, './schema/enums/types'),
    resolverPath: path.join(__dirname, './schema/**/', '*.js'),
    queryPath: path.join(__dirname, './schema/**/query/*.graphql'),
    mutationPath: path.join(__dirname, './schema/**/mutation/*.graphql')
  };
};

const loadFiles = paths => {
  const pathFiles = {};
  Object.keys(paths).forEach(key => {
    pathFiles[key] = fileLoader(paths[key]);
  });

  return pathFiles;
};

const build = paths => {
  const typeDefs = mergeTypes(
    [
      ...paths.typePath,
      // ...paths.enumPath,
      ...paths.queryPath,
      ...paths.mutationPath
    ],
    {
      all: true
    }
  );

  const resolvers = mergeResolvers(paths.resolverPath);
  return { typeDefs, resolvers };
};

const updateSchemaFile = typeDefs => {
  writeFileSync(path.join(__dirname, './generated/schema.graphql'), typeDefs);
};

const copySchemaToWebApp = () => {
  copyFile(
    path.join(__dirname, './generated/schema.graphql'),
    path.join(__dirname, config.REACT_SCHEMA_PATH),
    err => {
      if (err) {
        throw err;
      }
    }
  );
};

const buildSchema = () => {
  let paths = getPaths();
  paths = loadFiles(paths);
  const schema = build(paths);

  if (process.env.ENVIRONMENT === 'development') {
    updateSchemaFile(schema.typeDefs);
    copySchemaToWebApp(schema.typeDefs);
  }

  return schema;
};

module.exports = buildSchema;
