import React from "react";

import graphql from "babel-plugin-relay/macro";

import { createFragmentContainer } from "react-relay";
import commitMutation from "./commitMutation";
import Task from "./Task";

const taskMutation = graphql`
  mutation UserCreateTaskMutation($userId: String!, $content: String!) {
    createTask(userId: $userId, content: $content) {
      id
      content
      completed
    }
  }
`;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  onTextChange = event => {
    const {
      target: { value }
    } = event;

    this.setState({ content: value });
  };

  insertTask = () => {
    const { content } = this.state;
    const {
      user: { id: userId },
      refetch,
      withRefetch
    } = this.props;

    commitMutation({
      mutation: taskMutation,
      variables: { userId, content },
      onCompleted: () => {
        this.setState({ content: "" });
        if (withRefetch) {
          refetch({}, null, () => {});
        }
      },
      OnError: () => {},
      updater: (store, data) => {
        if (!withRefetch) {
          const { createTask } = data;

          const user = store.get(userId);

          const tasks = user.getLinkedRecords("Tasks");

          const task = store.get(createTask.id);

          const newTasks = [...tasks, task];

          user.setLinkedRecords(newTasks, "Tasks");
        }
      }
    });
  };

  render() {
    const {
      user: { email, Tasks: tasks }
    } = this.props;
    const { content } = this.state;

    return (
      <div style={{ border: "1px solid grey", padding: "8px" }}>
        <h5>{email}</h5>
        <input value={content} onChange={this.onTextChange} />
        <button onClick={this.insertTask}>Adicionar tarefa</button>
        <ul style={{ marginTop: "32px" }}>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default createFragmentContainer(User, {
  user: graphql`
    fragment User_user on User {
      id
      email
      Tasks {
        id
        ...Task_task
      }
    }
  `
});
