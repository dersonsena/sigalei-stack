/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type User_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserList$ref: FragmentReference;
export type UserList = {|
  +users: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: User_user$ref,
  |}>,
  +$refType: UserList$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserList",
  "type": "Query",
  "metadata": null,
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "User_user",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '418b20bfa5c1637813e51b31aefbcdc2';
module.exports = node;
