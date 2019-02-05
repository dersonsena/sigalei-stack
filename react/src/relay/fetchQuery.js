import { fetchQuery } from 'relay-runtime';
import { createRelayEnvironment as environment } from './CreateRelayEnviroment';

export default (query, variables) => fetchQuery(environment, query, variables);
