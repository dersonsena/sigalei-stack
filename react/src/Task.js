import React from "react";

import graphql from "babel-plugin-relay/macro";

import { createFragmentContainer } from "react-relay";

class Task extends React.Component {
  render() {
    const {
      task: { content, completed }
    } = this.props;

    return <li>{content}</li>;
  }
}

export default createFragmentContainer(Task, {
  task: graphql`
    fragment Task_task on Task {
      id
      content
      completed
    }
  `
});
