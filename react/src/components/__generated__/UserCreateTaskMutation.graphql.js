/**
 * @flow
 * @relayHash 1b69be6cc5079ca02d4a0892d6c25814
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserCreateTaskMutationVariables = {|
  userId: string,
  content: string,
|};
export type UserCreateTaskMutationResponse = {|
  +createTask: ?{|
    +id: string,
    +content: ?string,
    +completed: ?boolean,
  |}
|};
export type UserCreateTaskMutation = {|
  variables: UserCreateTaskMutationVariables,
  response: UserCreateTaskMutationResponse,
|};
*/


/*
mutation UserCreateTaskMutation(
  $userId: String!
  $content: String!
) {
  createTask(userId: $userId, content: $content) {
    id
    content
    completed
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "content",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId",
        "type": "String!"
      }
    ],
    "concreteType": "Task",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "completed",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserCreateTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserCreateTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UserCreateTaskMutation",
    "id": null,
    "text": "mutation UserCreateTaskMutation(\n  $userId: String!\n  $content: String!\n) {\n  createTask(userId: $userId, content: $content) {\n    id\n    content\n    completed\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4672be8e907f3432f1ce97b2bd011050';
module.exports = node;
