/**
 * @flow
 * @relayHash 9af500cd2c4620f803edd68f80bf69a8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserList$ref = any;
export type UserListQueryVariables = {||};
export type UserListQueryResponse = {|
  +$fragmentRefs: UserList$ref
|};
export type UserListQuery = {|
  variables: UserListQueryVariables,
  response: UserListQueryResponse,
|};
*/


/*
query UserListQuery {
  ...UserList
}

fragment UserList on Query {
  users {
    id
    ...User_user
  }
}

fragment User_user on User {
  id
  email
  Tasks {
    id
    ...Task_task
  }
}

fragment Task_task on Task {
  id
  content
  completed
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "UserList",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Tasks",
            "storageKey": null,
            "args": null,
            "concreteType": "Task",
            "plural": true,
            "selections": [
              (v0/*: any*/),
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
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserListQuery",
    "id": null,
    "text": "query UserListQuery {\n  ...UserList\n}\n\nfragment UserList on Query {\n  users {\n    id\n    ...User_user\n  }\n}\n\nfragment User_user on User {\n  id\n  email\n  Tasks {\n    id\n    ...Task_task\n  }\n}\n\nfragment Task_task on Task {\n  id\n  content\n  completed\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e1c9b398cb4563c8c120fe644b9e293';
module.exports = node;
