/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Task_task$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type User_user$ref: FragmentReference;
export type User_user = {|
  +id: string,
  +email: ?string,
  +Tasks: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: Task_task$ref,
  |}>,
  +$refType: User_user$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "User_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
          "kind": "FragmentSpread",
          "name": "Task_task",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '94ae994f0c2a39aa9c0162fe23117b5e';
module.exports = node;
