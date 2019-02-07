/* eslint-disable no-console */
const path = module.require("path");
const fetch = module.require("node-fetch");
const fs = module.require("fs");
const chalk = module.require("chalk");

const {
  buildClientSchema,
  introspectionQuery,
  printSchema
} = require("graphql/utilities");

const graphQLFile = path.join(__dirname, "../../schema.graphql");

fetch(`http://localhost:9000/graphql`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ query: introspectionQuery })
})
  .then(res => res.json())
  .then(async schemaJSON => {
    const schemaGraphQL = printSchema(buildClientSchema(schemaJSON.data));
    fs.writeFileSync(graphQLFile, schemaGraphQL);
  })
  .catch(error => {
    if (error.code === "ECONNREFUSED") {
      console.log(
        chalk.red(`Connection error, no api runnin on http://localhost:9000`)
      );
    }
  });
