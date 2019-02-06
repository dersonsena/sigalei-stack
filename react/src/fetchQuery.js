import { fetchQuery } from 'relay-runtime';
import environment from './CreateRelayEnviroment';

export default (query, variables) => fetchQuery(environment, query, variables);
