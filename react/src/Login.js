/* global document */
import React from "react";
import fetchQuery from "./fetchQuery";
import graphql from "babel-plugin-relay/macro";

import "./index.css";
import FormField from "./FormField";

const query = graphql`
  query LoginQuery($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  };

  handleClick = () => {
    const { onLogin } = this.props;
    const email = this.state.email;
    const password = this.state.password;

    fetchQuery(query, { email, password }).then(response => {
      if (!response.login) {
        this.setState({ error: true });
        return;
      }

      this.setState({ error: false });
      onLogin(response.login.token);
    });
  };

  render() {
    const { error } = this.state;

    return (
      <div className="container">
        <div>
          <div className="block">
            <h1>Enter the plataform</h1>
          </div>

          <FormField
            name="email"
            type="email"
            label="E-mail:"
            placeholder="user@email.com"
            value={this.state.email}
            onChange={this.handleChange} />

          <FormField
            name="password"
            type="password"
            label="Password:"
            placeholder="Type your password..."
            value={this.state.email}
            onChange={this.handleChange} />
          
          <button type="button" onClick={this.handleClick}>
            Login
          </button>
          <div className="block">
            { error ? <span className="error">Login error</span> : null }
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
