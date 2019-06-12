import React from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import PropTypes from 'prop-types';

class Task extends React.Component {
  render() {
    const {
      task: { content }
    } = this.props;

    return <li>{content}</li>;
  }
}

Task.propTypes = {
  content: PropTypes.string.isRequired
};

Task.defaultProps = {
  content: ''
};

export default createFragmentContainer(Task, {
  task: graphql`
    fragment Task_task on Task {
      id
      content
      completed
    }
  `
});
