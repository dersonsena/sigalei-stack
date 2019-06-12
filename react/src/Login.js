/* global document */
import React from "react";
import fetchQuery from "./fetchQuery";
import graphql from "babel-plugin-relay/macro";
import PropTypes from 'prop-types';

import "./index.css";

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
      error: false
    };
  }

  handleClick = () => {
    const { onLogin } = this.props;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    fetchQuery(query, { email, password }).then(response => {
      if (response.login) {
        this.setState({
          error: false
        });
        onLogin(response.login.token);
      } else {
        this.setState({
          error: true
        });
      }
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
          <div className="block">
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" />
          </div>
          <div className="block">
            <label htmlFor="password">Passsword: </label>
            <input type="password" id="password" />
          </div>
          <button type="button" onClick={this.handleClick}>
            Login
          </button>
          <div className="block">
            {error ? <span className="error">Login error</span> : null}
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;
