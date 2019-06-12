import React from "react";
import PropTypes from 'prop-types';

import graphql from "babel-plugin-relay/macro";

import { createRefetchContainer } from "react-relay";

import createQueryRenderer from "./CreateQueryRender";
import User from "./User";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  toggleChecked = () => this.setState({ checked: !this.state.checked });
  
  render() {
    const {
      data: { users },
      relay: { refetch }
    } = this.props;
    const { checked } = this.state;

    return (
      <div style={{ width: "33%" }}>
        <h2>Lista de Usuários</h2>
        <label>
          <input
            checked={checked}
            onChange={this.toggleChecked}
            type="checkbox"
          />
          Com refetch
        </label>
        {users.map(user => (
          <User
            key={user.id}
            user={user}
            withRefetch={checked}
            refetch={refetch}
          />
        ))}
      </div>
    );
  }
}

UserList.propTypes = {
  data: PropTypes.object,
  relay: PropTypes.object
};

UserList.defaultProps = {
  data: {},
  relay: {}
};

const query = graphql`
  query UserListQuery {
    ...UserList
  }
`;

const refetchContainer = createRefetchContainer(
  UserList,
  graphql`
    fragment UserList on Query {
      users {
        id
        ...User_user
      }
    }
  `,
  query
);

export default createQueryRenderer(refetchContainer, {
  query,
  variables: {}
});
