// App.js
import React from "react";
import graphql from "babel-plugin-relay/macro";
import createQueryRenderer from "./CreateQueryRender";
import Login from "./Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }

  onLogin = token => {
    this.setState({token});
  }

  render() {
    const { token } = this.state;
    if (!token) {
      return <Login onLogin={this.onLogin}/>;
    } else {
      return <div>Banana</div>;
    }
  }
}

export default App
