/**
 * @flow
 * @relayHash 161f897abf569c9ad418a77832115deb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +user: ?{|
    +id: ?string,
    +email: ?string,
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  user(id: "f229173d-1a54-43c3-9a81-5d02b6fb1093") {
    id
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": "user(id:\"f229173d-1a54-43c3-9a81-5d02b6fb1093\")",
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "f229173d-1a54-43c3-9a81-5d02b6fb1093",
        "type": "String!"
      }
    ],
    "concreteType": "User",
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
        "name": "email",
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
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  user(id: \"f229173d-1a54-43c3-9a81-5d02b6fb1093\") {\n    id\n    email\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5650d37bb6f08941f1dc84a65271d759';
module.exports = node;
