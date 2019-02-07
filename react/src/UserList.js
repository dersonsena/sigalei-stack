import React from "react";

import graphql from "babel-plugin-relay/macro";

import createQueryRenderer from "./CreateQueryRender";
import User from "./User";

class UserList extends React.Component {
  render() {
    const {
      data: { users }
    } = this.props;
    return (
      <div style={{ width: "33%" }}>
        <h2>Lista de Usuários</h2>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default createQueryRenderer(UserList, {
  query: graphql`
    query UserListQuery {
      users {
        id
        ...User_user
      }
    }
  `,
  variables: {}
});
