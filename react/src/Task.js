import React from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import PropTypes from 'prop-types';

const Task = ({ task: { content } }) => (<li>{content}</li>);

Task.propTypes = {
  task: PropTypes.object.isRequired
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
