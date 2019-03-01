import { commitMutation } from "relay-runtime";
import environment from "./CreateRelayEnviroment";

export default args => commitMutation(environment, args);
