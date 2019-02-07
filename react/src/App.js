// App.js
import React from "react";
import Login from "./Login";
import UserList from "./UserList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }

  onLogin = token => {
    this.setState({ token });
  };

  render() {
    const { token } = this.state;
    if (!token) {
      return <Login onLogin={this.onLogin} />;
    } else {
      return <UserList />;
    }
  }
}

export default App;
